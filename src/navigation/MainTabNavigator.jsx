import { useState, useCallback } from "react";
import { useWindowDimensions, View, Pressable, Text } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  createDrawerNavigator,
  useDrawerStatus,
  useDrawerProgress,
} from "@react-navigation/drawer";
import { AntDesign } from "@expo/vector-icons";

import {
  PatientHomeScreen,
  ProviderHomeScreen,
  NutritionProfileScreen,
  FoodInfoScreen,
  FullNutritionScreen,
  SearchFoodScreen,
  SettingsScreen,
} from "@/screens";
import { createStyles, colors, padding, margin, fonts } from "@/styles";

const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

const HomeStack = createNativeStackNavigator();
const NutritionProfileStack = createNativeStackNavigator();
const SettingsStack = createNativeStackNavigator();

const styles = createStyles({
  drawerContent: {
    flex: 1,
    paddingTop: padding.lg,
  },
  drawerItem: {
    flexDirection: "row",
    alignItems: "center",
    padding: padding.md,
  },
  drawerItemFocused: {
    backgroundColor: colors.lightNeutral.lightest,
  },
  drawerItemCollapsed: {
    justifyContent: "center",
  },
  drawerLabel: {
    marginLeft: margin.lg,
    fontSize: fonts.md,
  },
  drawerLabelFocused: {
    color: colors.primary,
  },
  tabBar: {
    position: "absolute",
    bottom: 25,
    left: 20,
    right: 20,
    elevation: 10,
    backgroundColor: colors.white,
    borderRadius: 20,
    borderTopWidth: 0,
    height: 60,
    shadowColor: colors.black,
    shadowOpacity: 0.2,
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowRadius: 25,
  },
  mobiletabItem: {
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
        name="HomeScreen"
        component={PatientHomeScreen}
        options={{ headerShown: false }}
      />
      <HomeStack.Screen
        name="SearchFoodScreen"
        component={SearchFoodScreen}
        options={{ headerShown: false }}
      />
      <HomeStack.Screen
        name="FoodInfoScreen"
        component={FoodInfoScreen}
        options={{ headerShown: false }}
      />
      <HomeStack.Screen
        name="FullNutritionScreen"
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
        name="NutritionProfileScreen"
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
        name="SettingsScreen"
        component={SettingsScreen}
        options={{ headerShown: false }}
      />
    </SettingsStack.Navigator>
  );
};

const TabNavigator = () => (
  <Tab.Navigator
    screenOptions={{
      initialRouteName: "HomeStack",
      tabBarStyle: styles.tabBar,
      tabBarShowLabel: false,
      tabBarActiveTintColor: colors.primary,
      tabBarInactiveTintColor: colors.lightNeutral.dark,
      tabBarItemStyle: styles.tabItem,
    }}
  >
    <Tab.Screen
      name="SettingsStack"
      component={SettingsStackNavigator}
      options={{
        headerShown: false,
        tabBarLabel: "Settings",
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
        tabBarLabel: "Home",
        tabBarIcon: ({ color, size }) => (
          <AntDesign name="home" color={color} size={size} />
        ),
      }}
    />
    <Tab.Screen
      name="NutritionProfileStack"
      component={NutritionProfileStackNavigator}
      options={{
        headerShown: false,
        tabBarLabel: "Nutrition Profile",
        tabBarIcon: ({ color, size }) => (
          <AntDesign name="user" color={color} size={size} />
        ),
      }}
    />
  </Tab.Navigator>
);

const DynamicDrawer = ({ navigation, state, isExpanded }) => {
  const DrawerItem = ({ label, icon, isFocused, onPress }) => (
    <Pressable
      style={[
        styles.drawerItem,
        isFocused && styles.drawerItemFocused,
        !isExpanded && styles.drawerItemCollapsed,
      ]}
      onPress={onPress}
    >
      <AntDesign
        name={icon}
        size={24}
        color={isFocused ? colors.primary : colors.lightNeutral.dark}
      />
      {isExpanded && (
        <Text
          style={[styles.drawerLabel, isFocused && styles.drawerLabelFocused]}
        >
          {label}
        </Text>
      )}
    </Pressable>
  );

  return (
    <View style={styles.drawerContent}>
      <DrawerItem
        label="Home"
        icon="home"
        isFocused={state.index === 0}
        onPress={() => navigation.navigate("HomeStack")}
      />
      <DrawerItem
        label="Nutrition Profile"
        icon="user"
        isFocused={state.index === 1}
        onPress={() => navigation.navigate("NutritionProfileStack")}
      />
      <DrawerItem
        label="Settings"
        icon="setting"
        isFocused={state.index === 2}
        onPress={() => navigation.navigate("SettingsStack")}
      />
    </View>
  );
};

const DrawerNavigator = ({ keepDrawerOpen }) => {
  return (
    <Drawer.Navigator
      drawerContent={(props) => (
        <DynamicDrawer {...props} isExpanded={keepDrawerOpen} />
      )}
      screenOptions={{
        drawerType: "permanent",
        drawerStyle: {
          width: keepDrawerOpen ? 240 : 80,
        },
        headerShown: false,
      }}
    >
      <Drawer.Screen name="HomeStack" component={HomeStackNavigator} />
      <Drawer.Screen
        name="NutritionProfileStack"
        component={NutritionProfileStackNavigator}
      />
      <Drawer.Screen name="SettingsStack" component={SettingsStackNavigator} />
    </Drawer.Navigator>
  );
};

const MainTabNavigator = () => {
  const { width } = useWindowDimensions();
  const isDesktop = width >= 768;
  const keepDrawerOpen = width >= 1280;

  if (isDesktop) {
    return <DrawerNavigator keepDrawerOpen={keepDrawerOpen} />;
  }

  return <TabNavigator />;
};

export default MainTabNavigator;
