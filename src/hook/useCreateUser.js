import { useMutation } from "@apollo/client";

import { CREATEUSER } from "../graphql/mutations";

const useCreateUser = () => {
  const [mutate, result] = useMutation(CREATEUSER);

  const createUser = async ({ username, password }) => {
    const { data } = await mutate({ variables: { username, password } });

    return data;
  };

  return [createUser, result];
};

export default useCreateUser;
