import React from "react";
import { CustomLink } from "./styles";

export const Link = ({ children, color, weight, onClick, size, ...rest }) => {
  return (
    <CustomLink
      type="link"
      color={color}
      weight={weight}
      onClick={onClick}
      size={size}
      {...rest}
    >
      {children}
    </CustomLink>
  );
};
