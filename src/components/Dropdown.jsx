import { Text } from "react-native";
import { Dropdown as RNDropdown } from "react-native-element-dropdown";
import { MultiSelect } from "react-native-element-dropdown";

import {
  colors,
  fonts,
  margin,
  borderRadius,
  padding,
  createStyles,
} from "@/styles";

const styles = createStyles({
  dropdownHeader: {
    fontSize: fonts.md,
    marginBottom: margin.sm,
  },
  dropdown: {
    marginBottom: margin.lg,
    height: 50,
    backgroundColor: colors.lightNeutral.lightest,
    borderRadius: borderRadius.md,
    padding: padding.md,
  },
});

const Dropdown = ({
  headerText,
  data,
  onChange,
  isMultiSelect = false,
  placeholder,
  searchPlaceholder,
  value,
  style,
}) => {
  const DropdownComponent = isMultiSelect ? MultiSelect : RNDropdown;

  return (
    <>
      <Text style={styles.dropdownHeader}>{headerText}</Text>
      <DropdownComponent
        style={[styles.dropdown, style]}
        data={data}
        labelField="label"
        valueField="value"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        search={isMultiSelect}
        searchPlaceholder={isMultiSelect ? searchPlaceholder : undefined}
      />
    </>
  );
};

export default Dropdown;
