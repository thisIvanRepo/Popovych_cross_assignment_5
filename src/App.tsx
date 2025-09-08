import { NavigationContainer } from "@react-navigation/native";
import RootNavigation from "./navigation/RootNavigation";

const prefix = "/";

export default function Index() {
  return (
    <NavigationContainer
      linking={{
        prefixes: [prefix],
        config: {
          screens: {
            NotFound: "*",
          },
        },
      }}
    >
      <RootNavigation />
    </NavigationContainer>
  );
}
