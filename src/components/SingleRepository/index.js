import { useParams } from "react-router-dom";
import { FlatList } from "react-native";

import ReviewItem from "./ReviewItem";
import ItemSeparator from "../ItemSeparator";
import RepositoryInfo from "./RepositoryInfo";
import useRepository from "../../hook/useRepository";

const SingleRepository = () => {
  let { id } = useParams();
  const { repository, loading, error } = useRepository(id);

  if (loading) {
    return null;
  }

  if (error) {
    console.log(error);
  }

  const reviews = repository
    ? repository.reviews.edges.map((edge) => edge.node)
    : [];

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
