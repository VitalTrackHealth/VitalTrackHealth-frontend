import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  FlatList,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";

const FoodDiary = ({
  mealData,
  onAddFood,
  onDeleteFood,
  conditionData,
  navigation,
}) => {
  const handleNavigate = (mealType) => {
    navigation.navigate("SearchFood", {
      conditionData,
      mealType,
      onSelectFood: (food) => {
        onAddFood(mealType, food);
      },
    });
  };

  const renderMeal = (mealType, label) => (
    <View style={styles.mealContainer}>
      <View style={styles.labelContainer}>
        <Text style={styles.label}>
          {label} - {Math.round(calculateTotalCalories(mealType))}
        </Text>
        <TouchableOpacity
          style={styles.deleteButton}
          onPress={() => onDeleteFood(mealType)}
        >
          <AntDesign name="ellipsis1" size={16} color="black" />
        </TouchableOpacity>
      </View>
      <FlatList
        data={mealData[mealType]}
        keyExtractor={(item, index) => `${mealType}-${index}`}
        renderItem={({ item }) => (
          <View style={styles.foodContainer}>
            <Text style={styles.foodText}>
              {item.name} - {item.brand} {Math.round(item.calories)} cals
            </Text>
          </View>
        )}
      />
      <View style={styles.actionRow}>
        <TouchableOpacity onPress={() => handleNavigate(mealType)}>
          <View style={styles.addButton}>
            <AntDesign name="pluscircleo" size={24} color="grey" />
            <Text style={styles.addFoodLabel}> Add Food</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );

  const calculateTotalCalories = (mealType) => {
    return mealData[mealType].reduce((total, item) => total + item.calories, 0);
  };

  return (
    <View style={styles.container}>
      {renderMeal("breakfast", "Breakfast")}
      {renderMeal("lunch", "Lunch")}
      {renderMeal("dinner", "Dinner")}
      {renderMeal("snacks", "Snacks")}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#fff",
  },
  mealContainer: {
    marginBottom: 20,
    padding: 16,
    backgroundColor: "#f0f0f0",
    borderRadius: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  labelContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
  },
  label: {
    fontSize: 18,
    fontWeight: "bold",
  },
  addFoodLabel: {
    fontSize: 16,
    fontWeight: "semibold",
    color: "grey",
  },
  calories: {
    fontSize: 16,
    color: "#333",
  },
  foodContainer: {
    marginBottom: 5,
    padding: 10,
    backgroundColor: "white",
    borderRadius: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  actionRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end",
    marginTop: 10,
  },
  addButton: {
    flexDirection: "row",
    alignItems: "center",
  },
  button: {
    backgroundColor: "#007BFF",
    padding: 10,
    borderRadius: 5,
    alignItems: "center",
    flex: 1,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
  },
  deleteButton: {
    marginLeft: 10,
  },
});

export default FoodDiary;
