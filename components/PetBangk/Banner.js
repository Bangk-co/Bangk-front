import React from "react";
import { Text, Title, WrapperBanner } from "./styles";
import { Div } from "@/styles/Common";
import img from "@/assets/img/footprintCat.png";
import Image from "next/image";
import { theme } from "@/styles/theme";
import { Button } from "../Common/Button";

const Banner = ({ isMobile, isTablet }) => {

  const returnWidthButton = () => {
    if (isMobile) return "120px";
    if (isTablet) return "150px";
    return "163px";
  };

  const buttonProps = {
    labelColor: theme.colors.purple,
    labelWeight: theme.fonts.weight.bold,
    size: isMobile ? theme.fonts.size.xs : theme.fonts.size.default,
    height: isMobile ? "16.53px" :"42.74px",
    width: returnWidthButton()
  };

  const returnWidthImage = () => {
    if (isMobile) return 147;
    if (isTablet) return 300;
    return 560;
  };

  const returnMarginText1 = () => {
    if (isMobile) return "20px";
    if (isTablet) return "30px";
    return "50px";
  };

  const returnMarginText2 = () => {
    if (isMobile) return "15px";
    if (isTablet) return "20px";
    return "30px";
  };

  return (
    <WrapperBanner>
      <Div width={"60%"} direction="column">
        <Title>Cuidamos a quienes</Title>
        <Title color={theme.colors.yellow}>dejan huella!</Title>
        <Text mt={returnMarginText1()}>
          Cuidamos no solo tu bolsillo, si no tus seres queridos.
          Sabemos que tu mascota es uno más de tu familia y se 
          merece todos los cuidados.
        </Text>
        <Text mt={returnMarginText2()}>
          Con más de 400 proveedores para el cuidado y una
          cobertura de aprox. 80% del territorio nacional, tus
          mascotas siempre estarán seguras.
        </Text>
        <Div m={isMobile ? "20px 0 0 0" : "40px 0 0 0"} gap={isMobile ? "15px" : "28px"}>
          <Button 
            {...buttonProps}
            background={theme.colors.yellow}
            hover={theme.colors.yellow}
            border={theme.colors.yellow}
            borderHover={theme.colors.yellow}
          >
            Asegura ya!
          </Button>
          <Button 
            {...buttonProps}
            background={theme.colors.orange500}
            hover={theme.colors.orange500}
            border={theme.colors.orange500}
            borderHover={theme.colors.orange500}
          >
            Más info
          </Button>
        </Div>
      </Div>
      <Div width="40%">
        <Image src={img} alt="footprintCat" width={returnWidthImage()} />
      </Div>
    </WrapperBanner>
  )
};

export default Banner;
