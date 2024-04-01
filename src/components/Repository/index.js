import { useParams } from "react-router-dom";
import { FlatList } from "react-native";

import ReviewItem from "./ReviewItem";
import ItemSeparator from "../ItemSeparator";
import RepositoryInfo from "./RepositoryInfo";
import useRepository from "../../hook/useRepository";

const Repository = () => {
  const first = 3;
  let { id } = useParams();
  const { repository, loading, error, fetchMore } = useRepository(id, first);

  if (loading) {
    return null;
  }

  if (error) {
    console.log(error);
  }

  const onEndReach = () => {
    fetchMore();
  };

  const reviews = repository
    ? repository.reviews.edges.map((edge) => edge.node)
    : [];

  return (
    <FlatList
      data={reviews}
      renderItem={({ item }) => <ReviewItem review={item} />}
      keyExtractor={({ id }) => id}
      ListHeaderComponent={() => <RepositoryInfo repository={repository} />}
      ItemSeparatorComponent={ItemSeparator}
      onEndReached={onEndReach}
      onEndReachedThreshold={0.5}
    />
  );
};

export default Repository;
