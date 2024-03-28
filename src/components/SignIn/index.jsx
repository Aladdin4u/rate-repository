import { useState } from "react";
import { useNavigate } from "react-router-dom";

import SignInForm from "./SignInForm";
import useSignIn from "../../hook/useSignIn";
import useFormatError from "../../hook/useFormatError";

const SignIn = () => {
  const [signIn] = useSignIn();
  const navigate = useNavigate();
  const [error, setError] = useState("");

  const onSubmit = async (values) => {
    const { username, password } = values;

    try {
      await signIn({ username, password });
      navigate("/");
    } catch (e) {
      // console.log(e);
      const error = useFormatError(e);
      setError(error);
    }
  };
  return <SignInForm onSubmit={onSubmit} submissionError={error} />;
};

export default SignIn;
