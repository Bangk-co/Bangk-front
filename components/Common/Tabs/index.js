import React from "react";
import { CustomTabs } from "./styles";

export const Tabs = ({
  orientation,
  centered,
  children,
  background,
  ...rest
}) => {
  return (
    <CustomTabs orientation={orientation} centered={centered} {...rest}>
      {children}
    </CustomTabs>
  );
};
