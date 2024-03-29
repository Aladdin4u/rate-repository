import { View, StyleSheet } from "react-native";

import SearchBar from "./SearchBar";
import OrderRepositoryList from "./OrderRepositoryList";

const styles = StyleSheet.create({
  container: {
    display: "flex",
    padding: 15,
    gap: 20,
  },
});

const FilterHeader = ({ orderSelected, searchQuery, setSearchQuery }) => {
  return (
    <View style={styles.container}>
      <SearchBar setSearchQuery={setSearchQuery} searchQuery={searchQuery} />
      <OrderRepositoryList orderSelected={orderSelected} />
    </View>
  );
};

export default FilterHeader;
