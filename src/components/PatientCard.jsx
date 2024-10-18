import { View, Image, Text } from "react-native";
import PieChart from "react-native-pie-chart";

import Card from "@/components/Card";
import ProgressBar from "@/components/ProgressBar";
import {
  createStyles,
  colors,
  fonts,
  padding,
  margin,
  borderRadius,
} from "@/styles";

const styles = createStyles({
  card: {
    backgroundColor: colors.lightNeutral.lightest,
  },
  patientInfoContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: margin.lg,
  },
  avatar: {
    width: 60,
    height: 60,
    borderRadius: borderRadius.md,
    marginRight: margin.lg,
  },
  patientDetails: {
    flex: 1,
  },
  patientName: {
    fontSize: fonts.lg,
    fontWeight: "bold",
  },
  caloriesReportContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  calorieAllTextContainer: {
    marginLeft: margin.lg,
  },
  calorieTextContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  calorieNumber: {
    fontSize: fonts.md,
    color: colors.primary,
  },
  calorieText: {
    fontSize: fonts.md,
  },
  macrosContainer: {
    flexDirection: "row",
    justifyContent: "space",
    alignItems: "center",
    paddingTop: padding.md,
  },
  macroItem: {
    width: "30%",
    marginRight: padding.sm,
  },
  macroText: {
    fontSize: fonts.sm,
    color: colors.lightNeutral.dark,
    marginBottom: padding.sm,
  },
  macroNumber: {
    fontSize: fonts.sm,
    fontWeight: "bold",
    color: colors.lightNeutral.darkest,
    marginTop: padding.sm,
  },
});

const SmallCalorieRing = ({ totalCalories, consumedCalories }) => {
  const widthAndHeight = 50;
  const series = [consumedCalories, totalCalories - consumedCalories];

  return (
    <View style={styles.ringContainer}>
      <PieChart
        widthAndHeight={widthAndHeight}
        series={series}
        sliceColor={[colors.primary, colors.lightNeutral.lightest]}
        coverRadius={0.5}
        coverFill={null}
      />
    </View>
  );
};

const PatientCard = ({ patient, macros, cardStyle }) => {
  const {
    totalCalories,
    consumedCalories,
    totalProtein,
    consumedProtein,
    totalFat,
    consumedFat,
    totalCarbs,
    consumedCarbs,
  } = macros;
  const remainingCalories = totalCalories - consumedCalories;

  return (
    <Card style={[styles.card, cardStyle]}>
      <View style={styles.patientInfoContainer}>
        <Image
          source={`https://ui-avatars.com/api/?name=${patient.first_name}+${patient.last_name}&background=random`}
          style={styles.avatar}
        />
        <View style={styles.patientDetails}>
          <Text style={styles.patientName}>
            {patient.first_name} {patient.last_name}
          </Text>
          <Text>Phone: {patient.phone_number}</Text>
          <Text>Email: {patient.email}</Text>
          <Text>Conditions: {patient.conditions}</Text>
          <Text>Height: {patient.body_measurements.height} cm</Text>
          <Text>Weight: {patient.body_measurements.weight} kg</Text>
        </View>
      </View>
      <View style={styles.caloriesReportContainer}>
        <SmallCalorieRing
          totalCalories={totalCalories}
          consumedCalories={consumedCalories}
        />
        <View style={styles.calorieAllTextContainer}>
          <View style={styles.calorieTextContainer}>
            <Text style={styles.calorieNumber}>{consumedCalories} </Text>
            <Text style={styles.calorieText}>Consumed</Text>
          </View>
          <View style={styles.calorieTextContainer}>
            <Text style={styles.calorieNumber}>{remainingCalories} </Text>
            <Text style={styles.calorieText}>Remaining</Text>
          </View>
          <View style={styles.calorieTextContainer}>
            <Text style={styles.calorieNumber}>{totalCalories} </Text>
            <Text style={styles.calorieText}>Target</Text>
          </View>
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
  );
};

export default PatientCard;
