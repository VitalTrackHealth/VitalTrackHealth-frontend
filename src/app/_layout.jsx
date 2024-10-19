import { Stack } from "expo-router";

import { SnackbarProvider, SessionProvider, UserProvider } from "@/context";
import { Snackbar } from "@/components";

const RootLayout = () => {
  return (
    <SessionProvider>
      <SnackbarProvider>
        <UserProvider>
          <Stack screenOptions={{ headerShown: false }} />
          <Snackbar />
        </UserProvider>
      </SnackbarProvider>
    </SessionProvider>
  );
};

export default RootLayout;
