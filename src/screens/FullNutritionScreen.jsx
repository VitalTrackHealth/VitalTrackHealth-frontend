import React from "react";
import {
  View,
  StyleSheet,
  ScrollView,
  Text,
  TouchableOpacity,
} from "react-native";
import { colors } from "src/styles";

const FullNutritionScreen = ({ navigation, route }) => {
  const backbtnclicked = () => {
    navigation.goBack();
  };

  const { nutrients, name, servingSize, dailyIntakePercentage } = route.params;

  return (
    <ScrollView>
      <View style={styles.header}>
        <TouchableOpacity style={styles.button} onPress={backbtnclicked}>
          <Text style={styles.buttonText}>Back</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.spacer}></View>
      <View style={styles.nutritionLabel}>
        <Text style={styles.labelTitle}>Nutrition Facts</Text>
        <View style={styles.separator} />
        <Text style={styles.servingSize}>Serving Size: {servingSize}g</Text>
        <View style={styles.separator} />
        <View style={styles.section}>
          <Text style={styles.boldText}>Amount Per Serving</Text>
        </View>
        <View style={styles.separator} />
        <View style={styles.section}>
          <Text style={styles.boldText}>Calories</Text>
          <Text style={styles.largeText}>{Math.round(nutrients.calories)}</Text>
        </View>
        <View style={styles.separator} />
        <View style={styles.rightsection}>
          <Text style={styles.boldText}>% Daily Value*</Text>
        </View>
        <View style={styles.nutrientRow}>
          <Text style={styles.boldText}>Total Fat</Text>
          <Text>{Math.round(nutrients.fats)}g</Text>
          <Text>{Math.round((nutrients.fats / 78) * 100)}%</Text>
        </View>
        <View style={styles.subNutrientRow}>
          <Text>Saturated Fat 0g</Text>
          <Text>0%</Text>
        </View>
        <View style={styles.subNutrientRow}>
          <Text>Monounsaturated Fat 0g</Text>
        </View>
        <View style={styles.subNutrientRow}>
          <Text>Polyunsaturated Fat 0g</Text>
        </View>
        <View style={styles.subNutrientRow}>
          <Text>Trans Fat 0g</Text>
        </View>
        <View style={styles.separator} />
        <View style={styles.nutrientRow}>
          <Text style={styles.boldText}>Cholesterol</Text>
          <Text>0mg</Text>
          <Text>0%</Text>
        </View>
        <View style={styles.separator} />
        <View style={styles.nutrientRow}>
          <Text style={styles.boldText}>Sodium</Text>
          <Text> 0mg</Text>
          <Text>0%</Text>
        </View>
        <View style={styles.separator} />
        <View style={styles.nutrientRow}>
          <Text style={styles.boldText}>Total Carbohydrate</Text>
          <Text>{Math.round(nutrients.carbs)}g</Text>
          <Text>{Math.round((nutrients.carbs / 275) * 100)}%</Text>
        </View>
        <View style={styles.subNutrientRow}>
          <Text>Dietary Fiber {Math.round(nutrients.fibers)}g</Text>
          <Text>{Math.round((nutrients.fibers / 28) * 100)}%</Text>
        </View>
        <View style={styles.subNutrientRow}>
          <Text>Sugars 0g</Text>
        </View>
        <View style={styles.subNutrientRow}>
          <Text>Sugar Alcohols 0g</Text>
        </View>
        <View style={styles.separator} />
        <View style={styles.nutrientRow}>
          <Text style={styles.boldText}>Protein</Text>
          <Text> {Math.round(nutrients.proteins)}g</Text>
          <Text>{Math.round((nutrients.proteins / 50) * 100)}%</Text>
        </View>
        <View style={styles.separator} />

        <View style={styles.nutrientRow}>
          <Text style={styles.boldText}>Vitamin A</Text>
          <Text>n/a</Text>
        </View>
        <View style={styles.nutrientRow}>
          <Text style={styles.boldText}>Vitamin C</Text>
          <Text>n/a</Text>
        </View>
        <View style={styles.nutrientRow}>
          <Text style={styles.boldText}>Calcium</Text>
          <Text>n/a</Text>
        </View>
        <View style={styles.nutrientRow}>
          <Text style={styles.boldText}>Iron</Text>
          <Text>n/a</Text>
        </View>
        <View style={styles.nutrientRow}>
          <Text style={styles.boldText}>Vitamin D</Text>
          <Text>n/a</Text>
        </View>
        <View style={styles.nutrientRow}>
          <Text style={styles.boldText}>Vitamin E</Text>
          <Text>n/a</Text>
        </View>
        <View style={styles.nutrientRow}>
          <Text style={styles.boldText}>Vitamin K</Text>
          <Text>n/a</Text>
        </View>
        <View style={styles.nutrientRow}>
          <Text style={styles.boldText}>Vitamin B-12</Text>
          <Text>n/a</Text>
        </View>
        <View style={styles.nutrientRow}>
          <Text style={styles.boldText}>Vitamin B-6</Text>
          <Text>n/a</Text>
        </View>
        <View style={styles.nutrientRow}>
          <Text style={styles.boldText}>Folate, DFE</Text>
          <Text>n/a</Text>
        </View>
        <View style={styles.nutrientRow}>
          <Text style={styles.boldText}>Folate, Food</Text>
          <Text>n/a</Text>
        </View>
        <View style={styles.nutrientRow}>
          <Text style={styles.boldText}>Folic Acid</Text>
          <Text>n/a</Text>
        </View>
        <View style={styles.nutrientRow}>
          <Text style={styles.boldText}>Magnesium</Text>
          <Text>n/a</Text>
        </View>
        <View style={styles.nutrientRow}>
          <Text style={styles.boldText}>Niacin</Text>
          <Text>n/a</Text>
        </View>
        <View style={styles.nutrientRow}>
          <Text style={styles.boldText}>Phosphorus</Text>
          <Text>n/a</Text>
        </View>
        <View style={styles.nutrientRow}>
          <Text style={styles.boldText}>Potassium</Text>
          <Text>n/a</Text>
        </View>
        <View style={styles.nutrientRow}>
          <Text style={styles.boldText}>Riboflavin</Text>
          <Text>n/a</Text>
        </View>
        <View style={styles.nutrientRow}>
          <Text style={styles.boldText}>Thiamin</Text>
          <Text>n/a</Text>
        </View>
        <View style={styles.nutrientRow}>
          <Text style={styles.boldText}>Zinc</Text>
          <Text>n/a</Text>
        </View>
        <View style={styles.nutrientRow}>
          <Text style={styles.boldText}>Caffeine</Text>
          <Text>n/a</Text>
        </View>

        <View style={styles.separator} />
        <Text style={styles.note}>
          *Percent Daily Values are based on a 2,000 calorie diet.
        </Text>
      </View>
      <View style={styles.spacer} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: colors.primary,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    height: "auto",
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
  nutritionLabel: {
    width: "90%",
    padding: 10,
    backgroundColor: "#fff",
    borderColor: "#000",
    borderWidth: 1,
    borderRadius: 5,
    alignSelf: "center",
    MarginTop: 100,
    marginBottom: 20,
  },
  labelTitle: {
    fontSize: 24,
    fontWeight: "bold",
  },
  spacer: {
    height: 1,
    backgroundColor: "transparent",
    marginVertical: 10,
  },
  separator: {
    height: 1,
    backgroundColor: "#000",
    marginVertical: 5,
  },
  servingSize: {
    fontSize: 16,
  },
  section: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  rightsection: {
    flexDirection: "row",
    justifyContent: "end",
  },
  boldText: {
    fontWeight: "bold",
  },
  largeText: {
    fontSize: 18,
    fontWeight: "bold",
  },
  nutrientRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 2,
  },
  subNutrientRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginLeft: 20,
  },
  note: {
    fontSize: 12,
    marginTop: 10,
  },
  border: {
    marginTop: 50,
    width: "95%",
    borderBottomWidth: 1,
    borderBottomColor: "#cbcbcb",
  },
});

export default FullNutritionScreen;
