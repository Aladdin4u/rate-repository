import { View, StyleSheet } from "react-native";
import useFormatDate from "../../hook/useFormatDate";

import Rating from "../Rating";
import theme from "../../theme";
import ProfileInfo from "../ProfileInfo";

const styles = StyleSheet.create({
  reviewContainer: {
    flexDirection: "row",
    flexGrow: 1,
    flexShrink: 1,
    gap: 20,
    padding: 15,
    backgroundColor: theme.colors.white,
  },
  reviewInfoContainer: {
    display: "flex",
    flexGrow: 1,
    flexShrink: 1,
    gap: 10,
    justifyContent: "space-between",
  },
});

const ReviewItem = ({ review }) => {
  return (
    <View style={styles.reviewContainer}>
      <Rating rating={review.rating} />
      <View style={styles.reviewInfoContainer}>
        <ProfileInfo
          color="textPrimary"
          fontSize="subheading"
          fontWeight="bold"
          value={review.user?.username}
        />
        <ProfileInfo
          color="textSecondary"
          value={useFormatDate(review.createdAt)}
        />
        <ProfileInfo
          color="textPrimary"
          fontSize="subheading"
          value={review.text}
        />
      </View>
    </View>
  );
};

export default ReviewItem;
