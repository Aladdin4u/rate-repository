import * as Linking from "expo-linking";
import { View, StyleSheet } from "react-native";

import Button from "../Button";
import theme from "../../theme";
import ProfileInfoContainer from "../ProfileInfoContainer";
import ProfileStatsContainer from "../ProfileStatsContainer";

const styles = StyleSheet.create({
  itemContainer: {
    display: "flex",
    backgroundColor: theme.colors.white,
    padding: 15,
    gap: 15,
  },
});

const RepositoryInfo = ({ repository }) => {
  const handleSubmit = (url) => {
    return Linking.openURL(url);
  };
  return (
    <View style={styles.itemContainer}>
      <ProfileInfoContainer
        ownerAvatarUrl={repository.ownerAvatarUrl}
        fullName={repository.fullName}
        description={repository.description}
        language={repository.language}
      />
      <ProfileStatsContainer
        stargazersCount={repository.stargazersCount}
        forksCount={repository.forksCount}
        reviewCount={repository.reviewCount}
        ratingAverage={repository.reviewCount}
      />
      <Button
        value="Open in GitHub"
        onSubmit={() => handleSubmit(repository.url)}
      />
    </View>
  );
};

export default RepositoryInfo;
