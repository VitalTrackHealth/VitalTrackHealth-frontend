import { useState } from "react";
import {
  View,
  Text,
  Image,
  Pressable,
  useWindowDimensions,
} from "react-native";
import { router, useGlobalSearchParams } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

import {
  BackButton,
  Button,
  ClickableText,
  TextInput,
  TextHeader,
} from "@/components";
import {
  createStyles,
  padding,
  colors,
  margin,
  fonts,
  borderRadius,
} from "@/styles";
import { useSession, useSnackbar } from "@/context";

const LoginScreen = () => {
  const globalParams = useGlobalSearchParams();
  const userType = globalParams.userType || "patient";
  const { login } = useSession();
  const { showSnackbar } = useSnackbar();
  const [buttonLoading, setButtonLoading] = useState(false);

  const { width } = useWindowDimensions();
  const isDesktop = width >= 768;

  const [isPasswordShown, setIsPasswordShown] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleBackButtonClick = () => {
    if (router.canGoBack()) {
      router.back();
    } else {
      router.replace("/");
    }
  };

  const loginUserClick = async () => {
    setButtonLoading(true);
    // Sets session token if successful login
    const success = await login(email, password, userType);

    if (success) {
      if (userType === "patient") {
        router.replace("/(patient)/home");
      } else if (userType === "provider") {
        router.replace("/(provider)/home");
      }
    } else {
      showSnackbar("Invalid email or password", "error");
    }
    setButtonLoading(false);
  };

  const registerUserClick = () => {
    router.navigate({ pathname: "/register", params: { userType } });
  };

  const handleForgotPasswordClick = () => {
    console.log("Forgot Password");
  };

  const handleGoogleLoginClick = () => {
    console.log("Google Login");
  };

  const handleFacebookLoginClick = () => {
    console.log("Facebook Login");
  };

  const loginForm = (
    <>
      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
        containerStyle={isDesktop ? styles.desktopInput : null}
      />
      <TextInput
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry={!isPasswordShown}
        containerStyle={isDesktop ? styles.desktopInput : null}
        onSubmitEditing={loginUserClick}
      >
        <Pressable onPress={() => setIsPasswordShown(!isPasswordShown)}>
          <Ionicons
            name={isPasswordShown ? "eye" : "eye-off"}
            size={fonts.lg}
            color={colors.lightNeutral.dark}
          />
        </Pressable>
      </TextInput>
      <ClickableText
        onPress={handleForgotPasswordClick}
        text="Forgot Password?"
        containerStyle={styles.forgotPassword}
      />
      <Button
        onPress={loginUserClick}
        text="Login"
        disabled={!email || !password}
        loading={buttonLoading}
      />
      {/* <Text style={styles.orText}>Or Sign in with</Text>
      <View style={styles.socialContainer}>
        <Pressable onPress={handleGoogleLoginClick} style={styles.socialButton}>
          <Image
            source={require("@/assets/google-icon.png")}
            style={styles.socialIcon}
          />
        </Pressable>
        <Pressable
          onPress={handleFacebookLoginClick}
          style={styles.socialButton}
        >
          <Image
            source={require("@/assets/facebook-icon.png")}
            style={styles.socialIcon}
          />
        </Pressable>
      </View> */}
      <View style={styles.registerContainer}>
        <Text style={styles.registerText}>Don't have an account? </Text>
        <ClickableText
          onPress={registerUserClick}
          text="Sign Up"
          textStyle={styles.registerLink}
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
              text="Welcome Back! 👋"
              subText="Sign in to your Account"
            />
            {loginForm}
          </View>
        </View>
      ) : (
        <View style={styles.mobileLayout}>
          <TextHeader
            text="Welcome Back! 👋"
            subText="Sign in to your Account"
          />
          {loginForm}
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
  forgotPassword: {
    alignSelf: "flex-end",
    marginBottom: margin.sm,
  },
  orText: {
    color: colors.lightNeutral.dark,
    textAlign: "center",
    marginVertical: margin.sm,
    fontSize: fonts.md,
  },
  socialContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: margin.lg,
  },
  socialButton: {
    marginHorizontal: padding.md,
    padding: padding.sm,
    borderRadius: borderRadius.md,
    backgroundColor: colors.white,
  },
  socialIcon: {
    width: 24,
    height: 24,
  },
  registerContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: margin.lg,
  },
  registerText: {
    color: colors.lightNeutral.med,
    fontSize: fonts.md,
  },
  registerLink: {
    color: colors.primary,
    fontWeight: "bold",
    fontSize: fonts.md,
  },
});

export default LoginScreen;
