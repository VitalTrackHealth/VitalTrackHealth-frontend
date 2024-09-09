import React, { useState, useEffect } from "react";
import {
  View,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Text,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import DateTimePicker from "@react-native-community/datetimepicker";
import { AntDesign } from "@expo/vector-icons";

import { FoodDiary, PatientCard } from "@/components";
import { colors } from "@/styles";
import { useUser } from "@/context";

const PatientHomeScreen = ({ route, navigation }) => {
  const { user, setUser } = useUser();
  const [selectedIcon, setSelectedIcon] = useState(null);
  const [mealData, setMealData] = useState({
    breakfast: [],
    lunch: [],
    dinner: [],
    snacks: [],
  });

  const [calorieGoal, setCalorieGoal] = useState(
    route.params?.calorieGoal || 2000
  );
  const [date, setDate] = useState(new Date());

  const handleIconPress = (icon) => {
    setSelectedIcon(icon);
    if (icon === "goal") {
      navigation.navigate("PatientGoals", { calorieGoal });
    }
  };

  const addFoodItem = (mealType, food) => {
    setMealData((prevData) => ({
      ...prevData,
      [mealType]: [...(prevData[mealType] || []), food],
    }));
  };

  useEffect(() => {
    console.log(user);
    if (route.params?.selectedFood) {
      const { mealType, food } = route.params.selectedFood;
      addFoodItem(mealType, food);
    }
    if (route.params?.calorieGoal) {
      setCalorieGoal(route.params.calorieGoal);
    }
  }, [route.params?.selectedFood, route.params?.calorieGoal]);

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

  const handleDateChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setDate(currentDate);
  };

  const changeDateByDays = (days) => {
    const newDate = new Date(date);
    newDate.setDate(newDate.getDate() + days);
    setDate(newDate);
  };

  const condition = route.params?.condition
    ? route.params?.condition
    : "Diabetes";
  const { totalCalories, totalProtein, totalCarbs, totalFats } =
    calculateTotalNutrients();

  return (
    <SafeAreaView style={styles.container} edges={["top", "left", "right"]}>
      <View style={styles.header}>
        <View style={{flexDirection: "row", marginTop: 40, justifyContent: "space-around" }}>
          <TouchableOpacity onPress={() => changeDateByDays(-1)}>
            <AntDesign name="left" size={30} color="white" />
          </TouchableOpacity>
          
          <TouchableOpacity onPress={() => handleDateChange()}>
            <Text style={styles.dateText}>
              {
                <DateTimePicker
                  value={date}
                  mode="date"
                  display="compact"
                  onChange={handleDateChange}
                />
              }
            </Text>
          </TouchableOpacity>

         
          <TouchableOpacity onPress={() => changeDateByDays(1)}>
            <AntDesign name="right" size={30} color="white" />
          </TouchableOpacity>
        </View>
      </View>

      <ScrollView
        contentContainerStyle={styles.contentContainer}
        contentInsetAdjustmentBehavior="automatic"
      >
        <PatientCard
          totalCalories={totalCalories}
          totalProtein={totalProtein}
          totalCarbs={totalCarbs}
          totalFats={totalFats}
          caloriesGoal={calorieGoal}
        />
        <View style={styles.separator} />
        <FoodDiary
          mealData={mealData}
          onAddFood={addFoodItem}
          onDeleteFood={deleteFoodItem}
          navigation={navigation}
          conditionData={condition}
        />
      </ScrollView>
    </SafeAreaView>
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
    justifyContent: "space-around" ,
    top: 0,
    width: "100%",
    backgroundColor: colors.primary,
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
    paddingTop: 10,
    paddingHorizontal: 20,
    paddingBottom: 100,
  },
});

export default PatientHomeScreen;
