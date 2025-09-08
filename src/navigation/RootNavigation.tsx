import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NotFound } from "./screens/NotFound";
import { RootStackParamList, ROUTES } from "./routers";
import MainNavigation from "./DrawerNavigation";
import { Description } from "./screens/Description";
// import BottomTabs from "./BottomTabs";

const RootStack = createNativeStackNavigator<RootStackParamList>();

const RootNavigation = () => {
  return (
    <RootStack.Navigator
      initialRouteName={ROUTES.DRAWER_NAVIGATOR}
      screenOptions={{ headerShown: false }}
    >
      <RootStack.Screen
        name={ROUTES.DRAWER_NAVIGATOR}
        component={MainNavigation}
      />
      <RootStack.Screen
        name={ROUTES.MASTER_INFO}
        component={Description}
        options={{ title: "About Master", headerShown: true }}
      />
      <RootStack.Screen name={ROUTES.NOT_FOUND} component={NotFound} />
    </RootStack.Navigator>
  );
};

export default RootNavigation;
