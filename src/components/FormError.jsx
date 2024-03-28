import { StyleSheet } from "react-native";

import Text from "./Text";
import theme from "../theme";

const styles = StyleSheet.create({
  error: {
    color: theme.colors.error,
  },
});

const FormError = ({ errorMessage }) => {
  return <Text style={styles.error}>{errorMessage}</Text>;
};

export default FormError;
