import { Stack } from "expo-router";

import { SnackbarProvider, UserTypeProvider } from "@/context";
import { Snackbar } from "@/components";

const RootLayout = () => {
  return (
    <SnackbarProvider>
      <UserTypeProvider>
        <Stack screenOptions={{ headerShown: false }} />
      </UserTypeProvider>
      <Snackbar />
    </SnackbarProvider>
  );
};

export default RootLayout;
