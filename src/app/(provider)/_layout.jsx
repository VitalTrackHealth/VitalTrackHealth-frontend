import { useWindowDimensions } from "react-native";
import { Tabs } from "expo-router";
import { Drawer } from "expo-router/drawer";

import { AntDesign } from "@expo/vector-icons";

import { createStyles, colors, padding } from "@/styles";

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
      name="home"
      options={{
        headerShown: false,
        tabBarLabel: "Home",
        tabBarIcon: ({ color, size }) => (
          <AntDesign name="home" color={color} size={size} />
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
      name="home"
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
  const { width } = useWindowDimensions();
  const isDesktop = width >= 768;
  const keepDrawerOpen = width >= 1280;

  if (isDesktop) {
    return <DrawerLayout keepDrawerOpen={keepDrawerOpen} />;
  }

  return <TabLayout />;
};

export default PatientLayout;
