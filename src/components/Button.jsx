import { useRef } from "react";
import { Text, Pressable, Animated } from "react-native";

import { createStyles, colors, fonts, padding, borderRadius } from "@/styles";

const Button = ({
  text = "",
  onPress = () => {},
  style = {},
  textStyle = {},
  variant = "default",
  danger,
  disabled,
}) => {
  const getButtonStyle = () => {
    const baseStyle = [styles.container, styles[variant], style];
    if (danger && !disabled) {
      baseStyle.push(styles.danger);
    }
    if (disabled) {
      baseStyle.push(styles.disabled);
    }
    if (variant === "outlined" && !disabled) {
      baseStyle.push({
        borderColor: danger ? colors.red.medium : colors.primary,
      });
    }
    return baseStyle;
  };

  const getTextStyle = () => {
    const baseTextStyle = [styles.text, styles[`${variant}Text`], textStyle];
    if (danger && !disabled) {
      baseTextStyle.push(styles.dangerText);
    }
    if (disabled) {
      baseTextStyle.push(styles.disabledText);
    }
    return baseTextStyle;
  };
  const buttonStyle = getButtonStyle();
  const buttonTextStyle = getTextStyle();

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
        style={({ pressed }) => [buttonStyle, pressed && styles.pressed]}
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

const styles = createStyles({
  container: {
    paddingVertical: padding.md,
    paddingHorizontal: padding.md,
    borderRadius: borderRadius.md,
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
  },
  // Variants
  default: {
    backgroundColor: colors.primary,
  },
  outlined: {
    backgroundColor: "transparent",
    borderWidth: 1,
    borderColor: colors.primary,
  },
  // States
  danger: {
    backgroundColor: colors.red.medium,
  },
  disabled: {
    backgroundColor: colors.lightNeutral.light,
  },
  // Text styles
  text: {
    fontSize: fonts.md,
    fontWeight: "600",
  },
  defaultText: {
    color: colors.white,
  },
  outlinedText: {
    color: colors.primary,
  },
  dangerText: {
    color: colors.white,
  },
  disabledText: {
    color: colors.lightNeutral.medium,
  },
  pressed: {
    opacity: 0.8,
  },
});

export default Button;
