import { gql } from "@apollo/client";

export const REPOSITORY_DETAILS = gql`
  fragment repostoriesDetails on Repository {
    id
    fullName
    description
    language
    ownerAvatarUrl
    stargazersCount
    forksCount
    reviewCount
    ratingAverage
  }
`;

export const REVIEW_DETAILS = gql`
  fragment reviewsDetails on Review {
    id
    text
    rating
    createdAt
  }
`;

export const USER_DETAILS = gql`
  fragment usersDetails on User {
    id
    username
  }
`;

export const PAGE_INFO_DETAILS = gql`
  fragment pageInfoDetails on PageInfo {
    startCursor
    endCursor
    hasNextPage
  }
`;
