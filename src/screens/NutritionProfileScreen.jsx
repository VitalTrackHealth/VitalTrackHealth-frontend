import { useState, useEffect } from "react";
import {
  View,
  StyleSheet,
  ScrollView,
  Text,
  Pressable,
  Image,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Slider from "@react-native-community/slider";

import { colors } from "@/styles";

const NutritionProfileScreen = ({ navigation, route }) => {
  const [calorieGoal, setCalorieGoal] = useState(
    route.params?.calorieGoal || 2000
  );

  const backbtnclicked = () => {
    console.log("Current Calories: ", calorieGoal);
    navigation.navigate("Home", { calorieGoal });
  };
  const homebuttom = () => {
    navigation.navigate("Home", { calorieGoal });
  };

  useEffect(() => {
    if (route.params?.calorieGoal) {
      setCalorieGoal(route.params.calorieGoal);
    }
  }, [route.params?.calorieGoal]);

  return (
    <SafeAreaView style={{ backgroundColor: "D6F7F7" }}>
      <View></View>
      <ScrollView style  =  {{height: "100%"}}>
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
              minimumTrackTintColor={colors.primary}
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
      

      {/* All circular buttons */}
      <View style={styles.Conditions}>
 
        <View style={{ marginTop: 15 }}>
          <Text> List Your Chronic condition </Text>
        </View>
        {/* First Row */}
       
        <View style={{ flexDirection: "row" }}>
          {/* Diabetes */}
          <Pressable onPress={() => ""}>
            <View style={{ flexDirection: "column", alignItems: "center" }}>
              <View style={styles.CircularButton}>
                <Image source={require("@/assets/diabetes.png")} />
              </View>
              <Text> Diabetes </Text>
            </View>
          </Pressable>
          {/* Obesity */}
          <Pressable onPress={() => ""}>
            <View style={{ flexDirection: "column", alignItems: "center" }}>
              <View style={styles.CircularButton}>
                <Image source={require("@/assets/obesity.png")} />
              </View>
              <Text> Obesity </Text>
            </View>
          </Pressable>

          {/* Hypertension */}
          <Pressable onPress={() => ""}>
            <View style={{ flexDirection: "column", alignItems: "center" }}>
              <View style={styles.CircularButton}>
                <Image source={require("@/assets/hypertension.png")} />
              </View>
              <Text> Hypertension </Text>
            </View>
          </Pressable>
        </View>
        

        {/* Second Row */}
        <View style={{ flexDirection: "row", marginBottom: 20 }}>
          {/* Osteoporosis */}
          <Pressable onPress={() => ""}>
            <View style={{ flexDirection: "column", alignItems: "center" }}>
              <View style={styles.CircularButton}>
                <Image source={require("@/assets/osteoporosi.png")} />
              </View>
              <Text> Diabetes </Text>
            </View>
          </Pressable>

          {/* Cardiovascular Disease */}
          <Pressable onPress={() => ""}>
            <View style={{ flexDirection: "column", alignItems: "center" }}>
              <View style={styles.CircularButton}>
                <Image source={require("@/assets/cardio.png")} />
              </View>
              <Text> Cardio disease </Text>
            </View>
          </Pressable>

          {/* Gastroesophageal Reflux Disease */}
          <Pressable onPress={() => ""}>
            <View style={{ flexDirection: "column", alignItems: "center" }}>
              <View style={styles.CircularButton}>
                <Image source={require("@/assets/stomach.png")} />
              </View>
              <Text>reflux disease </Text>
            </View>
          </Pressable>
          
        </View>
        
        
      </View>
      
      </ScrollView>
    </SafeAreaView>
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
  CircularButton: {
    alignItems: "center",
    justifyContent: "center",
    margin: 10,

    width: 100,
    height: 100,
    borderRadius: 100,
    backgroundColor: "#FFDDDD",
  },
  buttonText: {
    color: "white",
    fontSize: 24,
  },

  Conditions: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
    height: 100,
   
  },

  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#fff",
    
  },
  mealContainer: {
    marginBottom: 15,
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

export default NutritionProfileScreen;
