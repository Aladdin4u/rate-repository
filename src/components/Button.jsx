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
    backgroundColor: theme.colors.error,
    paddingVertical: 12,
    alignItems: "center",
    borderRadius: 4,
  },
});

const Button = ({ value, onSubmit, style, danger }) => {
  const buttonStyle = [
    danger ? styles.danger : styles.button,
    style,
  ];
  return (
    <Pressable
      style={buttonStyle}
      onPress={onSubmit}
    >
      <Text color="white" fontSize="subheading" fontWeight="bold">
        {value}
      </Text>
    </Pressable>
  );
};

export default Button;
