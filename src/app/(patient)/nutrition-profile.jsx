import { useState, useEffect } from "react";
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
  Button,
} from "@/components";
import { useUser, useSession, useSnackbar } from "@/context";
import { updateUser } from "@/services";

const NutritionProfileScreen = () => {
  const { user } = useUser();
  const { session } = useSession();
  const { showSnackbar } = useSnackbar();

  const [calorieGoal, setCalorieGoal] = useState(1);
  const [proteinGoal, setProteinGoal] = useState(1);
  const [fatGoal, setFatGoal] = useState(1);
  const [carbsGoal, setCarbsGoal] = useState(1);
  const [height, setHeight] = useState(1);
  const [weight, setWeight] = useState(1);
  const [selectedConditions, setSelectedConditions] = useState([]);

  const chronicConditionsOptions = [
    { label: "Diabetes", value: "diabetes" },
    { label: "Obesity", value: "obesity" },
    { label: "Hypertension", value: "hypertension" },
    { label: "Osteoporosis", value: "osteoporosis" },
    { label: "Cardiovascular Disease", value: "cardiovascular" },
    { label: "Gastroesophageal Reflux Disease", value: "reflux" },
  ];

  useEffect(() => {
    if (user.nutritionGoals) {
      setCalorieGoal(user.nutritionGoals.calorie);
      setProteinGoal(user.nutritionGoals.protein);
      setFatGoal(user.nutritionGoals.fat);
      setCarbsGoal(user.nutritionGoals.carbs);
    }
    if (user.bodyMeasurements) {
      setHeight(user.bodyMeasurements.height);
      setWeight(user.bodyMeasurements.weight);
    }
    if (user.conditions) {
      setSelectedConditions(user.conditions);
    }
  }, [user]);

  const handleSave = async () => {
    const response = await updateUser(
      {
        nutritionGoals: {
          calorie: calorieGoal,
          protein: proteinGoal,
          fat: fatGoal,
          carbs: carbsGoal,
        },
        bodyMeasurements: {
          height: height,
          weight: weight,
        },
        conditions: selectedConditions,
      },
      session
    );
    if (response.success) {
      showSnackbar("Nutrition profile updated successfully", "success");
    } else {
      showSnackbar("Failed to update nutrition profile", "error");
    }
  };

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
            minimumValue={1}
            maximumValue={200}
            step={1}
            value={proteinGoal}
            onValueChange={(value) => setProteinGoal(value)}
            markers={[
              0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130, 140,
              150, 160, 170, 180, 190, 200,
            ]}
            trackColor={colors.red.light}
          />
          <Text style={styles.sliderHeader}>{fatGoal}g Fat</Text>
          <Slider
            minimumValue={1}
            maximumValue={100}
            step={1}
            value={fatGoal}
            onValueChange={(value) => setFatGoal(value)}
            markers={[0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100]}
            trackColor={colors.yellow.light}
          />
          <Text style={styles.sliderHeader}>{carbsGoal}g Carbs</Text>
          <Slider
            minimumValue={1}
            maximumValue={400}
            step={1}
            value={carbsGoal}
            onValueChange={(value) => setCarbsGoal(value)}
            markers={[0, 50, 100, 150, 200, 250, 300, 350, 400]}
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
      <Button text="Save" onPress={handleSave} />
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
