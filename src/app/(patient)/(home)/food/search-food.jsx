import { useState } from "react";
import { View } from "react-native";
import { router } from "expo-router";

import { SearchBar, FoodList, BackButton } from "@/components";
import { createStyles, padding, margin } from "@/styles";
import { searchFood } from "@/services";

const styles = createStyles({
  container: {
    flex: 1,
  },
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  backButtonContainer: {
    alignItems: "center",
    marginLeft: margin.lg,
    marginTop: margin.xl,
  },
  searchBarContainer: {
    justifyContent: "center",
    flex: 1,
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
    router.push({
      pathname: "/food/food-details",
      params: { foodItemName: item.name },
    });
  };

  const handleBackButtonClick = () => {
    router.back();
  };

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <View style={styles.backButtonContainer}>
          <BackButton onPress={handleBackButtonClick} variant="secondary" />
        </View>
        <View style={styles.searchBarContainer}>
          <SearchBar
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
            onSubmitEditing={handleSubmitEditing}
          />
        </View>
      </View>
      <FoodList foodEntries={foodEntries} onItemPress={handleFoodItemPress} />
    </View>
  );
};

export default SearchFoodScreen;
