import React, { useState } from "react";
import Image from "next/image";
import { Div } from "@/styles/Common";
import { WrapperHeader } from "./styles";
import { Link } from "../Link";
import { theme } from "@/styles/theme";
import greenLogo from "../../assets/icons/green-logo.svg";
import menu from "../../assets/icons/menu.svg";
import { useRouter } from "next/router";
import MenuMobile from "./MenuMobile";

const Header = ({ isMobile, isTablet }) => {
  const router = useRouter();
  const [openMenu, setOpenMenu] = useState(false);
  const [optionSelected, setOptionSelected] = useState(null);

  const headerButtons = [
    { key: 0, label: "Seguros", url: "/seguros" },
    { key: 1, label: "Conócenos", url: "/conocenos" },
    { key: 2, label: "Blog", url: "/blog" },
    { key: 3, label: "Contacto", url: "/contacto" },
  ];

  const handleMenu = (menu) => {
    setOpenMenu(!menu);
  };

  const handleGo = (url, key) => {
    setOptionSelected(key);
    router.push(url);
    setOpenMenu(false);
  };

  const handleHome = () => {
    router.push("/");
    setOptionSelected(null);
    setOpenMenu(false);
  };

  return (
    <WrapperHeader>
      {isMobile ? (
        <>
          <Div>
            <Image
              alt="logo"
              src={greenLogo}
              width="93px"
              height="34px"
              onClick={handleHome}
              style={{ cursor: "pointer" }}
            />
          </Div>
          <Div
            m="0 30px 0 0"
            style={{ cursor: "pointer" }}
            onClick={() => handleMenu(openMenu)}
          >
            <Image alt="menu" src={menu} width={36} height={36} />
          </Div>
          {openMenu && (
            <MenuMobile
              headerButtons={headerButtons}
              optionSelected={optionSelected}
              handleGo={handleGo}
            />
          )}
        </>
      ) : (
        <>
          <Div>
            <Image
              alt="logo"
              src={greenLogo}
              width={isTablet ? "139px" : "163px"}
              height={isTablet ? "51px" : "60px"}
              onClick={handleHome}
              style={{ cursor: "pointer" }}
            />
          </Div>
          <Div gap={isTablet ? "63px" : "98px"}>
            {headerButtons.map((ele, indx) => (
              <Link
                key={indx}
                size={isTablet ? theme.fonts.size.xxs : theme.fonts.size.h6}
                color={
                  optionSelected === indx
                    ? theme.colors.orange
                    : theme.colors.black
                }
                onClick={() => handleGo(ele.url, ele.key)}
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
