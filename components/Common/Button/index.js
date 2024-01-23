import React from "react";
import { CustomButton } from "./styles";

export const Button = ({
  children,
  width,
  height,
  background,
  labelColor,
  labelWeight,
  border,
  size,
  radius,
  hover,
  borderHover,
  colorHover,
  borderHeight,
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
      labelWeight={labelWeight}
      border={border}
      size={size}
      radius={radius}
      hover={hover}
      borderHover={borderHover}
      colorHover={colorHover}
      borderHeight={borderHeight}
      mobileWidth={mobileWidth}
      onClick={onClick}
      {...rest}
    >
      {children}
    </CustomButton>
  );
};
