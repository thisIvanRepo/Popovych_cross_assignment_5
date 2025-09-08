import { StyleSheet, View, TextInput, Text } from "react-native";
import { ROUTES } from "../routers";
import CastomButton from "../../components/CastomButton/CastomButton";
import { TEXT_BTN } from "../../constants/constants";
import { useEffect, useState } from "react";

export function Home() {
  const [profile, setProfile] = useState({
    name: "",
    number: "",
  });

  const [isActive, setIsActive] = useState<boolean>(false);

  useEffect(() => {
    if (profile.name !== "" && profile.number !== "") {
      setIsActive(true);
    } else {
      setIsActive(false);
    }

    return () => {
      setIsActive(false);
    };
  }, [profile]);

  const handleChangeName = (value: string) => {
    setProfile((prev) => {
      return {
        ...prev,
        name: value,
      };
    });
  };

  const handleChangeNumber = (value: string) => {
    setProfile((prev) => {
      return {
        ...prev,
        number: value,
      };
    });
  };

  return (
    <View style={styles.container}>
      <Text>Pleas enter Your name and number</Text>
      <TextInput
        style={styles.textField}
        placeholder="name"
        value={profile.name}
        onChangeText={(event: string) => handleChangeName(event)}
      />
      <TextInput
        style={styles.textField}
        placeholder="number"
        value={profile.number}
        onChangeText={(event: string) => handleChangeNumber(event)}
      />

      <CastomButton
        name={TEXT_BTN.LOGIN}
        active={isActive}
        screen={ROUTES.PROFILE}
        params={profile}
      ></CastomButton>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    gap: 20,
  },
  textField: {
    borderStyle: "solid",
    borderWidth: 1,
    borderRadius: 12,
    borderColor: "#8C8C8C",
    backgroundColor: "transparent",
    paddingHorizontal: 16,
    paddingVertical: 14,
    width: "80%",
  },
});
