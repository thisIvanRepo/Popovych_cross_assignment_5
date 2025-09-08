import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { ROUTES } from "./routers";
import { Home } from "./screens/Home";
import { Settings } from "./screens/Settings";
import { Profile } from "./screens/Profile";

const Tab = createBottomTabNavigator();

const BottomTabs = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name={ROUTES.USER_DATA}
        component={Home}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name={ROUTES.PROFILE}
        component={Profile}
        options={{ headerShown: true }}
      />
      <Tab.Screen
        name={ROUTES.SETTINGS}
        component={Settings}
        options={{ headerShown: true }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabs;
