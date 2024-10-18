import { useRef } from "react";
import { Pressable, Animated } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import { createStyles, colors, padding, borderRadius } from "@/styles";

const styles = createStyles({
  container: {
    padding: padding.sm,
    borderRadius: borderRadius.lg,
    alignItems: "center",
    justifyContent: "center",
  },
  primary: {
    backgroundColor: colors.primary,
  },
  secondary: {
    backgroundColor: "transparent",
  },
  pressed: {
    opacity: 0.8,
  },
  disabled: {
    backgroundColor: colors.lightNeutral.light,
  },
});

const BackButton = ({
  onPress = () => {},
  style = {},
  iconStyle = {},
  variant = "primary",
  disabled = false,
  size = 24,
}) => {
  const buttonStyle = [styles.container, styles[variant], style];
  const iconColor =
    variant === "primary" ? colors.white : colors.lightNeutral.dark;

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
        <Ionicons
          name="arrow-back"
          size={size}
          color={iconColor}
          style={iconStyle}
        />
      </Pressable>
    </Animated.View>
  );
};

export default BackButton;
