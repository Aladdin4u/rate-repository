import { useState } from "react";
import { useDebounce } from 'use-debounce';

import useRepositories from "../../hook/useRepositories";
import { RepositoryListContainer } from "./RepositoryListContainer";

const RepositoryList = () => {
  const [variables, setVariables] = useState({
    orderBy: "CREATED_AT",
    orderDirection: "DESC",
  });
  const [searchQuery, setSearchQuery] = useState("");
  const [searchKeyword] = useDebounce(searchQuery, 1000);

  const orderSelected = (variables) => setVariables(variables);

  const { orderBy, orderDirection } = variables;
  const { repositories } = useRepositories(orderBy, orderDirection, searchKeyword);

  return (
    <RepositoryListContainer
      repositories={repositories}
      orderSelected={orderSelected}
      setSearchQuery={setSearchQuery}
      searchQuery={searchQuery}
    />
  );
};

export default RepositoryList;
