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
  const cardWidth = screenWidth / 1 - 40;

  const getCardBackgroundColor = (index) => {
    if (condition === "Diabetes" && nutrients[index]?.carbs > 60) {
      return colors.red.lightest; 
    }
    return colors.blue.lightest;
  };

  const getHeartColor = (index) => {
    if (condition === "Diabetes" && nutrients[index]?.carbs > 60) {
      return colors.red.medium; 
    }
    return colors.blue.medium; 
  };

  const getName = (index) => {
    if (condition === "Diabetes" && nutrients[index]?.carbs > 60) {
      return "warning";
    }
    return "heart";
  }

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
              height: cardWidth * 0.2,
              backgroundColor: getCardBackgroundColor(i + index), // Set dynamic background color
            },
          ]}
          onPress={() => onCardPress(foodIds[i + index])} // Pass foodId to onCardPress
        >
          <View style={styles.textContainer}>
            <Text
              style={styles.name}
              adjustsFontSizeToFit
              numberOfLines={1}
              minimumFontScale={0.7}
            >
              {names[i + index]}
            </Text>
            <Text
              style={styles.calories}
              adjustsFontSizeToFit
              numberOfLines={1}
              minimumFontScale={0.7}
            >
              {brands[i + index]}
            </Text>
            {nutrients[i + index] && (
              <Text
                style={styles.calories}
                adjustsFontSizeToFit
                numberOfLines={1}
                minimumFontScale={0.7}
              >
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
    borderRadius: 20,
    elevation: 3,
    shadowOffset: { width: 1, height: 1 },
    shadowColor: "rgba(255, 255, 255, 0.0)",
    shadowOpacity: 0.3,
    shadowRadius: 2,
    marginHorizontal: 15,
    marginVertical: 8,
    overflow: "hidden",
    width: Dimensions.get("window").width / 1 - 40,
  },
  favoriteBtn: {
    alignContent: "flex-end",
    alignSelf: "flex-end",
    marginRight: 10,
    marginTop: 10,
  },
  image: {
    flex: 1,
    borderRadius: 10,
    resizeMode: "flex-start",
    alignItems: "flex-start",
    resizeMode: "contain",
    marginBottom: 10
    
    
  },
  textContainer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    paddingVertical: 10,
    paddingHorizontal: 15,
    alignItems: "start",
  },
  name: {
    color: "black",
    fontWeight: "bold",
    fontSize: 18,
    textAlign: "center",
  },
  calories: {
    fontSize: 16,
    color: "black",
    textAlign: "center",
  },
});

export default FoodList;