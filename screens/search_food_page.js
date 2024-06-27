import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { handleFood_search } from "../scripts/handle_register";
let images = [];
async function getFoodData(ingr, brand) {
  const foodData = await handleFood_search(ingr, brand);

  for (let i = 0; i < foodData.length; i++) {
    console.log(foodData[i].food.image);
    console.log("\n" + foodData[i].food.knownAs);
    images[i] = foodData[i].food.image;
  }
  console.log("\n" + images[1]);
  return foodData;
}

const SearchFoodPage = () => {
  const data = getFoodData("rice", "royal");

  console.log("\n" + data);

  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: images[1],
        }}
        style={{ width: 100, height: 100 }}
      />
      <Text>Data</Text>
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
