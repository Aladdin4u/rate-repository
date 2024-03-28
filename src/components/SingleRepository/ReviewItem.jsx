import { View, StyleSheet } from "react-native";

import Rating from "./Rating";
import theme from "../../theme";
import ProfileInfo from "../ProfileInfo";

const styles = StyleSheet.create({
  profileContainer: {
    flexDirection: "row",
    flexGrow: 0,
    gap: 20,
    padding: 15,
    backgroundColor: theme.colors.white,
  },
  profileInfoContainer: {
    display: "flex",
    flexGrow: 0,
    gap: 10,
    justifyContent: "space-between",
  },
});

const ReviewItem = ({ review }) => {
  return (
    <View style={styles.profileContainer}>
      <Rating rating={review.rating} />
      <View style={styles.profileInfoContainer}>
        <ProfileInfo
          color="textPrimary"
          fontSize="subheading"
          fontWeight="bold"
          value={review.user.username}
        />
        <ProfileInfo color="textSecondary" value={review.createdAt} />
        <ProfileInfo
          color="textPrimary"
          fontSize="subheading"
          value={review.text}
          style={{ flexWrap: "wrap" }}
          styleView={{ flexWrap: "wrap",  }}
        />
      </View>
    </View>
  );
};

export default ReviewItem;
