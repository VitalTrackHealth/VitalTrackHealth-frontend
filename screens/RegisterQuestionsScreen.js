import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";

import { Button } from "../components";
import COLORS from "../constants/colors";

const ConditionQuestions = ({ navigation }) => {
  const [selectedCondition, setSelectedCondition] = useState(null);

  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.text}>
          What type of chronic condition do you have?
        </Text>
      </View>
      <View style={styles.conditionContainer}>
        {["Diabetes", "Stroke", "Hypertension", "Cardiovascular-Disease"].map(
          (condition, index) => (
            <TouchableOpacity
              key={index}
              style={[
                styles.buttonOption,
                selectedCondition === condition && styles.selectedButtonOption,
              ]}
              onPress={() => setSelectedCondition(condition)}
            >
              <Text
                style={[
                  styles.buttonText,
                  selectedCondition === condition && styles.selectedButtonText,
                ]}
              >
                {condition}
              </Text>
            </TouchableOpacity>
          )
        )}
      </View>
      <Button
        onPress={() =>
          navigation.navigate("PatientStack", {
            screen: "Home",
            condition: selectedCondition,
          })
        }
        title="Continue"
        color="black"
        style={{
          marginTop: 18,
          backgroundColor: "#6EA9BC",
          marginBottom: 4,
          width: 200,
        }}
      />
    </View>
  );
};

const styles = {
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  textContainer: {
    marginTop: 10,
    alignItems: "center",
  },
  text: {
    textAlign: "center",
    fontSize: 18,
    marginBottom: 20,
  },
  conditionContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
    width: "90%",
    backgroundColor: COLORS.primary,
    padding: 30,
    margin: 20,
    borderRadius: 20,
  },
  buttonOption: {
    backgroundColor: "white",
    padding: 20,
    borderRadius: 10,
    margin: 10,
    width: "40%",
    alignItems: "center",
  },
  selectedButtonOption: {
    backgroundColor: COLORS.secondary,
  },
  buttonText: {
    color: "black",
    fontSize: 16,
    textAlign: "center",
  },
  selectedButtonText: {
    color: "white",
  },
  buttonTextContinue: {
    color: "white",
    fontSize: 18,
  },
  button: {
    marginTop: 18,
    width: "50%",
    backgroundColor: "blue",
    padding: 10,
    alignItems: "center",
    borderRadius: 10,
  },
};

export default ConditionQuestions;
