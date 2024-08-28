import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { UserProvider } from "../context";
import {
  FoodInfoScreen,
  FullNutritionScreen,
  LoginScreen,
  PatientHomeScreen,
  PatientGoalsScreen,
  RegisterScreen,
  RegisterConditionQuestionScreen,
  SearchFoodScreen,
} from "../screens";

const Stack = createNativeStackNavigator();

const PatientStackNavigator = () => {
  return (
    <UserProvider>
      <Stack.Navigator>
        {/* Auth Group */}
        <Stack.Group>
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="Register" component={RegisterScreen} />
          <Stack.Screen
            name="RegisterConditionQuestion"
            component={RegisterConditionQuestionScreen}
            options={{ headerShown: false }}
          />
        </Stack.Group>
        <Stack.Screen
          name="Home"
          component={PatientHomeScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="SearchFood"
          component={SearchFoodScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="FoodInfo"
          component={FoodInfoScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="FullNutrition"
          component={FullNutritionScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="PatientGoals"
          component={PatientGoalsScreen}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </UserProvider>
  );
};

export default PatientStackNavigator;
