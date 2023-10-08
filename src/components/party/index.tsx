import React from "react";
import * as S from "./style";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";

export const Party: React.FC = () => {
  return (
    <>
      <S.PartyContainer>
        <MaterialCommunityIcons name="party-popper" size={45} color="black" />
        <S.PartyTextBox>
          <S.PartyText>한세어울림마단 진행 중!</S.PartyText>
          <S.PartySecondText>실시간으로 즐기기</S.PartySecondText>
        </S.PartyTextBox>
        <MaterialIcons name="keyboard-arrow-right" size={24} color="black" />
      </S.PartyContainer>
    </>
  );
};
