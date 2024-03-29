import { StyleSheet } from "react-native";
import { Searchbar } from "react-native-paper";

import theme from "../../theme";

const styles = StyleSheet.create({
  search: {
    backgroundColor: theme.colors.white,
    borderRadius: 6,
  },
});

const SearchBar = ({ searchQuery, setSearchQuery }) => {
  
  return (
    <Searchbar
      placeholder="Search"
      onChangeText={setSearchQuery}
      value={searchQuery}
      style={styles.search}
    />
  );
};

export default SearchBar;
