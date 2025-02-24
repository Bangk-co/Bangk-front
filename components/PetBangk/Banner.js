import React from "react";
import { Text, Title, WrapperBanner } from "./styles";
import { Div } from "@/styles/Common";
import img from "@/assets/img/footprintCat.png";
import Image from "next/image";
import { theme } from "@/styles/theme";
import { Button } from "../Common/Button";
import { useRouter } from "next/router";

const Banner = ({ isMobile, isTablet }) => {
  const router = useRouter();

  const returnWidthButton1 = () => {
    if (isMobile) return "100%";
    if (isTablet) return "150px";
    return "330px";
  };

  const returnWidthButton2 = () => {
    if (isMobile) return "100%";
    if (isTablet) return "150px";
    return "163px";
  };

  const buttonProps = {
    labelColor: theme.colors.purple,
    labelWeight: theme.fonts.weight.bold,
    size: isMobile ? theme.fonts.size.sm : theme.fonts.size.default,
    height: isMobile ? "28.53px" :"42.74px",
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
      <Div direction="row">
        <Div width={"60%"} direction="column">
          <Title style={{ marginBottom: isMobile ? "60px" : "100px" }}>
            Cuidamos a quienes {" "} 
            <span style={{ color: theme.colors.yellow, fontFamily: theme.fonts.family.primaryBold }}>dejan huella!</span>
          </Title>
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
          {!isMobile && (
            <Div 
              m="40px 0 0 0" 
              gap="28px"
              direction="row"
            >
              <Button 
                {...buttonProps}
                background={theme.colors.yellow}
                hover={theme.colors.yellow}
                border={theme.colors.yellow}
                borderHover={theme.colors.yellow}
                width={returnWidthButton1()}
                onClick={() => router.push("/pet-bangk/asegura-ya")}
              >
                Protege a tu mascota ahora!
              </Button>
              <Button 
                {...buttonProps}
                background={theme.colors.orange500}
                hover={theme.colors.orange500}
                border={theme.colors.orange500}
                borderHover={theme.colors.orange500}
                width={returnWidthButton2()}
                onClick={() => router.push("/pet-bangk/info-petbangk")}
              >
                Más info
              </Button>
            </Div>
          )}
        </Div>
        <Div width="40%" align="center">
          <Image src={img} alt="footprintCat" width={returnWidthImage()} />
        </Div>
      </Div>
      {isMobile && (
        <Div 
          m="20px 0 0 0" 
          gap="15px"
          direction="column"
          width="100%"
        >
          <Button 
            {...buttonProps}
            background={theme.colors.yellow}
            hover={theme.colors.yellow}
            border={theme.colors.yellow}
            borderHover={theme.colors.yellow}
            width={returnWidthButton1()}
            onClick={() => router.push("/pet-bangk/asegura-ya")}
          >
            Protege a tu mascota ahora!
          </Button>
          <Button 
            {...buttonProps}
            background={theme.colors.orange500}
            hover={theme.colors.orange500}
            border={theme.colors.orange500}
            borderHover={theme.colors.orange500}
            width={returnWidthButton2()}
            onClick={() => router.push("/pet-bangk/info-petbangk")}
          >
            Más info
          </Button>
        </Div>
      )}
    </WrapperBanner>
  )
};

export default Banner;
