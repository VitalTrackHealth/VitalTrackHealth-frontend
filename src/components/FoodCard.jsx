import React from "react";
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Image,
  Text,
  Dimensions,
} from "react-native";

const FoodCard = ({
  images,
  names,
  nutrients,
  onCardPress,
  brands,
  foodIds,
}) => {
  const screenWidth = Dimensions.get("window").width;
  const cardWidth = screenWidth / 3 - 16;

  const renderCards = () => {
    const rows = [];
    for (let i = 0; i < images.length; i += 3) {
      const rowItems = images.slice(i, i + 3).map((image, index) => (
        <TouchableOpacity
          key={i + index}
          style={[styles.card, { width: cardWidth, height: cardWidth * 1.4 }]}
          onPress={() => onCardPress(foodIds[i + index])} // Pass foodId to onCardPress
        >
          <Image source={{ uri: image }} style={styles.image} />
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
    borderRadius: 10,
    elevation: 3,
    backgroundColor: "rgba(255, 255, 255, 0.2)",
    shadowOffset: { width: 1, height: 1 },
    shadowColor: "rgba(255, 255, 255, 0.0)",
    borderWidth: 0.2,
    borderColor: "grey",
    shadowOpacity: 0.3,
    shadowRadius: 2,
    marginHorizontal: 4,
    marginVertical: 8,
    overflow: "hidden",
    width: Dimensions.get("window").width / 3 - 12,
  },
  image: {
    flex: 1,
    borderRadius: 10,
    resizeMode: "cover",
  },
  textContainer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: "rgba(0, 0, 0, 0.4)",
    paddingVertical: 5,
    paddingHorizontal: 10,
    alignItems: "center",
  },
  name: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
    textAlign: "center",
  },
  calories: {
    fontSize: 13,
    color: "#fff",
    textAlign: "center",
  },
});

export default FoodCard;
