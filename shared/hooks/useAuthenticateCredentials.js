import { gql, useMutation } from '@apollo/client';

export const AUTHENTICATE_CREDENTIALS = gql`
  mutation authenticate($email: String!, $password: String!) {
    authenticate(identity: $email, password: $password) {
      token
      user {
        id
        profile {
          id
          firstName
          lastName
          nickName
          email
          campus {
            name
          }
        }
      }
    }
  }
`;

function useAuthenticateCredentials(options = {}) {
  return useMutation(AUTHENTICATE_CREDENTIALS, options);
}

export default useAuthenticateCredentials;
