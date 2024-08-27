import React from "react";
import {
  View,
  StyleSheet,
  ScrollView,
  Text,
  TouchableOpacity,
  Image,
  Platform,
  Dimensions,
  Alert,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import FoodRing from "../components/FoodRing";
import COLORS from "../constants/colors";

const { width, height } = Dimensions.get("window");

const FoodInfoPage = ({ navigation, route }) => {
  const backbtnclicked = () => {
    navigation.goBack();
  };

  const nutiritonreportclicked = () => {
    navigation.navigate("FullNutrition", {
      nutrients,
      name,
      servingSize,
      dailyIntakePercentage,
    });
  };

  const addBtnClicked = () => {
    if (nutrients.carbs > 60 && conditionData == "Diabetes") {
      Alert.alert(
        "High Sugar Alert!!!",
        "You have selected a food with high sugar which is not ideal for diabetes! Are you sure you want to add?",
        [
          {
            text: "No",
            onPress: () => console.log("No Pressed"),
            style: "cancel",
          },
          {
            text: "Yes",
            onPress: () => {
              const foodItem = {
                name,
                brand,
                calories: nutrients.calories,
                carbs: nutrients.carbs,
                fats: nutrients.fats,
                proteins: nutrients.proteins,
                conditionData,
              };
              navigation.navigate("Home", {
                selectedFood: {
                  mealType,
                  food: foodItem,
                },
              });
            },
          },
        ]
      );
    } else {
      const foodItem = {
        name,
        brand,
        ingredients,
        calories: nutrients.calories,
        carbs: nutrients.carbs,
        fats: nutrients.fats,
        proteins: nutrients.proteins,
      };
      navigation.navigate("Home", {
        selectedFood: {
          mealType,
          food: foodItem,
        },
      });
    }
  };

  const {
    name,
    imagei,
    nutrients,
    ingredients,
    brand,
    servingSize,
    mealType,
    conditionData,
  } = route.params;
  console.log("Condition:", conditionData);
  console.log("Brand in FoodInfoPage:", brand);

  const totalMacros = nutrients.fats + nutrients.proteins + nutrients.carbs;
  const proteinPercentage = (nutrients.proteins / totalMacros) * 100;
  const fatPercentage = (nutrients.fats / totalMacros) * 100;
  const carbPercentage = (nutrients.carbs / totalMacros) * 100;
  const dailyIntakePercentage = Math.round((nutrients.calories / 2000) * 100);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerRow}>
          <TouchableOpacity style={styles.button} onPress={backbtnclicked}>
            <Text style={styles.buttonText}>Back</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonAdd} onPress={addBtnClicked}>
            <Text style={styles.buttonText}>Add</Text>
          </TouchableOpacity>
        </View>
      </View>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <View style={styles.row}>
          <Image source={{ uri: imagei }} style={styles.image} />
          <View style={styles.titleContainer}>
            <Text style={styles.Title}>{name}</Text>
            {brand && <Text style={styles.brandText}>{brand}</Text>}
          </View>
        </View>
        <View style={styles.contentContainer}>
          <View style={styles.border} />
          <View style={styles.row}>
            <View style={styles.leftContent}>
              <Text style={styles.titlepref}>Daily Intake</Text>
              <Text>{dailyIntakePercentage}%</Text>
            </View>
            <View style={styles.middleContent}>
              <FoodRing
                proteinPercentage={proteinPercentage}
                fatPercentage={fatPercentage}
                carbPercentage={carbPercentage}
              />
            </View>
            <View style={styles.rightContent}>
              <View style={styles.macroContainer}>
                <View
                  style={[styles.macroCircle, { backgroundColor: "#a410fe" }]}
                />
                <Text>Protein: {proteinPercentage.toFixed(0)}%</Text>
              </View>
              <View style={styles.macroContainer}>
                <View
                  style={[styles.macroCircle, { backgroundColor: "#f7bf05" }]}
                />
                <Text>Fat: {fatPercentage.toFixed(0)}%</Text>
              </View>
              <View style={styles.macroContainer}>
                <View
                  style={[styles.macroCircle, { backgroundColor: "#27d8ef" }]}
                />
                <Text>Carbs: {carbPercentage.toFixed(0)}%</Text>
              </View>
            </View>
          </View>
          <View style={styles.border} />

          <View style={styles.titleleft}>
            <Text style={styles.titlepref}>Nutrition</Text>
            <View style={styles.nutrientContainer}>
              <View style={styles.row}>
                <Text style={styles.largeCaloriesText}>
                  {Math.round(nutrients.calories)} cal
                </Text>
                <Text style={styles.servingSizeText}>
                  Serving Size: ({servingSize}g)
                </Text>
              </View>

              <View style={styles.separator} />

              <View style={styles.nutritionInfo}>
                <View style={styles.nutrientRow}>
                  <Text style={styles.boldText}>Total Fat</Text>
                  <Text>{Math.round(nutrients.fats)}g</Text>
                </View>
                <View style={styles.subNutrientRow}>
                  <Text>Saturated Fat N/Ag</Text>
                </View>
                <View style={styles.separator} />
                <View style={styles.nutrientRow}>
                  <Text style={styles.boldText}>Cholesterol</Text>
                  <Text>N/A mg</Text>
                </View>
                <View style={styles.separator} />
                <View style={styles.nutrientRow}>
                  <Text style={styles.boldText}>Sodium</Text>
                  <Text>N/A mg</Text>
                </View>
                <View style={styles.separator} />
                <View style={styles.nutrientRow}>
                  <Text style={styles.boldText}>Total Carbohydrate</Text>
                  <Text>{Math.round(nutrients.carbs)}g</Text>
                </View>
                <View style={styles.subNutrientRow}>
                  <Text>Dietary Fiber {Math.round(nutrients.fibers)}g</Text>
                </View>
                <View style={styles.subNutrientRow}>
                  <Text>Sugars {nutrients.sugars}g</Text>
                </View>
                <View style={styles.separator} />
                <View style={styles.nutrientRow}>
                  <Text style={styles.boldText}>Protein</Text>
                  <Text>{Math.round(nutrients.proteins)}g</Text>
                </View>
              </View>
            </View>
            <TouchableOpacity
              style={styles.fullNutritionBtn}
              onPress={nutiritonreportclicked}
            >
              <Text style={styles.nutritionBtnText}>
                View Full Nutrition Label
              </Text>
            </TouchableOpacity>
          </View>

          <View style={styles.border} />
          <View style={styles.titleleft}>
            <Text style={styles.titlepref}>Ingredients</Text>
          </View>
          <View style={styles.ingredientsContainer}>
            {ingredients && ingredients.length > 0 ? (
              <Text style={styles.ingredientText}>
                {ingredients.join(", ")}
              </Text>
            ) : (
              <Text>No ingredients available</Text>
            )}
          </View>
          <View style={styles.border} />
        </View>
        <View style={styles.spacer} />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  header: {
    backgroundColor: "#007260",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    height: height * 0.12,
    paddingHorizontal: width * 0.05,
    paddingTop: Platform.OS === "web" ? 20 : 40,
  },
  headerRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
  },
  button: {
    padding: 10,
    width: width * 0.18,
    height: height * 0.07,
  },
  buttonText: {
    color: "white",
    fontSize: Platform.OS == "web" ? width * 0.03 : width * 0.05,
  },
  boldText: {
    fontWeight: "bold",
  },
  buttonAdd: {
    padding: 10,
    width: width * 0.18,
    height: height * 0.07,
  },
  scrollViewContent: {
    paddingHorizontal: width * 0.05,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: height * 0.01,
    marginTop: height * 0.02,
  },
  image: {
    width: Platform.OS == "web" ? width * 0.125 : width * 0.25,
    height: Platform.OS == "web" ? width * 0.125 : width * 0.25,
    borderRadius: 10,
    resizeMode: "contain",
  },
  titleContainer: {
    flex: 1,
    marginLeft: width * 0.05,
  },
  Title: {
    fontSize: Platform.OS == "web" ? width * 0.035 : width * 0.07,
    fontWeight: "bold",
  },
  brandText: {
    fontSize: Platform.OS == "web" ? width * 0.0225 : width * 0.045,
    color: "grey",
    marginTop: 5,
  },
  contentContainer: {
    paddingHorizontal: width * 0.05,
  },
  titleleft: {
    alignSelf: "flex-start",
    marginBottom: height * 0.02,
  },
  nutrientContainer: {
    padding: height * 0.025,
    backgroundColor: "#f9f9f9",
    borderRadius: 10,
    marginTop: height * 0.02,
    width: "90%",
    alignSelf: "center",
    maxWidth: 360,
  },
  largeCaloriesText: {
    fontSize: Platform.OS == "web" ? width * 0.035 : width * 0.07,
    fontWeight: "bold",
    marginRight: 10,
  },

  servingSizeText: {
    fontSize: Platform.OS == "web" ? width * 0.02 : width * 0.045,
    fontWeight: "bold",
    marginLeft: 10,
    marginTop: height * 0.01,
  },
  separator: {
    height: 1,
    backgroundColor: "#ccc",
    marginVertical: height * 0.015,
  },
  nutrientRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: height * 0.005,
  },
  subNutrientRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginLeft: width * 0.05,
  },
  macroContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: height * 0.015,
  },
  macroCircle: {
    width: height * 0.015,
    height: height * 0.015,
    borderRadius: height * 0.0075,
    marginRight: 6,
  },
  fullNutritionBtn: {
    marginTop: height * 0.02,
  },
  nutritionBtnText: {
    color: "grey",
    fontSize: Platform.OS == "web" ? width * 0.025 : width * 0.05,
    textDecorationLine: "underline",
  },
  ingredientsContainer: {
    marginTop: height * 0.02,
  },
  ingredientText: {
    fontSize: Platform.OS == "web" ? width * 0.0225 : width * 0.045,
    marginBottom: height * 0.01,
  },
  border: {
    height: 1,
    backgroundColor: "#cbcbcb",
    marginVertical: height * 0.025,
    width: "100%",
  },
  spacer: {
    height: height * 0.1,
  },
  titlepref: {
    color: "black",
    fontWeight: "bold",
    marginBottom: Platform.OS == "web" ? width * 0.0075 : width * 0.015,
    fontSize: Platform.OS == "web" ? width * 0.0225 : width * 0.045,
  },
});

export default FoodInfoPage;
