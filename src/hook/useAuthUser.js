import { useQuery } from "@apollo/client";
import { GET_LOGGEDIN_USER } from "../graphql/queries";

const useAuthUser = () => {
  const { data, error, loading } = useQuery(GET_LOGGEDIN_USER, {
    fetchPolicy: "cache-and-network",
  });

  return { data };
};

export default useAuthUser;
