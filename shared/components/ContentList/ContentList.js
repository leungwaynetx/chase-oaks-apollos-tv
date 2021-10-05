import React from 'react';
import PropTypes from 'prop-types';
import { withTheme } from 'styled-components';

import { apollosPropTypes } from 'shared/lib';
import { useBreakpoint } from 'shared/providers/BreakpointProvider';
import { useNavigation } from 'shared/router';
import { getURLFromType } from 'shared/utils';

import { Button, Box, ContentItemCard, Loader } from 'shared/ui-kit';

function ContentList(props = {}) {
  const router = useNavigation();
  const { responsive } = useBreakpoint();

  const handleGoBack = () => {
    router.push('/');
  };

  const handleActionPress = (node) => {
    router.push(getURLFromType(node));
  };

  if (props.loading) {
    return (
      <Box
        display="flex"
        justifyContent="center"
        alignContent="center"
        alignItems="center"
        width="100%"
        flexGrow={1}
      >
        <Loader />
      </Box>
    );
  }

  const mx = responsive({ _: props.theme.space.s, xl: props.theme.space.base });
  const columns = responsive({
    _: 1,
    lg: 2,
    xl: 4,
  });
  const columnWidth = (1 / columns) * 100;

  return (
    <>
      <Box px={responsive({ _: 'base', lg: 'xl' })} display="block" mb="xs">
        <Button
          title="← Back"
          type="link"
          onClick={handleGoBack}
          display="inline-flex"
          mx={mx}
        />
      </Box>
      <Box
        flexDirection="row"
        flexWrap="wrap"
        px={responsive({ _: 'base', lg: 'xl' })}
      >
        {props.data?.edges?.map(({ node }) => (
          <ContentItemCard
            key={node.id}
            image={node.coverImage}
            title={node.title}
            onPress={() => handleActionPress(node)}
            flexBasis={`calc(${columnWidth}% - (${mx} * 2))`}
            mx={mx}
            mb={responsive({ _: 'l', lg: 'xl' })}
          />
        ))}
      </Box>
    </>
  );
}

ContentList.propTypes = {
  data: PropTypes.shape({
    edges: PropTypes.arrayOf(
      PropTypes.shape({
        node: apollosPropTypes.Node,
      })
    ),
  }),
  loading: PropTypes.bool,
  theme: PropTypes.object, // eslint-disable-line react/forbid-prop-types
};

export default withTheme(ContentList);
