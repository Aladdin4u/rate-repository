import { useMutation, useApolloClient } from "@apollo/client";

import { AUTHORIZATION } from "../graphql/mutations";
import useAuthStorage from "./useAuthStorage";

const useSignIn = () => {
  const authStorage = useAuthStorage();
  const apolloClient = useApolloClient();
  const [mutate, result] = useMutation(AUTHORIZATION);

  const signIn = async ({ username, password }) => {
    // call the mutate function here with the right arguments
    await mutate({ variables: { username, password } });
    await authStorage.setAccessToken(result.data.authenticate.accessToken);
    apolloClient.resetStore();
  };

  return [signIn, result];
};

export default useSignIn;
