import * as yup from "yup";
import { Formik } from "formik";
import { View, StyleSheet } from "react-native";

import Button from "../Button";
import FormError from "../FormError";
import TextInput from "../TextInput";

const styles = StyleSheet.create({
  container: {
    display: "flex",
    gap: 10,
    padding: 15,
  },
});

const initialValues = {
  username: "",
  password: "",
  confirmPassword: "",
};

const validationSchema = yup.object().shape({
  username: yup.string().required("Username is required"),
  password: yup
    .string()
    .min(6, "Password must be at least 6 characters long")
    .required("Password is required"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password")], "Passwords don't match")
    .required("Password confirmation is required"),
});

const SignUpForm = ({ onSubmit, submissionError }) => {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {({
        handleChange,
        handleBlur,
        handleSubmit,
        values,
        touched,
        errors,
      }) => (
        <View style={styles.container}>
          <TextInput
            placeholder="Username"
            value={values.username}
            onChangeText={handleChange("username")}
            onBur={handleBlur("username")}
            error={touched.username && errors.username}
            errorMessage={errors.username}
            validate={submissionError}
          />
          <TextInput
            placeholder="Password"
            value={values.password}
            onChangeText={handleChange("password")}
            secureTextEntry
            error={touched.password && errors.password}
            errorMessage={errors.password}
            validate={submissionError}
          />
          <TextInput
            placeholder="Password confirmation"
            value={values.confirmPassword}
            onChangeText={handleChange("confirmPassword")}
            secureTextEntry
            error={touched.confirmPassword && errors.confirmPassword}
            errorMessage={errors.confirmPassword}
            validate={submissionError}
          />
          <FormError errorMessage={submissionError} />
          <Button onSubmit={handleSubmit} value="Sign Up" />
        </View>
      )}
    </Formik>
  );
};

export default SignUpForm;
