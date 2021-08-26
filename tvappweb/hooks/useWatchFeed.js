import { gql, useQuery } from '@apollo/client';

export const GET_WATCH_FEED = gql`
  query {
    userFeed(first: 15) {
      totalCount
      edges {
        node {
          id
          title
        }
      }
    }
  }
`;

function useWatchFeed(options) {
  const query = useQuery(GET_WATCH_FEED, {
    fetchPolicy: 'cache-and-network',
    ...options,
  });

  return {
    edges: query?.data?.userFeed.edges || [],
    ...query,
  };
}

export default useWatchFeed;
