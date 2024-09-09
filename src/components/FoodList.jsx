import { AntDesign } from "@expo/vector-icons";
import React from "react";
import { colors } from "@/styles";
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Image,
  Text,
  Dimensions,
} from "react-native";

const FoodList = ({
  images,
  names,
  nutrients,
  onCardPress,
  brands,
  foodIds,
  condition,
}) => {
  const screenWidth = Dimensions.get("window").width;
  const cardWidth = screenWidth - 40;

  const getCardBackgroundColor = (index) => {
    if (condition === "Diabetes" && nutrients[index]?.carbs > 60) {
      return colors.red.lightest; 
    }
    return colors.blue.lightest;
  };

  const renderCards = () => {
    const rows = [];
    for (let i = 0; i < images.length; i += 1) {
      const rowItems = images.slice(i, i + 1).map((image, index) => (
        <TouchableOpacity
          key={i + index}
          style={[
            styles.card,
            {
              width: cardWidth,
              backgroundColor: getCardBackgroundColor(i + index),
            },
          ]}
          onPress={() => onCardPress(foodIds[i + index])}
        >

        <Image source={{ uri: image }} style={styles.image} />
        <View style={styles.textContainer}>
            <Text style={styles.name} adjustsFontSizeToFit numberOfLines={1} minimumFontScale={0.7}>
              {names[i + index]}
            </Text>
            <Text style={styles.brand} adjustsFontSizeToFit numberOfLines={1} minimumFontScale={0.7}>
              {brands[i + index]}
            </Text>
            {nutrients[i + index] && (
              <Text style={styles.calories} adjustsFontSizeToFit numberOfLines={1} minimumFontScale={0.7}>
                Cals: {Math.round(nutrients[i + index].calories)}
              </Text>
            )}
        </View>
        </TouchableOpacity>
      ));
      rows.push(
        <View key={i} style={styles.row}>
          {rowItems}
        </View>
      );
    }
    return rows;
  };

  return <View style={styles.container}>{renderCards()}</View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 8,
  },
  row: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    flexWrap: "wrap",
    width: "100%",
  },
  card: {
    flexDirection: "row", 
    borderRadius: 20,
    elevation: 3,
    shadowOffset: { width: 1, height: 1 },
    shadowColor: "rgba(255, 255, 255, 0.0)",
    shadowOpacity: 0.3,
    shadowRadius: 2,
    marginHorizontal: 15,
    marginVertical: 8,
    overflow: "hidden",
    padding: 5,
    width: Dimensions.get("window").width - 40,
  },
  textContainer: {
    flex: 6,
    flexDirection: "column",
    justifyContent: "start",
  },
  image: {
    flex: 1, 
    borderRadius: 100,
    width: 40,
    height: 40,
    resizeMode: "contain",
  },
  name: {
    color: "black",
    fontWeight: "bold",
    fontSize: 18,
    textAlign: "left",
  },
  brand: {
    color: "black",
    fontSize: 14,
    textAlign: "left",
  },
  calories: {
    fontSize: 16,
    color: "black",
    textAlign: "left",
  },
});

export default FoodList;
