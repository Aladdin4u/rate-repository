import { FlatList, Alert } from "react-native";

import ReviewItem from "./ReviewItem";
import ItemSeparator from "../ItemSeparator";
import useCurrentUser from "../../hook/useCurrentUser";
import useDeleteReview from "../../hook/useDeleteReview";

const MyReview = () => {
  const { user, loading, error, refetch } = useCurrentUser(true);
  const [deleteReview] = useDeleteReview();

  if (loading) {
    return null;
  }

  if (error) {
    console.log(error);
  }

  const reviews = user ? user.reviews.edges.map((edge) => edge.node) : [];

  const onDelete = (id) => {
    Alert.alert(
      "Alert Title",
      "Delete Review",
      [
        {
          text: "CANCEL",
          onPress: () => null,
          style: "cancel",
        },
        { text: "DELETE", onPress: () => handleDelete(id) },
      ],
      { cancelable: false }
    );
  };

  const handleDelete = async (id) => {
    try {
      await deleteReview({ id });
      refetch();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <FlatList
      data={reviews}
      renderItem={({ item }) => <ReviewItem review={item} onPress={onDelete} />}
      keyExtractor={({ id }) => id}
      ItemSeparatorComponent={ItemSeparator}
    />
  );
};

export default MyReview;
