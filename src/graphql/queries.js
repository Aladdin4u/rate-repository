import { gql } from "@apollo/client";
import { REPOSITORY_DETAILS, REVIEW_DETAILS, USER_DETAILS } from "./fragments";

export const GET_REPOSITORIES = gql`
  query (
    $after: String
    $first: Int
    $orderDirection: OrderDirection
    $orderBy: AllRepositoriesOrderBy
    $searchKeyword: String
    $ownerName: String
  ) {
    repositories(
      after: $after
      first: $first
      orderDirection: $orderDirection
      orderBy: $orderBy
      searchKeyword: $searchKeyword
      ownerName: $ownerName
    ) {
      edges {
        node {
          ...repostoriesDetails
        }
        cursor
      }
      totalCount
      pageInfo {
        startCursor
        endCursor
        hasNextPage
        hasPreviousPage
      }
    }
  }
  ${REPOSITORY_DETAILS}
`;

export const GET_LOGGEDIN_USER = gql`
  query getCurrentUser($includeReviews: Boolean = false) {
    me {
      ...usersDetails
      reviews @include(if: $includeReviews) {
        edges {
          node {
            ...reviewsDetails
          }
        }
      }
    }
  }
  ${REVIEW_DETAILS}
  ${USER_DETAILS}
`;

export const GET_REPOSITORY = gql`
  query ($repositoryId: ID!) {
    repository(id: $repositoryId) {
      ...repostoriesDetails
      url
      reviews {
        edges {
          node {
            ...reviewsDetails
            user {
              ...usersDetails
            }
          }
        }
      }
    }
  }
  ${REPOSITORY_DETAILS}
  ${REVIEW_DETAILS}
  ${USER_DETAILS}
`;
