import { Text, Image, useWindowDimensions, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { Button } from "@/components";
import { createStyles, margin, fonts, colors } from "@/styles";

const WelcomeScreen = ({ navigation }) => {
  const { width } = useWindowDimensions();
  const isDesktop = width >= 768;

  const handlePatientLoginClick = () => {
    navigation.navigate("PatientStack", { screen: "Login" });
  };

  const handleProviderLoginClick = () => {
    navigation.navigate("ProviderStack", { screen: "Home" });
  };

  return (
    <SafeAreaView style={styles.container}>
      {isDesktop ? (
        <View style={styles.desktopLayout}>
          <View style={styles.desktopLeftHalf}>
            <Image
              source={require("@/assets/logo/full-white.png")}
              style={styles.logo}
              resizeMode="contain"
            />
            <Text style={styles.desktopLeftHalfText}>
              Bringing Nutrition to the Heart of Healthcare
            </Text>
          </View>
          <View style={styles.desktopRightHalf}>
            <View style={styles.buttonContainer}>
              <Button
                text="Patient"
                onPress={handlePatientLoginClick}
                style={styles.button}
                variant="primary"
              />
              <Button
                text="Provider"
                onPress={handleProviderLoginClick}
                style={styles.button}
                variant="secondary"
              />
            </View>
          </View>
        </View>
      ) : (
        <View style={styles.mobileLayout}>
          <Image
            source={require("@/assets/logo/full-color.png")}
            style={styles.logo}
            resizeMode="contain"
          />
          <View style={styles.mobileContent}>
            <Text style={styles.mobileMainText}>
              Bringing{" "}
              <Text style={{ color: colors.green.medium }}>Nutrition</Text> to
              the Heart of{" "}
              <Text style={{ color: colors.red.medium }}>Healthcare</Text>
            </Text>
            <View style={styles.buttonContainer}>
              <Button
                text="Patient"
                onPress={handlePatientLoginClick}
                style={styles.button}
                variant="primary"
              />
              <Button
                text="Provider"
                onPress={handleProviderLoginClick}
                style={styles.button}
                variant="secondary"
              />
            </View>
          </View>
        </View>
      )}
    </SafeAreaView>
  );
};

const styles = createStyles({
  container: {
    flex: 1,
  },
  desktopLayout: {
    flexDirection: "row",
    flex: 1,
  },
  desktopLeftHalf: {
    flex: 1,
    backgroundColor: colors.primary,
    justifyContent: "center",
    alignItems: "center",
    padding: margin.xxl,
  },
  desktopLeftHalfText: {
    color: "white",
    fontSize: fonts.xl,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: margin.lg,
  },
  desktopRightHalf: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: margin.lg,
  },
  mobileLayout: {
    flex: 1,
    padding: margin.lg,
    justifyContent: "space-between",
  },
  mobileContent: {
    flex: 1,
    justifyContent: "flex-end", // Align text to the bottom
    alignItems: "center", // Center text horizontally
  },
  mobileMainText: {
    fontSize: fonts.xl,
    fontWeight: "bold",
    marginBottom: margin.sm,
    textAlign: "center",
    marginBottom: margin.lg,
  },
  logo: {
    width: "100%",
    height: 100,
  },
  button: {
    marginBottom: margin.md,
    width: "100%",
  },
  buttonContainer: {
    width: "100%",
  },
});

export default WelcomeScreen;
