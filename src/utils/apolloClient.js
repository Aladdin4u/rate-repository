import Constants from "expo-constants";
import { ApolloClient, InMemoryCache } from '@apollo/client';


const createApolloClient = () => {
  return new ApolloClient({
    uri: Constants.expoConfig.extra.apollo,
    cache: new InMemoryCache(),
  });
};

export default createApolloClient;