import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { UserProvider } from "@/context";
import { LoginScreen, RegisterScreen, RegisterQuestionScreen } from "@/screens";
import PatientMainTabNavigator from "./PatientMainTabNavigator";

const PatientStack = createNativeStackNavigator();
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
      <AuthStack.Screen
        name="RegisterQuestionScreen"
        component={RegisterQuestionScreen}
        options={{ headerShown: false }}
      />
    </AuthStack.Navigator>
  );
};

const PatientStackNavigator = () => {
  return (
    <UserProvider>
      <PatientStack.Navigator screenOptions={{ headerShown: false }}>
        <PatientStack.Screen name="AuthStack" component={AuthStackNavigator} />
        <PatientStack.Screen
          name="PatientMainTab"
          component={PatientMainTabNavigator}
          options={{ headerLeft: null, gestureEnabled: false }}
        />
      </PatientStack.Navigator>
    </UserProvider>
  );
};

export default PatientStackNavigator;
