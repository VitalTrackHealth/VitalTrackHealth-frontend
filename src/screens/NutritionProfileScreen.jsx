import { useState, useEffect } from "react";
import {
  View,
  StyleSheet,
  ScrollView,
  Text,
  Pressable,
  Image,
  TouchableOpacity,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Slider from "@react-native-community/slider";
import { AntDesign } from "@expo/vector-icons";

import { colors } from "@/styles";

const NutritionProfileScreen = ({ navigation, route }) => {
  const [calorieGoal, setCalorieGoal] = useState(
    route.params?.calorieGoal || 2000
  );

    const [fatGoal, setFatGoal] = useState(
    route.params?.fatGoal || 50
  );

    const [proteinGoal, setProteinGoal] = useState(
    route.params?.proteinGoal || 50
  );

    const [carbsGoal, setCarbsGoal] = useState(
    route.params?.proteinGoal || 50
  );



  useEffect(() => {
    if (route.params?.calorieGoal) {
      setCalorieGoal(route.params.calorieGoal);
    }
  }, [route.params?.calorieGoal]);

    useEffect(() => {
    if (route.params?.fatGoal) {
      setFatgoal(route.params.fatGoal);
    }
  }, [route.params?.fatGoal]);

    useEffect(() => {
    if (route.params?.carbsGoal) {
      setCarbsgoal(route.params.carbsGoal);
    }
  }, [route.params?.carbsGoal]);

  return (
    <SafeAreaView style={{ backgroundColor: "#ffffff", flex:1 }}>
      
      <ScrollView>
        <View style={styles.container}>
          {/* Insert header here */}
   


          {/* Calorie  goal slider */}
          <View style={styles.mealContainer}>
            
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

          {/* Protein goal slider */}
          <View style={styles.mealContainer}>
            
            <Text style={styles.calorieText}>{proteinGoal} Grams of Protein</Text>
            <Slider
              style={{ width: "100%", height: 40 }}
              minimumValue={80}
              maximumValue={250}
              step={5}
              value={proteinGoal}
              onValueChange={(value) => setProteinGoal(value)}
              minimumTrackTintColor={colors.primary}
              maximumTrackTintColor="grey"
            />
            <View style={styles.markerContainer}>
              <Text style={styles.markerText}>80</Text>
              <Text style={styles.markerText}>110</Text>
              <Text style={styles.markerText}>140</Text>
              <Text style={styles.markerText}>170</Text>
              <Text style={styles.markerText}>200</Text>
              <Text style={styles.markerText}>250+</Text>
            </View>
          </View>


          {/* Carbohydrates  goal slider */}
          <View style={styles.mealContainer}>
            
            <Text style={styles.calorieText}>{carbsGoal} Grams of Carbs</Text>
            <Slider
              style={{ width: "100%", height: 40 }}
              minimumValue={50}
              maximumValue={500}
              step={50}
              value={carbsGoal}
              onValueChange={(value) => setCarbsGoal(value)}
              minimumTrackTintColor={colors.primary}
              maximumTrackTintColor="grey"
            />
            <View style={styles.markerContainer}>
              <Text style={styles.markerText}>50</Text>
              <Text style={styles.markerText}>150</Text>
              <Text style={styles.markerText}>250</Text>
              <Text style={styles.markerText}>350</Text>
              <Text style={styles.markerText}>500+</Text>
            </View>
          </View>


           {/* Fats  goal slider */}
          <View style={styles.mealContainer}>
          
            <Text style={styles.calorieText}>{fatGoal} Grams of Fat</Text>
            <Slider
              style={{ width: "100%", height: 40 }}
              minimumValue={0}
              maximumValue={150}
              step={10}
              value={fatGoal}
              onValueChange={(value) => setFatGoal(value)}
              minimumTrackTintColor={colors.primary}
              maximumTrackTintColor="grey"
            />
            <View style={styles.markerContainer}>
              <Text style={styles.markerText}>0g</Text>
              <Text style={styles.markerText}>40g</Text>
              <Text style={styles.markerText}>70g</Text>
              <Text style={styles.markerText}>100g</Text>
              <Text style={styles.markerText}>150g</Text>
            </View>
          </View>
          
          


          
        </View>
        
      

      {/* All circular buttons */}
      <View style={styles.Conditions}>
 
        <View style={{ marginTop: 15, }}>
          <Text> List Your Chronic condition </Text>
        </View>
        {/* First Row */}
       
        <View style={{ flexDirection: "row" }}>
          {/* Diabetes */}
          <Pressable onPress={() => ""}>
            <View style={{ flexDirection: "column", alignItems: "center",  flexGrow: 1 }}>
              <View style={styles.CircularButton}>
                <Image source={require("@/assets/diabetes.png")} />
              </View>
              <Text> Diabetes </Text>
            </View>
          </Pressable>
          {/* Obesity */}
          <Pressable onPress={() => ""}>
            <View style={{ flexDirection: "column", alignItems: "center",  flexGrow: 1 }}>
              <View style={styles.CircularButton}>
                <Image source={require("@/assets/obesity.png")} />
              </View>
              <Text> Obesity </Text>
            </View>
          </Pressable>

          {/* Hypertension */}
          <Pressable onPress={() => ""}>
            <View style={{ flexDirection: "column", alignItems: "center",  flexGrow: 1 }}>
              <View style={styles.CircularButton}>
                <Image source={require("@/assets/hypertension.png")} />
              </View>
              <Text> Hypertension </Text>
            </View>
          </Pressable>
        </View>
        

        {/* Second Row */}
        <View style={{ flexDirection: "row", marginBottom: 20,  flexGrow: 1 }}>
          {/* Osteoporosis */}
          <Pressable onPress={() => ""}>
            <View style={{ flexDirection: "column", alignItems: "center",  flexGrow: 1 }}>
              <View style={styles.CircularButton}>
                <Image source={require("@/assets/osteoporosi.png")} />
              </View>
              <Text> Diabetes </Text>
            </View>
          </Pressable>

          {/* Cardiovascular Disease */}
          <Pressable onPress={() => ""}>
            <View style={{ flexDirection: "column", alignItems: "center",  flexGrow: 1 }}>
              <View style={styles.CircularButton}>
                <Image source={require("@/assets/cardio.png")} />
              </View>
              <Text> Cardio disease </Text>
            </View>
          </Pressable>

          {/* Gastroesophageal Reflux Disease */}
          <Pressable onPress={() => ""}>
            <View style={{ flexDirection: "column", alignItems: "center",  flexGrow: 1 }}>
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
    flexGrow: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
   // height: 100,
   marginBottom: 35
   
  },

  container: {
    flexGrow: 1,
    padding: 16,
    backgroundColor: "#fff",
    
  },
  mealContainer: {
    marginBottom: 15,
    flexGrow: 1,
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
    header: {
   
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
});

export default NutritionProfileScreen;
