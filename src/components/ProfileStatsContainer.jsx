import { View, StyleSheet } from "react-native";

import ProfileStats from "./ProfileStats";

const styles = StyleSheet.create({
  statsContainer: {
    flexGrow: 1,
    flexDirection: "row",
    justifyContent: "space-around",
  },
});
const ProfileStatsContainer = ({ stargazersCount, forksCount, reviewCount, ratingAverage }) => {
  return (
    <View style={styles.statsContainer}>
      <ProfileStats
        value="Stars"
        testID="repositorStar"
        count={stargazersCount}
      />
      <ProfileStats
        value="Forks"
        testID="repositorFork"
        count={forksCount}
      />
      <ProfileStats
        value="Review"
        testID="repositorReview"
        count={reviewCount}
      />
      <ProfileStats
        value="Rating"
        testID="repositorRating"
        count={ratingAverage}
      />
    </View>
  );
};

export default ProfileStatsContainer;
