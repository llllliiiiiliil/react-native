import React, { useState, useEffect } from "react";
import { View, Text } from "react-native";
import * as S from "./style";

type TimerProps = {
  homeTime: number;
  lunchTime: number;
};

export const TimerBox: React.FC<TimerProps> = (props) => {
  return (
    <S.TimerBox>
      <View style={{ display: "flex", flexDirection: "column" }}>
        <S.EventText>점심시간까지</S.EventText>
        <S.Timer>{props.homeTime}h</S.Timer>
      </View>
      <View style={{ display: "flex", flexDirection: "column" }}>
        <S.EventText>하교시간까지</S.EventText>
        <S.Timer>{props.lunchTime}m</S.Timer>
      </View>
    </S.TimerBox>
  );
};

export const Timer: React.FC = () => {
  let now = new Date();
  let hour = now.getHours();
  let minute = now.getMinutes();

  const [time, setTime] = useState(0);
  const [homeTime, setHomeTime] = useState(970);
  const [lunchTime, setLunchTime] = useState(750);

  useEffect(() => {
    setInterval(() => {}, 60000);
  }, []);

  return (
    <S.TimerContainer>
      <S.ComponentExplain>
        <S.Icon>⏰ </S.Icon>
        <S.TimerText>타이머</S.TimerText>
      </S.ComponentExplain>
      <TimerBox homeTime={1} lunchTime={1}></TimerBox>
    </S.TimerContainer>
  );
};
