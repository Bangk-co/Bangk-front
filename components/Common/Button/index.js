import React from "react";
import { CustomButton } from "./styles";

export const Button = ({
  children,
  width,
  height,
  background,
  color,
  border,
  size,
  onClick,
  ...rest
}) => {
  return (
    <CustomButton
      width={width}
      height={height}
      background={background}
      color={color}
      border={border}
      size={size}
      onClick={onClick}
      {...rest}
    >
      {children}
    </CustomButton>
  );
};
