import { useState } from "react";
import { StyleSheet, Text } from "react-native";

import {
  colors,
  fonts,
  margin,
  borderRadius,
  padding,
  createStyles,
} from "@/styles";
import {
  Card,
  Page,
  Slider,
  PageCell,
  TextHeader,
  Dropdown,
} from "@/components";

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
});

const NutritionProfileScreen = () => {
  const [calorieGoal, setCalorieGoal] = useState(2000);
  const [proteinGoal, setProteinGoal] = useState(50);
  const [fatGoal, setFatGoal] = useState(50);
  const [carbsGoal, setCarbsGoal] = useState(50);
  const [height, setHeight] = useState(null);
  const [weight, setWeight] = useState(null);
  const [selectedConditions, setSelectedConditions] = useState([]);
  const heightOptions = Array.from({ length: 101 }, (_, i) => ({
    label: (i + 100).toString(), // Heights from 100 to 200 cm
    value: (i + 100).toString(),
  }));

  const weightOptions = Array.from({ length: 151 }, (_, i) => ({
    label: (i + 50).toString(), // Weights from 50 to 200 kg
    value: (i + 50).toString(),
  }));

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
          <Dropdown
            headerText="Height (cm)"
            data={heightOptions}
            placeholder="Select height"
            value={height}
            onChange={(item) => setHeight(item.value)}
          />

          <Dropdown
            headerText="Weight (kg)"
            data={weightOptions}
            placeholder="Select weight"
            value={weight}
            onChange={(item) => setWeight(item.value)}
          />
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

export default NutritionProfileScreen;
