import React from "react";
import { StyleSheet, View, TouchableOpacity, Image, Text } from "react-native";
import COLORS from "../../constants/colors";
import Ring from "./ring";

export default function FoodCard({ items }) {
  console.log(items);
  // Step 1: Accept items as a prop
  return (
    <View>
      {items.map(
        (
          item,
          index // Step 2: Map over the items array
        ) => (
          <TouchableOpacity
            key={index}
            onPress={() => {
              /* Handle onPress event */
            }}
          >
            <View style={styles.Card}>
              <Image source={{ uri: items[9] }} style={styles.image} />
              <View>
                <Text>rice</Text>
                <Text>500 kc</Text>
              </View>
            </View>
          </TouchableOpacity>
        )
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  Card: {
    borderRadius: 10,
    elevation: 3,
    backgroundColor: "rgba(255, 255, 255, 0.2)", // semi-transparent white
    shadowOffset: { width: 1, height: 1 },
    shadowColor: "rgba(255, 255, 255, 0.0)",
    borderWidth: 0.7,
    borderColor: COLORS.primary,
    shadowOpacity: 0.3,
    shadowRadius: 2,
    marginHorizontal: 4,
    marginVertical: 6,
    padding: 20,
  },
  cardContent: {},
  box: {
    borderWidth: 1,
    borderColor: COLORS.primary,
    letterSpacing: 20,
    marginTop: 10,
    padding: 10,
    borderRadius: 5,
  },
  image: {
    height: 100,
    width: 100,
  },
});
