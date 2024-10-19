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
} from "@/components";
import { createStyles, fonts, colors, padding } from "@/styles";

const styles = createStyles({
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
    marginBottom: padding.lg,
    flexDirection: "row",
    justifyContent: "space-between",
  },
});

const HomeScreen = () => {
  const totalCalories = 2000;
  const consumedCalories = 1429;
  const remainingCalories = totalCalories - consumedCalories;

  const totalProtein = 180;
  const consumedProtein = 120;

  const totalFat = 70;
  const consumedFat = 40;

  const totalCarbs = 150;
  const consumedCarbs = 90;

  const handleAddEntry = () => {
    router.push("/food/search-food");
  };

  const handleEdit = () => {
    console.log("Edit pressed");
  };

  const handleFoodItemPress = (item) => {
    router.push({
      pathname: "/food/food-details",
      params: { foodItemName: item.name },
    });
  };

  return (
    <Page>
      <PageCell>
        <TextHeader text="Overview" textStyle={styles.cellHeader} />
        <Card>
          <View style={styles.caloriesReportContainer}>
            <View style={styles.calorieTextContainer}>
              <Text style={styles.calorieNumber}>{remainingCalories}</Text>
              <Text style={styles.calorieText}>Remaining</Text>
            </View>
            <CalorieRing
              totalCalories={totalCalories}
              consumedCalories={consumedCalories}
            />
            <View style={styles.calorieTextContainer}>
              <Text style={styles.calorieNumber}>{totalCalories}</Text>
              <Text style={styles.calorieText}>Target</Text>
            </View>
          </View>
          <View style={styles.macrosContainer}>
            <View style={styles.macroItem}>
              <Text style={styles.macroText}>Protein</Text>
              <ProgressBar
                progress={(consumedProtein / totalProtein) * 100}
                fillerColor={colors.red.light}
              />
              <Text style={styles.macroNumber}>
                {consumedProtein} / {totalProtein}g
              </Text>
            </View>
            <View style={styles.macroItem}>
              <Text style={styles.macroText}>Fat</Text>
              <ProgressBar
                progress={(consumedFat / totalFat) * 100}
                fillerColor={colors.yellow.light}
              />
              <Text style={styles.macroNumber}>
                {consumedFat} / {totalFat}g
              </Text>
            </View>
            <View style={styles.macroItem}>
              <Text style={styles.macroText}>Carbs</Text>
              <ProgressBar
                progress={(consumedCarbs / totalCarbs) * 100}
                fillerColor={colors.blue.light}
              />
              <Text style={styles.macroNumber}>
                {consumedCarbs} / {totalCarbs}g
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
          <FoodDiary onItemPress={handleFoodItemPress} />
        </Card>
      </PageCell>
    </Page>
  );
};

export default HomeScreen;
