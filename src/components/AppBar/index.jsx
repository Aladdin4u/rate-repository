import Constants from "expo-constants";
import { useNavigate } from "react-router-dom";
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
  const navigate = useNavigate();

  const { data } = useAuthUser();
  const authStorage = useAuthStorage();
  const apolloclient = useApolloClient();

  const signOut = async () => {
    await authStorage.removeAccessToken();
    apolloclient.resetStore();
    return navigate("/");
  };
  return (
    <View style={styles.container}>
      <ScrollView horizontal>
        <AppBarTab tabName="Repositories" path="/" style={styles.tab} />
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
          <>
            <AppBarTab tabName="Sign in" path="/signin" style={styles.tab} />
            <AppBarTab tabName="Sign up" path="/signup" style={styles.tab} />
          </>
        )}
      </ScrollView>
    </View>
  );
};

export default AppBar;
