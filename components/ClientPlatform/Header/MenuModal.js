import { useState } from "react";
import Image from "next/image";
import { WrapperMenu } from "./styles";
import { Text, Row } from "@/styles/Common";
import { theme } from "@/styles/theme";
import profileIcon from "@/assets/icons/profileMobile.svg";
import logoutIcon from "@/assets/icons/logout.svg";
import whatsapp from "@/assets/icons/whatsappBlack.svg";
import keyIcon from "@/assets/icons/key.svg";
import { fontFamily } from "@mui/system";

export const MenuModal = ({ handleWpp, handleShowModal, handleProfile }) => {
  const menuOptions = [
    {
      icon: profileIcon,
      text: "Mi perfil",
      onclick: handleProfile,
    },
    {
      icon: keyIcon,
      text: "Cambio de contraseña",
      onclick: () => {},
    },
    {
      icon: whatsapp,
      text: "Comunicate con nosotros",
      onclick: handleWpp,
    },
    {
      icon: logoutIcon,
      text: "Cerrar sesión",
      onclick: handleShowModal,
    },
  ];
  return (
    <WrapperMenu>
      {menuOptions.map((menu, index) => (
        <Row
          key={index}
          align="center"
          gap="6px"
          p="8px 4px"
          style={{
            cursor: "pointer",
            borderBottom: `1px solid ${theme.colors.gray100}`,
          }}
          css={{
            "&:hover": {
              borderBottom: `1px solid ${theme.colors.yellow500} !important`,
            },
          }}
          onClick={menu.onclick}
        >
          <Image alt="logo" src={menu.icon} width={16} height={16} />
          <Text
            color={theme.colors.green900}
            font={theme.fonts.family.primary}
            size={theme.fonts.size.sm}
            css={{
              "&:hover": {
                fontFamily: theme.fonts.family.primaryBold,
              },
            }}
          >
            {menu.text}
          </Text>
        </Row>
      ))}
    </WrapperMenu>
  );
};
