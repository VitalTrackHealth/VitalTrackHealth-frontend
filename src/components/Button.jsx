import { useRef } from "react";
import { Text, Pressable, Animated } from "react-native";

import { createStyles, colors, fonts, padding, borderRadius } from "@/styles";

const styles = createStyles({
  container: {
    paddingVertical: padding.md,
    paddingHorizontal: padding.md,
    borderRadius: borderRadius.md,
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
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
  disabled: {
    backgroundColor: colors.lightNeutral.light,
  },
});

const Button = ({
  text = "",
  onPress = () => {},
  style = {},
  textStyle = {},
  variant = "primary",
  disabled = false,
}) => {
  const buttonStyle = [styles.container, styles[variant], style];
  const buttonTextStyle = [styles.text, styles[`${variant}Text`], textStyle];

  // Animation
  const scaleAnim = useRef(new Animated.Value(1)).current;
  const onPressIn = () => {
    Animated.spring(scaleAnim, {
      toValue: 0.95,
      useNativeDriver: true,
    }).start();
  };

  const onPressOut = () => {
    Animated.spring(scaleAnim, {
      toValue: 1,
      useNativeDriver: true,
    }).start();
  };

  return (
    <Animated.View style={{ transform: [{ scale: scaleAnim }] }}>
      <Pressable
        style={({ pressed }) => [
          buttonStyle,
          pressed && styles.pressed,
          disabled && styles.disabled,
        ]}
        onPress={onPress}
        onPressIn={onPressIn}
        onPressOut={onPressOut}
        disabled={disabled}
      >
        <Text style={buttonTextStyle}>{text}</Text>
      </Pressable>
    </Animated.View>
  );
};

export default Button;
