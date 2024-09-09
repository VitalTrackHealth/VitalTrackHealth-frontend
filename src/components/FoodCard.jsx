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
  ScrollView, // Import ScrollView
} from "react-native";

const FoodCard = ({
  images,
  names,
  nutrients,
  onCardPress,
  brands,
  foodIds,
  condition,
}) => {
  const screenWidth = Dimensions.get("window").width;
  const cardWidth = screenWidth / 2 - 40;

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
  };

  const renderCards = () => {
    return images.map((image, index) => (
      <TouchableOpacity
        key={index}
        style={[
          styles.card,
          {
            width: cardWidth,
            height: cardWidth * 1.4,
            backgroundColor: getCardBackgroundColor(index), // Set dynamic background color
          },
        ]}
        onPress={() => onCardPress(foodIds[index])} // Pass foodId to onCardPress
      >
        <TouchableOpacity style={styles.favoriteBtn}>
          <AntDesign
            name={getName(index)}
            size={28}
            color={getHeartColor(index)} // Set dynamic heart color
          />
        </TouchableOpacity>
        <Image source={{ uri: image }} style={styles.image} />
        <View style={styles.textContainer}>
          <Text
            style={styles.name}
            adjustsFontSizeToFit
            numberOfLines={1}
            minimumFontScale={0.7}
          >
            {names[index]}
          </Text>
          <Text
            style={styles.calories}
            adjustsFontSizeToFit
            numberOfLines={1}
            minimumFontScale={0.7}
          >
            {brands[index]}
          </Text>
          {nutrients[index] && (
            <Text
              style={styles.calories}
              adjustsFontSizeToFit
              numberOfLines={1}
              minimumFontScale={0.7}
            >
              Cals: {Math.round(nutrients[index].calories)}
            </Text>
          )}
        </View>
      </TouchableOpacity>
    ));
  };

  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.horizontalScroll}>
      {renderCards()}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 8,
  },
  horizontalScroll: {
    flexDirection: "row",
    paddingHorizontal: 8,
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
    width: Dimensions.get("window").width / 2 - 40,
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
    resizeMode: "center",
    alignItems: "center",
    marginBottom: 50,
    marginRight: 20,
    marginLeft: 20,
    marginTop: 10,
  },
  textContainer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    paddingVertical: 10,
    paddingHorizontal: 15,
    alignItems: "center",
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

export default FoodCard;



