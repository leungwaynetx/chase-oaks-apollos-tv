import { gql, useQuery } from '@apollo/client';

export const GET_CONTENT_ITEM = gql`
  query getContentItem($id: ID!) {
    node(id: $id) {
      id
      __typename

      ... on ContentItem {
        title
        htmlContent
        summary
        coverImage {
          sources {
            uri
          }
        }
        parentChannel {
          id
          name
        }
        videos {
          key
          name
          sources {
            uri
          }
          embedHtml
        }
        childContentItemsConnection {
          edges {
            node {
              id
              title
              coverImage {
                sources {
                  uri
                }
              }
              videos {
                sources {
                  uri
                }
                embedHtml
              }
            }
          }
        }
      }
    }
  }
`;

function useContentItem(options = {}) {
  const query = useQuery(GET_CONTENT_ITEM, {
    fetchPolicy: 'cache-and-network',
    ...options,
  });

  return {
    item: query?.data?.node,
    ...query,
  };
}

export default useContentItem;
