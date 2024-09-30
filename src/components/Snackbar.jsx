import { useEffect, useRef } from "react";
import { Text, Animated, Pressable } from "react-native";
import { AntDesign } from "@expo/vector-icons";

import {
  createStyles,
  colors,
  padding,
  margin,
  borderRadius,
  fonts,
} from "@/styles";
import { useSnackbar } from "@/context";

const Snackbar = () => {
  const { snackbar, hideSnackbar } = useSnackbar();
  const { visible, message, variant } = snackbar;
  const opacity = useRef(new Animated.Value(0)).current;
  const timeoutRef = useRef(null);

  const startDismissTimer = () => {
    timeoutRef.current = setTimeout(() => {
      Animated.timing(opacity, {
        toValue: 0,
        duration: 100,
        useNativeDriver: true,
      }).start(() => {
        hideSnackbar();
      });
    }, 10000);
  };

  useEffect(() => {
    if (visible) {
      Animated.timing(opacity, {
        toValue: 1,
        duration: 100,
        useNativeDriver: true,
      }).start();
      startDismissTimer();
    }
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [visible]);

  const handleDismiss = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    Animated.timing(opacity, {
      toValue: 0,
      duration: 100,
      useNativeDriver: true,
    }).start(() => {
      hideSnackbar();
    });
  };

  if (!visible) return null;

  return (
    <Animated.View style={[styles.container, styles[variant], { opacity }]}>
      <Text style={[styles.message, styles[`${variant}Text`]]}>{message}</Text>
      <Pressable onPress={handleDismiss} style={styles.dismissButton}>
        <AntDesign
          name="close"
          size={20}
          color={variant === "warning" ? colors.black : colors.white}
        />
      </Pressable>
    </Animated.View>
  );
};

const styles = createStyles({
  container: {
    position: "absolute",
    bottom: margin.xl,
    left: margin.lg,
    right: margin.lg,
    padding: padding.md,
    borderRadius: borderRadius.md,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    elevation: 6,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.15,
    shadowRadius: 5,
  },
  default: {
    backgroundColor: colors.gray.dark,
  },
  success: {
    backgroundColor: colors.green.medium,
  },
  error: {
    backgroundColor: colors.red.medium,
  },
  warning: {
    backgroundColor: colors.yellow.lightest,
  },
  message: {
    flex: 1,
    fontSize: fonts.md,
    marginRight: margin.sm,
  },
  defaultText: {
    color: colors.white,
  },
  successText: {
    color: colors.white,
  },
  errorText: {
    color: colors.white,
  },
  warningText: {
    color: colors.black,
  },
  dismissButton: {
    padding: padding.sm,
  },
});

export default Snackbar;
