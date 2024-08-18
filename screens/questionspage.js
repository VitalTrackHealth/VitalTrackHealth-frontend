import react from "react";
import { View } from "react-native";
import { Text } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import Button from "../ios/components/Buttom";
import { useState } from "react";
import { TouchableOpacity } from "react-native";
import COLORS from "../constants/colors";
import { Image } from "react-native";
import { useNavigation } from "@react-navigation/native";

Questions = ({ navigation }) => {
  const [isSupervisorPressed, setSupervisorPressed] = useState(false);
  const [isPatientPressed, setPatientPressed] = useState(false);
  const [showTextPatient, setShowTextPatient] = useState(true);
  const [showTextSupervisor, setShowTextSupervisor] = useState(false);
  const [showTextDefault, setShowTextDefault] = useState(true);

  let isSupervisor = false;
  let isPatient = false;

  return (
    <LinearGradient
      colors={["#FFFFFF", "#007260"]}
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        paddingTop: 25,
      }}
    >
      <View style={{ marginTop: 10, alignItems: "center" }}>
        <Text style={{ textAlign: "center" }}>
          Before starting, please answer some questions
        </Text>
        <Text>What kind of account would you like?</Text>
      </View>
      <View
        style={{
          flexDirection: "row",
          //alignItems: "center",
          backgroundColor: "#007260",
          margin: 10,
          borderRadius: 10,
          padding: 70,
        }}
      >
        <TouchableOpacity
          onPress={() => {
            setSupervisorPressed((prevState) => !prevState);
            isSupervisor = !isSupervisor;
            console.log(isSupervisor);
            setPatientPressed(false);
            setShowTextSupervisor(true);
            setShowTextDefault(false);
          }}
          style={{
            flex: 1,
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "row",
            height: 52,
            borderWidth: 1,
            borderColor: COLORS.grey,
            marginRight: 4,
            marginLeft: 4,
            borderRadius: 10,
            backgroundColor: isSupervisorPressed ? "#b3ecec" : COLORS.white,
          }}
        >
          <Image
            source={require("../assets/supervisor.png")}
            style={{
              height: 40,
              width: 40,
              marginRight: 4,
              resizeMode: "contain",
            }}
          />

          <Text>Provider</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            setPatientPressed((prevState) => !prevState);
            isPatient = !isPatient;
            console.log(isPatient);
            setShowTextPatient(true);
            setShowTextDefault(false);
            setSupervisorPressed(false);
          }}
          style={{
            flex: 1,
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "row",
            height: 52,
            borderWidth: 1,
            borderColor: COLORS.grey,
            marginRight: 4,
            marginLeft: 4,
            borderRadius: 10,
            backgroundColor: isPatientPressed ? "#b3ecec" : COLORS.white,
          }}
        >
          <Image
            source={require("../assets/patient.png")}
            style={{
              height: 40,
              width: 40,
              marginRight: 6,
            }}
            resizeMode="contain"
          />

          <Text>Patient</Text>
        </TouchableOpacity>
      </View>

      {showTextPatient &&
        isPatientPressed &&
        (isPatientPressed ? (
          <View style={{ margin: 30 }}>
            <Text style={{ textAlign: "justify" }}>
              With a Patient Account, you will keep track of your nutrition, add
              a supervsisor to help you with your diet, and learn about
              nutrition!
            </Text>
          </View>
        ) : null)}

      {showTextSupervisor &&
        (isSupervisorPressed ? (
          <View style={{ margin: 30 }}>
            <Text style={{ textAlign: "justify" }}>
              With a Provider Account, you will be able to help your patients
              with their diet, track their nutrition, and learn about nutrition!
            </Text>
          </View>
        ) : null)}

      {showTextDefault && (
        <View style={{ margin: 30 }}>
          <Text style={{ textAlign: "justify" }}>Choose an option!</Text>
        </View>
      )}

      <Button
        onPress={() => {
          console.log(isSupervisorPressed);
          if (isSupervisorPressed == true) navigation.navigate("mainpage");
          if (isPatientPressed == true)
            navigation.navigate("questions-condition");
        }}
        title="Continue"
        style={{
          marginTop: 18,
          marginBottom: 4,
          width: 200,
        }}
      />
    </LinearGradient>
  );
};
export default Questions;
