import * as yup from "yup";
import { useFormik } from "formik";
import { TextInput, View, StyleSheet } from "react-native";

import Button from "../Button";
import Text from "../Text";

const styles = StyleSheet.create({
  container: {
    display: "flex",
    gap: 10,
    padding: 15,
  },
  inputText: {
    paddingVertical: 12,
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
    .min(6, "Password must be at least 6 characters long")
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
      <Button onSubmit={formik.handleSubmit} value="Sign In"></Button>
    </View>
  );
};

export default SignInForm;
