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

const RegisterScreen = ({ navigation }) => {
  // User context for state across register screens
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [isPasswordShown, setIsPasswordShown] = useState(false);
  const [isTermsChecked, setIsTermsChecked] = useState(false);

  const [emailWarning, setEmailWarning] = useState("");
  const [passwordWarning, setPasswordWarning] = useState("");
  const [showWarningModal, setShowWarningModal] = useState(false);
  const [warningMessage, setWarningMessage] = useState("");

  const handleLoginClick = () => {
    navigation.navigate("Login");
  };

  const handleSignUpClick = async () => {
    let warningMessage = "Registration failed. Please try again.";

    if (!emailComplexity(email)) {
      warningMessage = "Please enter a valid email address";
      setEmailWarning(warningMessage);
      setWarningMessage(warningMessage);
      setShowWarningModal(true);
    } else if (!passwordComplexity(password)) {
      warningMessage =
        "Password must be at least 8 characters long, have one special character, one uppercase and one lowercase letter";
      setPasswordWarning(warningMessage);
      setWarningMessage(warningMessage);
      setShowWarningModal(true);
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
        console.error("Registration failed:", result.error);
        setWarningMessage(warningMessage);
        setShowWarningModal(true);
      }
    }
  };

  const closeWarningModal = () => {
    setShowWarningModal(false);
    setWarningMessage("");
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
