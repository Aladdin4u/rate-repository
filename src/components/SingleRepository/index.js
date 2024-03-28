import { StyleSheet, FlatList } from "react-native";

import { useParams } from "react-router-dom";

import theme from "../../theme";
import ReviewItem from "./ReviewItem";
import ItemSeparator from "../ItemSeparator";
import RepositoryInfo from "./RepositoryInfo";
import useRepository from "../../hook/useReposistory";

const styles = StyleSheet.create({
  itemContainer: {
    display: "flex",
    backgroundColor: theme.colors.white,
    padding: 15,
    gap: 15,
  },
});
const SingleRepository = () => {
  let { id } = useParams();
  const { repository, loading, error } = useRepository(id);
  console.log(id, typeof id);
  if (loading) {
    return null;
  }
  if (error) {
    console.log(error);
  }

  console.log(repository);

  const reviews = repository
    ? repository.reviews.edges.map((edge) => edge.node)
    : [];
  console.log(reviews);
  return (
    <>
      <FlatList
        data={reviews}
        renderItem={({ item }) => <ReviewItem review={item} />}
        keyExtractor={({ id }) => id}
        ListHeaderComponent={() => <RepositoryInfo repository={repository} />}
        ItemSeparatorComponent={ItemSeparator}
      />
    </>
  );
};

export default SingleRepository;
