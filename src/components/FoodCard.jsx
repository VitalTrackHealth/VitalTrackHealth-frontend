import { View, Text, Pressable } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import Card from "@/components/Card";
import { createStyles, fonts, colors, padding, margin } from "@/styles";

const FoodCard = ({ foodItem, cardStyle, onPress }) => {
  return (
    <Card style={[styles.card, cardStyle]}>
      <View style={styles.cardContent}>
        <MaterialCommunityIcons
          name={"food-variant"}
          size={fonts.xl}
          color={colors.primary}
          style={styles.icon}
        />
        <View style={styles.foodInfo}>
          <Text style={styles.foodName}>{foodItem.label}</Text>
          <View style={styles.macrosContainer}>
            <Text style={styles.macroText}>
              {Math.round(foodItem.nutrients.CALORIES)}kcal{"  "}
              {Math.round(foodItem.nutrients.PROTEIN)}P{"  "}
              {Math.round(foodItem.nutrients.CARBOHYDRATE)}C{"  "}
              {Math.round(foodItem.nutrients.FAT)}F |{"  "}
              {Math.round(foodItem.serving)}g
            </Text>
          </View>
        </View>
        <Pressable onPress={() => onPress(foodItem)}>
          <MaterialCommunityIcons
            name="chevron-right"
            size={fonts.lg}
            color={colors.lightNeutral.dark}
          />
        </Pressable>
      </View>
    </Card>
  );
};

const styles = createStyles({
  card: {
    flex: 1,
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

export default FoodCard;
