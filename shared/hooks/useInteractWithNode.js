import { gql, useMutation } from '@apollo/client';

export const INTERACT_WITH_NODE = gql`
  mutation interactWithNode($nodeId: ID!, $action: InteractionAction!) {
    interactWithNode(nodeId: $nodeId, action: $action) {
      success
    }
  }
`;

function useInteractWithNode(options = {}) {
  return useMutation(INTERACT_WITH_NODE, options);
}

export default useInteractWithNode;
