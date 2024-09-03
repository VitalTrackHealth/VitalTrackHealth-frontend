import { View, TextInput as RNTextInput } from "react-native";
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
    borderRadius: borderRadius,
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

const TextInput = ({
  placeholder,
  placeholderTextColor = colors.gray.light,
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

export default TextInput;