import React, { useState } from "react";
import Image from "next/image";
import { Div, Row } from "@/styles/Common";
import { Button } from "@/components/Common/Button";
import { WrapperHeader } from "./styles";
import greenLogo from "../../../assets/icons/green-logo.svg";
import logout from "../../../assets/icons/logout.png";
import { useRouter } from "next/router";
import { deleteLocalUser } from "@/hooks/services/axiosInstance";
import { theme } from "../../../styles/theme";

const Header = ({ isMobile, isTablet }) => {
  const router = useRouter();

  const handleHome = () => {
    router.push("/plataforma");
  };

  const handleLogout = () => {
    deleteLocalUser();
    router.push("/iniciar-sesion");
  };

  return (
    <WrapperHeader>
      {isMobile ? (
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
          <Button
            padding="12px 16px"
            background={theme.colors.green}
            font={theme.fonts.family.primary}
            size={theme.fonts.size.h6}
            onClick={handleLogout}
            startIcon={<Image alt="logo" src={logout} width={20} height={20} />}
            style={{ width: "30px" }}
          />
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
          <Button
            width={"184px"}
            padding="12px 16px"
            background={theme.colors.green}
            font={theme.fonts.family.primary}
            size={theme.fonts.size.h6}
            onClick={handleLogout}
            startIcon={<Image alt="logo" src={logout} width={16} height={16} />}
          >
            Cerrar Sesión
          </Button>
        </>
      )}
    </WrapperHeader>
  );
};

export default Header;
