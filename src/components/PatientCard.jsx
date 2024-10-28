import { View, Image, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import Card from "@/components/Card";
import { createStyles, colors, fonts, margin, borderRadius } from "@/styles";

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

  return (
    <Card style={[styles.card, cardStyle]}>
      <View style={styles.cardContent}>
        <View style={styles.patientInfoContainer}>
          {/* <Image
            source={`https://ui-avatars.com/api/?name=${patient.first_name}+${patient.last_name}&background=random`}
            style={styles.avatar}
          /> */}
          <View style={styles.patientDetails}>
            <Text style={styles.patientName}>
              {patient.first_name} {patient.last_name}
            </Text>
            <View style={styles.summaryItem}>
              <Text style={styles.summaryLabel}>Phone:</Text>
              <Text style={styles.summaryValue}>{patient.phone_number}</Text>
            </View>
            <View style={styles.summaryItem}>
              <Text style={styles.summaryLabel}>Email:</Text>
              <Text style={styles.summaryValue}>{patient.email}</Text>
            </View>
            <View style={styles.summaryItem}>
              <Text style={styles.summaryLabel}>Conditions:</Text>
              <View style={styles.conditionsContainer}>
                {patient.conditions.map((condition, index) => (
                  <Text key={index} style={styles.summaryValue}>
                    {condition.trim()}
                  </Text>
                ))}
              </View>
            </View>
            <View style={styles.summaryItem}>
              <Text style={styles.summaryLabel}>Height:</Text>
              <Text style={styles.summaryValue}>
                {patient.body_measurements.height} cm
              </Text>
            </View>
            <View style={styles.summaryItem}>
              <Text style={styles.summaryLabel}>Weight:</Text>
              <Text style={styles.summaryValue}>
                {patient.body_measurements.weight} kg
              </Text>
            </View>
          </View>
        </View>
        <View style={styles.verticalLine} />
        <View style={styles.weeklySummary}>
          <Text style={styles.summaryTitle}>Macro Goals</Text>
          <View style={styles.summaryItem}>
            <Text style={styles.summaryLabel}>Calories:</Text>
            <Text style={styles.summaryValue}>{totalCalories}</Text>
          </View>
          <View style={styles.summaryItem}>
            <Text style={styles.summaryLabel}>Protein:</Text>
            <Text style={styles.summaryValue}>{totalProtein}g</Text>
          </View>
          <View style={styles.summaryItem}>
            <Text style={styles.summaryLabel}>Fat:</Text>
            <Text style={styles.summaryValue}>{totalFat}g</Text>
          </View>
          <View style={styles.summaryItem}>
            <Text style={styles.summaryLabel}>Carbs:</Text>
            <Text style={styles.summaryValue}>{totalCarbs}g</Text>
          </View>
        </View>
        <View style={styles.arrowContainer}>
          <Ionicons
            name="chevron-forward"
            size={24}
            color={colors.lightNeutral.dark}
          />
        </View>
      </View>
    </Card>
  );
};

const styles = createStyles({
  card: {
    backgroundColor: colors.lightNeutral.lightest,
  },
  cardContent: {
    flexDirection: "row",
  },
  patientInfoContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
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
    fontSize: fonts.md,
    fontWeight: "bold",
    marginBottom: margin.sm,
  },
  verticalLine: {
    width: 1,
    backgroundColor: colors.lightNeutral.light,
    marginHorizontal: margin.lg,
  },
  weeklySummary: {
    flex: 1,
  },
  summaryTitle: {
    fontSize: fonts.md,
    fontWeight: "bold",
    marginBottom: margin.sm,
  },
  summaryItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: margin.xs,
  },
  summaryLabel: {
    fontSize: fonts.sm,
    color: colors.lightNeutral.dark,
  },
  summaryValue: {
    fontSize: fonts.sm,
    fontWeight: "bold",
    color: colors.lightNeutral.darkest,
  },
  arrowContainer: {
    marginLeft: margin.lg,
  },
});

export default PatientCard;
