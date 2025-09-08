import { StyleSheet, View } from "react-native";
import FullStar from "../../../assets/images/svg/full_star.svg";
import EmptyStar from "@/assets/images/svg/empty_star.svg";

interface Props {
  rating: number;
}

const flexStars = StyleSheet.create({
  flexRow: {
    gap: 4,
    flexDirection: "row",
  },
});

const style = StyleSheet.create({
  container: { width: "35%", position: "relative" },
  stars: {
    ...flexStars.flexRow,
    width: "100%",
    zIndex: 0,
    position: "absolute",
  },
  mask: { ...flexStars.flexRow, overflow: "hidden", zIndex: 1 },
});

const Rating = ({ rating }: Props) => {
  return (
    <View style={style.container}>
      <View style={style.stars}>
        <EmptyStar width={20} height={20} />
        <EmptyStar width={20} height={20} />
        <EmptyStar width={20} height={20} />
        <EmptyStar width={20} height={20} />
        <EmptyStar width={20} height={20} />
      </View>
      <View style={[style.mask, { width: `${(rating * 100) / 5}%` }]}>
        <FullStar width={20} height={20} />
        <FullStar width={20} height={20} />
        <FullStar width={20} height={20} />
        <FullStar width={20} height={20} />
        <FullStar width={20} height={20} />
      </View>
    </View>
  );
};

export default Rating;
