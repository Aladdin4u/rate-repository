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
  },
});

const initialValues = {
  ownerName: "",
  rating: "",
  repositoryName: "",
  text: "",
};

const validationSchema = yup.object().shape({
  ownerName: yup.string().required("Repository owner name is required"),
  repositoryName: yup.string().required("Repository name is required"),
  rating: yup
    .number()
    .min(0, "Rating must be between 0 and 100")
    .max(100, "Rating must be between 0 and 100")
    .required("Rating is required"),
});

const ReviewForm = ({ onSubmit, submissionError }) => {
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
            placeholder="Repository owner name"
            value={values.ownerName}
            onChangeText={handleChange("ownerName")}
            onBur={handleBlur("ownerName")}
            error={touched.ownerName && errors.ownerName}
            errorMessage={errors.ownerName}
            validate={submissionError}
          />
          <TextInput
            placeholder="Repository name"
            value={values.repositoryName}
            onChangeText={handleChange("repositoryName")}
            onBur={handleBlur("repositoryName")}
            error={touched.repositoryName && errors.repositoryName}
            errorMessage={errors.repositoryName}
            validate={submissionError}
          />
          <TextInput
            placeholder="Rating between 0 and 100"
            value={values.rating}
            onChangeText={handleChange("rating")}
            onBur={handleBlur("rating")}
            inputMode="numeric"
            error={touched.rating && errors.rating}
            errorMessage={errors.rating}
            validate={submissionError}
          />
          <TextInput
            placeholder="Review"
            value={values.text}
            onChangeText={handleChange("text")}
            onBur={handleBlur("text")}
            multiline
          />
          <FormError errorMessage={submissionError} />
          <Button onSubmit={handleSubmit} value="Sign In" />
        </View>
      )}
    </Formik>
  );
};

export default ReviewForm;
