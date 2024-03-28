import Constants from "expo-constants";
import { useApolloClient } from "@apollo/client";
import { View, StyleSheet, ScrollView } from "react-native";

import AppBarTab from "./AppBarTab";
import useAuthUser from "../../hook/useAuthUser";
import useAuthStorage from "../../hook/useAuthStorage";

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    backgroundColor: "#24292e",
    height: 80,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    // ...
  },
  tab: {
    marginLeft: 16,
    marginRight: 16,
    color: "white",
  },
});

const AppBar = () => {
  const apolloclient = useApolloClient();
  const authStorage = useAuthStorage();
  const { data } = useAuthUser();

  const signOut = async () => {
    await authStorage.removeAccessToken();
    apolloclient.resetStore();
  };
  return (
    <View style={styles.container}>
      <ScrollView horizontal>
        <AppBarTab tabName="Repositries" path="/" style={styles.tab} />
        {data?.me ? (
          <>
            <AppBarTab
              tabName="Create a review"
              path="/review"
              style={styles.tab}
            />
            <AppBarTab
              tabName="Sign out"
              onPress={signOut}
              style={styles.tab}
            />
          </>
        ) : (
          <AppBarTab tabName="Sign in" path="/signin" style={styles.tab} />
        )}
      </ScrollView>
    </View>
  );
};

export default AppBar;
