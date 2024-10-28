import { useState } from "react";
import { Text, View } from "react-native";

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
  ProviderCard,
} from "@/components";
import { useSession, useUser, useSnackbar } from "@/context";
import { addProvider, checkProviderCode } from "@/services";

const SettingsScreen = () => {
  const { logout, session } = useSession();
  const { user, setUser } = useUser();
  const { showSnackbar } = useSnackbar();

  const [buttonLoading, setButtonLoading] = useState(false);
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

  const handleAddProvider = async () => {
    setButtonLoading(true);
    const res = await checkProviderCode(providerCode);
    if (res.success) {
      const addProviderRes = await addProvider(providerCode, session);
      if (addProviderRes.success) {
        setUser({
          ...user,
          providers: [...user.providers, addProviderRes.results.data],
        });
        showSnackbar("Provider added successfully", "success");
      } else {
        showSnackbar("Failed to add provider", "error");
      }
    } else {
      showSnackbar("Provider code is invalid", "error");
    }
    setButtonLoading(false);
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
          {user.providers && user.providers.length > 0 && (
            <>
              {user.providers.map((provider) => (
                <ProviderCard key={provider.username} provider={provider} />
              ))}
            </>
          )}
          {!user.providers ||
            (user.providers.length === 0 && (
              <>
                <Text style={styles.inputHeader}>Provider Code</Text>
                <TextInput
                  value={providerCode}
                  onChangeText={setProviderCode}
                  placeholder="Provider Code"
                  style={styles.input}
                  containerStyle={styles.inputContainer}
                />
                <Button
                  text="Add Provider"
                  onPress={handleAddProvider}
                  loading={buttonLoading}
                />
              </>
            ))}
          <Text style={styles.inputHeader}>
            To remove provider, contact support.
          </Text>
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
