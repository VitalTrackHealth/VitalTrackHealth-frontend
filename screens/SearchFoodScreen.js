import React from "react";
import { View, Text, StyleSheet, Image, ScrollView } from "react-native";
import { handleFood_search } from "../scripts/handle_register";
import FoodCard from "../ios/components/food";
import SearchBar from "../ios/components/SearchBar";
import Card from "../ios/components/card";
let images = [];
let names = [];

async function getFoodData(ingr, brand) {
  const foodData = await handleFood_search(ingr, brand);

  for (let i = 0; i < foodData.length; i++) {
    console.log(foodData[i].food.image);
    console.log("\n" + foodData[i].food.knownAs);
    images[i] = foodData[i].food.image;
    names[i] = foodData[i].food.knownAs;
  }
  console.log("\n" + images[1]);
  return foodData;
}

const SearchFoodScreen = () => {
  const data = getFoodData("pasta", "");

  console.log("\n" + data);

  return (
    <ScrollView>
      <View style={styles.container}>
        <SearchBar></SearchBar>
        <FoodCard images={images} names={names} />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 50,
    // justifyContent: "center",

    alignItems: "center",
  },
});

export default SearchFoodScreen;
