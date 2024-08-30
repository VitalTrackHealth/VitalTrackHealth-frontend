import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { ProviderHomeScreen } from "@/screens";

const Stack = createNativeStackNavigator();

const ProviderStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={ProviderHomeScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default ProviderStackNavigator;
