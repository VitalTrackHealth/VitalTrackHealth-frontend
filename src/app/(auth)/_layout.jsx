import { Redirect, Slot } from "expo-router";

import { useSession } from "@/context";

const AuthLayout = () => {
  const { session, userType } = useSession();

  if (session) {
    return <Redirect href={`/(${userType})/home`} />;
  }

  return <Slot />;
};

export default AuthLayout;
