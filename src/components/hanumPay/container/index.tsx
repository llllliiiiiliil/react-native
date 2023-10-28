import React, { useState } from "react";

export const HanumPayContainer = () => {
  const [isClick, setIsClick] = useState(false);
  return { isClick, setIsClick };
};
