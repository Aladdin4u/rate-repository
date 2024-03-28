import { View, StyleSheet } from "react-native";

import Text from "./Text";

const styles = StyleSheet.create({
  stats: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-evenly",
    alignItems: "center",
    gap: 5,
  },
});

const ProfileStats = ({
    value,
    style,
    count,
    testID,
}) => {
  const format = (n) => {
    if (n >= 1000) {
      return (n / 1000).toFixed(1) + "k";
    }
    return n;
  };

  return (
    <View testID={testID} style={styles.stats}>
      <Text color="textPrimary" fontWeight="bold" style={style}>
        {format(count)}
      </Text>
      <Text color="textSecondary">{value}</Text>
    </View>
  );
};

export default ProfileStats;
