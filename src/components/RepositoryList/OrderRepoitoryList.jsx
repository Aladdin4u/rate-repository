import { useState } from "react";
import { View, StyleSheet } from "react-native";
import { Picker } from "@react-native-picker/picker";

const styles = StyleSheet.create({
  container: {
    padding: 15,
  },
  picker: {
    borderColor: "transparent",
    backgroundColor: "transparent",
  },
});
const OrderRepositoryList = ({ orderSelected }) => {
  const [select, setSelect] = useState("CREATED_AT");

  const onSelect = (select) => {
    switch (select) {
      case "CREATED_AT":
        orderSelected({
          orderBy: "CREATED_AT",
          orderDirection: "DESC",
        });
        break;
      case "DESC":
        orderSelected({
          orderBy: "RATING_AVERAGE",
          orderDirection: "DESC",
        });
        break;
      case "ASC":
        orderSelected({
          orderBy: "RATING_AVERAGE",
          orderDirection: "ASC",
        });
        break;
    }
  };

  return (
    <View style={styles.container}>
      <Picker
        mode="dialog"
        selectedValue={select}
        onValueChange={(item, index) => {
          setSelect(item);
          onSelect(item);
        }}
        style={styles.picker}
      >
        <Picker.Item enabled="false" label="Select an item..." value="" />
        <Picker.Item label="Latest repositories" value="CREATED_AT" />
        <Picker.Item label="Highest rated repositories" value="DESC" />
        <Picker.Item label="Lowest rated repositories" value="ASC" />
      </Picker>
    </View>
  );
};

export default OrderRepositoryList;
