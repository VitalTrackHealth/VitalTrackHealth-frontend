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
  const [foodItems, setFoodItems] = useState([]);

  const handleSubmitEditing = async () => {
    const response = await searchFood(searchQuery);
    console.log(response);
    if (response.success) {
      setFoodItems(response.results.data.all);
    }
  };

  const handleFoodItemPress = (item) => {
    router.push({
      pathname: "/food/food-details",
      params: {
        foodName: item.label,
        foodId: item.food_id,
        calories: item.nutrients.CALORIES,
        protein: item.nutrients.PROTEIN,
        carbohydrates: item.nutrients.CARBOHYDRATE,
        fat: item.nutrients.FAT,
        servingSize: item.serving,
      },
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
      <FoodList foodItems={foodItems} onItemPress={handleFoodItemPress} />
    </View>
  );
};

export default SearchFoodScreen;
