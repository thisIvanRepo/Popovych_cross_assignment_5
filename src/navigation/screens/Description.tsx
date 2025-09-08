import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../routers";
import { Text } from "react-native";
import { useEffect, useState } from "react";
import { mastersApi } from "../../api/mastersApi";
import { Master } from "../../types/types";

type Props = NativeStackScreenProps<RootStackParamList>;

export function Description({ route: { params } }): Props {
  const { id } = params;
  const [masterInfo, setMasterInfo] = useState<Master | null>(null);

  useEffect(() => {
    const getMasterInfo = async () => {
      try {
        const { data } = await mastersApi.fetchInformationMaster(id);
        setMasterInfo(data);
      } catch (err) {
        console.log(err);
      }
    };

    getMasterInfo();
  }, []);

  return (
    <Text style={{ marginVertical: 20, marginHorizontal: "auto" }}>
      {masterInfo?.description}
    </Text>
  );
}
