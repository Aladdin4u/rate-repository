import { Pressable, StyleSheet } from "react-native";

import Text from "./Text";
import theme from "../theme";

const styles = StyleSheet.create({
  button: {
    backgroundColor: theme.colors.primary,
    paddingVertical: 12,
    alignItems: "center",
    borderRadius: 4,
  },
  danger: {
    backgroundColor: theme.colors.danger,
    paddingVertical: 12,
    alignItems: "center",
    borderRadius: 4,
  },
});

const Button = ({ value, onSubmit, danger }) => {
  return (
    <Pressable
      style={danger ? styles.danger : styles.button}
      onPress={onSubmit}
    >
      <Text color="white" fontSize="subheading" fontWeight="bold">
        {value}
      </Text>
    </Pressable>
  );
};

export default Button;
