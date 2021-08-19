import { gql, useQuery } from '@apollo/client';

export const TAB_FEED_FEATURES = gql`
  query tabFeed($tab: Tab!) {
    tabFeedFeatures(tab: $tab) {
      id
      features {
        id
        order
        __typename

        # TODO :: The fields being queried are hard coded/incomplete.
        ... on HeroListFeature {
          id
          title
          subtitle
          heroCard {
            id
            title
            labelText
            summary
            coverImage {
              name
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
            }
          }
          primaryAction {
            title
            action
            relatedNode {
              id
              __typename
            }
          }
        }

        ... on HorizontalCardListFeature {
          id
          title
          subtitle
          cards {
            id
            title
            labelText
            summary
            coverImage {
              name
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
            }
          }
          primaryAction {
            title
            action
            relatedNode {
              id
              __typename
            }
          }
        }

        ... on VerticalCardListFeature {
          id
          title
          subtitle
          cards {
            id
            title
            labelText
            summary
            coverImage {
              name
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
            }
          }
        }
      }
    }
  }
`;

function useTabFeed(options = {}) {
  const query = useQuery(TAB_FEED_FEATURES, {
    fetchPolicy: 'cache-and-network',
    ...options,
  });

  return {
    tabFeedFeatures: query?.data?.tabFeedFeatures || {},
    ...query,
  };
}

export default useTabFeed;
