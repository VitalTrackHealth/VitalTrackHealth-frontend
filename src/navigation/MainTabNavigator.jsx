import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { AntDesign } from "@expo/vector-icons";

import {
  PatientHomeScreen,
  NutritionProfileScreen,
  FoodInfoScreen,
  FullNutritionScreen,
  SearchFoodScreen,
} from "@/screens";
import { createStyles, colors } from "@/styles";

const Tab = createBottomTabNavigator();

const HomeStack = createNativeStackNavigator();
const NutritionProfileStack = createNativeStackNavigator();
const SettingsStack = createNativeStackNavigator();

const styles = createStyles({
  tabBar: {
    position: "absolute",
    bottom: 25,
    left: 20,
    right: 20,
    elevation: 10,
    backgroundColor: colors.white,
    borderRadius: 20,
    height: 60,
    shadowColor: colors.black,
    shadowOpacity: 0.2,
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowRadius: 25,
  },
  tabItem: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    height: 60, // Must be the same as the tabBar height
  },
});

const HomeStackNavigator = () => {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name="Home"
        component={PatientHomeScreen}
        options={{ headerShown: false }}
      />
      <HomeStack.Screen
        name="SearchFood"
        component={SearchFoodScreen}
        options={{ headerShown: false }}
      />
      <HomeStack.Screen
        name="FoodInfo"
        component={FoodInfoScreen}
        options={{ headerShown: false }}
      />
      <HomeStack.Screen
        name="FullNutrition"
        component={FullNutritionScreen}
        options={{ headerShown: false }}
      />
    </HomeStack.Navigator>
  );
};

const NutritionProfileStackNavigator = () => {
  return (
    <NutritionProfileStack.Navigator>
      <NutritionProfileStack.Screen
        name="Nutrition Profile"
        component={NutritionProfileScreen}
        options={{ headerShown: false }}
      />
    </NutritionProfileStack.Navigator>
  );
};

const SettingsStackNavigator = () => {
  return (
    <SettingsStack.Navigator>
      <SettingsStack.Screen
        name="Settings"
        component={NutritionProfileScreen}
        options={{ headerShown: false }}
      />
    </SettingsStack.Navigator>
  );
};

const MainTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        initialRouteName: "HomeStack",
        tabBarStyle: styles.tabBar,
        tabBarShowLabel: false,
        tabBarActiveTintColor: colors.primary,
        tabBarInactiveTintColor: colors.gray.dark,
        tabBarItemStyle: styles.tabItem,
      }}
    >
      <Tab.Screen
        name="SettingsStack"
        component={SettingsStackNavigator}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="setting" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="HomeStack"
        component={HomeStackNavigator}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="ProfileStack"
        component={NutritionProfileStackNavigator}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="user" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default MainTabNavigator;
