import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { AntDesign } from "@expo/vector-icons";

import {
  PatientHomeScreen,
  ProviderHomeScreen,
  NutritionProfileScreen,
  FoodInfoScreen,
  FullNutritionScreen,
  SearchFoodScreen,
} from "@/screens";
import { createStyles, colors } from "@/styles";

const Tab = createBottomTabNavigator();

const HomeStack = createNativeStackNavigator();


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
        component={ProviderHomeScreen}
        options={{ headerShown: false}}
      />
    </HomeStack.Navigator>
  );
};





const MainTabNavigatorProvider = () => {
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
        name="Home"
        component={HomeStackNavigator}
         options={{
          headerShown: true,
               headerStyle: {
            backgroundColor: colors.primary, // Change the background color
                                    shadowColor: '#000', // Shadow color
            shadowOffset: { width: 0, height: 2 }, // Shadow offset
            shadowOpacity: 0.5, // Shadow opacity
            shadowRadius: 3.84, // Shadow radius
            elevation: 5, // Elevation for Android
            

          },
            headerTintColor: '#fff', // Change the text color
          headerTitleStyle: {
            fontWeight: 'bold', // Change the font weight
                        shadowColor: '#000', // Shadow color
            shadowOffset: { width: 0, height: 2 }, // Shadow offset
            shadowOpacity: 2, // Shadow opacity
            shadowRadius: 3.84, // Shadow radius
            elevation: 5, // Elevation for Android
          },
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="home" color={color} size={size} />
          ),
        }}
      />

    </Tab.Navigator>
  );
};

export default MainTabNavigatorProvider;
