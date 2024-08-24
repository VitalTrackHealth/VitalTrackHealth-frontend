import { View, Text, StyleSheet, Image, ScrollView } from "react-native";
import { AnimatedCircularProgress } from "react-native-circular-progress";
import COLORS from "../constants/colors";
import { ProgressBar } from "react-native";
import Patientcard from "../ios/components/patientcard";
import { LinearGradient } from "expo-linear-gradient";
import Button from "../ios/components/Buttom";
import FoodDiary from "../ios/components/FoodDiary";
import { TouchableOpacity } from "react-native";
import AddButtom from "../ios/components/AddButtom";
import { AntDesign } from "@expo/vector-icons";
import { Foundation } from "@expo/vector-icons";
import Ionicons from "@expo/vector-icons/Ionicons";
import React, { useState } from "react";
import { handleFood_search } from "../scripts/handle_register";

const PatientHomeScreen = () => {
  const [selectedIcon, setSelectedIcon] = useState(null);
  return (
    <LinearGradient
      colors={["#FFFFFF", "#007260"]}
      style={{ flex: 1, justifyContent: "flex-start", paddingTop: 25 }}
    >
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          position: "absolute",
          top: 0,
          width: "100%",
          backgroundColor: "white",
          padding: 30,
          flex: 1,
          shadowColor: "#000",
          shadowOffset: {
            width: 0,
            height: 2,
          },
          shadowOpacity: 0.25,
          shadowRadius: 3.84,
          elevation: 5,

          marginBottom: 20,
        }}
      >
        <TouchableOpacity
          style={{ marginTop: 20 }}
          onPress={() => setSelectedIcon("setting")}
        >
          <AntDesign
            name="setting"
            size={35}
            color={selectedIcon === "setting" ? "green" : "black"}
          />
        </TouchableOpacity>

        <TouchableOpacity
          style={{ marginTop: 20 }}
          onPress={() => {
            setSelectedIcon("home");
            handleFood_search("potato", "lays");
          }}
        >
          <AntDesign
            name="home"
            size={35}
            color={selectedIcon === "home" ? "green" : "black"}
          />
        </TouchableOpacity>

        <TouchableOpacity
          style={{ marginTop: 20 }}
          onPress={() => setSelectedIcon("restaurant-outline")}
        >
          <Ionicons
            name="restaurant-outline"
            size={35}
            color={selectedIcon === "restaurant-outline" ? "green" : "black"}
          />
        </TouchableOpacity>
      </View>

      <Patientcard> </Patientcard>
      <FoodDiary> </FoodDiary>

      <View
        style={{
          right: 20,
          bottom: 20,
          position: "absolute",
        }}
      >
        <AddButtom> </AddButtom>
      </View>
    </LinearGradient>
  );

  const styles = StyleSheet.create({
    selectedIcon: {
      backgroundColor: "gray", // Change this to the desired background color
    },
    // ...
  });
};

export default PatientHomeScreen;
