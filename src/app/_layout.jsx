import { Stack, Slot } from "expo-router";

import { SnackbarProvider, SessionProvider } from "@/context";
import { Snackbar } from "@/components";

const RootLayout = () => {
  return (
    <SessionProvider>
      <SnackbarProvider>
        <Stack screenOptions={{ headerShown: false }} />
        <Snackbar />
      </SnackbarProvider>
    </SessionProvider>
  );
};

export default RootLayout;
