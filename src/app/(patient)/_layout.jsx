import { useWindowDimensions } from "react-native";
import { Redirect, Tabs } from "expo-router";
import { Drawer } from "expo-router/drawer";

import { AntDesign } from "@expo/vector-icons";

import { useSession, useUser } from "@/context";
import { createStyles, colors, padding } from "@/styles";
import { getPatient } from "@/services";

const TabLayout = () => (
  <Tabs
    screenOptions={{
      initialRouteName: "index",
      tabBarStyle: styles.tabBar,
      tabBarShowLabel: false,
      tabBarActiveTintColor: colors.primary,
      tabBarInactiveTintColor: colors.lightNeutral.dark,
      tabBarItemStyle: styles.tabItem,
    }}
  >
    <Tabs.Screen
      name="settings"
      options={{
        headerShown: false,
        tabBarLabel: "Settings",
        tabBarIcon: ({ color, size }) => (
          <AntDesign name="setting" color={color} size={size} />
        ),
      }}
    />
    <Tabs.Screen
      name="(home)"
      options={{
        headerShown: false,
        tabBarLabel: "Home",
        tabBarIcon: ({ color, size }) => (
          <AntDesign name="home" color={color} size={size} />
        ),
      }}
    />
    <Tabs.Screen
      name="nutrition-profile"
      options={{
        headerShown: false,
        tabBarLabel: "Nutrition Profile",
        tabBarIcon: ({ color, size }) => (
          <AntDesign name="user" color={color} size={size} />
        ),
      }}
    />
  </Tabs>
);

const DrawerLayout = ({ keepDrawerOpen }) => (
  <Drawer
    screenOptions={{
      drawerType: "permanent",
      drawerStyle: {
        width: keepDrawerOpen ? 240 : 80,
      },
      headerShown: false,
    }}
  >
    <Drawer.Screen
      name="(home)"
      options={{
        drawerLabel: "Home",
        drawerIcon: ({ color, size }) => (
          <AntDesign name="home" color={color} size={size} />
        ),
        drawerItemStyle: styles.drawerItem,
        drawerActiveTintColor: styles.drawerItemFocused.tintColor,
        drawerActiveBackgroundColor: styles.drawerItemFocused.backgroundColor,
      }}
    />
    <Drawer.Screen
      name="nutrition-profile"
      options={{
        drawerLabel: "Nutrition Profile",
        drawerIcon: ({ color, size }) => (
          <AntDesign name="user" color={color} size={size} />
        ),
        drawerItemStyle: styles.drawerItem,
        drawerActiveTintColor: styles.drawerItemFocused.tintColor,
        drawerActiveBackgroundColor: styles.drawerItemFocused.backgroundColor,
      }}
    />
    <Drawer.Screen
      name="settings"
      options={{
        drawerLabel: "Settings",
        drawerIcon: ({ color, size }) => (
          <AntDesign name="setting" color={color} size={size} />
        ),
        drawerItemStyle: styles.drawerItem,
        drawerActiveTintColor: styles.drawerItemFocused.tintColor,
        drawerActiveBackgroundColor: styles.drawerItemFocused.backgroundColor,
      }}
    />
  </Drawer>
);

const PatientLayout = () => {
  const { session } = useSession();
  const { user, setUser } = useUser();

  const { width } = useWindowDimensions();
  const isDesktop = width >= 768;
  const keepDrawerOpen = width >= 1280;

  if (!session) {
    return <Redirect href="/" />;
  }

  if (Object.keys(user).length === 0) {
    getPatient(session).then((response) => {
      if (response.success) {
        setUser({
          id: response.results.data.id,
          firstName: response.results.data.first_name,
          lastName: response.results.data.last_name,
          username: response.results.data.username,
          email: response.results.data.email,
          phoneNumber: response.results.data.phone_number,
          conditions: response.results.data.conditions,
          bodyMeasurements: response.results.data.body_measurements,
          providerCode: response.results.data.provider_code,
          nutritionGoals: response.results.data.nutrition_goals,
        });
      }
    });
  }

  if (isDesktop) {
    return <DrawerLayout keepDrawerOpen={keepDrawerOpen} />;
  }

  return <TabLayout />;
};

const styles = createStyles({
  drawerContent: {
    flex: 1,
    paddingTop: padding.lg,
  },
  drawerItem: {
    justifyContent: "center",
  },
  drawerItemFocused: {
    tintColor: colors.primary,
    backgroundColor: colors.green.lightest,
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

export default PatientLayout;
