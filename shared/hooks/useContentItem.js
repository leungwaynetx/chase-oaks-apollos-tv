import { gql, useQuery } from '@apollo/client';

export const GET_CONTENT_ITEM = gql`
  query getContentItem($id: ID!) {
    node(id: $id) {
      id
      __typename

      ... on ContentItem {
        publishDate
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
        ... on FeaturesNode {
          featureFeed {
            id
            features {
              id
              ... on HorizontalCardListFeature {
                title
                cards {
                  id
                  title
                  summary
                  coverImage {
                    sources {
                      uri
                    }
                  }
                  hasAction
                  action
                  actionIcon
                  relatedNode {
                    id
                    __typename
                    ... on ContentItem {
                      title
                    }
                  }
                }
              }
              ... on ButtonFeature {
                action {
                  title
                  action
                  relatedNode {
                    id
                    __typename
                    ... on Url {
                      url
                    }
                  }
                }
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
