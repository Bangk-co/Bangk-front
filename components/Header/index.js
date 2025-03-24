import React, { useState } from "react";
import Image from "next/image";
import { Div } from "@/styles/Common";
import { WrapperHeader } from "./styles";
import { Link } from "../Link";
import { theme } from "@/styles/theme";
import greenLogo from "../../assets/icons/green-logo.svg";
import petLogo from "../../assets/img/petBangkLogo.png";
import medLogo from "../../assets/img/med-logo-green.png";
import menu from "../../assets/icons/menu.svg";
import { useRouter } from "next/router";
import MenuMobile from "./MenuMobile";
import chevron from "@/assets/icons/arrow-up.svg";
import chevronDown from "@/assets/icons/chevron-down.svg";
import chevronDownOrange from "@/assets/icons/chevron-down-orange.svg";
import { Button } from "../Common/Button";
import { useDispatch } from "react-redux";
import { setPetsFormInfo } from "@/store/pets";

const Header = ({ isMobile, isTablet }) => {
  const dispatch = useDispatch();
  const router = useRouter();
  const { pathname } = router;
  const [openMenu, setOpenMenu] = useState(false);
  const [optionSelected, setOptionSelected] = useState(null);
  const [subMenuOpen, setSubMenuOpen] = useState(false);
  const [subMenuLoginOpen, setSubMenuLoginOpen] = useState(false);

  const headerButtons = [
    { key: 0, label: "Ahorro Hipotecario", url: null },
    {
      key: 1,
      label: "Seguros y Asistencias",
      url: "/ahorra-en-tus-seguros",
      hasSubMenu: true,
    },
    { key: 2, label: "Conócenos", url: "/conocenos" },
    { key: 3, label: "Blog", url: "/blog" },
    { key: 4, label: "Contacto", url: "/contacto" },
  ];

  const subMenuItems = [
    { key: 0, label: "Endosos", url: "/ahorra-en-tus-seguros" },
    { key: 1, label: "Car-Bangk", url: "/ahorra-en-tus-seguros/car-bangk" },
    { key: 2, label: "Telemedicina", url: "/ahorra-en-tus-seguros/med-bangk" },
    { key: 3, label: "Mascotas", url: "/pet-bangk" },
  ];

  const subMenuLogin = [
    { key: 0, label: "Login", url: "/iniciar-sesion" },
    { key: 1, label: "Crear cuenta", url: "/crear-cuenta" },
  ];

  const handleMenu = (menu) => {
    setOpenMenu(!menu);
  };

  const handleGo = (url, key) => {
    dispatch(setPetsFormInfo({}));
    if (url) {
      setOptionSelected(key);
      router.push(url);
      setOpenMenu(false);
      setSubMenuOpen(false);
      setSubMenuLoginOpen(false);
    }
  };

  const handleHome = () => {
    router.push("/");
    setOptionSelected(null);
    setOpenMenu(false);
    setSubMenuOpen(false);
    setSubMenuLoginOpen(false);
    dispatch(setPetsFormInfo({}));
  };

  const handlePetHome = () => {
    router.push("/pet-bangk");
    setOptionSelected(null);
    setOpenMenu(false);
    setSubMenuOpen(false);
    setSubMenuLoginOpen(false);
    dispatch(setPetsFormInfo({}));
  };

  const handleToggleSubMenu = () => {
    setSubMenuOpen(!subMenuOpen);
  };

  const handleToggleSubMenuLogin = () => {
    setSubMenuLoginOpen(!subMenuLoginOpen);
  };

  return (
    <WrapperHeader>
      {isMobile ? (
        <>
          <Div>
            {pathname.includes("med-bangk") && (
              <Image
                alt="logo"
                src={medLogo}
                width={150}
                onClick={handleHome}
                style={{ cursor: "pointer" }}
              />
            )}
            {pathname.includes("pet-bangk") && (
              <Image
                alt="logo"
                src={petLogo}
                width={150}
                height={37}
                onClick={handlePetHome}
                style={{ cursor: "pointer" }}
              />
            )}
            {!pathname.includes("pet-bangk") &&
              !pathname.includes("med-bangk") && (
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
              subMenuOpen={subMenuOpen}
              setSubMenuOpen={setSubMenuOpen}
              subMenuItems={subMenuItems}
            />
          )}
        </>
      ) : (
        <>
          <Div>
            {pathname.includes("pet-bangk") && (
              <Image
                alt="logo"
                src={petLogo}
                width={isTablet ? 169 : 246}
                height={isTablet ? 54 : 63}
                onClick={handlePetHome}
                style={{ cursor: "pointer" }}
              />
            )}
            {pathname.includes("med-bangk") && (
              <Image
                alt="logo"
                src={medLogo}
                width={isTablet ? 123 : 163}
                onClick={handleHome}
                style={{ cursor: "pointer" }}
              />
            )}
            {!pathname.includes("pet-bangk") &&
              !pathname.includes("med-bangk") && (
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

          <Div gap={isTablet ? "23px" : "48px"}>
            {headerButtons.map((ele, indx) => (
              <Div key={indx} align="center" style={{ position: "relative" }}>
                <Link
                  size={isTablet ? theme.fonts.size.xxs : theme.fonts.size.h6}
                  color={
                    pathname.includes(ele.url) ||
                    (ele.label === "Seguros y Asistencias" &&
                      pathname.includes("pet-bangk"))
                      ? theme.colors.orange
                      : theme.colors.gray500
                  }
                  onClick={() => {
                    if (ele.hasSubMenu) {
                      handleToggleSubMenu();
                    } else {
                      handleGo(ele.url, ele.key);
                    }
                  }}
                >
                  {ele.label}
                  {ele.label === "Seguros y Asistencias" && (
                    <Image
                      alt="chevron"
                      src={
                        pathname.includes(ele.url) ||
                        (ele.label === "Seguros y Asistencias" &&
                          pathname.includes("pet-bangk"))
                          ? chevronDownOrange
                          : chevronDown
                      }
                      style={{ marginLeft: "5px" }}
                    />
                  )}
                </Link>
                {ele.hasSubMenu && subMenuOpen && (
                  <Div
                    direction="column"
                    width="220px"
                    backgroundColor={theme.colors.white}
                    style={{
                      position: "absolute",
                      top: "100%",
                      left: 0,
                      borderRadius: "8px",
                      padding: "10px 20px",
                      zIndex: 999,
                    }}
                  >
                    {subMenuItems.map((subItem) => (
                      <Link
                        key={subItem.key}
                        size={
                          isTablet
                            ? theme.fonts.size.xs
                            : theme.fonts.size.default2
                        }
                        color={theme.colors.gray500}
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
                          src={chevron}
                          width={24}
                          height={24}
                          style={{ transform: "rotate(90deg)" }}
                        />
                      </Link>
                    ))}
                  </Div>
                )}
              </Div>
            ))}
            <Button
              style={{ position: "relative" }}
              onClick={handleToggleSubMenuLogin}
              borderHover={theme.colors.orange900}
              border={theme.colors.orange}
              hover={theme.colors.orange900}
              background={theme.colors.orange}
              width={"122px"}
            >
              Mi cuenta
              {subMenuLoginOpen && (
                <Div
                  direction="column"
                  width="150px"
                  backgroundColor={theme.colors.white}
                  style={{
                    position: "absolute",
                    top: "100%",
                    left: 0,
                    borderRadius: "8px",
                    padding: "10px 20px",
                    zIndex: 10,
                  }}
                >
                  {subMenuLogin.map((subItem) => (
                    <Link
                      key={subItem.key}
                      size={
                        isTablet
                          ? theme.fonts.size.xs
                          : theme.fonts.size.default2
                      }
                      color={theme.colors.gray500}
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
                    </Link>
                  ))}
                </Div>
              )}
            </Button>
          </Div>
        </>
      )}
    </WrapperHeader>
  );
};

export default Header;
