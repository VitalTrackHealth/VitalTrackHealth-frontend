import { View, Text } from "react-native";
import { AntDesign } from "@expo/vector-icons";

import {
  createStyles,
  colors,
  margin,
  padding,
  borderRadius,
  fonts,
} from "@/styles";

const ProviderCard = ({ provider }) => {
  return (
    <View style={styles.container}>
      <View style={styles.avatarContainer}>
        <AntDesign name="user" size={24} color={colors.primary} />
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.name}>
          Dr. {provider.first_name} {provider.last_name}
        </Text>
        <Text style={styles.details}>{provider.email}</Text>
        {provider.phone_number && (
          <Text style={styles.details}>{provider.phone_number}</Text>
        )}
      </View>
    </View>
  );
};

const styles = createStyles({
  container: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: colors.white,
    borderRadius: borderRadius.md,
    padding: padding.md,
    marginBottom: margin.md,
    borderWidth: 1,
    borderColor: colors.lightNeutral.light,
  },
  avatarContainer: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: colors.green.lightest,
    justifyContent: "center",
    alignItems: "center",
    marginRight: margin.md,
  },
  infoContainer: {
    flex: 1,
  },
  name: {
    fontSize: fonts.md,
    fontWeight: "bold",
    color: colors.lightNeutral.darkest,
    marginBottom: margin.xs,
  },
  details: {
    fontSize: fonts.sm,
    color: colors.lightNeutral.dark,
    marginBottom: margin.xs,
  },
});

export default ProviderCard;
