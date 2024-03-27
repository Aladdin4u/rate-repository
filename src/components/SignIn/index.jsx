import { useNavigate } from "react-router-dom";

import SignInForm from "./SignInForm";
import useSignIn from "../../hook/useSignIn";

const SignIn = () => {
  const [signIn] = useSignIn();
  const navigate = useNavigate();

  const onSubmit = async (values) => {
    const { username, password } = values;

    try {
      await signIn({ username, password });
      navigate("/");
    } catch (e) {
      console.log(e);
    }
  };
  return <SignInForm onSubmit={onSubmit} />;
};

export default SignIn;
