import { MyHeader } from "../../components/header";
import { Party } from "../../components/party";
import * as S from "./style";
import { Button, StyleSheet, Text, View } from "react-native";

export const MainPage: React.FC = () => {
  return (
    <>
      <S.MainPageStyle>
        <MyHeader></MyHeader>
        <Party></Party>
      </S.MainPageStyle>
    </>
  );
};
