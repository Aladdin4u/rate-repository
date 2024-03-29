import { useState } from "react";
import { useNavigate } from "react-router-dom";

import SignUpForm from "./SignUpForm";
import useSignIn from "../../hook/useSignIn";
import useCreateUser from "../../hook/useCreateUser";
import useFormatError from "../../hook/useFormatError";

const SignUp = () => {
  const navigate = useNavigate();

  const [signIn] = useSignIn();
  const [createUser] = useCreateUser();

  const [error, setError] = useState("");

  const onSubmit = async (values) => {
    const { username, password, confirmPassword } = values;
    console.log(values);

    try {
      const data = await createUser({ username, password });
      if (data) {
        await signIn({ username, password });
        return navigate("/");
      }
      return navigate("/signUp");
    } catch (e) {
      // console.log(e);
      const error = useFormatError(e);
      setError(error);
    }
  };
  return <SignUpForm onSubmit={onSubmit} submissionError={error} />;
};

export default SignUp;
