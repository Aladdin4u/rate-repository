import { useNavigate } from "react-router-dom";
import { View, StyleSheet } from "react-native";

import useFormatDate from "../../hook/useFormatDate";

import Rating from "../Rating";
import theme from "../../theme";
import Button from "../Button";
import ProfileInfo from "../ProfileInfo";

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    flexShrink: 1,
    gap: 20,
    padding: 15,
    backgroundColor: theme.colors.white,
  },
  reviewContainer: {
    flexDirection: "row",
    flexGrow: 1,
    flexShrink: 1,
    gap: 20,
  },
  reviewInfoContainer: {
    display: "flex",
    flexGrow: 1,
    flexShrink: 1,
    gap: 10,
    justifyContent: "space-between",
  },
  reviewBtnContainer: {
    flexDirection: "row",
    flexGrow: 1,
    gap: 10,
    justifyContent: "space-between",
  },
  reviewButton: {
    flex: 1,
  },
});

const ReviewItem = ({ review, onPress }) => {
  const navigate = useNavigate();

  return (
    <View style={styles.container}>
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
      <View style={styles.reviewBtnContainer}>
        <Button
          onSubmit={() => navigate(`/repository/${review.repositoryId}`)}
          style={styles.reviewButton}
          value="View repository"
        />
        <Button
          onSubmit={onPress(review.id)}
          style={styles.reviewButton}
          value="Delete review"
          danger
        />
      </View>
    </View>
  );
};

export default ReviewItem;
