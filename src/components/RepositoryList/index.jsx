import { useState } from "react";
import useRepositories from "../../hook/useRepositories";
import RepositoryListContainer from "./RepositoryListContainer";

const RepositoryList = () => {
  const [variables, setVariables] = useState({
    orderBy: "CREATED_AT",
    orderDirection: "DESC",
  });

  const orderSelected = (variables) => {
    return setVariables(variables);
  };

  const { orderBy, orderDirection } = variables;
  const { repositories } = useRepositories(orderBy, orderDirection);

  return (
    <RepositoryListContainer
      repositories={repositories}
      orderSelected={orderSelected}
    />
  );
};

export default RepositoryList;
