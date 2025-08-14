import React from "react";
import { WrapperHeader } from "./styles";
import logo from "@/assets/icons/white-logo.png";
import Image from "next/image";
import { Button } from "../Button";
import { theme } from "@/styles/theme";
import { useRouter } from "next/router";
import { deleteLocalUser } from "@/hooks/services/axiosInstance";

export const Header = ({ isMobile }) => {
  const isAuth = !!localStorage.getItem("user");
  const router = useRouter();
  const { pathname } = router;

  const validRoute = [
    "/ver-cotizacion/aceptacion-exitosa",
    "/ver-cotizacion/cotizacion-rechazada",
    "/solicitar-poliza/confirma-tus-datos",
    "/solicitar-poliza",
    "/solicitar-poliza/solicitud-exitosa",
    "/cotiza-tu-ahorro/tu-credito",
    "/cotiza-tu-ahorro/creacion-exitosa",
  ];

  const handleLogout = () => {
    deleteLocalUser();
    router.push("/iniciar-sesion");
  };

  return (
    <WrapperHeader isAuth={isAuth && validRoute.includes(pathname)}>
      <Image alt="logo" src={logo} height={isMobile ? 32 : 34} />
      {isAuth && validRoute.includes(pathname) && (
        <Button
          height={"40px"}
          width={"67px"}
          mobileWidth={"67px"}
          radius={"40px"}
          borderHeight={"3px solid"}
          border={theme.colors.yellow500}
          background={theme.colors.green900}
          hover={theme.colors.green900}
          borderHover={theme.colors.yellow500}
          labelColor={theme.colors.yellow500}
          onClick={handleLogout}
        >
          Salir
        </Button>
      )}
    </WrapperHeader>
  );
};
