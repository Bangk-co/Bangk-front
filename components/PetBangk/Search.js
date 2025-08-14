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

  const buttonProps = {
    labelColor: theme.colors.purple,
    labelWeight: theme.fonts.weight.bold,
    size: isMobile ? theme.fonts.size.sm : theme.fonts.size.default,
    height: isMobile ? "28.53px" : "42.74px",
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

  const handleClickSearch = () => {
    window.open(`https://app.finders.pet/find?tenant=bangk`, "_blank");
  };

  return (
    <Div direction="column" p={returnPadding()} style={{ border: `1px solid ${theme.colors.gray200}`, position: "relative" }}>
      <Div>
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
                width={isMobile ? "100%" : "260px"}
                height={isMobile ? "28.53px" : "42.74px"}
                onClick={() => router.push("/pet-bangk/buscamos-tu-mascota")}
              >
                Conoce como funciona
              </Button>
            </Div>
          )}
        </Div>
      </Div>
      {isMobile && (
        <Div 
          m="20px 0 0 0" 
          gap="15px"
          direction="column"
        >
          <Button 
            {...buttonProps} 
            background={theme.colors.yellow} 
            hover={theme.colors.yellow}
            border={theme.colors.yellow}
            borderHover={theme.colors.yellow}
            width={isMobile ? "100%" : "260px"}
            onClick={() => router.push("/pet-bangk/buscamos-tu-mascota")}
          >
            Conoce como funciona
          </Button>
        </Div>
      )}
    </Div>
  );
};

export default Search;