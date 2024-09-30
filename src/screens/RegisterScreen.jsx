import React, { useState } from "react";
import { View, Text, Pressable } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import {
  Button,
  TextHeader,
  TextInput,
  Page,
  PageTop,
  PageBottom,
  Checkbox,
  ClickableText,
} from "@/components";
import { handleRegister } from "@/services";
import { colors } from "@/styles";
import { emailComplexity, passwordComplexity } from "@/utils";
import { createStyles, fonts, margin } from "@/styles";
import { useSnackbar } from "@/context";
const RegisterScreen = ({ navigation }) => {
  // User context for state across register screens
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [isPasswordShown, setIsPasswordShown] = useState(false);
  const [isTermsChecked, setIsTermsChecked] = useState(false);

  const { showSnackbar } = useSnackbar();

  const handleLoginClick = () => {
    navigation.navigate("Login");
  };

  const handleSignUpClick = async () => {
    if (!emailComplexity(email)) {
      showSnackbar("Please enter a valid email address", "warning");
    } else if (!passwordComplexity(password)) {
      showSnackbar(
        "Password must be at least 8 characters long, have one special character, one uppercase and one lowercase letter",
        "warning"
      );
    } else {
      const result = await handleRegister({
        firstName,
        lastName,
        phoneNumber,
        email,
        password,
      });

      if (result.success) {
        navigation.navigate("Auth", {
          screen: "RegisterConditionQuestion",
          params: { email: result.results.data.email },
        });
      } else {
        console.log("Registration failed:", result.error);
        showSnackbar(result.error, "error");
      }
    }
  };

  return (
    <Page>
      <PageTop>
        <TextHeader
          text="Create an Account ☀️"
          subText="Take control of your nutrition today!"
        />
        <View style={styles.nameContainer}>
          <TextInput
            placeholder="First Name"
            value={firstName}
            onChangeText={setFirstName}
            keyboardType="default"
            containerStyle={styles.halfWidthInput}
          />
          <TextInput
            placeholder="Last Name"
            value={lastName}
            onChangeText={setLastName}
            keyboardType="default"
            containerStyle={styles.halfWidthInput}
          />
        </View>
        <TextInput
          placeholder="Email address"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
        />
        <TextInput
          placeholder="Mobile Number"
          value={phoneNumber}
          onChangeText={setPhoneNumber}
          keyboardType="numeric"
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
      </PageTop>

      <PageBottom>
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
            onPress={handleLoginClick}
            text="Login"
            textStyle={styles.loginLink}
          />
        </View>
      </PageBottom>
    </Page>
  );
};

const styles = createStyles({
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
    color: colors.gray.med,
    fontSize: fonts.md,
  },
  loginLink: {
    color: colors.primary,
    fontWeight: "bold",
    fontSize: fonts.md,
  },
});

export default RegisterScreen;
