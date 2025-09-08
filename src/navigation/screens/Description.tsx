import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList, ROUTES } from "../routers";
import { ActivityIndicator, Text, View } from "react-native";
import { useEffect, useState } from "react";
import { mastersApi } from "../../api/mastersApi";
import { Master } from "../../types/types";
import { COLORS } from "../../constants/constants";

type Props = NativeStackScreenProps<
  RootStackParamList,
  typeof ROUTES.MASTER_INFO
>;

export function Description({ route }: Props) {
  const { id } = route.params;
  const [masterInfo, setMasterInfo] = useState<Master | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const getMasterInfo = async () => {
      try {
        setIsLoading(true);

        const { data } = await mastersApi.fetchInformationMaster(id);
        setMasterInfo(data);
      } catch (err: any) {
        setError(
          err.message ||
            "Something went wrong while fetching master information"
        );
      } finally {
        setIsLoading(false);
      }
    };

    getMasterInfo();
  }, []);

  return (
    <View style={{ marginTop: 30, paddingHorizontal: 20 }}>
      {error && <Text style={{ color: "red" }}>{error}</Text>}

      {isLoading && !error ? (
        <ActivityIndicator size="large" color={COLORS.ACTIVE} />
      ) : (
        <View>
          <Text style={{ marginHorizontal: "auto" }}>{masterInfo?.name}</Text>
          <Text style={{ marginVertical: 20, textAlign: "center" }}>
            {masterInfo?.description}
          </Text>
        </View>
      )}
    </View>
  );
}
