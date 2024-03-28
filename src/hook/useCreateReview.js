import { useMutation } from "@apollo/client";

import { CREATEREVIEW } from "../graphql/mutations";

const useCreateReview = () => {
  const [mutate, result] = useMutation(CREATEREVIEW);

  const createReview = async ({ ownerName, rating, repositoryName, text }) => {
    const { data } = await mutate({ variables: { ownerName, rating, repositoryName, text } });

    return data;
  };

  return [createReview, result];
};

export default useCreateReview;
