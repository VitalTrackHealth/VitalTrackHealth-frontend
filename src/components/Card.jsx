import { View } from "react-native";

import TextHeader from "@/components/TextHeader";
import { createStyles, padding, borderRadius, colors, margin } from "@/styles";

const styles = createStyles({
  container: {
    padding: padding.lg,
    borderRadius: borderRadius.md,
    backgroundColor: colors.white,
  },
  cardHeader: {
    marginTop: 0,
    paddingTop: 0,
    marginBottom: margin.md,
    textAlign: "left",
    color: colors.lightNeutral.dark,
  },
});

const Card = ({ children, style, headerText, headerTextStyle }) => {
  return (
    <View style={[styles.container, style]}>
      {headerText && (
        <TextHeader
          text={headerText}
          textStyle={[styles.cardHeader, headerTextStyle]}
        />
      )}
      {children}
    </View>
  );
};

export default Card;
