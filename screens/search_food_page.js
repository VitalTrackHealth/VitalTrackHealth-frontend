import React from "react";
import { View, Text, StyleSheet } from "react-native";

const SearchFoodPage = () => {
  return (
    <View style={styles.container}>
      <Text>Search Food Page</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default SearchFoodPage;
