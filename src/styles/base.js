import { StyleSheet, Dimensions } from "react-native";

export const dimensions = {
  fullHeight: Dimensions.get("window").height,
  fullWidth: Dimensions.get("window").width,
};

export const colors = {
  primary: "#007260", // Turquoise
  secondary: "#003B7A", // Dark Blue
  accent: "#F4FBFA", // Very Very Light Turquoise
  white: "#FFFFFF",
  black: "#222222",
  gray: "#CCCCCC",
  lightGray: "#F5F5F5",
  darkGray: "#333333",
  lightBlue: "#007d9b",
  orange: "#f08a5d",
};

export const fonts = {
  sm: 12,
  md: 18,
  lg: 28,
  xl: 40,
  xxl: 60,
};

export const padding = {
  sm: 10,
  md: 20,
  lg: 30,
  xl: 40,
};

export const margin = {
  sm: 10,
  md: 20,
  lg: 30,
  xl: 40,
};

export const baseStyles = {
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  header: {
    backgroundColor: "transparent",
    fontSize: fonts.lg,
    fontWeight: "bold",
  },
  section: {
    paddingVertical: padding.lg,
    paddingHorizontal: padding.xl,
  },
};

export const createStyles = (overrides = {}) => {
  return StyleSheet.create({ ...baseStyles, ...overrides });
};
