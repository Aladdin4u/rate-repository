import * as yup from "yup";
import { Formik } from "formik";
import { View, StyleSheet } from "react-native";
import TextInput from "../TextInput";

import Button from "../Button";
import FormError from "../FormError";

const styles = StyleSheet.create({
  container: {
    display: "flex",
    gap: 10,
    padding: 15,
  }
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

const SignInForm = ({ onSubmit, submissionError }) => {
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
          <FormError errorMessage={submissionError} />
          <Button onSubmit={handleSubmit} value="Sign In" />
        </View>
      )}
    </Formik>
  );
};

export default SignInForm;
