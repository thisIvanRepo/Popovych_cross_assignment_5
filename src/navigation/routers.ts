export const ROUTES = {
  DRAWER_NAVIGATOR: "DrawerNavigator",
  MAIN_TABS: "MainTabs",
  PROFILE: "Profile",
  MASTER_INFO: "MasterInfo",
  USER_DATA: "YoureData",
  SETTINGS: "Settings",
  SERVICES: "Services",
  NOT_FOUND: "NotFound",
} as const;

export type RootStackParamList = {
  DrawerNavigator: undefined;
  NotFound: undefined;
  Profile: User | undefined;
  MasterInfo: { id: string };
};

export type BottomTabsParamList = {
  YoureData: undefined;
  Profile: undefined;
  Settings: undefined;
};

export type User = {
  name: string;
  number: string;
};
