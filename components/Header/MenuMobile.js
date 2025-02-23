import React from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import { Text, WrapperMenu } from "./styles";
import { Div } from "@/styles/Common";
import { Link } from "../Link";
import { theme } from "@/styles/theme";
import logo from "../../assets/icons/white-logo.png";
import Social from "../Footer/social";
import chevronDown from "@/assets/icons/chevron-down-white.svg";
import chevronDownYellow from "@/assets/icons/chevron-down-yellow.svg";

const MenuMobile = ({
  headerButtons,
  optionSelected,
  handleGo,
  subMenuOpen,
  setSubMenuOpen,
  subMenuItems,
}) => {
  const router = useRouter();
  const { pathname } = router;

  const handleToggleSubMenu = () => {
    setSubMenuOpen(!subMenuOpen);
  };

  return (
    <WrapperMenu>
      <Div direction="column" height="100%">
        <Div
          direction="column"
          height="70%"
          width="100%"
          gap="23px"
          justify="center"
          align="center"
        >
          {headerButtons.map((ele, indx) => (
            <>
              <Link
                key={indx}
                size={theme.fonts.size.h3}
                weight={theme.fonts.weight.bold}
                color={
                  pathname.includes(ele.url) ||
                  (ele.label === "Seguros y Asistencias" &&
                    pathname.includes("pet-bangk"))
                    ? theme.colors.yellow
                    : theme.colors.white
                }
                onClick={() => {
                  if (ele.hasSubMenu) {
                    handleToggleSubMenu();
                  } else {
                    handleGo(ele.url, ele.key);
                  }
                }}
                style={{ lineHeight: "47px", height: "50px" }}
              >
                {ele.label}
                {ele.label === "Seguros y Asistencias" && (
                  <Image
                    alt="chevron"
                    src={
                      pathname.includes(ele.url) ||
                      (ele.label === "Seguros y Asistencias" &&
                        pathname.includes("pet-bangk"))
                        ? chevronDownYellow
                        : chevronDown
                    }
                    style={{ marginLeft: "5px" }}
                    width={24}
                    height={24}
                  />
                )}
              </Link>
              {ele.hasSubMenu && subMenuOpen && (
                <Div direction="column" width="80%" p="0 20px">
                  {subMenuItems.map((subItem) => (
                    <Link
                      key={subItem.key}
                      size={theme.fonts.size.default}
                      color={theme.colors.white}
                      onClick={() => handleGo(subItem.url, subItem.key)}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        padding: "24px 0",
                        justifyContent: "space-between",
                        width: "100%",
                      }}
                    >
                      {subItem.label}
                      <Image
                        alt="chevron"
                        src={chevronDown}
                        style={{ transform: "rotate(-90deg)" }}
                      />
                    </Link>
                  ))}
                </Div>
              )}
            </>
          ))}
        </Div>
        <Div direction="column" height="30%" align="center" m="40px 0 0 0">
          <Image alt="logo" src={logo} width={148.71} height={52.71} />
          <Text>
            Una plataforma{" "}
            <span style={{ color: theme.colors.orange }}>
              en la que ahorras tiempo<br></br> y dinero.
            </span>
          </Text>
          <Social />
        </Div>
      </Div>
    </WrapperMenu>
  );
};

export default MenuMobile;
