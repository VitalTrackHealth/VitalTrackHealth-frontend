import { createNativeStackNavigator } from "@react-navigation/native-stack";

import {
  FoodInfoScreen,
  FullNutritionScreen,
  LoginScreen,
  PatientHomeScreen,
  PatientGoalsScreen,
  RegisterScreen,
  RegisterQuestionsScreen,
  SearchFoodScreen,
} from "../screens";

const Stack = createNativeStackNavigator();

const PatientStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Register" component={RegisterScreen} />
      <Stack.Screen
        name="RegisterQuestions"
        component={RegisterQuestionsScreen}
        options={{ headerShown: false }}
      />
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
  );
};

export default PatientStackNavigator;
