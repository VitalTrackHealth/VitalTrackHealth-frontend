import { View, TextInput as RNTextInput } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import {
  createStyles,
  colors,
  fonts,
  padding,
  margin,
  borderRadius,
} from "@/styles";

const styles = createStyles({
  inputContainer: {
    backgroundColor: colors.white,
    borderRadius: borderRadius.md,
    padding: padding.md,
    marginBottom: margin.md,
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
  },
  input: {
    flex: 1,
    fontSize: fonts.md,
  },
  icon: {
    marginRight: margin.sm,
  },
});

const TextInput = ({
  placeholder,
  placeholderTextColor = colors.lightNeutral.medium,
  value,
  onChangeText,
  keyboardType = "default",
  autoCapitalize = "sentences",
  autoCorrect = true,
  containerStyle,
  children,
  style,
  icon,
  iconSize = 20,
  iconColor = colors.lightNeutral.dark,
  ...props
}) => {
  return (
    <View style={[styles.inputContainer, containerStyle]}>
      {icon && (
        <Ionicons
          name={icon}
          size={iconSize}
          color={iconColor}
          style={styles.icon}
        />
      )}
      <RNTextInput
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        keyboardType={keyboardType}
        autoCapitalize={autoCapitalize}
        autoCorrect={autoCorrect}
        placeholderTextColor={placeholderTextColor}
        style={[styles.input, style]}
        {...props}
      />
      {children}
    </View>
  );
};

export default TextInput;
