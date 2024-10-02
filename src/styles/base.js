import { StyleSheet, Dimensions } from "react-native";

export const dimensions = {
  fullHeight: Dimensions.get("window").height,
  fullWidth: Dimensions.get("window").width,
};

export const colors = {
  primary: "#2ABB7F",
  secondary: "#ff5955",
  tertiary: "#e6cf66",
  white: "#FFFFFF",
  black: "#222222",

  lightNeutral: {
    lightest: "#F7F8F9",
    light: "#DCDFE4",
    medium: "#8590A2",
    dark: "#44546F",
    darkest: "#091E42",
  },

  darkNeutral: {
    lightest: "#DEE4EA",
    light: "#9FADBC",
    medium: "#596773",
    dark: "#2C333A",
    darkest: "#161A1D",
  },

  // General colors
  // https://atlassian.design/foundations/color-new/color-palette-new/
  teal: {
    lightest: "#E7F9FF",
    light: "#9DD9EE",
    medium: "#42B2D7",
    dark: "#227D9B",
    darkest: "#164555",
  },
  blue: {
    lightest: "#E9F2FF",
    light: "#85B8FF",
    medium: "#388BFF",
    dark: "#0C66E4",
    darkest: "#09326C",
  },
  violet: {
    lightest: "#F3F0FF",
    light: "#B8ACF6",
    medium: "#8F7EE7",
    dark: "#6E5DC6",
    darkest: "#352C63",
  },
  pink: {
    lightest: "#FFECF8",
    light: "#F797D2",
    medium: "#DA62AC",
    dark: "#AE4787",
    darkest: "#50253F",
  },
  red: {
    lightest: "#FFECEB",
    light: "#FD9891",
    medium: "#F15B50",
    dark: "#C9372C",
    darkest: "#5D1F1A",
  },
  orange: {
    lightest: "#FFF3EB",
    light: "#FEC195",
    medium: "#F38A3F",
    dark: "#C25100",
    darkest: "#702E00",
  },
  yellow: {
    lightest: "#FFF7D6",
    light: "#F5CD47",
    medium: "#CF9F02",
    dark: "#946F00",
    darkest: "#533F04",
  },
  green: {
    lightest: "#DCFFF1",
    light: "#7EE2B8",
    medium: "#2ABB7F",
    dark: "#1F845A",
    darkest: "#164B35",
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
