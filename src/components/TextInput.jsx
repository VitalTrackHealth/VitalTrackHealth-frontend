import { View, TextInput as RNTextInput } from "react-native";
import {
  createStyles,
  colors,
  fonts,
  padding,
  margin,
  borderRadius,
} from "@/styles";

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
  ...props
}) => {
  return (
    <View style={[styles.inputContainer, containerStyle]}>
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
});

export default TextInput;
