import React from "react";
import { CustomTab } from "../styles";
import { TabPanel } from "@mui/material";

export const Tab = ({ size, source, ...rest }) => {
  return <CustomTab size={size} source={source} {...rest} />;
};
