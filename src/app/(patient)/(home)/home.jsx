import { useState, useEffect } from "react";
import { View, Text } from "react-native";
import { router } from "expo-router";

import {
  Button,
  Card,
  TextHeader,
  Page,
  CalorieRing,
  PageCell,
  ProgressBar,
  FoodDiary,
  DateScroller,
} from "@/components";
import { createStyles, fonts, colors, padding } from "@/styles";
import { useUser, useSession } from "@/context";
import { fetchFoodItems } from "@/services";

const HomeScreen = () => {
  const { user } = useUser();
  console.log(user);
  const { session } = useSession();
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [foodItems, setFoodItems] = useState([]);

  const [consumedMacros, setConsumedMacros] = useState({
    calories: 0,
    protein: 0,
    fat: 0,
    carbs: 0,
  });
  const [goalMacros, setGoalMacros] = useState({
    calories: user.nutritionGoals?.calorie || 2000,
    protein: user.nutritionGoals?.protein || 180,
    fat: user.nutritionGoals?.fat || 70,
    carbs: user.nutritionGoals?.carbs || 150,
  });

  useEffect(() => {
    const timeOptions = {
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    };

    fetchFoodItems(session).then((response) => {
      if (response.success) {
        const formattedFoodItems = [];
        let totalCalories = 0;
        let totalProtein = 0;
        let totalFat = 0;
        let totalCarbs = 0;

        for (const item of response.results.data) {
          const newItem = {
            label: item.food_name,
            foodId: item.food_id,
            serving: item.details.serving_size,
            nutrients: {
              CALORIES: item.details.calories,
              PROTEIN: item.details.protein,
              CARBOHYDRATE: item.details.carbohydrates,
              FAT: item.details.fat,
            },
            time: new Date(item.added_at * 1000).toLocaleTimeString(
              "en-US",
              timeOptions
            ),
          };
          formattedFoodItems.push(newItem);

          totalCalories += Math.round(newItem.nutrients.CALORIES);
          totalProtein += Math.round(newItem.nutrients.PROTEIN);
          totalFat += Math.round(newItem.nutrients.FAT);
          totalCarbs += Math.round(newItem.nutrients.CARBOHYDRATE);
        }
        setFoodItems(formattedFoodItems);
        setConsumedMacros({
          calories: totalCalories,
          protein: totalProtein,
          fat: totalFat,
          carbs: totalCarbs,
        });
      }
    });
  }, [selectedDate]);

  const handleDateChange = (date) => {
    setSelectedDate(date);
    // Here you would typically fetch data for the selected date
    console.log("Selected date:", date);
  };

  const handleAddEntry = () => {
    router.push("/food/search-food");
  };

  const handleEdit = () => {
    console.log("Edit pressed");
  };

  const handleFoodItemPress = (item) => {
    router.push({
      pathname: "/food/food-details",
      params: {
        foodName: item.label,
        foodId: item.food_id,
        calories: item.nutrients.CALORIES,
        protein: item.nutrients.PROTEIN,
        carbohydrates: item.nutrients.CARBOHYDRATE,
        fat: item.nutrients.FAT,
        servingSize: item.serving,
      },
    });
  };

  return (
    <Page>
      <View style={styles.dateContainer}>
        <DateScroller onDateChange={handleDateChange} />
      </View>
      <PageCell>
        <TextHeader text="Overview" textStyle={styles.cellHeader} />
        <Card>
          <View style={styles.caloriesReportContainer}>
            <View style={styles.calorieTextContainer}>
              <Text style={styles.calorieNumber}>
                {goalMacros.calories - consumedMacros.calories}
              </Text>
              <Text style={styles.calorieText}>Remaining</Text>
            </View>
            <CalorieRing
              totalCalories={goalMacros.calories}
              consumedCalories={consumedMacros.calories}
            />
            <View style={styles.calorieTextContainer}>
              <Text style={styles.calorieNumber}>{goalMacros.calories}</Text>
              <Text style={styles.calorieText}>Target</Text>
            </View>
          </View>
          <View style={styles.macrosContainer}>
            <View style={styles.macroItem}>
              <Text style={styles.macroText}>Protein</Text>
              <ProgressBar
                progress={(consumedMacros.protein / goalMacros.protein) * 100}
                fillerColor={colors.red.light}
              />
              <Text style={styles.macroNumber}>
                {consumedMacros.protein} / {goalMacros.protein}g
              </Text>
            </View>
            <View style={styles.macroItem}>
              <Text style={styles.macroText}>Fat</Text>
              <ProgressBar
                progress={(consumedMacros.fat / goalMacros.fat) * 100}
                fillerColor={colors.yellow.light}
              />
              <Text style={styles.macroNumber}>
                {consumedMacros.fat} / {goalMacros.fat}g
              </Text>
            </View>
            <View style={styles.macroItem}>
              <Text style={styles.macroText}>Carbs</Text>
              <ProgressBar
                progress={(consumedMacros.carbs / goalMacros.carbs) * 100}
                fillerColor={colors.blue.light}
              />
              <Text style={styles.macroNumber}>
                {consumedMacros.carbs} / {goalMacros.carbs}g
              </Text>
            </View>
          </View>
        </Card>
      </PageCell>
      <PageCell>
        <TextHeader text="Food" textStyle={styles.cellHeader} />
        <Card>
          <View style={styles.buttonContainer}>
            <Button text="Add Entry" onPress={handleAddEntry} />
            <Button text="Edit" variant="outlined" onPress={handleEdit} />
          </View>
          {foodItems.length > 0 && (
            <View style={styles.foodDiaryContainer}>
              <FoodDiary
                foodItems={foodItems}
                onItemPress={handleFoodItemPress}
              />
            </View>
          )}
        </Card>
      </PageCell>
    </Page>
  );
};

const styles = createStyles({
  dateContainer: {
    width: "30%",
  },
  cellHeader: {
    color: colors.lightNeutral.darkest,
    fontSize: fonts.xl,
    textAlign: "left",
  },
  caloriesReportContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  calorieTextContainer: {
    alignItems: "center",
    width: "30%",
  },
  calorieNumber: {
    fontSize: fonts.lg,
    color: colors.primary,
  },
  calorieText: {
    fontSize: fonts.md,
  },
  macrosContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: padding.lg,
  },
  macroItem: {
    width: "30%",
  },
  macroText: {
    fontSize: fonts.md,
    color: colors.lightNeutral.dark,
    marginBottom: padding.sm,
  },
  macroNumber: {
    fontSize: fonts.md,
    fontWeight: "bold",
    color: colors.lightNeutral.darkest,
    marginTop: padding.sm,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  foodDiaryContainer: {
    marginTop: padding.lg,
  },
});

export default HomeScreen;
