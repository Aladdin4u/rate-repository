import { View, StyleSheet } from "react-native-web";

const styles = StyleSheet.create({
  separator: {
    height: 10,
  },
});

const ItemSeparator = () => {
  return <View style={styles.separator} />;
};

export default ItemSeparator;
