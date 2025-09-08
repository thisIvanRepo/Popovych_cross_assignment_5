import { Text } from "@react-navigation/elements";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { ActivityIndicator, StyleSheet, View } from "react-native";
import { RootStackParamList, ROUTES } from "../routers";
import { useEffect, useState } from "react";
import { mastersApi } from "../../api/mastersApi";
import { Master } from "../../types/types";
import { FlatList, Pressable } from "react-native-gesture-handler";
import { COLORS } from "../../constants/constants";
import CardMaster from "../../components/CardMaster/CardMaster";

type Props = NativeStackScreenProps<RootStackParamList, "Profile">;

export function Profile({ route, navigation }: Props) {
  const [masters, setMasters] = useState<Master[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

//Отримуємо дані з списком наших майстрів з макового API
  useEffect(() => {
    const getMasters = async () => {
      try {
        setIsLoading(true);
        const result = await mastersApi.fetchMasters();
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
          style={{ gap: 35 }}
          data={masters}
          renderItem={({ item }) => {
            return (
              <Pressable
                onPress={() =>
                  navigation.navigate(ROUTES.MASTER_INFO, { id: item.id })
                }
              >
                {({ pressed }) => {
                  return (
                    <CardMaster
                      name={item.name}
                      rating={item.rating}
                      status={pressed}
                    />
                  );
                }}
              </Pressable>
            );
          }}
          keyExtractor={(item) => item.id.toString()}
          ItemSeparatorComponent={() => <View style={{ height: 10 }} />}
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
