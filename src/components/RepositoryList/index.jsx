import useRepositories from "../../hook/useReposistries";
import RepositoryListContainer from "./RepositoryListContainer";

const RepositoryList = () => {
  const { repositories } = useRepositories();

  return <RepositoryListContainer repositories={repositories} />;
};

export default RepositoryList;
