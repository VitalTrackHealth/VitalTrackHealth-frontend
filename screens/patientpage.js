import { View, Text, StyleSheet, Image, ScrollView } from "react-native";
import { AnimatedCircularProgress } from "react-native-circular-progress";
import COLORS from "../constants/colors";
import { ProgressBar } from "react-native";
import Patientcard from "../ios/components/patientcard";
import { LinearGradient } from "expo-linear-gradient";
import Button from "../ios/components/Buttom";
import { TouchableOpacity } from "react-native";

const Patientpage = () => {
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
        <TouchableOpacity>
          <Image
            source={require("../assets/patient.png")}
            style={{
              height: 40,
              width: 40,
              marginRight: 6,
              marginTop: 10,
            }}
            resizeMode="contain"
          />
        </TouchableOpacity>

        <TouchableOpacity>
          <Image
            source={require("../assets/patient.png")}
            style={{
              height: 40,
              width: 40,
              marginRight: 6,
              marginTop: 10,
            }}
            resizeMode="contain"
          />
        </TouchableOpacity>

        <TouchableOpacity>
          <Image
            source={require("../assets/supervisor.png")}
            style={{
              height: 40,
              width: 40,
              marginRight: 6,
              marginTop: 10,
            }}
            resizeMode="contain"
          />
        </TouchableOpacity>
      </View>

      <Patientcard> </Patientcard>

      <Button // Button should send user to the Food Diary page
        onPress={() => {
          console.log("Food Diary button pressed");
        }}
        title="Food Diary"
        style={{
          marginTop: 18,
          marginBottom: 4,
        }}
      />

      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-around",
          position: "absolute",
          bottom: 0,
          width: "100%",
          backgroundColor: "white",
          padding: 30,
        }}
      ></View>
    </LinearGradient>
  );
};

export default Patientpage;
