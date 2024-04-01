import { useState } from "react";
import { useDebounce } from "use-debounce";

import useRepositories from "../../hook/useRepositories";
import { RepositoryListContainer } from "./RepositoryListContainer";

const RepositoryList = () => {
  const first = 6;
  const [variables, setVariables] = useState({
    orderBy: "CREATED_AT",
    orderDirection: "DESC",
  });
  const [searchQuery, setSearchQuery] = useState("");
  const [searchKeyword] = useDebounce(searchQuery, 1000);

  const orderSelected = (variables) => setVariables(variables);

  const { orderBy, orderDirection } = variables;
  const { repositories, fetchMore } = useRepositories(
    orderBy,
    orderDirection,
    searchKeyword,
    first
  );

  const onEndReach = () => {
    fetchMore();
  };

  return (
    <RepositoryListContainer
      repositories={repositories}
      orderSelected={orderSelected}
      setSearchQuery={setSearchQuery}
      searchQuery={searchQuery}
      onEndReach={onEndReach}
    />
  );
};

export default RepositoryList;
