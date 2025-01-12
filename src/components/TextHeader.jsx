import React from "react";
import { Text, View } from "react-native";
import { createStyles, fonts, colors, margin } from "@/styles";

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
    color: colors.lightNeutral.medium,
    textAlign: "center",
  },
});

const TextHeader = ({ text, subText, style, textStyle, subTextStyle }) => {
  return (
    <View style={[styles.container, style]}>
      <Text style={[styles.text, textStyle]}>{text}</Text>
      <Text style={[styles.subText, subTextStyle]}>{subText}</Text>
    </View>
  );
};

export default TextHeader;
