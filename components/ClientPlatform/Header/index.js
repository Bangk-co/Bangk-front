import React, { useState } from "react";
import Image from "next/image";
import { Div, Row } from "@/styles/Common";
import { Button } from "@/components/Common/Button";
import { WrapperHeader } from "./styles";
import greenLogo from "../../../assets/icons/green-logo.svg";
import whiteLogo from "../../../assets/icons/white-logo.png";
import hamburger from "../../../assets/icons/hamburgerGreen.svg";
import close from "../../../assets/icons/close.svg";
import logout from "../../../assets/icons/logout.svg";
import whatsapp from "../../../assets/icons/whatsappBlack.svg";
import { useRouter } from "next/router";
import { deleteLocalUser } from "@/hooks/services/axiosInstance";
import { theme } from "../../../styles/theme";
import { Modal } from "@mui/material";
import { MenuModal } from "./MenuModal";
import { LogoutModal } from "./LogoutModal";

const Header = ({ isMobile, isTablet }) => {
  const router = useRouter();

  const [showMenu, setShowMenu] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const handleHome = () => {
    router.push("/plataforma-cliente");
  };

  const handleWpp = () => {
    window.open(
      "https://api.whatsapp.com/send?phone=573009136761&text=Hola%20Bangk!",
      "_blank"
    );
  };

  const handleShowModal = () => {
    setShowMenu(false);
    setShowModal(true);
  };

  const handleLogout = () => {
    deleteLocalUser();
    router.push("/");
  };

  const handleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <WrapperHeader isMobile={isMobile}>
      {isMobile ? (
        <>
          <Modal open={showMenu} style={{ zIndex: 1 }}>
            <MenuModal
              handleWpp={handleWpp}
              handleShowModal={handleShowModal}
            />
          </Modal>
          <Modal open={showModal}>
            <LogoutModal
              handleLogout={handleLogout}
              setShowModal={setShowModal}
            />
          </Modal>
          <Div>
            <Image
              alt="logo"
              src={whiteLogo}
              width={88}
              height={33}
              onClick={handleHome}
              style={{ cursor: "pointer" }}
            />
          </Div>
          <Button
            padding="0px"
            borderHover={theme.colors.green900}
            border={theme.colors.green900}
            hover={theme.colors.yellow500}
            background={theme.colors.yellow500}
            font={theme.fonts.family.primary}
            size={theme.fonts.size.default2}
            radius={"40px"}
            onClick={handleMenu}
            style={{ width: "30px", zIndex: 4 }}
          >
            <Image
              alt="logo"
              src={showMenu ? close : hamburger}
              width={24}
              height={24}
            />
          </Button>
        </>
      ) : (
        <>
          <Div>
            <Image
              alt="logo"
              src={greenLogo}
              width={88}
              height={33}
              onClick={handleHome}
              style={{ cursor: "pointer" }}
            />
          </Div>
          <Row gap="16px">
            <Button
              width={"251px"}
              padding="0px"
              labelColor={theme.colors.green900}
              borderHover={theme.colors.white}
              border={theme.colors.white}
              hover={theme.colors.gray100}
              background={theme.colors.white}
              font={theme.fonts.family.primaryBold}
              size={theme.fonts.size.default2}
              radius={"40px"}
              onClick={handleWpp}
              startIcon={
                <Image alt="logo" src={whatsapp} width={16} height={16} />
              }
            >
              Comunícate con nosotros
            </Button>
            <Button
              width={"173px"}
              padding="12px 16px"
              labelColor={theme.colors.green900}
              borderHover={theme.colors.green900}
              border={theme.colors.green900}
              borderHeight={"3px solid"}
              hover={theme.colors.gray100}
              background={theme.colors.white}
              font={theme.fonts.family.primaryBold}
              size={theme.fonts.size.default2}
              radius={"40px"}
              onClick={handleLogout}
              startIcon={
                <Image alt="logo" src={logout} width={16} height={16} />
              }
              style={{ gap: "8px" }}
            >
              Cerrar Sesión
            </Button>
          </Row>
        </>
      )}
    </WrapperHeader>
  );
};

export default Header;
