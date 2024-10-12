import React from "react";
import { View } from "react-native";

import { createStyles } from "@/styles";

const styles = createStyles({
  container: {},
});

const PageCell = ({ children, style }) => {
  return <View style={[styles.container, style]}>{children}</View>;
};

export default PageCell;
