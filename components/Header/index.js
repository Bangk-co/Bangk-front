import React, { useState } from "react";
import Image from "next/image";
import { Div } from "@/styles/Common";
import { WrapperHeader } from "./styles";
import { Link } from "../Link";
import { useMediaQuery } from "react-responsive";
import { theme } from "@/styles/theme";
import { Dropdown } from "antd";
import greenLogo from "../../assets/icons/green-logo.svg";
import menu from "../../assets/icons/menu.svg";
import { useRouter } from "next/router";

const Header = ({ isMobile, isTablet }) => {
  const router = useRouter();
  const [openMenu, setOpenMenu] = useState(false);

  const headerButtons = [
    { label: "Seguros", url: "/seguros" },
    { label: "Conócenos", url: "" },
    { label: "Seguro", url: "" },
    { label: "Contacto", url: "" },
  ];

  const links = (label) => {
    return <Link>{label}</Link>;
  };

  const items = [
    {
      key: 1,
      label: links("Seguros"),
    },
    {
      key: 2,
      label: links("Conócenos"),
    },
    { key: 3, label: links("Seguro") },
    { key: 4, label: links("Contacto") },
  ];

  const handleMenu = (menu) => {
    setOpenMenu(!menu);
  };

  const handleGo = (url) => {
    router.push(url);
  };

  return (
    <WrapperHeader>
      {isMobile ? (
        <>
          <Div>
            <Image alt="logo" src={greenLogo} width="93px" height="34px" />
          </Div>
          <Dropdown
            open={openMenu}
            menu={{ items }}
            trigger={["click"]}
            placement="bottom"
          >
            <Div
              m="0 30px 0 0"
              style={{ cursor: "pointer" }}
              onClick={() => handleMenu(openMenu)}
            >
              <Image alt="menu" src={menu} width={36} height={36} />
            </Div>
          </Dropdown>
        </>
      ) : (
        <>
          <Div>
            <Image
              alt="logo"
              src={greenLogo}
              width={isTablet ? "139px" : "163px"}
              height={isTablet ? "51px" : "60px"}
            />
          </Div>
          <Div gap={isTablet ? "63px" : "98px"}>
            {headerButtons.map((ele, indx) => (
              <Link
                key={indx}
                size={isTablet ? theme.fonts.size.xxs : theme.fonts.size.h6}
                onClick={() => handleGo(ele.url)}
              >
                {ele.label}
              </Link>
            ))}
          </Div>
        </>
      )}
    </WrapperHeader>
  );
};

export default Header;
