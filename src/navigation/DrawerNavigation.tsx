import { createDrawerNavigator } from "@react-navigation/drawer";
import BottomTabs from "./BottomTabs";
import { Services } from "./screens/Services";
import { HeaderBackButton } from "@react-navigation/elements";
import { ROUTES } from "./routers";

const Drawer = createDrawerNavigator();

const MainNavigation = () => {
  return (
    <Drawer.Navigator screenOptions={{ headerTitle: "" }}>
      <Drawer.Screen
        name={ROUTES.MAIN_TABS}
        component={BottomTabs}
        options={{
          drawerItemStyle: { display: "none" },
        }}
      />
      <Drawer.Screen
        name={ROUTES.SERVICES}
        component={Services}
        options={({ navigation }) => ({
          headerLeft: () => (
            <HeaderBackButton onPress={() => navigation.goBack()} />
          ),
        })}
      />
    </Drawer.Navigator>
  );
};

export default MainNavigation;
