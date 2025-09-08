import { Dimensions, Image, StyleSheet, Text, View } from "react-native";
import LogoMaster from "../../../assets/images/svg/master_avatar.svg";
import Rating from "../Rating/Rating";
import { COLORS } from "../../constants/constants";

interface Props {
  name: string;
  status: boolean;
  img?: string;
  rating: number;
}

const { width } = Dimensions.get('screen')

const style = StyleSheet.create({
  container: {
    width: width * 0.8,
    paddingHorizontal: 15,
    paddingVertical: 11,
    borderStyle: "solid",
    borderWidth: 4,
    borderColor: COLORS.TEXT_DISABLED,
    flexDirection: "row",
    backgroundColor: COLORS.PRIMERY,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "space-between",
  },
  logo: {
    alignItems: "center",
    justifyContent: "flex-end",
    backgroundColor: COLORS.SECONDART,
    height: 50,
    width: 50,
    borderRadius: 30,
    overflow: "hidden",
  },
  name: {
    fontSize: 20,
    color: COLORS.WHITE,
  },
});

const CardMaster = ({ name, status, img, rating }: Props) => {
  return (
    <View
      style={[
        style.container,
        status
          ? {
              borderColor: COLORS.ACTIVE,
              shadowColor: "#000",
              shadowOffset: { width: 10, height: 10 },
              shadowOpacity: 0.5,
              shadowRadius: 4,
              elevation: 10,
            }
          : {},
      ]}
    >
      {img ? (
        <Image source={{ uri: img }}></Image>
      ) : (
        <View style={style.logo}>
          <LogoMaster width={"100%"} height={45} />
        </View>
      )}
      <Text style={[style.name, status ? { color: COLORS.ACTIVE } : {}]}>
        {name}
      </Text>
      <Rating rating={rating} />
    </View>
  );
};

export default CardMaster;
