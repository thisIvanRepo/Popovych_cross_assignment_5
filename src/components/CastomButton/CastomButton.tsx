import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { COLORS, SIZE_VAR } from "../../constants/constants";
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

const { width } = Dimensions.get("screen");

const style = StyleSheet.create({
  btn: {
    alignItems: "center",
    paddingVertical: SIZE_VAR.PADDDING_VERTICAL_BTN,
    width: width * 0.8,
    borderRadius: 12,
    backgroundColor: COLORS.SECONDART,
  },
  text: {
    color: COLORS.TEXT_DISABLED,
  },
});
