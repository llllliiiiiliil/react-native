import React from "react";
import { MaterialIcons } from "@expo/vector-icons";
import * as S from "../style";
import { View, Text } from "react-native";

type HanumPayViewType = {
  colorChange: () => void;
};

export const HanumpayView: React.FC<HanumPayViewType> = (props) => {
  const [isTouch, setIsTouch] = React.useState(false);

  return (
    <S.HanumpayBox>
      <S.BoxInfo activeOpacity={0.7} onPress={props.colorChange}>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <S.Emoge>💳</S.Emoge>
          <S.title>한움페이</S.title>
        </View>

        <MaterialIcons name="keyboard-arrow-right" size={24} color="gray" />
      </S.BoxInfo>
      <S.MoneyBox>
        <S.MoneyText>0원</S.MoneyText>
      </S.MoneyBox>
      <S.PayingButton activeOpacity={0.7}>
        <S.PayingText>결제하기</S.PayingText>
      </S.PayingButton>
    </S.HanumpayBox>
  );
};
