export const ROUTES = {
  DRAWER_NAVIGATOR: "DrawerNavigator",
  MAIN_TABS: "MainTabs",
  USER_DATA: "YoureData",
  PROFILE: "Profile",
  SETTINGS: "Settings",
  SERVICES: "Services",
  NOT_FOUND: "NotFound",
} as const;

export type RootStackParamList = {
  DrawerNavigator: undefined;
  NotFound: undefined;
  Profile: User | undefined;
};

export type User = {
  name: string;
  number: string;
};
