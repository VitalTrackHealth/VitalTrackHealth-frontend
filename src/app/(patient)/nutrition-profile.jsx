import { useState } from "react";
import { View, Text } from "react-native";

import { colors, fonts, margin, createStyles } from "@/styles";
import {
  Card,
  Page,
  Slider,
  PageCell,
  TextHeader,
  Dropdown,
  TextInput,
} from "@/components";

const NutritionProfileScreen = () => {
  const [calorieGoal, setCalorieGoal] = useState(2000);
  const [proteinGoal, setProteinGoal] = useState(50);
  const [fatGoal, setFatGoal] = useState(50);
  const [carbsGoal, setCarbsGoal] = useState(50);
  const [height, setHeight] = useState(null);
  const [weight, setWeight] = useState(null);
  const [selectedConditions, setSelectedConditions] = useState([]);

  const chronicConditionsOptions = [
    { label: "Diabetes", value: "diabetes" },
    { label: "Obesity", value: "obesity" },
    { label: "Hypertension", value: "hypertension" },
    { label: "Osteoporosis", value: "osteoporosis" },
    { label: "Cardiovascular Disease", value: "cardiovascular" },
    { label: "Gastroesophageal Reflux Disease", value: "reflux" },
  ];

  return (
    <Page>
      <TextHeader text="Nutrition Profile" textStyle={styles.cellHeader} />
      <PageCell>
        <Card headerText="Macro Targets" style={styles.card}>
          <Text style={styles.sliderHeader}>{calorieGoal} Calories</Text>
          <Slider
            minimumValue={1000}
            maximumValue={3500}
            step={50}
            value={calorieGoal}
            onValueChange={(value) => setCalorieGoal(value)}
            markers={[1000, 1500, 2000, 2500, 3000, 3500]}
          />
          <Text style={styles.sliderHeader}>{proteinGoal}g Protein</Text>
          <Slider
            minimumValue={0}
            maximumValue={100}
            step={5}
            value={proteinGoal}
            onValueChange={(value) => setProteinGoal(value)}
            markers={[0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100]}
            trackColor={colors.red.light}
          />
          <Text style={styles.sliderHeader}>{fatGoal}g Fat</Text>
          <Slider
            minimumValue={0}
            maximumValue={100}
            step={5}
            value={fatGoal}
            onValueChange={(value) => setFatGoal(value)}
            markers={[0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100]}
            trackColor={colors.yellow.light}
          />
          <Text style={styles.sliderHeader}>{carbsGoal}g Carbs</Text>
          <Slider
            minimumValue={0}
            maximumValue={300}
            step={10}
            value={carbsGoal}
            onValueChange={(value) => setCarbsGoal(value)}
            markers={[0, 50, 100, 150, 200, 250, 300]}
            trackColor={colors.blue.light}
          />
        </Card>
      </PageCell>
      <PageCell>
        <Card headerText="Body Measurements" style={styles.card}>
          <View style={styles.bodyMeasurementsContainer}>
            <View style={styles.bodyMeasurementsItem}>
              <Text style={styles.bodyMeasurementsText}>Height</Text>
              <TextInput
                placeholder="Height (cm)"
                value={height}
                onChangeText={setHeight}
                keyboardType="numeric"
                containerStyle={[styles.desktopInput]}
              />
            </View>
            <View style={styles.bodyMeasurementsItem}>
              <Text style={styles.bodyMeasurementsText}>Weight</Text>
              <TextInput
                placeholder="Weight (kg)"
                value={weight}
                onChangeText={setWeight}
                keyboardType="numeric"
                containerStyle={[styles.halfWidthInput, styles.desktopInput]}
              />
            </View>
          </View>
          <Dropdown
            headerText="Chronic Conditions"
            isMultiSelect={true}
            data={chronicConditionsOptions}
            placeholder="Select conditions"
            searchPlaceholder="Search..."
            value={selectedConditions}
            onChange={(item) => setSelectedConditions(item)}
          />
        </Card>
      </PageCell>
    </Page>
  );
};

const styles = createStyles({
  cellHeader: {
    color: colors.lightNeutral.darkest,
    fontSize: fonts.xl,
  },
  card: {
    marginBottom: margin.lg,
  },
  cardHeader: {
    color: colors.lightNeutral.dark,
    fontSize: fonts.lg,
    marginTop: 0,
    paddingTop: 0,
    marginBottom: margin.md,
    textAlign: "left",
  },
  sliderHeader: {
    fontSize: fonts.md,
    marginBottom: margin.sm,
  },
  desktopInput: {
    backgroundColor: colors.lightNeutral.lightest,
  },
  bodyMeasurementsItem: {
    width: "48%",
  },
  bodyMeasurementsText: {
    fontSize: fonts.md,
    marginBottom: margin.sm,
  },
  bodyMeasurementsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
  },
});

export default NutritionProfileScreen;
