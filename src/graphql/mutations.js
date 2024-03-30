import { gql } from "@apollo/client";
import { REPOSITORY_DETAILS, REVIEW_DETAILS, USER_DETAILS } from "./fragments";

export const LOGIN = gql`
  mutation Login($username: String!, $password: String!) {
    authenticate(credentials: { username: $username, password: $password }) {
      accessToken
    }
  }
`;

export const CREATEUSER = gql`
  mutation CreateUser($username: String!, $password: String!) {
    createUser(user: { username: $username, password: $password }) {
      ...usersDetails
    }
  }
  ${USER_DETAILS}
`;

export const CREATEREVIEW = gql`
  mutation CreateReview(
    $ownerName: String!
    $rating: Int!
    $repositoryName: String!
    $text: String
  ) {
    createReview(
      review: {
        ownerName: $ownerName
        rating: $rating
        repositoryName: $repositoryName
        text: $text
      }
    ) {
      ...reviewsDetails
      repositoryId
      user {
        ...usersDetails
      }
    }
  }
  ${REVIEW_DETAILS}
  ${USER_DETAILS}
`;
export const DELETEREVIEW = gql`
  mutation DeleteReview($deleteReviewId: ID!) {
    deleteReview(id: $deleteReviewId)
  }
`;
