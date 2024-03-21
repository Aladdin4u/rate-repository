import * as yup from "yup";
import { useFormik } from "formik";
import { TextInput, Pressable, View, StyleSheet } from "react-native";

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
    .min(8, "Password must be at least 8 characters long")
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
  const onSubmit = (values) => {
    const username = values.username;
    const password = values.password;
    if (username && password) {
      console.log(`Login details is: ${username} ${password}}`);
    }
  };
  return <SignInForm onSubmit={onSubmit} />;
};

export default SignIn;
