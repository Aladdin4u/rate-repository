import { View, StyleSheet, Image } from "react-native";
import Text from "./Text";

const styles = StyleSheet.create({
  flexContainer: {
    display: "flex",
    padding: 15,
    backgroundColor: "white",
    gap: 15,
  },
  flexItemA: {
    flexGrow: 0,
    flexDirection: "row",
    gap: 20,
  },
  flexItemB: {
    flexGrow: 1,
    flexDirection: "row",
    justifyContent: "space-around",
  },
  flexItemC: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-evenly",
    alignItems: "center",
    gap: 5,
  },
  flexItemD: {
    display: "flex",
    flexGrow: 1,
    gap: 10,
    justifyContent: "space-between",
  },
  tag: {
    color: "white",
    backgroundColor: "#0366d6",
    borderRadius: 4,
    flexGrow: 0,
    padding: 5,
  },
});
const RepositoryItem = ({ item }) => {
  const format = (n) => {
    if (n >= 1000) {
      return (n / 1000).toFixed(1) + "k";
    }
    return n;
  };
  return (
    <View testID="repositoryItem" style={styles.flexContainer}>
      <View testID="repositoryItem" style={styles.flexItemA}>
        <Image
          source={{ uri: item.ownerAvatarUrl }}
          style={{ width: 60, height: 60, borderRadius: 6 }}
        />
        <View style={styles.flexItemD}>
          <View testID="repositoryName">
            <Text color="textPrimary" fontSize="subheading" fontWeight="bold">
              {item.fullName}
            </Text>
          </View>
          <View testID="repositoryDescription">
            <Text color="textSecondary">{item.description}</Text>
          </View>
          <View
            testID="repositoryLanguage"
            style={{ display: "flex", flexDirection: "row" }}
          >
            <Text style={styles.tag}>{item.language}</Text>
          </View>
        </View>
      </View>
      <View style={styles.flexItemB}>
        <View testID="repositorStar" style={styles.flexItemC}>
          <Text color="textPrimary" fontWeight="bold">
            {format(item.stargazersCount)}
          </Text>
          <Text color="textSecondary">Stars</Text>
        </View>
        <View testID="repositoryFork" style={styles.flexItemC}>
          <Text color="textPrimary" fontWeight="bold">
            {format(item.forksCount)}
          </Text>
          <Text color="textSecondary">Forks</Text>
        </View>
        <View testID="repositoryReview" style={styles.flexItemC}>
          <Text color="textPrimary" fontWeight="bold">
            {item.reviewCount}
          </Text>
          <Text testID="repositoryItem" color="textSecondary">
            Review
          </Text>
        </View>
        <View testID="repositoryRating" style={styles.flexItemC}>
          <Text color="textPrimary" fontWeight="bold">
            {item.ratingAverage}
          </Text>
          <Text color="textSecondary">Rating</Text>
        </View>
      </View>
    </View>
  );
};

export default RepositoryItem;
