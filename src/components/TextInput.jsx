import { TextInput as NativeTextInput, View, StyleSheet } from "react-native";

import Text from "./Text";

const styles = StyleSheet.create({
  inputText: {
    paddingVertical: 12,
    borderRadius: 4,
    paddingLeft: 12,
    borderWidth: 1.5,
    borderColor: "gray",
  },
  error: {
    borderColor: "red",
  },
  text: {
    color: "red",
  },
});

const TextInput = ({
  value,
  placeholder,
  onChangeText,
  validate,
  error,
  errorMessage,
  ...props
}) => {
  const textInputStyle = [
    styles.inputText,
    (error || validate) && styles.error,
  ];
  return (
    <View>
      <NativeTextInput
        onChangeText={onChangeText}
        placeholder={placeholder}
        style={textInputStyle}
        value={value}
        {...props}
      />
      {error && <Text style={styles.text}>{errorMessage}</Text>}
    </View>
  );
};

export default TextInput;
