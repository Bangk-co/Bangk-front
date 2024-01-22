import React from "react";
import { CustomButton } from "./styles";

export const Button = ({
  children,
  width,
  height,
  background,
  labelColor,
  border,
  size,
  radius,
  hover,
  mobileWidth,
  onClick,
  ...rest
}) => {
  return (
    <CustomButton
      width={width}
      height={height}
      background={background}
      labelColor={labelColor}
      border={border}
      size={size}
      radius={radius}
      hover={hover}
      mobileWidth={mobileWidth}
      onClick={onClick}
      {...rest}
    >
      {children}
    </CustomButton>
  );
};
