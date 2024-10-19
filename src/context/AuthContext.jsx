import { useContext, createContext } from "react";
import { useStorageState } from "./useStorageState";
import { loginUser } from "@/services";

// https://docs.expo.dev/router/reference/authentication/#using-react-context-and-route-groups

const AuthContext = createContext({
  login: () => null,
  logout: () => null,
  session: null,
  isLoading: false,
});

export function SessionProvider({ children }) {
  const [[isLoading, session], setSession] = useStorageState("session");
  const [[_, userType], setUserType] = useStorageState("userType");

  const login = async (email, password, userType_local) => {
    const result = await loginUser(email, password);
    if (result.success) {
      setSession(result.results.access_token);
      setUserType(userType_local);
      return true;
    } else {
      return false;
    }
  };

  const logout = () => {
    setSession(null);
    setUserType(null);
  };

  return (
    <AuthContext.Provider
      value={{
        login,
        logout,
        session,
        isLoading,
        userType,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export const useSession = () => {
  const ctx = useContext(AuthContext);
  if (process.env.NODE_ENV !== "production") {
    if (!ctx) {
      throw new Error("useSession must be wrapped in a <SessionProvider />");
    }
  }

  return ctx;
};
