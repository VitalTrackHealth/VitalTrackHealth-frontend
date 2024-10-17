import React from "react";
import { View, ScrollView } from "react-native";

import { createStyles, padding } from "@/styles";

const styles = createStyles({
  container: {
    flex: 1,
    padding: padding.lg,
  },
  content: {},
});

const Page = ({ children, containerStyle, contentStyle }) => {
  return (
    <View style={[styles.container, containerStyle]}>
      <ScrollView style={[styles.content, contentStyle]}>{children}</ScrollView>
    </View>
  );
};

export default Page;
