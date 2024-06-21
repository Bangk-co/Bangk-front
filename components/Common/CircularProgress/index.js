import React from "react";
import { CustomCircularProgress } from "./styles";

export const CircularProgress = ({ lineColor, ...rest }) => {
  return (
    <CustomCircularProgress lineColor={lineColor} {...rest} />
  )
}