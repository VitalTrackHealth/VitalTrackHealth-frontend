import { Text, Image, } from "react-native";

import { Button, Page, PageTop, PageBottom } from "@/components";
import { createStyles, margin, fonts, colors } from "@/styles";

const styles = createStyles({
  logo: {
    width: "100%",
    height: 100,
  },
  mainText: {
    fontSize: fonts.lg,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: margin.sm,
  },
  subText: {
    fontSize: fonts.md,
    color: colors.gray.medium,
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
    <Page>
      <PageTop>
        <Image
          source={require("@/assets/logo-no-background.png")}
          style={styles.logo}
          resizeMode="contain"
        />
      </PageTop>
      <PageBottom>
        <Text style={styles.mainText}>
          Creating a bridge between{" "}
          <Text style={{ color: colors.primary }}>
            healthcare professionals
          </Text>{" "}
          and <Text style={{ color: colors.green.light }}>nutrition</Text>.
        </Text>
        <Text style={styles.subText}>Sign up today!</Text>
        <Button
          text="Patient"
          onPress={() =>
            navigation.navigate("PatientStack", { screen: "Login" })
          }
          style={styles.button}
          variant="primary"
        />
        <Button
          text="Provider"
          onPress={() =>
            navigation.navigate("ProviderStack", { screen: "Home" })
          }
          style={styles.button}
          variant="secondary"
        />
      </PageBottom>
    </Page>
  );
};

export default WelcomeScreen;
