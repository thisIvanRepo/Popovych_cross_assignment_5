import { Text } from "@react-navigation/elements";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { ActivityIndicator, StyleSheet, View } from "react-native";
import { RootStackParamList } from "../routers";
import { useEffect, useState } from "react";
import { mastersApi } from "../../api/mastersApi";
import { Master } from "../../types/types";
import { FlatList } from "react-native-gesture-handler";
import { COLORS } from "../../constants/constants";

type Props = NativeStackScreenProps<RootStackParamList, "Profile">;

export function Profile({ route }: Props) {
  const [masters, setMasters] = useState<Master[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const getMasters = async () => {
      try {
        setIsLoading(true);
        const result = await mastersApi.featchMasters();
        setMasters(result.data);
      } catch (err: any) {
        setError(err.message || "Something went wrong while fetching masters");
      } finally {
        setIsLoading(false);
      }
    };

    getMasters();
  }, []);

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

      {error && <Text>{error}</Text>}

      {isLoading && !error ? (
        <ActivityIndicator size="large" color={COLORS.ACTIVE} />
      ) : (
        <FlatList
          data={masters}
          renderItem={({ item }) => {
            return <Text>{item.id}</Text>;
          }}
          keyExtractor={(item) => item.id.toString()}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 30,
    justifyContent: "flex-start",
    alignItems: "center",
    paddingVertical: 20,
    paddingHorizontal: 30,
  },
  userData: {
    gap: 10,
  },
});
