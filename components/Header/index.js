import React, { useState } from "react";
import Image from "next/image";
import { Div } from "@/styles/Common";
import { WrapperHeader } from "./styles";
import { Link } from "../Link";
import { theme } from "@/styles/theme";
import greenLogo from "../../assets/icons/green-logo.svg";
import petLogo from "../../assets/img/petBangkLogo.png";
import menu from "../../assets/icons/menu.svg";
import { useRouter } from "next/router";
import MenuMobile from "./MenuMobile";
import { Button } from "../Common/Button";

const Header = ({ isMobile, isTablet }) => {
  const router = useRouter();
  const { pathname } = router;
  const [openMenu, setOpenMenu] = useState(false);
  const [optionSelected, setOptionSelected] = useState(null);

  const headerButtons = [
    { key: 0, label: "Seguros", url: "/ahorra-en-tus-seguros" },
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

  const handlePetHome = () => {
    router.push("/pet-bangk");
    setOptionSelected(null);
    setOpenMenu(false);
  };

  return (
    <WrapperHeader>
      {isMobile ? (
        <>
          <Div>
            {pathname.includes("pet-bangk") ? (
              <Image
                alt="logo"
                src={petLogo}
                width={150}
                height={37}
                onClick={handlePetHome}
                style={{ cursor: "pointer" }}
              />
            ) : (
              <Image
                alt="logo"
                src={greenLogo}
                width={93}
                height={34}
                onClick={handleHome}
                style={{ cursor: "pointer" }}
              />
            )}
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
            {pathname.includes("pet-bangk") ? (
              <Image
                alt="logo"
                src={petLogo}
                width={isTablet ? 169 : 246}
                height={isTablet ? 54 : 63}
                onClick={handlePetHome}
                style={{ cursor: "pointer" }}
              />
            ) : (
              <Image
                alt="logo"
                src={greenLogo}
                width={isTablet ? 139 : 163}
                height={isTablet ? 51 : 60}
                onClick={handleHome}
                style={{ cursor: "pointer" }}
              />
            )}
          </Div>

          <Div gap={isTablet ? "63px" : "98px"}>
            {headerButtons.map((ele, indx) => (
              <Link
                key={indx}
                size={isTablet ? theme.fonts.size.xxs : theme.fonts.size.ft}
                color={
                  pathname.includes(ele.url)
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
