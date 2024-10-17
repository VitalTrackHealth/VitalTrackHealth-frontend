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
    marginBottom: margin.sm,
  },
  input: {
    marginHorizontal: margin.md,
    marginBottom: margin.lg,
    height: 50,
    backgroundColor: colors.lightNeutral.lightest,
    borderRadius: borderRadius.md,
    padding: padding.md,
  },
  dropdown: {
    marginHorizontal: margin.md,
    marginBottom: margin.lg,
    height: 50,
    backgroundColor: colors.lightNeutral.lightest,
    borderRadius: borderRadius.md,
    padding: padding.md,
  },
  buttonContainer: {
    marginTop: margin.lg,
  },
});

const SettingsScreen = () => {
  const [firstName, setFirstName] = useState("Daniel");
  const [lastName, setLastName] = useState("Williams");
  const [email, setEmail] = useState("daniel@example.com");
  const [phoneNumber, setPhoneNumber] = useState("1234567890");
  const [password, setPassword] = useState("password");

  const conditionOptions = [
    { label: "Diabetes", value: "diabetes" },
    { label: "Obesity", value: "obesity" },
    { label: "Hypertension", value: "hypertension" },
    { label: "Osteoporosis", value: "osteoporosis" },
    { label: "Cardiovascular Disease", value: "cardiovascular" },
    { label: "Gastroesophageal Reflux Disease", value: "reflux" },
  ];

  const handleSaveChanges = () => {
    console.log("Save changes");
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
          />
          <Text style={styles.inputHeader}>Last Name</Text>
          <TextInput
            value={lastName}
            onChangeText={setLastName}
            placeholder="Enter your last name"
            style={styles.input}
          />
          <Text style={styles.inputHeader}>Email</Text>
          <TextInput
            value={email}
            onChangeText={setEmail}
            placeholder="Enter your email"
            keyboardType="email-address"
            style={styles.input}
          />
          <Text style={styles.inputHeader}>Phone Number</Text>
          <TextInput
            value={phoneNumber}
            onChangeText={setPhoneNumber}
            placeholder="Enter your phone number"
            keyboardType="phone-pad"
            style={styles.input}
          />
        </Card>
      </PageCell>
      <PageCell>
        <Card headerText="Account Settings" style={styles.card}>
          <Text style={styles.inputHeader}>Password</Text>
          <TextInput
            value={password}
            onChangeText={setPassword}
            placeholder="Enter new password"
            secureTextEntry
            style={styles.input}
          />
        </Card>
      </PageCell>
      <PageCell>
        <Button
          text="Save Changes"
          onPress={handleSaveChanges}
          style={styles.buttonContainer}
        />
      </PageCell>
    </Page>
  );
};

export default SettingsScreen;
