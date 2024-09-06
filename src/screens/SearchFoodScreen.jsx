import React, { useState, useEffect } from "react";
import { View, StyleSheet, ScrollView, Text } from "react-native";
import { handleFood_search } from "@/services";
import { FoodCard, SearchBar, FoodList } from "@/components";
import { colors } from "@/styles";

const SearchFoodScreen = ({ navigation, route }) => {
  const { mealType, conditionData } = route.params;
  const [images, setImages] = useState([]);
  const [names, setNames] = useState([]);
  const [nutrients, setNutrients] = useState([]);
  const [ingredients, setIngredients] = useState([]);
  const [brands, setBrands] = useState([]);
  const [servingSizes, setServingSize] = useState([]);
  const [foodids, setFoodId] = useState([]);
  const [searchPhrase, setSearchPhrase] = useState("");
  const [clicked, setClicked] = useState(false);
  const [noResults, setNoResults] = useState(false);

  const fetchFoodData = async (query) => {
    try {
      const foodDataResponse = await handleFood_search(query);

      if (
        foodDataResponse &&
        foodDataResponse.data &&
        foodDataResponse.data.all &&
        Array.isArray(foodDataResponse.data.all) &&
        foodDataResponse.data.all.length > 0
      ) {
        const newImages = foodDataResponse.data.all.map((item) => item.image);
        const newNames = foodDataResponse.data.all.map((item) => item.label);
        const newNutrients = foodDataResponse.data.all.map((item) => ({
          calories: item.nutrients.CALORIES || 0,
          fats: item.nutrients.FAT || 0,
          proteins: item.nutrients.PROTEIN || 0,
          carbs: item.nutrients.CARBOHYDRATE || 0,
        }));
        const newFoodIds = foodDataResponse.data.all.map((item) => item.food_id);
        const newBrands = foodDataResponse.data.all.map(
          (item) => item.brand || "Generic Brand"
        );
        const newServingSize = foodDataResponse.data.all.map((item) => 100);
        const newIngredients = foodDataResponse.data.all.map((item) =>
          item.content_label ? item.content_label.split(";") : []
        );

        setImages(newImages);
        setNames(newNames);
        setNutrients(newNutrients);
        setIngredients(newIngredients);
        setBrands(newBrands);
        setServingSize(newServingSize);
        setFoodId(newFoodIds);
        setNoResults(false);
      } else {
        console.error("No data found in the response or data is not an array.");
        setNoResults(true);
      }
    } catch (error) {
      console.error("Error fetching food data:", error);
      setNoResults(true);
    }
  };

  useEffect(() => {
    if (searchPhrase.length > 0) {
      fetchFoodData(searchPhrase);
    } else if (!clicked) {
      fetchFoodData("Pasta");
    }
  }, [searchPhrase, clicked]);

  const handleCardPress = async (foodId) => {
    const index = foodids.indexOf(foodId);

    if (index !== -1) {
      let nutrientData = nutrients[index];
      let ingredientData = ingredients[index];
      let brand = brands[index];
      let servingSize = servingSizes[index];
      let name = names[index];
      let image = images[index];

      navigation.navigate("FoodInfo", {
        brand,
        name,
        imagei: image,
        nutrients: nutrientData,
        ingredients: ingredientData,
        servingSize,
        mealType,
        conditionData,
      });
    } else {
      console.error(`Food ID ${foodId} not found in the list.`);
    }
  };

  const handleSearch = (phrase) => {
    setSearchPhrase(phrase);
  };

  return (
    <View>
      <View style={styles.header}>
        <SearchBar
          clicked={clicked}
          searchPhrase={searchPhrase}
          setSearchPhrase={setSearchPhrase}
          setClicked={setClicked}
          onSearch={handleSearch}
          navigation={navigation}
        />
      </View>

      <ScrollView>
        <View style={styles.container}>
          {clicked ? (
            <>
              {noResults ? (
                <Text style={styles.noResultsText}>
                  No results found. Please try a different search term.
                </Text>
              ) : (
                <View>
                  <Text style={styles.title}>Results: </Text>
                  <FoodList
                    foodIds={foodids}
                    names={names}
                    images={images}
                    nutrients={nutrients}
                    brands={brands}
                    condition={conditionData}
                    onCardPress={handleCardPress}
                  />
                </View>
              )}
            </>
          ) : (
            <>
              <Text style={styles.title}>Suggested Foods: </Text>
              <FoodCard
                foodIds={foodids}
                names={names}
                images={images}
                nutrients={nutrients}
                brands={brands}
                condition={conditionData}
                onCardPress={handleCardPress}
              />
            </>
          )}

          <View style={styles.spacer} />
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  title: {
    alignSelf: "flex-start",
    fontSize: 24,
    marginLeft: 20,
    marginBottom: 20,
    color: "#636363",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    height: 150,
  },
  noResultsText: {
    fontSize: 18,
    color: "black",
    marginTop: 20,
    margin: 20,
  },
  spacer: {
    height: 250,
  },
});

export default SearchFoodScreen;



