import React, { useState } from "react";
import { IconButton, Link, Menu, MenuItem, Breadcrumbs as MuiBreadcrumbs } from '@mui/material';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { WrapperBreadcrumbs } from "./styles";
import { theme } from "@/styles/theme";
import { Text } from "@/styles/Common";
import { useRouter } from "next/router";

const Breadcrumbs = ({ items, isMobile }) => {
  const router = useRouter();
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    if (event) {
      setAnchorEl(event.currentTarget);
    }
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const middleLinks = isMobile && items.length > 3 ? 
    items.slice(1, -1).filter((itm) => itm.type === "link") : [];

  const breadcrumbs = isMobile && items.length > 3 ? [
    ...items.slice(0, 1).map((item, indx) => (
      <Link
        key={indx}
        href={item.href}
        underline="hover"
        color="inherit"
        style={{
          marginRight: "12px",
          fontSize: theme.fonts.size.sm
        }}
      >
        {item.label}
      </Link>
    )),
    <IconButton key={"more-icon"} size="small" onClick={handleClick}>
      <MoreHorizIcon />
    </IconButton>,
    ...items.slice(-1).map((item, indx) => (
      <Text
        key={indx}
        color={theme.colors.gray900}
        size={theme.fonts.size.sm}
        style={{
          marginLeft: "10px"
        }}
      >
        {item.label}
      </Text>
    ))
  ] : [
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
      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        style={{ borderRadius: "12px" }}
      >
        {middleLinks.map((link, index) => (
          <MenuItem 
            key={index} 
            onClick={() => router.push(link.href)} 
            style={{ color: theme.colors.gray900, fontFamily: theme.fonts.family.primary }}
          >
            {link.label}
          </MenuItem>
        ))}
      </Menu>
      <MuiBreadcrumbs separator={<ArrowForwardIcon fontSize="small" />}>
        {breadcrumbs}
      </MuiBreadcrumbs>
    </WrapperBreadcrumbs>
  );
};

export default Breadcrumbs;
