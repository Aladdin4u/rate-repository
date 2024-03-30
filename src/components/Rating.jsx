import { View, StyleSheet } from "react-native";

import Text from "./Text";
import theme from "../theme";

const styles = StyleSheet.create({
  rating: {
    width: 60,
    height: 60,
    borderRadius: 30,
    borderColor: theme.colors.primary,
    borderWidth: 4,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: theme.colors.primary,
  },
});

const Rating = ({ rating }) => {
  return (
    <View style={styles.rating}>
      <Text fontWeight="bold" fontSize="subheading" style={styles.text}>
        {rating}
      </Text>
    </View>
  );
};

export default Rating;
