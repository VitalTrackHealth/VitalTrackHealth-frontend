import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { UserProvider } from "@/context";
import { LoginScreen, RegisterScreen } from "@/screens";
import ProviderMainTabNavigator from "./ProviderMainTabNavigator";

const ProviderStack = createNativeStackNavigator();
const AuthStack = createNativeStackNavigator();

const AuthStackNavigator = () => {
  return (
    <AuthStack.Navigator>
      <AuthStack.Screen
        name="LoginScreen"
        component={LoginScreen}
        options={{ headerShown: false }}
      />
      <AuthStack.Screen
        name="RegisterScreen"
        component={RegisterScreen}
        options={{ headerShown: false }}
      />
    </AuthStack.Navigator>
  );
};

const ProviderStackNavigator = () => {
  return (
    <UserProvider>
      <ProviderStack.Navigator screenOptions={{ headerShown: false }}>
        <ProviderStack.Screen name="AuthStack" component={AuthStackNavigator} />
        <ProviderStack.Screen
          name="ProviderMainTab"
          component={ProviderMainTabNavigator}
          options={{ headerShown: false, gestureEnabled: false }}
        />
      </ProviderStack.Navigator>
    </UserProvider>
  );
};

export default ProviderStackNavigator;
