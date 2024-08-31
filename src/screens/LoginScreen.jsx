import { useState } from "react";
import { View, Text, Image, Pressable } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import {
  Button,
  ClickableText,
  TextInput,
  Page,
  PageTop,
  PageBottom,
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

const styles = createStyles({
  forgotPassword: {
    alignSelf: "flex-end",
    marginBottom: margin.sm,
  },
  orText: {
    color: colors.gray.dark,
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
    borderRadius: borderRadius,
    backgroundColor: colors.white,
  },
  socialIcon: {
    width: 24,
    height: 24,
  },
  registerContainer: {
    flexDirection: "row",
    justifyContent: "center",
  },
  registerText: {
    color: colors.gray.med,
    fontSize: fonts.md,
  },
  registerLink: {
    color: colors.primary,
    fontWeight: "bold",
    fontSize: fonts.md,
  },
});

const LoginScreen = ({ navigation }) => {
  const [isPasswordShown, setIsPasswordShown] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // TODO: Add email and password validation

  const handleLoginClick = () => {
    navigation.navigate("PatientStack", { screen: "Home" });
  };

  const handleRegisterClick = () => {
    navigation.navigate("Register");
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

  return (
    <Page>
      <PageTop>
        <TextHeader text="Welcome Back! 👋" subText="Sign in to your Account" />
        <TextInput
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
        />
        <TextInput
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry={!isPasswordShown}
        >
          <Pressable onPress={() => setIsPasswordShown(!isPasswordShown)}>
            <Ionicons
              name={isPasswordShown ? "eye-off" : "eye"}
              size={24}
              color={colors.gray.dark}
            />
          </Pressable>
        </TextInput>
        <ClickableText
          onPress={handleForgotPasswordClick}
          text="Forgot Password?"
          containerStyle={styles.forgotPassword}
        />
      </PageTop>

      <PageBottom>
        <Button
          onPress={handleLoginClick}
          text="Login"
          disabled={!email || !password}
        />

        <Text style={styles.orText}>Or Sign in with</Text>

        <View style={styles.socialContainer}>
          <Pressable
            onPress={handleGoogleLoginClick}
            style={styles.socialButton}
          >
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
        </View>

        <View style={styles.registerContainer}>
          <Text style={styles.registerText}>Don't have an account? </Text>
          <ClickableText
            onPress={handleRegisterClick}
            text="Sign Up"
            textStyle={styles.registerLink}
          />
        </View>
      </PageBottom>
    </Page>
  );
};

export default LoginScreen;
