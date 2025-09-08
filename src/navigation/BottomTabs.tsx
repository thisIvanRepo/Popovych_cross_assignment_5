import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { BottomTabsParamList, ROUTES } from "./routers";
import { Home } from "./screens/Home";
import { Settings } from "./screens/Settings";
import { Profile } from "./screens/Profile";

const Tab = createBottomTabNavigator<BottomTabsParamList>();

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
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name={ROUTES.SETTINGS}
        component={Settings}
        options={{ headerShown: false }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabs;
