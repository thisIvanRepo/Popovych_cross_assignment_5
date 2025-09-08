import { Image, StyleSheet, Text, View } from "react-native";
import LogoMaster from "@/assets/images/svg/master_avatar.svg";
import Rating from "../Rating/Rating";

interface Props {
  name: string;
  status: boolean;
  img?: string;
  rating: number;
}

const style = StyleSheet.create({
  container: {
    paddingHorizontal: 12,
    paddingVertical: 11,
    borderStyle: "solid",
    borderWidth: 4,
    borderColor: "#8C8C8C",
    flexDirection: "row",
    backgroundColor: "#404040",
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "space-between",
  },
  logo: {
    alignItems: "center",
    justifyContent: "flex-end",
    backgroundColor: "#D9D9D9",
    height: 80,
    width: 80,
    borderRadius: 30,
    overflow: "hidden",
  },
  name: {
    fontSize: 20,
    color: "#fff",
  },
});

const CardMaster = ({ name, status, img, rating }: Props) => {
  return (
    <View
      style={[
        style.container,
        status
          ? {
              borderColor: "#CB30E0",
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
          <LogoMaster width={"100%"} height={65} />
        </View>
      )}
      <Text style={[style.name, status ? { color: "#CB30E0" } : {}]}>
        {name}
      </Text>
      <Rating rating={rating} />
    </View>
  );
};

export default CardMaster;
