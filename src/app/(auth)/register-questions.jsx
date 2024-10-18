import { useState } from "react";
import { View, Text } from "react-native";
import { router } from "expo-router";

import { Button, TextHeader, Dropdown } from "@/components";
import { colors, createStyles, margin, padding, borderRadius } from "@/styles";
import { useUser } from "@/context";
import { updateUser } from "@/services";

const styles = createStyles({
  container: {
    flex: 1,
  },
  desktopLayout: {
    flex: 1,
    alignItems: "center",
    padding: margin.lg,
  },
  desktopLogo: {
    width: "30%",
    height: 100,
    marginBottom: margin.xl,
  },
  desktopInput: {
    backgroundColor: colors.lightNeutral.lightest,
  },
  desktopBackButton: {
    position: "absolute",
    top: padding.xl,
    left: padding.md,
  },
  desktopFormContainer: {
    maxWidth: 600,
    width: "100%",
    backgroundColor: colors.white,
    padding: padding.xl,
    borderRadius: borderRadius.lg,
    shadowColor: colors.lightNeutral.dark,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
  },
  header: {
    textAlign: "left",
  },
  mobileLayout: {
    flex: 1,
    padding: margin.lg,
    justifyContent: "center",
  },
});

const RegisterQuestionsScreen = () => {
  // User context for state across register screens
  // const { setUser } = useUser();
  // const { email } = route.params;
  const [height, setHeight] = useState(null);
  const [weight, setWeight] = useState(null);
  const [selectedCondition, setSelectedCondition] = useState([]);

  const heightOptions = Array.from({ length: 101 }, (_, i) => ({
    label: (i + 100).toString(), // Heights from 100 to 200 cm
    value: (i + 100).toString(),
  }));

  const weightOptions = Array.from({ length: 151 }, (_, i) => ({
    label: (i + 50).toString(), // Weights from 50 to 200 kg
    value: (i + 50).toString(),
  }));

  const conditionOptions = [
    { label: "Diabetes", value: "diabetes" },
    { label: "Obesity", value: "obesity" },
    { label: "Hypertension", value: "hypertension" },
    { label: "Osteoporosis", value: "osteoporosis" },
    { label: "Cardiovascular Disease", value: "cardiovascular" },
    { label: "Gastroesophageal Reflux Disease", value: "reflux" },
  ];

  const handleContinueClick = async () => {
    router.push("/(patient)/home");

    // const result = await updateUser({
    //   email,
    //   conditions: [selectedCondition],
    // });

    // if (result.success) {
    //   setUser(result.results.data);
    //   navigation.navigate("PatientStack", {
    //     screen: "Home",
    //   });
    // } else {
    //   console.error("User update failed:", result.error);
    // }
  };

  return (
    <View style={styles.container}>
      <View style={styles.desktopLayout}>
        <TextHeader
          text="Hi! Welcome to VitalTrack Health."
          subText="We have just a few questions to get you started."
          textStyle={styles.header}
        />
        <View style={styles.desktopFormContainer}>
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
            headerText="What are your main health concerns?"
            isMultiSelect={true}
            data={conditionOptions}
            placeholder="Select condition"
            value={selectedCondition}
            onChange={setSelectedCondition}
          />
          <Button onPress={handleContinueClick} text="Continue" />
        </View>
      </View>
    </View>
  );
};

export default RegisterQuestionsScreen;
