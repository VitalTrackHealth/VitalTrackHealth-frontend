import { useState } from "react";
import { View, Text } from "react-native";
import { router, useGlobalSearchParams } from "expo-router";

import {
  Button,
  TextHeader,
  Dropdown,
  BackButton,
  TextInput,
} from "@/components";
import {
  colors,
  createStyles,
  margin,
  padding,
  borderRadius,
  fonts,
} from "@/styles";
import { useUser, useSession, useSnackbar } from "@/context";
import { registerPatient } from "@/services";

const RegisterQuestionsScreen = () => {
  const globalParams = useGlobalSearchParams();
  const userType = globalParams.userType || "patient";
  const { login } = useSession();
  const { user, setUser } = useUser();
  const { showSnackbar } = useSnackbar();
  const [buttonLoading, setButtonLoading] = useState(false);

  const [height, setHeight] = useState(null);
  const [weight, setWeight] = useState(null);
  const [selectedConditions, setSelectedConditions] = useState([]);
  const [providerCode, setProviderCode] = useState("");

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

  const handleBackButtonClick = () => {
    router.goBack();
  };

  const handleRegisterClick = async () => {
    setButtonLoading(true);

    const result = await registerPatient({
      firstName: user.firstName,
      lastName: user.lastName,
      phoneNumber: user.phoneNumber,
      username: user.username,
      email: user.email,
      password: user.password,
      conditions: selectedConditions,
      bodyMeasurements: { height, weight },
    });
    router.push("/(patient)/home");

    if (result.success) {
      const success = await login(user.email, user.password, userType);
      if (success) {
        setUser({
          firstName: user.firstName,
          lastName: user.lastName,
          phoneNumber: user.phoneNumber,
          username: user.username,
          email: user.email,
          providerCode: providerCode,
        });
        router.replace("/(patient)/home");
      } else {
        showSnackbar("Registration successful, but login failed", "error");
      }
    } else {
      showSnackbar("Registration failed", "error");
    }
    setButtonLoading(false);
  };

  return (
    <View style={styles.container}>
      <View style={styles.backButtonContainer}>
        <BackButton
          onPress={handleBackButtonClick}
          variant="secondary"
          style={styles.backButton}
        />
      </View>
      <View style={styles.desktopLayout}>
        <TextHeader
          text="Hi! Welcome to VitalTrack Health."
          subText="We have just a few questions to get you started."
          textStyle={styles.header}
        />
        <View style={styles.desktopFormContainer}>
          <Text style={styles.bodyMeasurementsText}>
            Enter your body measurements:
          </Text>
          <View style={styles.bodyMeasurementsContainer}>
            <TextInput
              placeholder="Height (cm)"
              value={height}
              onChangeText={setHeight}
              keyboardType="numeric"
              containerStyle={[styles.halfWidthInput, styles.desktopInput]}
            />
            <TextInput
              placeholder="Weight (kg)"
              value={weight}
              onChangeText={setWeight}
              keyboardType="numeric"
              containerStyle={[styles.halfWidthInput, styles.desktopInput]}
            />
          </View>
          <Dropdown
            headerText="What are your main health concerns?"
            isMultiSelect={true}
            data={conditionOptions}
            placeholder="Select condition"
            value={selectedConditions}
            onChange={setSelectedConditions}
          />
          <Text style={styles.providerCodeText}>
            Enter your provider code (optional):
          </Text>
          <TextInput
            placeholder="Code"
            value={providerCode}
            onChangeText={setProviderCode}
            containerStyle={styles.desktopInput}
          />
          <Button
            onPress={handleRegisterClick}
            text="Sign Up"
            loading={buttonLoading}
          />
        </View>
      </View>
    </View>
  );
};

const styles = createStyles({
  container: {
    flex: 1,
  },
  backButtonContainer: {
    position: "absolute",
    top: padding.md,
    left: padding.md,
    zIndex: 1,
  },
  desktopLayout: {
    flex: 1,
    alignItems: "center",
    padding: margin.lg,
  },
  desktopInput: {
    backgroundColor: colors.lightNeutral.lightest,
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
  halfWidthInput: {
    width: "48%",
  },
  bodyMeasurementsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
  },
  providerCodeText: {
    fontSize: fonts.md,
    marginBottom: margin.sm,
  },
  bodyMeasurementsText: {
    fontSize: fonts.md,
    marginBottom: margin.sm,
  },
  mobileLayout: {
    flex: 1,
    padding: margin.lg,
    justifyContent: "center",
  },
});

export default RegisterQuestionsScreen;
