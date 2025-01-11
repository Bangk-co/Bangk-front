import React from "react";
import { Link, Breadcrumbs as MuiBreadcrumbs } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { WrapperBreadcrumbs } from "./styles";
import { theme } from "@/styles/theme";
import { Text } from "@/styles/Common";

const Breadcrumbs = ({ items, isMobile }) => {
  const breadcrumbs = [
    ...items.filter((itm) => itm.type === "link").map((item, indx) => {
      return (
        <Link
          key={indx}
          href={item.href}
          underline="hover"
          color="inherit"
          style={{
            marginRight: "12px",
            fontSize: isMobile ? theme.fonts.size.sm : theme.fonts.size.default2
          }}
        >
          {item.label}
        </Link>
      )
    }),
    ...items.filter((itm) => itm.type === "text").map((item, indx) => {
      return (
        <Text
          key={indx}
          color={theme.colors.gray900}
          size={isMobile ? theme.fonts.size.sm : theme.fonts.size.default2}
          style={{
            marginLeft: "10px"
          }}
        >
          {item.label}
        </Text>
      )
    })
  ];

  return (
    <WrapperBreadcrumbs>
      <MuiBreadcrumbs separator={<ArrowForwardIcon fontSize="small" />}>
        {breadcrumbs}
      </MuiBreadcrumbs>
    </WrapperBreadcrumbs>
  );
};

export default Breadcrumbs;
