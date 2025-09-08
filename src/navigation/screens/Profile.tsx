import { Text } from "@react-navigation/elements";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { StyleSheet, View } from "react-native";
import { RootStackParamList } from "../routers";

type Props = NativeStackScreenProps<RootStackParamList, "Profile">;

export function Profile({ route }: Props) {
  return (
    <View style={styles.container}>
      {route.params === undefined ? (
        <Text>Pleas enter your data in first tab</Text>
      ) : (
        <View style={styles.userData}>
          <Text>Hello: {route.params?.name}</Text>
          <Text>Your number: {route.params?.number}</Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    paddingVertical: 20,
    paddingHorizontal: 30,
  },
  userData: {
    gap: 10,
  },
});
