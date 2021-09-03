import React from 'react';
import PropTypes from 'prop-types';
import { Pressable, Image } from 'react-native';
import { useNavigation } from 'shared/router';

import { Layout, SmallBodyText, H2, H5, Box } from 'shared/ui-kit';

function ContentSingle(props = {}) {
  const router = useNavigation();

  const coverImage = props?.data?.coverImage;
  const summary = props?.data?.summary;
  const title = props?.data?.title;
  const edges = props?.data?.childContentItemsConnection?.edges;

  const handleOnPress = (node) => {
    router.push('/content-item', {
      itemId: node.id,
    });
  };

  return (
    <Box backgroundColor="fill.paper">
      <Layout>
        <Image
          source={coverImage?.sources}
          style={{ width: '100%', height: 490 }}
        />
        <Box pt="s" px="l" pb="xxl">
          <Box mb="base">
            {title ? <H2 mb="s">{title}</H2> : null}
            {summary ? (
              <SmallBodyText maxWidth="650px">{summary}</SmallBodyText>
            ) : null}
          </Box>
          {edges ? (
            <Box display="flex" flexDirection="row">
              {edges.map(({ node }) => (
                <Pressable
                  key={node?.id}
                  onPress={() => handleOnPress(node)}
                  delayPressIn={0}
                  activeOpacity={0.3}
                  accessibilityRole="button"
                >
                  <Box display="flex" alignItems="center" mr="s">
                    <Image
                      source={node?.coverImage?.sources}
                      style={{ width: 300, height: 300 }}
                    />

                    <H5>{node?.title}</H5>
                  </Box>
                </Pressable>
              ))}
            </Box>
          ) : null}
        </Box>
      </Layout>
    </Box>
  );
}

ContentSingle.propTypes = {
  data: PropTypes.shape({
    coverImage: PropTypes.shape({}),
    summary: PropTypes.string,
    title: PropTypes.string,
    childContentItemsConnection: PropTypes.shape(),
    videos: PropTypes.arrayOf(PropTypes.shape({ embedHtml: PropTypes.string })),
  }),
};

export default ContentSingle;
