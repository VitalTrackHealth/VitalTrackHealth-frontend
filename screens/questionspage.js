import react from "react";
import { View } from "react-native";
import { Text } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import Button from "../ios/components/Buttom";
import { useState } from "react";
import { TouchableOpacity } from "react-native";
import COLORS from "../constants/colors";
import { Image } from "react-native";

Questions = () => {
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
        justifyContent: "flex-start",
        alignItems: "center",
        paddingTop: 25,
      }}
    >
      <View>
        <Text>Before starting, please answer some questions</Text>
        <Text>What kind of account would you like?</Text>
      </View>

      <View style={{ flexDirection: "row" }}>
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
            }}
            resizeMode="contain"
          />

          <Text>Supervisor</Text>
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
              a supervsssisor to help you with your diet, and learn about
              nutrition!
            </Text>
          </View>
        ) : null)}

      {showTextSupervisor &&
        (isSupervisorPressed ? (
          <View style={{ margin: 30 }}>
            <Text style={{ textAlign: "justify" }}>
              With a Patient Account, you will keep track of your nutrition, add
              a supervisor to help you with your diet, and learn about
              nutrition!
            </Text>
          </View>
        ) : null)}

      {showTextDefault && (
        <View style={{ margin: 30 }}>
          <Text style={{ textAlign: "justify" }}>Default text</Text>
        </View>
      )}
    </LinearGradient>
  );
};
export default Questions;
