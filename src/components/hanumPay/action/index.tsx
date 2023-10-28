import React, { useState } from "react";
import { HanumPayContainer } from "../container";

type HanumPayActionType = {
  setIsClick: React.Dispatch<React.SetStateAction<boolean>>;
};

export const HanumPayAction = ({ setIsClick }: HanumPayActionType) => {
  const colorChange = () => {
    setIsClick((prev) => !prev);
  };

  return { colorChange };
};
