import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { COLORS } from "../../constants/constants";
import { useNavigation } from "@react-navigation/native";
import { User } from "../../navigation/routers";

interface Props {
  name: string;
  screen: string;
  params?: User;
  active: boolean;
}

export default function CoctomBtm({ name, screen, params, active }: Props) {
  const navigation = useNavigation<any>();

  return (
    <TouchableOpacity
      onPress={() => (active ? navigation.navigate(screen, params) : undefined)}
      activeOpacity={active ? 0.7 : 1}
    >
      <View style={style.btn}>
        <Text style={[style.text, active && { color: COLORS.PRIMERY }]}>
          {name}
        </Text>
      </View>
    </TouchableOpacity>
  );
}

const style = StyleSheet.create({
  btn: {
    alignItems: "center",
    paddingVertical: 16.5,
    width: 350,
    borderRadius: 12,
    backgroundColor: COLORS.SECONDART,
  },
  text: {
    color: COLORS.TEXT_DISABLED,
  },
});
