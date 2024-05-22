import React from "react";
import { StyleSheet, View, TouchableOpacity, Image, Text } from "react-native";
import COLORS from "../../constants/colors";
import Ring from "./ring";
import { AnimatedCircularProgress } from "react-native-circular-progress";

export default function Patientcard(props) {
  return (
    <View
      style={{
       
        borderRadius: 10,
        elevation: 3,
        backgroundColor: "rgba(255, 255, 255, 0.2)", // semi-transparent white
        shadowOffset: { width: 1, height: 1 },
        shadowColor: "rgba(255, 255, 255, 0.0)",
        borderWidth: 0.7,
        borderColor: COLORS.primary,
        flexDirection: "row",
        shadowOpacity: 0.3,
        shadowRadius: 2,
        marginHorizontal: 4,
        marginVertical: 6,
        marginTop: 50,
        padding: 20,
      }}
    >
      <View style={{ backgroundColor: "red", margin: 10 }}>
        <AnimatedCircularProgress
          size={100}
          width={12}
          fill={80}
          tintColor="#007260"
          onAnimationComplete={() => console.log("onAnimationComplete")}
          backgroundColor="#C1C7C9"
        ></AnimatedCircularProgress>
        <Text> Hello world</Text>
      </View>

      <View style={{ backgroundColor: "blue", margin: 10 }}>
        <AnimatedCircularProgress
          size={100}
          width={12}
          fill={80}
          tintColor="yellow"
          onAnimationComplete={() => console.log("onAnimationComplete")}
          backgroundColor="#C1C7C9"
        ></AnimatedCircularProgress>
        <Text> Hello world</Text>
      </View>

      <View style={{ backgroundColor: "green", margin: 10 }}>
        <AnimatedCircularProgress
          size={100}
          width={12}
          fill={80}
          tintColor="blue"
          onAnimationComplete={() => console.log("onAnimationComplete")}
          backgroundColor="#C1C7C9"
        ></AnimatedCircularProgress>
        <Text> Hello world</Text>
      </View>
      <Text> Hello world</Text>
    </View>
  );
}
