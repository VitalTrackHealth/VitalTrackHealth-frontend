import { Text, Pressable } from "react-native";

import { createStyles, colors, fonts, padding } from "@/styles";

const styles = createStyles({
  container: {
    paddingVertical: padding.sm,
    paddingHorizontal: padding.md,
    borderRadius: 16,
    alignItems: "center",
    justifyContent: "center",
  },
  primary: {
    backgroundColor: colors.primary,
  },
  secondary: {
    backgroundColor: "transparent",
    borderWidth: 1,
    borderColor: colors.primary,
  },
  text: {
    fontSize: fonts.md,
    fontWeight: "600",
  },
  primaryText: {
    color: colors.white,
  },
  secondaryText: {
    color: colors.primary,
  },
  pressed: {
    opacity: 0.8,
  },
});

const Button = ({
  text = "",
  onPress = () => {},
  style = {},
  textStyle = {},
  variant = "primary",
}) => {
  const buttonStyle = [styles.container, styles[variant], style];
  const buttonTextStyle = [styles.text, styles[`${variant}Text`], textStyle];

  return (
    <Pressable
      style={({ pressed }) => [buttonStyle, pressed && styles.pressed]}
      onPress={onPress}
    >
      <Text style={buttonTextStyle}>{text}</Text>
    </Pressable>
  );
};

export default Button;
