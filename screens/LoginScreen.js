import {
  Button,
  View,
  Text,
  Image,
  Pressable,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { colors } from "../constants";
import { Ionicons } from "@expo/vector-icons";
import Checkbox from "expo-checkbox";

const LoginScreen = ({ navigation }) => {
  const [isPasswordShown, setIsPasswordShown] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const [EMAIL, setEmail] = useState("");
  const [PASSWORD, setPassword] = useState("");
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
          Hi Welcome Back ! 👋
        </Text>

        <Text
          style={{
            fontSize: 16,
            color: colors.black,
          }}
        >
          Hello again you have been missed!
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
            borderColor: colors.black,
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
            }}
          />

          <TouchableOpacity
            onPress={() => setIsPasswordShown(!isPasswordShown)}
            style={{
              position: "absolute",
              right: 12,
            }}
          >
            {isPasswordShown == true ? (
              <Ionicons name="eye-off" size={24} color={colors.black} />
            ) : (
              <Ionicons name="eye" size={24} color={colors.black} />
            )}
          </TouchableOpacity>
        </View>
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

        <Text>Remember Me</Text>
      </View>
      <Button
        onPress={() => navigation.navigate("PatientStack", { screen: "Home" })}
        title="Login"
        color="#841584"
      />

      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          marginVertical: 20,
        }}
      >
        <View
          style={{
            flex: 1,
            height: 1,
            backgroundColor: colors.grey,
            marginHorizontal: 10,
          }}
        />
        <Text style={{ fontSize: 14 }}>Or Login with</Text>
        <View
          style={{
            flex: 1,
            height: 1,
            backgroundColor: colors.grey,
            marginHorizontal: 10,
          }}
        />
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
        }}
      >
        <TouchableOpacity
          onPress={() => console.log("click")}
          style={{
            flex: 1,
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "row",
            height: 52,
            borderWidth: 1,
            borderColor: colors.grey,
            marginRight: 4,
            borderRadius: 10,
          }}
        >
          <Image
            source={require("../assets/trail-track2.png")}
            style={{
              height: 36,
              width: 36,
              marginRight: 8,
            }}
            resizeMode="contain"
          />

          <Text>Facebook</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => console.log("Pressed")}
          style={{
            flex: 1,
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "row",
            height: 52,
            borderWidth: 1,
            borderColor: colors.grey,
            marginRight: 4,
            borderRadius: 10,
          }}
        >
          <Image
            source={require("../assets/trail-track2.png")}
            style={{
              height: 36,
              width: 36,
              marginRight: 8,
            }}
            resizeMode="contain"
          />

          <Text>Google</Text>
        </TouchableOpacity>
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          marginVertical: 22,
        }}
      >
        <Text style={{ fontSize: 16, color: colors.black }}>
          Don't have an account ?{" "}
        </Text>
        <Pressable onPress={() => navigation.navigate("Register")}>
          <Text
            style={{
              fontSize: 16,
              color: colors.primary,
              fontWeight: "bold",
              marginLeft: 6,
            }}
          >
            Register
          </Text>
        </Pressable>
      </View>
    </View>
  );
};

export default LoginScreen;
