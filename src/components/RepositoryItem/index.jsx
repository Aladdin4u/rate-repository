import { useNavigate } from "react-router-dom";

import { View, StyleSheet, Pressable } from "react-native";

import theme from "../../theme";
import ProfileStatsContainer from "../ProfileStatsContainer";
import ProfileInfoContainer from "../ProfileInfoContainer";

const styles = StyleSheet.create({
  itemContainer: {
    display: "flex",
    backgroundColor: theme.colors.white,
    padding: 15,
    gap: 15,
  },
});

const RepositoryItem = ({ item }) => {
  const navigate = useNavigate();

  return (
    <Pressable onPress={() => navigate(`/repository/${item.id}`)}>
      <View testID="repositoryItem" style={styles.itemContainer}>
        <ProfileInfoContainer
          ownerAvatarUrl={item.ownerAvatarUrl}
          fullName={item.fullName}
          description={item.description}
          language={item.language}
        />
        <ProfileStatsContainer
          stargazersCount={item.stargazersCount}
          forksCount={item.forksCount}
          reviewCount={item.reviewCount}
          ratingAverage={item.ratingAverage}
        />
      </View>
    </Pressable>
  );
};

export default RepositoryItem;
