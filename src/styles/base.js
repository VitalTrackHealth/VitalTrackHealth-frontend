import { StyleSheet, Dimensions } from "react-native";

export const dimensions = {
  fullHeight: Dimensions.get("window").height,
  fullWidth: Dimensions.get("window").width,
};

export const colors = {
  primary: "#40ade0", // Blue
  secondary: "#dd3830", // Red
  tertiary: "#e6cf66", // Yellowish
  white: "#FFFFFF",
  black: "#222222",
  gray: {
    lightest: "#e5e5e5",
    light: "#a3a3a3",
    medium: "#737373",
    dark: "#262626",
    darkest: "#0a0a0a",
  },

  // General colors
  // Created with https://huey.design
  lightBlue: {
    lightest: "#a4d7f0",
    light: "#40ade0",
    medium: "#1c7fad",
    dark: "#135472",
    darkest: "#0a2d3d",
  },
  blue: {
    lightest: "#c7cef6",
    light: "#919ded",
    medium: "#596be4",
    dark: "#2238ce",
    darkest: "#121e6f",
  },
  violet: {
    lightest: "#dbc7f6",
    light: "#b791ed",
    medium: "#9157e3",
    dark: "#6320c4",
    darkest: "#36116a",
  },
  pink: {
    lightest: "#f5c1db",
    light: "#ea80b4",
    medium: "#dc2982",
    dark: "#941856",
    darkest: "#500d2f",
  },
  red: {
    lightest: "#f5c4c2",
    light: "#ea8781",
    medium: "#dd3830",
    dark: "#971f19",
    darkest: "#53110e",
  },
  orange: {
    lightest: "#efc99c",
    light: "#de9234",
    medium: "#a7691b",
    dark: "#6f4512",
    darkest: "#3a250a",
  },
  yellow: {
    lightest: "#e6cf66",
    light: "#bca01f",
    medium: "#8a7617",
    dark: "#5b4e0f",
    darkest: "#302908",
  },
  green: {
    lightest: "#8ce663",
    light: "#4fb81e",
    medium: "#3a8816",
    dark: "#265a0f",
    darkest: "#142f08",
  },
  turquoise: {
    lightest: "#62e5c8",
    light: "#1eb794",
    medium: "#16876d",
    dark: "#0e5948",
    darkest: "#082f27",
  },
};

export const fonts = {
  sm: 12,
  md: 16,
  lg: 24,
  xl: 32,
  xxl: 60,
};

export const padding = {
  sm: 8,
  md: 16,
  lg: 24,
  xl: 40,
  xxl: 50,
};

export const margin = {
  sm: 8,
  md: 16,
  lg: 24,
  xl: 32,
  xxl: 40,
};

export const borderRadius = {
  sm: 8,
  md: 16,
  lg: 24,
  xl: 32,
};

export const baseStyles = {};

export const createStyles = (overrides = {}) => {
  return StyleSheet.create({ ...baseStyles, ...overrides });
};
