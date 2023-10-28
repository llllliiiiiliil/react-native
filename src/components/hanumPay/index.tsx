import React from "react";
import { HanumpayView } from "./view";
import { HanumPayContainer } from "./container";
import { HanumPayAction } from "./action";

export const HanumPay = () => {
  const { setIsClick } = HanumPayContainer();
  const actions = HanumPayAction({ setIsClick });

  return <HanumpayView {...HanumPayAction} />;
};
