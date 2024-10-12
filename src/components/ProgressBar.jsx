import React from "react";
import { View } from "react-native";

import { createStyles, colors } from "@/styles";

const styles = createStyles({
  container: {
    backgroundColor: colors.lightNeutral.light,
    borderRadius: 5,
    overflow: "hidden",
  },
  filler: {
    height: "100%",
    borderRadius: 5,
  },
});

const ProgressBar = ({
  progress,
  width = "100%",
  height = 10,
  fillerColor = colors.primary,
}) => {
  const filledWidth = `${Math.min(Math.max(progress, 0), 100)}%`;

  return (
    <View style={[styles.container, { width, height }]}>
      <View
        style={[
          styles.filler,
          { width: filledWidth, backgroundColor: fillerColor },
        ]}
      />
    </View>
  );
};

export default ProgressBar;
