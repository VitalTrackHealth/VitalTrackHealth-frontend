import React, { useState } from "react";
import {
  Button,
  View,
  Text,
  Pressable,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Checkbox from "expo-checkbox";

import { useUser } from "@/context";
import { handleRegister } from "@/services";
import { colors } from "@/styles";
import { emailComplexity, passwordComplexity } from "@/utils";

const RegisterScreen = ({ navigation }) => {
  // User context for state across register screens
  const { user, setUser } = useUser();
  const [name, setName] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [isPasswordShown, setIsPasswordShown] = useState(false);
  const [isChecked, setIsChecked] = useState(false);

  const [emailWarning, setEmailWarning] = useState("");
  const [passwordWarning, setPasswordWarning] = useState("");

  const handlerSignUpClick = async () => {
    if (!emailComplexity(email))
      setEmailWarning("* Please enter a valid email address");
    else if (!passwordComplexity(password))
      setPasswordWarning(
        "* Password must be at least 8 characters long,  have one special character one uppercase and one lowercase letter"
      );
    else {
      const result = await handleRegister({
        firstName,
        lastName,
        phoneNumber,
        email,
        password,
      });

      if (result.success) {
        navigation.navigate("PatientStack", {
          screen: "RegisterConditionQuestion",
          params: { email: result.results.data.email },
        });
      } else {
        console.error("Registration failed:", result.error);
      }
    }
  };

  return (
    <View
      style={{ flex: 1, marginHorizontal: 22, backgroundColor: colors.white }}
    >
      <View style={{ marginVertical: 22 }}>
        <Text
          style={{
            fontSize: 22,
            fontWeight: "bold",
            marginVertical: 12,
            color: colors.black,
          }}
        >
          Create Account
        </Text>

        <Text
          style={{
            fontSize: 16,
            color: colors.black,
          }}
        >
          Connect with your nutrition today!
        </Text>
      </View>

      <View style={{ marginBottom: 12 }}>
        <Text
          style={{
            fontSize: 16,
            fontWeight: 400,
            marginVertical: 8,
          }}
        >
          Name
        </Text>
        <View
          style={{
            width: "100%",
            height: 48,
            borderColor: colors.black,
            borderWidth: 1,
            borderRadius: 8,
            alignItems: "center",
            justifyContent: "center",
            paddingLeft: 22,
          }}
        >
          <TextInput
            placeholder="Enter your full name"
            placeholderTextColor={"#000000"}
            keyboardType="default"
            style={{
              width: "100%",
            }}
            onChangeText={(text) => {
              setName(text);
            }}
          />
        </View>
      </View>

      <View style={{ marginBottom: 12 }}>
        <Text
          style={{
            fontSize: 16,
            fontWeight: 400,
            marginVertical: 8,
          }}
        >
          Email address
        </Text>
        <View
          style={{
            width: "100%",
            height: 48,
            borderColor: colors.black,
            borderWidth: 1,
            borderRadius: 8,
            alignItems: "center",
            justifyContent: "center",
            paddingLeft: 22,
          }}
        >
          <TextInput
            placeholder="Enter your email address"
            placeholderTextColor={"#000000"}
            keyboardType="email-address"
            style={{
              width: "100%",
            }}
            onChangeText={(text) => {
              setEmail(text);
              setEmailWarning("");
            }}
            value={email}
          />
        </View>

        {emailWarning ? (
          <Text style={{ color: "red" }}>{emailWarning}</Text>
        ) : null}
      </View>

      <View style={{ marginBottom: 12 }}>
        <Text
          style={{
            fontSize: 16,
            fontWeight: 400,
            marginVertical: 8,
          }}
        >
          Mobile Number
        </Text>

        <View
          style={{
            width: "100%",
            height: 48,
            borderColor: "#000000",
            borderWidth: 1,
            borderRadius: 8,
            alignItems: "center",
            flexDirection: "row",
            justifyContent: "space-between",
            paddingLeft: 22,
          }}
        >
          <TextInput
            placeholder="+1"
            placeholderTextColor={"#000000"}
            keyboardType="numeric"
            style={{
              width: "12%",
              borderRightWidth: 1,
              borderLeftColor: colors.grey,
              height: "100%",
            }}
          />

          <TextInput
            placeholder="Enter your phone number"
            placeholderTextColor={"#000000"}
            keyboardType="numeric"
            style={{
              width: "80%",
            }}
            onChangeText={(text) => {
              setPhoneNumber(text);
            }}
          />
        </View>
      </View>

      <View style={{ marginBottom: 12 }}>
        <Text
          style={{
            fontSize: 16,
            fontWeight: 400,
            marginVertical: 8,
          }}
        >
          Password
        </Text>

        <View
          style={{
            width: "100%",
            height: 48,
            borderColor: "#000000",
            borderWidth: 1,
            borderRadius: 8,
            alignItems: "center",
            justifyContent: "center",
            paddingLeft: 22,
          }}
        >
          <TextInput
            placeholder="Enter your password"
            placeholderTextColor={"#000000"}
            secureTextEntry={isPasswordShown}
            style={{
              width: "100%",
            }}
            onChangeText={(text) => {
              setPassword(text);
              setPasswordWarning("");
            }}
            value={password}
          />

          <TouchableOpacity
            onPress={() => setIsPasswordShown(!isPasswordShown)}
            style={{
              position: "absolute",
              right: 12,
            }}
          >
            {isPasswordShown == true ? (
              <Ionicons name="eye-off" size={24} color={"#000000"} />
            ) : (
              <Ionicons name="eye" size={24} color="#000000" />
            )}
          </TouchableOpacity>
        </View>
        {passwordWarning ? (
          <Text style={{ color: "red" }}>{passwordWarning}</Text>
        ) : null}
      </View>

      <View
        style={{
          flexDirection: "row",
          marginVertical: 6,
        }}
      >
        <Checkbox
          style={{ marginRight: 8 }}
          value={isChecked}
          onValueChange={setIsChecked}
          color={isChecked ? colors.primary : undefined}
        />

        <Text>I agree to the terms and conditions</Text>
      </View>

      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
        }}
      ></View>

      <Button
        onPress={handlerSignUpClick}
        title="Sign Up"
        filled
        style={{
          marginTop: 18,
          marginBottom: 4,
        }}
      />

      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          marginVertical: 22,
        }}
      >
        <Text style={{ fontSize: 16, color: colors.black }}>
          Already have an account
        </Text>
        <Pressable onPress={() => navigation.navigate("Login")}>
          <Text
            style={{
              fontSize: 16,
              color: colors.primary,
              fontWeight: "bold",
              marginLeft: 6,
            }}
          >
            Login
          </Text>
        </Pressable>
      </View>
    </View>
  );
};

export default RegisterScreen;
