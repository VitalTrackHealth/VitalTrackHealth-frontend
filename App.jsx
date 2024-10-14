import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import * as Linking from "expo-linking";

import { SnackbarProvider, UserTypeProvider } from "@/context";
import { RootStackNavigator } from "@/navigation";
import { Snackbar } from "@/components";

const authStackConfig = {
  path: "",
  screens: {
    LoginScreen: "login",
    RegisterScreen: "register",
  },
};

const config = {
  screens: {
    RootStackNavigator: {
      path: "",
      screens: {
        PatientStack: {},
      },
    },
  },
};

const linking = {
  // Enable when moving to phone apps
  // prefixes: ["vitaltrackhealth://", "https://app.vitaltrackhealth.com"],
  // config,
};

const App = () => {
  return (
    <SnackbarProvider>
      <UserTypeProvider>
        <NavigationContainer>
          <RootStackNavigator />
        </NavigationContainer>
      </UserTypeProvider>
      <Snackbar />
    </SnackbarProvider>
  );
};

export default App;
