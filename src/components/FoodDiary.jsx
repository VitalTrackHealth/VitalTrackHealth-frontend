import { View, Text } from "react-native";

import { createStyles, margin, fonts, colors } from "@/styles";
import FoodCard from "@/components/FoodCard";

const FoodDiary = ({ foodItems, onItemPress, onDelete }) => {
  const formattedTime = (time) => {
    return time.toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    });
  };

  return (
    <View style={styles.container}>
      {foodItems.map((item, index) => (
        <View key={index} style={styles.entryContainer}>
          <View style={styles.timeContainer}>
            <Text style={styles.timeText}>{formattedTime(item.time)}</Text>
          </View>
          <View style={styles.timelineContainer}>
            <View style={styles.timelineDot} />
            {index < foodItems.length - 1 && (
              <View style={styles.timelineLine} />
            )}
          </View>
          <FoodCard
            foodItem={item}
            cardStyle={styles.foodCard}
            onPress={onItemPress}
            onDelete={onDelete}
          />
        </View>
      ))}
    </View>
  );
};

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
    width: 80,
    marginLeft: margin.sm,
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

export default FoodDiary;
