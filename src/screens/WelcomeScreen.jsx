import { View, Text, Image } from "react-native";

import { Button } from "@/components";
import { createStyles, padding, margin, fonts, colors } from "@/styles";

const styles = createStyles({
  container: {
    flex: 1,
    padding: padding.lg,
    justifyContent: "space-between",
  },
  topContent: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
  bottomContent: {
    width: "100%",
    marginBottom: margin.md,
  },
  logo: {
    width: "100%",
    height: 100,
  },
  mainText: {
    fontSize: fonts.xl,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: margin.sm,
  },
  subText: {
    fontSize: fonts.md,
    color: colors.darkGray,
    textAlign: "center",
    marginBottom: margin.xl,
  },
  button: {
    width: "100%",
    marginBottom: margin.md,
  },
});

const WelcomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.topContent}>
        <Image
          source={require("@/assets/logo-no-background.png")}
          style={styles.logo}
          resizeMode="contain"
        />
      </View>
      <View style={styles.bottomContent}>
        <Text style={styles.mainText}>
          Creating a bridge between{" "}
          <Text style={{ color: colors.orange }}>healthcare professionals</Text>{" "}
          and <Text style={{ color: colors.lightBlue }}>nutrition</Text>.
        </Text>
        <Text style={styles.subText}>Sign up today!</Text>
        <Button
          text="Get Started"
          onPress={() =>
            navigation.navigate("PatientStack", { screen: "Login" })
          }
          style={styles.button}
          variant="primary"
        />
        <Button
          text="Sign in"
          onPress={() =>
            navigation.navigate("ProviderStack", { screen: "Home" })
          }
          style={styles.button}
          variant="secondary"
        />
      </View>
    </View>
  );
};

export default WelcomeScreen;
