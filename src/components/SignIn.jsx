import * as yup from "yup";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import { TextInput, Pressable, View, StyleSheet } from "react-native";
import useSignIn from "../hook/useSignIn";

import Text from "./Text";

const styles = StyleSheet.create({
  container: {
    display: "flex",
    gap: 10,
    padding: 15,
  },
  inputText: {
    padding: 15,
    border: "1px solid gray",
    borderRadius: 4,
  },
  submitButton: {
    backgroundColor: "#0366d6",
    color: "white",
    textAlign: "center",
    padding: 15,
    border: "1px solid gray",
    borderRadius: 4,
  },
});

const initialValues = {
  username: "",
  password: "",
};

const validationSchema = yup.object().shape({
  username: yup.string().required("Username is required"),
  password: yup
    .string()
    .min(6, "Password must be at least 8 characters long")
    .required("Password is required"),
});

const SignInForm = ({ onSubmit }) => {
  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
  });

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Username"
        value={formik.values.username}
        onChangeText={formik.handleChange("username")}
        style={styles.inputText}
      />
      {formik.touched.username && formik.errors.username && (
        <Text style={{ color: "red" }}>{formik.errors.username}</Text>
      )}
      <TextInput
        placeholder="Password"
        value={formik.values.password}
        onChangeText={formik.handleChange("password")}
        style={styles.inputText}
        secureTextEntry
      />
      {formik.touched.password && formik.errors.password && (
        <Text style={{ color: "red" }}>{formik.errors.password}</Text>
      )}
      <Pressable onPress={formik.handleSubmit}>
        <Text style={styles.submitButton} fontWeight="bold">
          Sign in
        </Text>
      </Pressable>
    </View>
  );
};

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
