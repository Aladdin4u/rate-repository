import { useState } from "react";
import { useNavigate } from "react-router-dom";

import ReviewForm from "./ReviewForm";
import useCreateReview from "../../hook/useCreateReview";
import useFormatError from "../../hook/useFormatError";

const Review = () => {
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const [createReview] = useCreateReview();

  const onSubmit = async (values) => {
    const { ownerName, rating, repositoryName, text } = values;

    try {
      const data = await createReview({
        ownerName,
        rating: Number(rating),
        repositoryName,
        text,
      });
      console.log("ddd===", data);
      navigate(`/repository/${data.createReview.repositoryId}`);
    } catch (e) {
      //   console.log(e);
      const error = useFormatError(e);
      setError(error);
    }
  };
  return <ReviewForm onSubmit={onSubmit} submissionError={error} />;
};

export default Review;
