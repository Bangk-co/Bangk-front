import React from "react";
import { CustomLink } from "./styles";

export const Link = ({
  children,
  width,
  height,
  background,
  color,
  border,
  size,
  onClick,
  font,
  ...rest
}) => {
  return (
    <CustomLink
      width={width}
      height={height}
      background={background}
      color={color}
      border={border}
      size={size}
      onClick={onClick}
      font={font}
      {...rest}
    >
      {children}
    </CustomLink>
  );
};
