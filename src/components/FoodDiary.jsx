import { View, Text } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import { createStyles, margin, fonts, colors, padding } from "@/styles";
import { Card } from "@/components";

const styles = createStyles({
  container: {
    flex: 1,
  },
  entryContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: margin.md,
  },
  timeContainer: {
    width: 60,
    marginLeft: margin.md,
  },
  timeText: {
    fontSize: fonts.md,
  },
  timelineContainer: {
    width: 20,
    alignItems: "center",
    marginHorizontal: margin.sm,
  },
  timelineDot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: colors.lightNeutral.dark,
  },
  timelineLine: {
    width: 2,
    flex: 1,
    backgroundColor: colors.lightNeutral.dark,
  },
  card: {
    flex: 1,
    backgroundColor: colors.lightNeutral.lightest,
    paddingVertical: padding.sm,
    paddingHorizontal: padding.lg,
  },
  cardContent: {
    flexDirection: "row",
    alignItems: "center",
  },
  icon: {
    marginRight: margin.md,
  },
  foodInfo: {
    flex: 1,
  },
  foodName: {
    fontSize: fonts.lg,
    fontWeight: "bold",
    color: colors.lightNeutral.dark,
  },
  macrosContainer: {
    flexDirection: "row",
  },
  macroText: {
    fontSize: fonts.md,
    color: colors.lightNeutral.medium,
  },
});

const FoodDiary = () => {
  const foodEntries = [
    {
      time: "08:00",
      name: "Oatmeal",
      macros: {
        calories: 200,
        protein: 10,
        carbs: 20,
        fat: 5,
      },
      weight: 250,
      icon: "food-variant",
    },
    {
      time: "12:30",
      name: "Chicken Salad",
      macros: {
        calories: 250,
        protein: 21,
        carbs: 10,
        fat: 14,
      },
      weight: 414,
      icon: "food-variant",
    },
    {
      time: "16:00",
      name: "Apple",
      macros: {
        calories: 104,
        protein: 1,
        carbs: 25,
        fat: 0,
      },
      weight: 216,
      icon: "food-apple",
    },
    {
      time: "19:00",
      name: "Salmon",
      macros: {
        calories: 379,
        protein: 61,
        carbs: 0,
        fat: 19,
      },
      weight: 248,
      icon: "food-steak",
    },
  ];

  return (
    <View style={styles.container}>
      {foodEntries.map((entry, index) => (
        <View key={index} style={styles.entryContainer}>
          <View style={styles.timeContainer}>
            <Text style={styles.timeText}>{entry.time}</Text>
          </View>
          <View style={styles.timelineContainer}>
            <View style={styles.timelineDot} />
            {index < foodEntries.length - 1 && (
              <View style={styles.timelineLine} />
            )}
          </View>
          <Card style={styles.card}>
            <View style={styles.cardContent}>
              <MaterialCommunityIcons
                name={entry.icon}
                size={fonts.xl}
                color={colors.primary}
                style={styles.icon}
              />
              <View style={styles.foodInfo}>
                <Text style={styles.foodName}>{entry.name}</Text>
                <View style={styles.macrosContainer}>
                  <Text style={styles.macroText}>
                    {entry.macros.calories}kcal{"  "}
                    {entry.macros.protein}P{"  "}
                    {entry.macros.carbs}C{"  "}
                    {entry.macros.fat}F | {entry.weight}g
                  </Text>
                </View>
              </View>
            </View>
          </Card>
        </View>
      ))}
    </View>
  );
};

export default FoodDiary;
