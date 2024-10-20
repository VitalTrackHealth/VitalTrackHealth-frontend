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
    getPatient(session).then((res) => {
      if (res.success) {
        setUser({
          id: res.results.data.id,
          firstName: res.results.data.first_name,
          lastName: res.results.data.last_name,
          username: res.results.data.username,
          email: res.results.data.email,
          phoneNumber: res.results.data.phone_number,
          conditions: res.results.data.conditions,
          bodyMeasurements: res.results.data.body_measurements,
          providerCode: res.results.data.provider_code,
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
