import { View, Text, Pressable, Image } from "react-native";
import React from "react";

const WelcomeScreen = ({ navigation }) => {
  return (
    <View>
      <Image
        source={require("../assets/logo-no-background.png")}
        style={{ width: 300, height: 300 }}
        resizeMode="contain"
      />
      <View>
        <Text> Let's get started</Text>
        <View>
          <Text>
            Creating a bridge between healthcare professionals and nutrition
          </Text>
        </View>
        <Pressable
          onPress={() =>
            navigation.navigate("PatientStack", { screen: "Login" })
          }
        >
          <Text>Patient</Text>
        </Pressable>
        <Pressable
          onPress={() =>
            navigation.navigate("ProviderStack", { screen: "Home" })
          }
        >
          <Text>Provider</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default WelcomeScreen;
