import React from "react";
import { View, Text } from "react-native";
import ExpoCheckbox from "expo-checkbox";

import { createStyles, margin, fonts, colors } from "@/styles";

const styles = createStyles({
  container: {
    flexDirection: "row",
    alignItems: "center",
  },
  checkbox: {
    marginHorizontal: margin.sm,
  },
  label: {
    fontSize: fonts.md,
    color: colors.gray.medium,
  },
});

const Checkbox = ({
  label,
  checked,
  onValueChange,
  labelPosition = "right",
  labelStyle,
  containerStyle,
}) => {
  const checkboxWithLabel = [
    labelPosition === "left" && label && (
      <Text key="label" style={[styles.label, labelStyle]}>
        {label}
      </Text>
    ),
    <ExpoCheckbox
      key="checkbox"
      value={checked}
      onValueChange={onValueChange}
      style={styles.checkbox}
      color={checked ? colors.primary : undefined}
    />,
    labelPosition === "right" && label && (
      <Text key="label" style={[styles.label, labelStyle]}>
        {label}
      </Text>
    ),
  ];

  return (
    <View style={[styles.container, containerStyle]}>{checkboxWithLabel}</View>
  );
};

export default Checkbox;
