import React from "react";
import { CustomLink } from "./styles";

export const LinkButton = ({
  children,
  width,
  height,
  background,
  color,
  border,
  size,
  onClick,
  weight,
  font,
  backgroundHover,
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
      weight={weight}
      font={font}
      backgroundHover={backgroundHover}
      {...rest}
    >
      {children}
    </CustomLink>
  );
};
