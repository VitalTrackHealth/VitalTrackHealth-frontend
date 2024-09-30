import React from "react";

import { NavigationContainer } from "@react-navigation/native";

import { SnackbarProvider } from "@/context";
import { RootStackNavigator } from "@/navigation";
import { Snackbar } from "@/components";

const App = () => {
  return (
    <SnackbarProvider>
      <NavigationContainer>
        <RootStackNavigator />
      </NavigationContainer>
      <Snackbar />
    </SnackbarProvider>
  );
};

export default App;
