import { gql } from "@apollo/client";

export const AUTHORIZATION = gql`
  mutation Mutation($username: String!, $password: String!) {
    authenticate(credentials: { username: $username, password: $password }) {
      accessToken
    }
  }
`;
