import React from "react";
import Image from "next/image";
import { Div } from "@/styles/Common";
import dalmatian from "@/assets/img/dalmatian.png";
import { Text, Title } from "./styles";
import { theme } from "@/styles/theme";
import { Button } from "../Common/Button";
import { useRouter } from "next/router";
import footprint from "@/assets/img/footprintOrange.png";

const Search = ({ isMobile, isTablet }) => {
  const router = useRouter();

  const returnWidthButton1 = () => {
    if (isMobile) return "120px";
    if (isTablet) return "330px";
    return "330px";
  };

  const returnWidthButton2 = () => {
    if (isMobile) return "120px";
    if (isTablet) return "150px";
    return "163px";
  };

  const buttonProps = {
    labelColor: theme.colors.purple,
    labelWeight: theme.fonts.weight.bold,
    size: isMobile ? theme.fonts.size.xs : theme.fonts.size.default,
  };

  const returnWidthImage = () => {
    if (isMobile) return 147;
    if (isTablet) return 300;
    return 517;
  };

  const returnPadding = () => {
    if (isMobile) return "30px 30px 20px 20px";
    if (isTablet) return "50px 40px 30px 30px";
    return "70px 40px 0 50px";
  };

  const returnMarginText1 = () => {
    if (isMobile) return "10px";
    if (isTablet) return "20px";
    return "60px";
  };

  const returnMarginText2 = () => {
    if (isMobile) return "10px";
    if (isTablet) return "20px";
    return "25px";
  };

  return (
    <Div p={returnPadding()} style={{ border: `1px solid ${theme.colors.gray200}`, position: "relative" }}>
      <Image src={footprint} alt="footprint" width={52} style={{ position: "absolute", top: isMobile ? "30px" : "70px", right: isMobile ? "10px" : "30px" }}/>
      <Div width="50%" align={isMobile || isTablet ? "center" : "flex-start"}>
        <Image 
          src={dalmatian} 
          alt="dalmatian" 
          width={returnWidthImage()} 
        />
      </Div>
      <Div width="50%" direction="column">
        <Title color={theme.colors.blue200}>
          Buscamos tu
        </Title>
        <Title color={theme.colors.yellow}>
          Mascota
        </Title>
        <Text mt={returnMarginText1()} color={theme.colors.blue200} width="85%">
          Hacemos viral a tu mascota perdida para tener
          resultados rápidos y efectivos! Usamos la misma 
          tecnologí que las grander empresas para
          asegurarnos de llegar a todas las zonas de tu sector
          y obtener información de tu mascota mucho más 
          eficaz.
        </Text>
        <Text mt={returnMarginText2()} color={theme.colors.blue200} width="85%">
          Déjanos ayudarte a encontrar a tu amigo peludo.
        </Text>
        <Div 
          m={isMobile ? "20px 0 0 0" : "40px 0 0 0"} 
          gap={isMobile ? "15px" : "28px"}
          direction={isMobile || isTablet ? "column" : "row"}
        >
          <Button 
            {...buttonProps} 
            background={theme.colors.yellow} 
            hover={theme.colors.yellow}
            border={theme.colors.yellow}
            borderHover={theme.colors.yellow}
            width={returnWidthButton1()}
            height={"42.74px"}
          >
            Anunciar a mi mascota perdida
          </Button>
          <Button 
            {...buttonProps} 
            background={theme.colors.orange500} 
            hover={theme.colors.orange500}
            border={theme.colors.orange500}
            borderHover={theme.colors.orange500}
            width={returnWidthButton2()}
            height={isMobile ? "16.53px" : "42.74px"}
            onClick={() => router.push("/pet-bangk/buscamos-tu-mascota")}
          >
            Más info
          </Button>
        </Div>
      </Div>
    </Div>
  );
};

export default Search;