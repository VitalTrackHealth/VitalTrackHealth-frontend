import React, { useState } from "react";
import {
  View,
  Text,
  Pressable,
  Image,
  useWindowDimensions,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";

import {
  Button,
  TextHeader,
  TextInput,
  BackButton,
  Checkbox,
  ClickableText,
} from "@/components";
import { registerUser } from "@/services";
import {
  colors,
  createStyles,
  fonts,
  margin,
  padding,
  borderRadius,
} from "@/styles";
import { emailComplexity, passwordComplexity } from "@/utils";
import { useSnackbar } from "@/context";

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
  mobileLayout: {
    flex: 1,
    padding: margin.lg,
    justifyContent: "center",
  },
  mobileBackButton: {
    position: "absolute",
    top: padding.md,
    left: padding.md,
  },
  halfWidthInput: {
    width: "48%",
  },
  nameContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
  },
  checkboxContainer: {
    justifyContent: "center",
    marginBottom: margin.sm,
  },
  loginContainer: {
    marginTop: margin.lg,
    flexDirection: "row",
    justifyContent: "center",
  },
  loginText: {
    color: colors.lightNeutral.med,
    fontSize: fonts.md,
  },
  loginLink: {
    color: colors.primary,
    fontWeight: "bold",
    fontSize: fonts.md,
  },
});

const RegisterScreen = ({ navigation }) => {
  const { width } = useWindowDimensions();
  const isDesktop = width >= 768;

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isPasswordShown, setIsPasswordShown] = useState(false);
  const [isTermsChecked, setIsTermsChecked] = useState(false);

  const { showSnackbar } = useSnackbar();

  const handleBackButtonClick = () => {
    navigation.goBack();
  };

  const loginUserClick = () => {
    navigation.navigate("LoginScreen");
  };

  const handleSignUpClick = async () => {
    // ! Remove this after testing
    navigation.navigate("AuthStack", {
      screen: "RegisterQuestionScreen",
      params: { email: "test@test.com" },
    });

    return;

    if (!emailComplexity(email)) {
      showSnackbar("Please enter a valid email address", "warning");
    } else if (!passwordComplexity(password)) {
      showSnackbar(
        "Password must be at least 8 characters long, have one special character, one uppercase and one lowercase letter",
        "warning"
      );
    } else {
      const result = await registerUser({
        firstName,
        lastName,
        phoneNumber,
        email,
        password,
      });

      if (result.success) {
        navigation.navigate("AuthStack", {
          screen: "RegisterConditionQuestionScreen",
          params: { email: result.results.data.email },
        });
      } else {
        console.log("Registration failed:", result.error);
        showSnackbar(result.error, "error");
      }
    }
  };

  const RegisterForm = (
    <>
      <View style={styles.nameContainer}>
        <TextInput
          placeholder="First Name"
          value={firstName}
          onChangeText={setFirstName}
          keyboardType="default"
          containerStyle={[
            styles.halfWidthInput,
            isDesktop && styles.desktopInput,
          ]}
        />
        <TextInput
          placeholder="Last Name"
          value={lastName}
          onChangeText={setLastName}
          keyboardType="default"
          containerStyle={[
            styles.halfWidthInput,
            isDesktop && styles.desktopInput,
          ]}
        />
      </View>
      <TextInput
        placeholder="Email address"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        containerStyle={isDesktop ? styles.desktopInput : null}
      />
      <TextInput
        placeholder="Mobile Number"
        value={phoneNumber}
        onChangeText={setPhoneNumber}
        keyboardType="numeric"
        containerStyle={isDesktop ? styles.desktopInput : null}
      />
      <TextInput
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry={!isPasswordShown}
        containerStyle={isDesktop ? styles.desktopInput : null}
      >
        <Pressable onPress={() => setIsPasswordShown(!isPasswordShown)}>
          <Ionicons
            name={isPasswordShown ? "eye-off" : "eye"}
            size={24}
            color={colors.lightNeutral.dark}
          />
        </Pressable>
      </TextInput>
      <Checkbox
        label="I agree to the Terms and Conditions."
        checked={isTermsChecked}
        onValueChange={setIsTermsChecked}
        containerStyle={styles.checkboxContainer}
      />
      <Button
        onPress={handleSignUpClick}
        text="Sign Up"
        disabled={!isTermsChecked}
      />
      <View style={styles.loginContainer}>
        <Text style={styles.loginText}>Already have an account? </Text>
        <ClickableText
          onPress={loginUserClick}
          text="Login"
          textStyle={styles.loginLink}
        />
      </View>
    </>
  );

  return (
    <SafeAreaView style={styles.container}>
      {!isDesktop ? (
        <BackButton
          onPress={handleBackButtonClick}
          variant="secondary"
          style={styles.mobileBackButton}
        />
      ) : null}
      {isDesktop ? (
        <View style={styles.desktopLayout}>
          <Image
            source={require("@/assets/logo/full-color.png")}
            style={styles.desktopLogo}
            resizeMode="contain"
          />
          <View style={styles.desktopFormContainer}>
            <BackButton
              onPress={handleBackButtonClick}
              variant="secondary"
              style={styles.desktopBackButton}
            />
            <TextHeader
              text="Create an Account ☀️"
              subText="Take control of your nutrition today!"
            />
            {RegisterForm}
          </View>
        </View>
      ) : (
        <View style={styles.mobileLayout}>
          <TextHeader
            text="Create an Account ☀️"
            subText="Take control of your nutrition today!"
          />
          {RegisterForm}
        </View>
      )}
    </SafeAreaView>
  );
};

export default RegisterScreen;
