import { View, Text } from "react-native";
import PieChart from "react-native-pie-chart";

import { createStyles } from "@/styles";
import { colors, fonts } from "@/styles";

const styles = createStyles({
  calorieTextContainer: {
    alignItems: "center",
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: [{ translateX: "-50%" }, { translateY: "-50%" }],
  },
  calorieNumber: {
    fontSize: fonts.xl,
    fontWeight: "bold",
    color: colors.primary,
  },
  calorieText: {
    fontSize: fonts.lg,
  },
});

const CalorieRing = ({ totalCalories, consumedCalories }) => {
  const widthAndHeight = 200;
  const series = [consumedCalories, totalCalories - consumedCalories];

  return (
    <View style={{ alignItems: "center" }}>
      <PieChart
        widthAndHeight={widthAndHeight}
        series={series}
        sliceColor={[colors.primary, colors.lightNeutral.lightest]}
        coverRadius={0.75}
        coverFill={null}
      />
      <View style={styles.calorieTextContainer}>
        <Text style={styles.calorieNumber}>{consumedCalories}</Text>
        <Text style={styles.calorieText}>consumed</Text>
      </View>
    </View>
  );
};

export default CalorieRing;