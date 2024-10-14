import { useState, useEffect } from "react";
import { View, ScrollView, Text } from "react-native";

import { SearchBar, FoodList } from "@/components";
import { colors, createStyles, padding } from "@/styles";
import { searchFood } from "@/services";

const styles = createStyles({
  container: {
    flex: 1,
  },
  searchBarContainer: {
    padding: padding.lg,
  },
});

const SearchFoodScreen = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [foodEntries, setFoodEntries] = useState([]);

  const handleSubmitEditing = () => {
    searchFood(searchQuery).then((entries) => {
      setFoodEntries(entries);
    });
  };

  const handleFoodItemPress = (item) => {
    navigation.navigate("FoodDetailScreen", { foodItem: item });
  };

  return (
    <View style={styles.container}>
      <View style={styles.searchBarContainer}>
        <SearchBar
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          onSubmitEditing={handleSubmitEditing}
        />
      </View>
      <FoodList foodEntries={foodEntries} onItemPress={handleFoodItemPress} />
    </View>
  );
};

export default SearchFoodScreen;
