import { View } from "react-native";

import { createStyles, padding, borderRadius, colors } from "@/styles";

const styles = createStyles({
  container: {
    padding: padding.lg,
    borderRadius: borderRadius.md,
    backgroundColor: colors.white,
  },
});

const Card = ({ children, style }) => {
  return <View style={[styles.container, style]}>{children}</View>;
};

export default Card;
