import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { WelcomeScreen } from "@/screens";
import PatientStackNavigator from "./PatientStackNavigator";
import ProviderStackNavigator from "./ProviderStackNavigator";

const RootStack = createNativeStackNavigator();

const RootStackNavigator = () => {
  return (
    <RootStack.Navigator initialRouteName="Welcome">
      <RootStack.Screen
        name="Welcome"
        component={WelcomeScreen}
        options={{ headerShown: false }}
      />
      <RootStack.Screen
        name="PatientStack"
        component={PatientStackNavigator}
        options={{ headerShown: false, gestureEnabled: false }}
      />
      <RootStack.Screen
        name="ProviderStack"
        component={ProviderStackNavigator}
        options={{ headerShown: false, gestureEnabled: false }}
      />
    </RootStack.Navigator>
  );
};

export default RootStackNavigator;
