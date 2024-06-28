import { Text, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";
//import COLORS from '../constants/colors'

const Button = (props) => {
  const filledBgColor = props.color || "#007260";
  const outlinedColor = "#FFFFFF";
  const bgColor = props.filled ? filledBgColor : outlinedColor;
  const textColor = props.filled ? "#FFFFFF" : "#007260";

  return (
    <TouchableOpacity
      style={{
        ...styles.button,
        ...{ backgroundColor: bgColor },
        ...props.style,
      }}
      onPress={props.onPress}
    >
      <Text style={{ fontSize: 18, ...{ color: textColor } }}>
        {props.title}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    paddingBottom: 16,
    paddingVertical: 10,
    borderColor: "#FFFFFF",
    borderWidth: 2,
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
    marginBottom: 10,
    marginHorizontal: 10,
  },
});
export default Button;
