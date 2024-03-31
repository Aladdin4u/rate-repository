import { gql } from "@apollo/client";
import {
  REPOSITORY_DETAILS,
  REVIEW_DETAILS,
  USER_DETAILS,
  PAGE_INFO_DETAILS,
} from "./fragments";

export const GET_REPOSITORIES = gql`
  query getRepositories(
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
        ...pageInfoDetails
      }
    }
  }
  ${REPOSITORY_DETAILS}
  ${PAGE_INFO_DETAILS}
`;

export const GET_CURRENT_USER = gql`
  query getCurrentUser($includeReviews: Boolean!) {
    me {
      ...usersDetails
      reviews @include(if: $includeReviews) {
        edges {
          node {
            ...reviewsDetails
            repositoryId
            user {
              ...usersDetails
            }
          }
        }
      }
    }
  }
  ${USER_DETAILS}
  ${REVIEW_DETAILS}
`;

export const GET_REPOSITORY = gql`
  query getRepositories($repositoryId: ID!, $after: String, $first: Int) {
    repository(id: $repositoryId) {
      ...repostoriesDetails
      url
      reviews(after: $after, first: $first) {
        edges {
          node {
            ...reviewsDetails
            user {
              ...usersDetails
            }
          }
          cursor
        }
        pageInfo {
          ...pageInfoDetails
        }
      }
    }
  }
  ${USER_DETAILS}
  ${REVIEW_DETAILS}
  ${PAGE_INFO_DETAILS}
  ${REPOSITORY_DETAILS}
`;
