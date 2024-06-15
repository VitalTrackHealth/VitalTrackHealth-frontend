import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import React from "react";

const AddButtom = ({}) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      style={styles.cont}
      onPress={() => navigation.navigate("search_food_page")}
    >
      <Image
        source={{
          uri: "https://github.com/herodev-ch/ReactNativeDream/blob/ui/create-add-button/src/assets/icons/plus.png?raw=true",
        }}
        style={styles.image}
      />

      <Text
        style={{
          color: "white",
          textDecorationLine: "underline",
          fontFamily: "bold",
        }}
      >
        Input dietary intake
      </Text>
    </TouchableOpacity>
  );
};
export default AddButtom;

const styles = StyleSheet.create({
  cont: {
    backgroundColor: "blue",

    height: 50,
    width: 200,
    borderRadius: 20,
    flexDirection: "row", // Add this line

    alignItems: "center", // Change this line
    paddingHorizontal: 10, // Add this line
  },
  image: {
    tintColor: "white",
    height: 35,
    width: 35,
  },
});
