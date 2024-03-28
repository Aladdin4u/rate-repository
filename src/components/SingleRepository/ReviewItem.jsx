import { View, StyleSheet } from "react-native";

import Rating from "./Rating";
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
  const formatDate = (d) => {
    const date = new Date(d);
    let day = date.getDay();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();

    day < 10 ? (day = String(day).padStart(2, "0")) : day;
    month < 10 ? (month = String(month).padStart(2, "0")) : month;

    return `${day}.${month}.${year}`;
  };
  return (
    <View style={styles.reviewContainer}>
      <Rating rating={review.rating} />
      <View style={styles.reviewInfoContainer}>
        <ProfileInfo
          color="textPrimary"
          fontSize="subheading"
          fontWeight="bold"
          value={review.user.username}
        />
        <ProfileInfo
          color="textSecondary"
          value={formatDate(review.createdAt)}
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
