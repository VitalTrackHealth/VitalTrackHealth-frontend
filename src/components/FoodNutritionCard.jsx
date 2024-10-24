import { useState, useEffect } from "react";
import { View, ScrollView, Text } from "react-native";

import { createStyles } from "@/styles";

const FoodNutritionCard = ({ foodItem, servingSize }) => {
  const [nutrients, setNutrients] = useState({});

  useEffect(() => {
    if (Object.keys(foodItem).length === 0) return;

    const adjustedNutrients = {};
    for (const [key, value] of Object.entries(foodItem.nutrients)) {
      adjustedNutrients[key] = (value / 100) * servingSize;
    }
    setNutrients(adjustedNutrients);
  }, [foodItem, servingSize]);

  return (
    <ScrollView>
      <View style={styles.spacer}></View>
      <View style={styles.nutritionLabel}>
        <Text style={styles.labelTitle}>Nutrition Facts</Text>
        <View style={styles.separator} />
        <Text style={styles.servingSize}>
          Serving Size: {Math.round(servingSize) || 0}g
        </Text>
        <View style={styles.separator} />
        <View style={styles.section}>
          <Text style={styles.boldText}>Amount Per Serving: 1</Text>
        </View>
        <View style={styles.separator} />
        <View style={styles.section}>
          <Text style={styles.boldText}>Calories</Text>
          <Text style={styles.largeText}>
            {Math.round(nutrients?.CALORIES) || 0}
          </Text>
        </View>
        <View style={styles.separator} />
        <View style={styles.rightsection}>
          <Text style={styles.boldText}>% Daily Value*</Text>
        </View>
        <View style={styles.nutrientRow}>
          <View style={styles.leftNutrientRowSection}>
            <Text style={styles.boldText}>Total Fat </Text>
            <Text>{Math.round(nutrients?.FAT) || 0}g</Text>
          </View>
          <Text>{Math.round((nutrients?.FAT / 78) * 100) || 0}%</Text>
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
          <View style={styles.leftNutrientRowSection}>
            <Text style={styles.boldText}>Cholesterol </Text>
            <Text>{Math.round(nutrients?.CHOLESTEROL) || 0}mg</Text>
          </View>
          <Text>28%</Text>
        </View>
        <View style={styles.separator} />
        <View style={styles.nutrientRow}>
          <View style={styles.leftNutrientRowSection}>
            <Text style={styles.boldText}>Sodium </Text>
            <Text>{Math.round(nutrients?.SODIUM) || 0}mg</Text>
          </View>
          <Text>3%</Text>
        </View>
        <View style={styles.separator} />
        <View style={styles.nutrientRow}>
          <View style={styles.leftNutrientRowSection}>
            <Text style={styles.boldText}>Total Carbohydrate </Text>
            <Text>{Math.round(nutrients?.CARBOHYDRATE) || 0}g</Text>
          </View>
          <Text>{Math.round((nutrients?.CARBOHYDRATE / 275) * 100) || 0}%</Text>
        </View>
        <View style={styles.subNutrientRow}>
          <Text>Dietary Fiber {Math.round(nutrients?.FIBER) || 0}g</Text>
          <Text>0%</Text>
        </View>
        <View style={styles.subNutrientRow}>
          <Text>Sugars {Math.round(nutrients?.SUGARS) || 0}g</Text>
        </View>
        <View style={styles.separator} />
        <View style={styles.nutrientRow}>
          <View style={styles.leftNutrientRowSection}>
            <Text style={styles.boldText}>Protein </Text>
            <Text>{Math.round(nutrients?.PROTEIN) || 0}g</Text>
          </View>
          <Text>{Math.round((nutrients?.PROTEIN / 50) * 100) || 0}%</Text>
        </View>
        <View style={styles.separator} />

        <View style={styles.nutrientRow}>
          <Text style={styles.boldText}>Vitamin A</Text>
          <Text>{Math.round(nutrients?.VITAMIN_A) || 0}</Text>
        </View>
        <View style={styles.nutrientRow}>
          <Text style={styles.boldText}>Vitamin C</Text>
          <Text>{Math.round(nutrients?.VITAMIN_C) || 0}</Text>
        </View>
        <View style={styles.nutrientRow}>
          <Text style={styles.boldText}>Calcium</Text>
          <Text>{Math.round(nutrients?.CALCIUM) || 0}</Text>
        </View>
        <View style={styles.nutrientRow}>
          <Text style={styles.boldText}>Iron</Text>
          <Text>{Math.round(nutrients?.IRON) || 0}</Text>
        </View>
        <View style={styles.nutrientRow}>
          <Text style={styles.boldText}>Vitamin D</Text>
          <Text>{Math.round(nutrients?.VITAMIN_D) || 0}</Text>
        </View>
        <View style={styles.nutrientRow}>
          <Text style={styles.boldText}>Vitamin E</Text>
          <Text>{Math.round(nutrients?.VITAMIN_E) || 0}</Text>
        </View>
        <View style={styles.nutrientRow}>
          <Text style={styles.boldText}>Vitamin K</Text>
          <Text>{Math.round(nutrients?.VITAMIN_K) || 0}</Text>
        </View>
        <View style={styles.nutrientRow}>
          <Text style={styles.boldText}>Vitamin B-12</Text>
          <Text>{Math.round(nutrients?.VITAMIN_B12) || 0}</Text>
        </View>
        <View style={styles.nutrientRow}>
          <Text style={styles.boldText}>Vitamin B-6</Text>
          <Text>{Math.round(nutrients?.VITAMIN_B6) || 0}</Text>
        </View>
        <View style={styles.nutrientRow}>
          <Text style={styles.boldText}>Folate, DFE</Text>
          <Text>{Math.round(nutrients?.FOLATE_DFE) || 0}</Text>
        </View>
        <View style={styles.nutrientRow}>
          <Text style={styles.boldText}>Folate, Food</Text>
          <Text>{Math.round(nutrients?.FOLIC_ACID) || 0}</Text>
        </View>
        <View style={styles.nutrientRow}>
          <Text style={styles.boldText}>Folic Acid</Text>
          <Text>{Math.round(nutrients?.FOLIC_ACID) || 0}</Text>
        </View>
        <View style={styles.nutrientRow}>
          <Text style={styles.boldText}>Magnesium</Text>
          <Text>{Math.round(nutrients?.MAGNESIUM) || 0}</Text>
        </View>
        <View style={styles.nutrientRow}>
          <Text style={styles.boldText}>Niacin</Text>
          <Text>{Math.round(nutrients?.NIACIN) || 0}</Text>
        </View>
        <View style={styles.nutrientRow}>
          <Text style={styles.boldText}>Phosphorus</Text>
          <Text>{Math.round(nutrients?.PHOSPHORUS) || 0}</Text>
        </View>
        <View style={styles.nutrientRow}>
          <Text style={styles.boldText}>Potassium</Text>
          <Text>{Math.round(nutrients?.POTASSIUM) || 0}</Text>
        </View>
        <View style={styles.nutrientRow}>
          <Text style={styles.boldText}>Riboflavin</Text>
          <Text>{Math.round(nutrients?.RIBOFLAVIN) || 0}</Text>
        </View>
        <View style={styles.nutrientRow}>
          <Text style={styles.boldText}>Thiamin</Text>
          <Text>{Math.round(nutrients?.THIAMIN) || 0}</Text>
        </View>
        <View style={styles.nutrientRow}>
          <Text style={styles.boldText}>Zinc</Text>
          <Text>{Math.round(nutrients?.ZINC) || 0}</Text>
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
  leftNutrientRowSection: {
    flexDirection: "row",
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

export default FoodNutritionCard;
