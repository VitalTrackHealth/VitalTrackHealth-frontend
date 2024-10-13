import { View, ScrollView, Text, TouchableOpacity } from "react-native";
import { colors, createStyles } from "@/styles";

const styles = createStyles({
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

const FoodNutritionCard = ({ foodItem }) => {
  const dummyFoodItem = {
    name: "Chicken Breast",
    weight: 100,
    macros: {
      calories: 165,
      protein: 31,
      carbs: 0,
      fat: 3.6,
    },
  };

  const { name, weight, macros } = dummyFoodItem;

  return (
    <ScrollView>
      <View style={styles.spacer}></View>
      <View style={styles.nutritionLabel}>
        <Text style={styles.labelTitle}>Nutrition Facts</Text>
        <View style={styles.separator} />
        <Text style={styles.servingSize}>Serving Size: {weight}g</Text>
        <View style={styles.separator} />
        <View style={styles.section}>
          <Text style={styles.boldText}>Amount Per Serving</Text>
        </View>
        <View style={styles.separator} />
        <View style={styles.section}>
          <Text style={styles.boldText}>Calories</Text>
          <Text style={styles.largeText}>{Math.round(macros.calories)}</Text>
        </View>
        <View style={styles.separator} />
        <View style={styles.rightsection}>
          <Text style={styles.boldText}>% Daily Value*</Text>
        </View>
        <View style={styles.nutrientRow}>
          <Text style={styles.boldText}>Total Fat</Text>
          <Text>{Math.round(macros.fat)}g</Text>
          <Text>{Math.round((macros.fat / 78) * 100)}%</Text>
        </View>
        <View style={styles.subNutrientRow}>
          <Text>Saturated Fat 1g</Text>
          <Text>5%</Text>
        </View>
        <View style={styles.subNutrientRow}>
          <Text>Trans Fat 0g</Text>
        </View>
        <View style={styles.separator} />
        <View style={styles.nutrientRow}>
          <Text style={styles.boldText}>Cholesterol</Text>
          <Text>85mg</Text>
          <Text>28%</Text>
        </View>
        <View style={styles.separator} />
        <View style={styles.nutrientRow}>
          <Text style={styles.boldText}>Sodium</Text>
          <Text>74mg</Text>
          <Text>3%</Text>
        </View>
        <View style={styles.separator} />
        <View style={styles.nutrientRow}>
          <Text style={styles.boldText}>Total Carbohydrate</Text>
          <Text>{Math.round(macros.carbs)}g</Text>
          <Text>{Math.round((macros.carbs / 275) * 100)}%</Text>
        </View>
        <View style={styles.subNutrientRow}>
          <Text>Dietary Fiber 0g</Text>
          <Text>0%</Text>
        </View>
        <View style={styles.subNutrientRow}>
          <Text>Sugars 0g</Text>
        </View>
        <View style={styles.separator} />
        <View style={styles.nutrientRow}>
          <Text style={styles.boldText}>Protein</Text>
          <Text>{Math.round(macros.protein)}g</Text>
          <Text>{Math.round((macros.protein / 50) * 100)}%</Text>
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

export default FoodNutritionCard;
