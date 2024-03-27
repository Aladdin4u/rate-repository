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
