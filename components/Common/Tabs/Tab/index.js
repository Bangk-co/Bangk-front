import React from "react";
import { CustomTab } from "../styles";
import { TabPanel } from "@mui/material";

export const Tab = ({ ...rest }) => {
  return <CustomTab {...rest} />;
};
