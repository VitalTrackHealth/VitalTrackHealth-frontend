import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { LoginScreen, PatientHomeScreen, RegisterScreen } from "../screens";

const Stack = createNativeStackNavigator();

const PatientStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Register" component={RegisterScreen} />
      <Stack.Screen
        name="Home"
        component={PatientHomeScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default PatientStackNavigator;
