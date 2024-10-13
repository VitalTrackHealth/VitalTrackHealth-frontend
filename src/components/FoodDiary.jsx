import { View, Text } from "react-native";

import { createStyles, margin, fonts, colors, padding } from "@/styles";
import { FoodCard } from "@/components";

const styles = createStyles({
  container: {
    flex: 1,
  },
  foodCard: {
    backgroundColor: colors.lightNeutral.lightest,
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
});

const FoodDiary = ({ onItemPress }) => {
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
          <FoodCard
            entry={entry}
            cardStyle={styles.foodCard}
            onPress={onItemPress}
          />
        </View>
      ))}
    </View>
  );
};

export default FoodDiary;
