import { useState } from "react";
import { Text } from "react-native";

import {
  colors,
  fonts,
  margin,
  borderRadius,
  padding,
  createStyles,
} from "@/styles";
import {
  Card,
  Page,
  PageCell,
  TextHeader,
  TextInput,
  Button,
} from "@/components";
import { useSession, useUser } from "@/context";

const SettingsScreen = () => {
  const { logout } = useSession();
  const { user, setUser } = useUser();
  const [firstName, setFirstName] = useState(user.firstName || "");
  const [lastName, setLastName] = useState(user.lastName || "");
  const [email, setEmail] = useState(user.email || "");
  const [phoneNumber, setPhoneNumber] = useState(user.phoneNumber || "");
  const [password, setPassword] = useState("");
  const [providerCode, setProviderCode] = useState(user.providers || "");

  const handleLogOut = () => {
    logout();
    setUser({});
  };

  return (
    <Page>
      <TextHeader text="Settings" textStyle={styles.cellHeader} />
      <PageCell>
        <Card headerText="Personal Information" style={styles.card}>
          <Text style={styles.inputHeader}>First Name</Text>
          <TextInput
            value={firstName}
            onChangeText={setFirstName}
            placeholder="Enter your first name"
            style={styles.input}
            containerStyle={styles.inputContainer}
            disabled
          />
          <Text style={styles.inputHeader}>Last Name</Text>
          <TextInput
            value={lastName}
            onChangeText={setLastName}
            placeholder="Enter your last name"
            style={styles.input}
            containerStyle={styles.inputContainer}
            disabled
          />
          <Text style={styles.inputHeader}>Email</Text>
          <TextInput
            value={email}
            onChangeText={setEmail}
            placeholder="Enter your email"
            keyboardType="email-address"
            style={styles.input}
            containerStyle={styles.inputContainer}
            disabled
          />
          <Text style={styles.inputHeader}>Phone Number</Text>
          <TextInput
            value={phoneNumber}
            onChangeText={setPhoneNumber}
            placeholder="Enter your phone number"
            keyboardType="phone-pad"
            style={styles.input}
            containerStyle={styles.inputContainer}
            disabled
          />
        </Card>
      </PageCell>
      <PageCell>
        <Card headerText="Provider" style={styles.card}>
          <Text style={styles.inputHeader}>Provider Code</Text>
          <TextInput
            value={providerCode}
            onChangeText={setProviderCode}
            placeholder="Provider Code"
            style={styles.input}
            disabled
            containerStyle={styles.inputContainer}
          />
        </Card>
      </PageCell>
      <PageCell>
        <Card headerText="Account Settings" style={styles.card}>
          <Text style={styles.inputHeader}>Password</Text>
          <TextInput
            value={password}
            onChangeText={setPassword}
            placeholder="Enter new password (disabled)"
            secureTextEntry
            style={styles.input}
            disabled
            containerStyle={styles.inputContainer}
          />
        </Card>
      </PageCell>
      <PageCell>
        <Button
          text="Log Out"
          onPress={handleLogOut}
          style={styles.logoutButton}
          danger
        />
      </PageCell>
    </Page>
  );
};

const styles = createStyles({
  cellHeader: {
    color: colors.lightNeutral.darkest,
    fontSize: fonts.xl,
  },
  card: {
    marginBottom: margin.lg,
  },
  cardHeader: {
    color: colors.lightNeutral.dark,
    fontSize: fonts.lg,
    marginTop: 0,
    paddingTop: 0,
    marginBottom: margin.md,
    textAlign: "left",
  },
  inputHeader: {
    fontSize: fonts.md,
    marginLeft: margin.md,
    marginBottom: margin.sm,
  },
  input: {
    marginHorizontal: margin.md,
    marginBottom: margin.lg,
    height: 50,
    backgroundColor: colors.lightNeutral.lightest,
    borderRadius: borderRadius.md,
    paddingHorizontal: padding.md,
  },
  inputContainer: {
    paddingHorizontal: 0,
    paddingVertical: 0,
  },
  dropdown: {
    marginHorizontal: margin.md,
    marginBottom: margin.lg,
    height: 50,
    backgroundColor: colors.lightNeutral.lightest,
    borderRadius: borderRadius.md,
    padding: padding.md,
  },
  logoutButton: {
    marginTop: margin.lg,
  },
});

export default SettingsScreen;
