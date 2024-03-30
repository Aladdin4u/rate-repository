import { useQuery } from "@apollo/client";
import { GET_CURRENT_USER } from "../graphql/queries";

const useCurrentUser = (includeReviews) => {
  const { data, error, loading, refetch } = useQuery(GET_CURRENT_USER, {
    fetchPolicy: "cache-and-network",
    variables: { includeReviews },
  });

  return {
    user: data ? data.me : undefined,
    loading,
    error,
    refetch
  };
};

export default useCurrentUser;
