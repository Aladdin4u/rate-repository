import { Route, Routes, Navigate } from "react-router-native";
import { StyleSheet, View } from "react-native";

import SignIn from "./SignIn";
import theme from "../theme";
import AppBar from "./AppBar";
import Review from "./Review";
import RepositoryList from "./RepositoryList";
import SingleRepository from "./SingleRepository";

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    flexShrink: 1,
    backgroundColor: theme.colors.mainBackground,
  },
});

const Main = () => {
  return (
    <View style={styles.container}>
      <AppBar />
      <Routes>
        <Route path="/" element={<RepositoryList />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/review" element={<Review />} />
        <Route path="/repository/:id" element={<SingleRepository />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </View>
  );
};

export default Main;
