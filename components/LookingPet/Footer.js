import React from "react";
import { WrapperFooter } from "./styles";
import { Text } from "@/styles/Common";
import { theme } from "@/styles/theme";
import { Button } from "../Common/Button";
import starMessage from "@/assets/img/starMessage.png";
import Image from "next/image";

const Footer = ({ isMobile, isTablet }) => {
  return (
    <WrapperFooter>
      <Image src={starMessage} alt="starMessage" width={isMobile ? 80 : isTablet ? 90 : 230} style={{ position: "absolute", top: "40px", right: "40px" }}/>
      <Text
        color={theme.colors.blue200}
        size={isMobile ? theme.fonts.size.h3 :theme.fonts.size.xxl}
        font={theme.fonts.family.primaryBold}
        weight={theme.fonts.weight.bold}
      >
        Cada minuto cuenta!
      </Text>
      <Text
        color={theme.colors.blue200}
        size={isMobile ? theme.fonts.size.default : theme.fonts.size.h6}
        font={theme.fonts.family.primaryBold}
        style={{ width: isMobile ? "380px" : "600px", textAlign: "center" }}
      >
        Aprovecha las capacidades de la publicidad en redes sociales
        para acelerar el proceso de búsqueda.
      </Text>
      <Button
        background={theme.colors.white}
        border={theme.colors.white}
        hover={theme.colors.white}
        borderHover={theme.colors.white}
        labelColor={theme.colors.blue200}
        font={theme.fonts.family.primaryBold}
        weight={theme.fonts.weight.bold}
        size={theme.fonts.size.h6}
        width="280px"
        height="42px"
        style={{ marginTop: "40px" }}
      >
        Inicia tu busqueda ya!
      </Button>
    </WrapperFooter>
  );
};

export default Footer;