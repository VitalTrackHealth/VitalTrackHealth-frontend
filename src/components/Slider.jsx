import { View, Text } from "react-native";
import RNSlider from "@react-native-community/slider";

import { colors, createStyles, fonts, padding, margin } from "@/styles";

const styles = createStyles({
  container: {
    marginBottom: margin.lg,
  },
  markerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: padding.md,
  },
  markerText: {
    fontSize: fonts.sm,
  },
});

const Slider = ({
  minimumValue,
  maximumValue,
  step,
  value,
  onValueChange,
  markers,
  trackColor = colors.primary,
  trackBackgroundColor = colors.lightNeutral.medium,
}) => {
  return (
    <View style={styles.container}>
      <RNSlider
        minimumValue={minimumValue}
        maximumValue={maximumValue}
        step={step}
        value={value}
        onValueChange={onValueChange}
        minimumTrackTintColor={trackColor}
        maximumTrackTintColor={trackBackgroundColor}
      />
      <View style={styles.markerContainer}>
        {markers.map((marker, index) => (
          <Text key={index} style={styles.markerText}>
            {marker}
          </Text>
        ))}
      </View>
    </View>
  );
};

export default Slider;
