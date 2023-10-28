import styled, { css } from "@emotion/native";
import { View, Text } from "react-native";

export const TimerContainer = styled.TouchableOpacity`
  height: 160px;
  width: 90%;
  background-color: white;
  border-radius: 20px;
  padding: 10px;
`;

export const ComponentExplain = styled.Text``;

export const Icon = styled.Text`
  font-size: 28px;
  font-weight: 900;
`;

export const TimerText = styled.Text`
  font-size: 18px;
  font-weight: 900;
`;

export const TimerBox = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
`;

export const Timer = styled.Text`
  font-size: 35px;
  font-weight: 600;
`;

export const EventText = styled.Text`
  font-size: 16px;
  font-weight: 600;
  color: gray;
`;
