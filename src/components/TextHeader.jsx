import React from "react";
import { Text, View } from "react-native";
import { createStyles, fonts, colors, margin } from "@/styles";

const TextHeader = ({ text, subText, style, textStyle, subTextStyle }) => {
  return (
    <View style={[styles.container, style]}>
      <Text style={[styles.text, textStyle]}>{text}</Text>
      <Text style={[styles.subText, subTextStyle]}>{subText}</Text>
    </View>
  );
};

const styles = createStyles({
  container: {
    marginVertical: margin.lg,
  },
  text: {
    fontSize: fonts.lg,
    fontWeight: "bold",
    marginBottom: margin.sm,
    textAlign: "center",
  },
  subText: {
    fontSize: fonts.md,
    color: colors.gray.medium,
    textAlign: "center",
  },
});

export default TextHeader;
