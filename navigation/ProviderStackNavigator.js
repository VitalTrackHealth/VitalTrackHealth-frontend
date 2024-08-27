import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { UserProvider } from "@/context";
import { ProviderHomeScreen } from "@/screens";

const Stack = createNativeStackNavigator();

const ProviderStackNavigator = () => {
  return (
    <UserProvider>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={ProviderHomeScreen}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </UserProvider>
  );
};

export default ProviderStackNavigator;
