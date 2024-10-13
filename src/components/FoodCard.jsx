import { View, Text, Pressable } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import { Card } from "@/components";
import { createStyles, fonts, colors, padding, margin } from "@/styles";

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

const FoodCard = ({ entry, cardStyle, onPress }) => {
  return (
    <Card style={[styles.card, cardStyle]}>
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
        <Pressable onPress={() => onPress(entry)}>
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

export default FoodCard;
