import React from 'react';
import PropTypes from 'prop-types';
import { FlatList } from 'react-native';
import { withTheme } from 'styled-components';

import { apollosPropTypes } from 'shared/lib';
import { useNavigation } from 'shared/router';
import { getPathFromType } from 'shared/utils';

import { ContentItemCard } from 'shared/ui-kit';

const PAGE_SIZE = 20;

function ContentList(props = {}) {
  const router = useNavigation();

  const [viewWidth, setViewWidth] = React.useState(0);
  const boxWidth = viewWidth * 0.25 - 66;

  const hasMorePages = props.data?.totalCount > props.data?.edges?.length;

  const handleActionPress = (item) => {
    router.push(getPathFromType(item.node), {
      itemId: item.node.id,
    });
  };

  const handleLoadMore = () => {
    props.fetchMore({
      variables: {
        first: PAGE_SIZE,
        after: props.data?.pageInfo?.endCursor,
      },
    });
  };

  return (
    <FlatList
      data={props.data?.edges}
      refreshing={props.loading}
      onEndReached={hasMorePages && handleLoadMore}
      onEndReachedThreshold={0.3}
      horizontal={false}
      numColumns={4}
      contentContainerStyle={{
        alignSelf: 'center',
        paddingVertical: 48,
        marginBottom: 66,
      }}
      showsHorizontalScrollIndicator={false}
      renderItem={({ item }) => (
        <ContentItemCard
          image={item.node.coverImage}
          title={item.node.title}
          onPress={() => handleActionPress(item)}
          width={boxWidth}
          m="xs"
        />
      )}
      keyExtractor={(item) => item.node.id}
      onLayout={(e) => {
        setViewWidth(e.nativeEvent.layout.width);
      }}
    />
  );
}

ContentList.propTypes = {
  data: PropTypes.shape({
    edges: PropTypes.arrayOf(
      PropTypes.shape({
        node: apollosPropTypes.Node,
      })
    ),
    totalCount: PropTypes.number,
    pageInfo: PropTypes.shape({
      endCursor: PropTypes.string,
    }),
  }),
  fetchMore: PropTypes.func,
  loading: PropTypes.bool,
};

export default withTheme(ContentList);
