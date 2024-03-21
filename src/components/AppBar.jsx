import { View, StyleSheet, ScrollView } from "react-native";
import { Link } from "react-router-native";
import Constants from "expo-constants";
import Text from "./Text";

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    backgroundColor: "#24292e",
    height: 40,
    flexDirection: "row",
    alignItems: "center",
    // ...
  },
});

const AppBar = () => {
  return (
    <View style={styles.container}>
      <ScrollView horizontal>
        <Link to="/" style={{margin: 20,}}>
          <Text style={{ color: "white" }}>Reposities</Text>
        </Link>
        <Link to="/signin" style={{margin: 20,}}>
          <Text style={{ color: "white" }}>Sign in</Text>
        </Link>
      </ScrollView>
    </View>
  );
};

export default AppBar;
