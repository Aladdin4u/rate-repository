import { useMutation } from "@apollo/client";

import { DELETEREVIEW } from "../graphql/mutations";

const useDeleteReview = () => {
  const [mutate, result] = useMutation(DELETEREVIEW);

  const deleteReview = async ({ deleteReviewId }) => {
    const { data } = await mutate({ variables: { deleteReviewId } });

    return data;
  };

  return [deleteReview, result];
};

export default useDeleteReview;
