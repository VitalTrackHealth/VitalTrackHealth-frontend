import { useState } from "react";
import {
  View,
  Text,
  Pressable,
  Image,
  useWindowDimensions,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { router, useGlobalSearchParams } from "expo-router";

import {
  Button,
  TextHeader,
  TextInput,
  BackButton,
  Checkbox,
  ClickableText,
} from "@/components";
import { registerProvider } from "@/services";
import {
  colors,
  createStyles,
  fonts,
  margin,
  padding,
  borderRadius,
} from "@/styles";
import { emailComplexity, passwordComplexity } from "@/utils";
import { useSnackbar, useSession, useUser } from "@/context";

const RegisterScreen = () => {
  const globalParams = useGlobalSearchParams();
  const userType = globalParams.userType || "patient";
  const { login } = useSession();
  const { user, setUser } = useUser();
  const { showSnackbar } = useSnackbar();
  const [buttonLoading, setButtonLoading] = useState(false);

  const { width } = useWindowDimensions();
  const isDesktop = width >= 768;

  const [firstName, setFirstName] = useState(user.firstName || "");
  const [lastName, setLastName] = useState(user.lastName || "");
  const [phoneNumber, setPhoneNumber] = useState(user.phoneNumber || "");
  const [email, setEmail] = useState(user.email || "");
  const [password, setPassword] = useState(user.password || "");
  const [isPasswordShown, setIsPasswordShown] = useState(false);
  const [isTermsChecked, setIsTermsChecked] = useState(false);

  const handleBackButtonClick = () => {
    if (router.canGoBack()) {
      router.back();
    } else {
      router.replace("/");
    }
  };

  const loginUserClick = () => {
    router.navigate({ pathname: "/login", params: { userType } });
  };

  const handleSignUpClick = async () => {
    // Check if email and password are valid
    if (!emailComplexity(email)) {
      showSnackbar("Please enter a valid email address", "warning");
      return;
    } else if (!passwordComplexity(password)) {
      showSnackbar(
        "Password must: Be at least 8 characters long, have one special character, one uppercase and one lowercase letter",
        "warning"
      );
      return;
    }

    setButtonLoading(true);
    if (userType === "patient") {
      setUser({
        firstName,
        lastName,
        phoneNumber,
        username: email,
        email,
        password, // Needs to be dropped after next screen
      });
      router.navigate({
        pathname: "/register-questions",
        params: { userType },
      });
    } else if (userType === "provider") {
      const result = await registerProvider({
        firstName,
        lastName,
        phoneNumber,
        username: email,
        email,
        password,
      });
      if (result.success) {
        const success = await login(email, password, userType);
        if (success) {
          setUser({
            firstName,
            lastName,
            phoneNumber,
            username: email,
            email,
          });
          router.replace("/(provider)/home");
        } else {
          showSnackbar("Registration successful, but login failed", "error");
        }
      } else {
        showSnackbar("Registration failed", "error");
      }
    }
    setButtonLoading(false);
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
        text={userType === "patient" ? "Continue" : "Sign Up"}
        disabled={!isTermsChecked}
        loading={buttonLoading}
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
    <View style={styles.container}>
      <View style={styles.backButtonContainer}>
        <BackButton
          onPress={handleBackButtonClick}
          variant="secondary"
          style={styles.backButton}
        />
      </View>

      {isDesktop ? (
        <View style={styles.desktopLayout}>
          <Image
            source={require("@/assets/logo/full-color.png")}
            style={styles.desktopLogo}
            resizeMode="contain"
          />
          <View style={styles.desktopFormContainer}>
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
  desktopLogo: {
    width: "30%",
    height: 100,
    marginBottom: margin.xl,
  },
  desktopInput: {
    backgroundColor: colors.lightNeutral.lightest,
  },
  desktopFormContainer: {
    maxWidth: 600,
    width: "100%",
    backgroundColor: colors.white,
    paddingHorizontal: padding.xl,
    paddingTop: padding.lg,
    paddingBottom: padding.xl,
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

export default RegisterScreen;
