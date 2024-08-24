import React, { useState, useEffect } from "react";
import { View, TouchableOpacity, StyleSheet, ScrollView } from "react-native";
import { AntDesign, Ionicons } from "@expo/vector-icons";
import { FoodDiary, PatientCard } from "../components";
import COLORS from "../constants/colors";

const PatientHomeScreen = ({ route, navigation }) => {
  const [selectedIcon, setSelectedIcon] = useState(null);
  const [mealData, setMealData] = useState({
    breakfast: [],
    lunch: [],
    dinner: [],
    snacks: [],
  });

  const handleIconPress = (icon) => {
    setSelectedIcon(icon);
  };

  const addFoodItem = (mealType, food) => {
    setMealData((prevData) => ({
      ...prevData,
      [mealType]: [...(prevData[mealType] || []), food],
    }));
  };

  useEffect(() => {
    if (route.params?.selectedFood) {
      const { mealType, food } = route.params.selectedFood;
      addFoodItem(mealType, food);
    }
  }, [route.params?.selectedFood]);

  const deleteFoodItem = (mealType, index) => {
    setMealData((prevData) => ({
      ...prevData,
      [mealType]: prevData[mealType].filter((_, i) => i !== index),
    }));
  };

  const calculateTotalNutrients = () => {
    let totalCalories = 0;
    let totalProtein = 0;
    let totalCarbs = 0;
    let totalFats = 0;

    Object.keys(mealData).forEach((mealType) => {
      mealData[mealType].forEach((item) => {
        totalCalories += item.calories || 0;
        totalProtein += item.proteins || 0;
        totalCarbs += item.carbs || 0;
        totalFats += item.fats || 0;
      });
    });

    return { totalCalories, totalProtein, totalCarbs, totalFats };
  };

  const { totalCalories, totalProtein, totalCarbs, totalFats } =
    calculateTotalNutrients();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.iconButton}
          onPress={() => handleIconPress("setting")}
        >
          <AntDesign
            name="setting"
            size={35}
            color={selectedIcon === "setting" ? "green" : "white"}
          />
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.iconButton}
          onPress={() => handleIconPress("home")}
        >
          <AntDesign
            name="home"
            size={35}
            color={selectedIcon === "home" ? "green" : "white"}
          />
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.iconButton}
          onPress={() => handleIconPress("restaurant-outline")}
        >
          <Ionicons
            name="restaurant-outline"
            size={35}
            color={selectedIcon === "restaurant-outline" ? "green" : "white"}
          />
        </TouchableOpacity>
      </View>

      <ScrollView contentContainerStyle={styles.contentContainer}>
        <PatientCard
          totalCalories={totalCalories}
          totalProtein={totalProtein}
          totalCarbs={totalCarbs}
          totalFats={totalFats}
        />
        <View style={styles.separator} />
        <FoodDiary
          mealData={mealData}
          onAddFood={addFoodItem}
          onDeleteFood={deleteFoodItem}
          navigation={navigation}
        />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  separator: {
    height: 1,
    backgroundColor: "#ccc",
    marginVertical: 20,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    position: "absolute",
    top: 0,
    width: "100%",
    backgroundColor: COLORS.primary,
    padding: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    zIndex: 10,
  },
  iconButton: {
    marginTop: 30,
  },
  contentContainer: {
    paddingTop: 50,
    paddingHorizontal: 20,
    paddingBottom: 100,
  },
});

export default PatientHomeScreen;
