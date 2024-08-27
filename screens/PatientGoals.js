import React, { useState, useEffect } from "react";
import {
  View,
  StyleSheet,
  ScrollView,
  Text,
  TouchableOpacity,
} from "react-native";
import Slider from "@react-native-community/slider";
import COLORS from "../constants/colors";

const PatientGoals = ({ navigation, route }) => {
  const [calorieGoal, setCalorieGoal] = useState(
    route.params?.calorieGoal || 2000
  );

  const backbtnclicked = () => {
    console.log("Current Calories: ", calorieGoal);
    navigation.navigate("patientpage", { calorieGoal });
  };

  useEffect(() => {
    if (route.params?.calorieGoal) {
      setCalorieGoal(route.params.calorieGoal);
    }
  }, [route.params?.calorieGoal]);

  return (
    <View>
      <View style={styles.header}>
        <TouchableOpacity style={styles.button} onPress={backbtnclicked}>
          <Text style={styles.buttonText}>Back</Text>
        </TouchableOpacity>
      </View>
      <ScrollView>
        <View style={styles.container}>
          <Text>Johnathan's Account</Text>
          <View style={styles.mealContainer}>
            <Text>Set Calorie Goal</Text>
            <Text style={styles.calorieText}>{calorieGoal} Calories</Text>
            <Slider
              style={{ width: "100%", height: 40 }}
              minimumValue={900}
              maximumValue={3500}
              step={50}
              value={calorieGoal}
              onValueChange={(value) => setCalorieGoal(value)}
              minimumTrackTintColor={COLORS.primary}
              maximumTrackTintColor="grey"
            />
            <View style={styles.markerContainer}>
              <Text style={styles.markerText}>900</Text>
              <Text style={styles.markerText}>1200</Text>
              <Text style={styles.markerText}>2000</Text>
              <Text style={styles.markerText}>3000</Text>
              <Text style={styles.markerText}>3500</Text>
            </View>
          </View>
          <View style={styles.mealContainer}>
            <Text>Set Protein Goal</Text>
          </View>
          <View style={styles.mealContainer}>
            <Text>Set Carbohydrate Goal</Text>
          </View>
          <View style={styles.mealContainer}>
            <Text>Set Fat Goal</Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: "#007260",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    height: 100,
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    marginBottom: 10,
    marginLeft: 20,
    width: 70,
    height: 50,
  },
  buttonText: {
    color: "white",
    fontSize: 24,
  },
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
  calorieText: {
    fontSize: 24,
    textAlign: "center",
    marginBottom: 10,
  },
  markerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 10,
  },
  markerText: {
    fontSize: 12,
  },
});

export default PatientGoals;
