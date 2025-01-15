import React, { useState } from "react";
import { CardServices, Signs, SubTitle, WrapperAmount, WrapperServices } from "./styles";
import { theme } from "@/styles/theme";
import { Div, Text } from "@/styles/Common";
import star from "@/assets/img/star.png";
import arrowRight from "@/assets/img/arrowRight.png";
import Image from "next/image";
import { Button } from "../Common/Button";

export const Services = ({ isMobile, isTablet }) => {
  const [petBangkAmount, setPetBangkAmount] = useState(1);
  const [searchAmount, setSearchAmount] = useState(1);

  const buttonProps = {
    labelColor: theme.colors.purple,
    background: theme.colors.white,
    hover: theme.colors.white,
    font: theme.fonts.family.primaryBold,
    size: isMobile ? theme.fonts.size.sm : theme.fonts.size.default,
    weight: theme.fonts.weight.bold,
    height: isMobile ? "16.53px" : "42.74px",
    width: isMobile ? "90px" : "120px",
    mobileWidth: "90px"
  };

  const options = [
    {
      title1: "Plan",
      title2: "PetBangk",
      color: theme.colors.yellow,
      description: "Seguro integral para tu mascota, cubriendo una gran cantidad de percances para la tranquilidad tuya y de tu mascota.",
      butttons: [
        { label: "Mensual" },
        { label: "Semestral" },
        { label: "Anual" },
      ],
      colorButton: theme.colors.orange500,
      background: theme.colors.blue200,
      amount: petBangkAmount,
      setAmount: setPetBangkAmount
    },
    {
      title1: "Buscamos tu",
      title2: "mascota",
      color: theme.colors.purple,
      description: "Servicio el cual hace viral la busqueda de tu mascota en la zona del percance, siendo rápido y efectivo la divulgación, ahorrando tiempo y esfuerzos.",
      butttons: [
        { label: "Básico" },
        { label: "Avanzado" },
        { label: "Premium" },
      ],
      colorButton: theme.colors.blue200,
      background: theme.colors.orange500,
      amount: searchAmount,
      setAmount: setSearchAmount
    },
  ];

  const returnGap = () => {
    if (isMobile) {
      return "40px";
    } else if (isTablet) {
      return "80px";
    } else {
      return "120px";
    }
  };

  return (
    <WrapperServices>
      <SubTitle color={theme.colors.orange500}>
        Nuestros <span style={{ fontFamily: theme.fonts.family.primaryMedium, color: theme.colors.blue200 }}>Servicios</span>
      </SubTitle>
      <Text 
        color={theme.colors.blue200} 
        weight={theme.fonts.weight.semibold} 
        size={isMobile ? theme.fonts.size.default2 : theme.fonts.size.default}
        mb="50px"
      >
        Cuida a quien deja huella en ti
      </Text>
      <Div 
        gap={returnGap()} 
        direction={isMobile || isTablet ? "column" : "row"}
        justify={"center"}
      >
        {options.map((option, index) => (
          <CardServices key={index} background={option.background}>
            <Text
              font={theme.fonts.family.primaryMedium}
              color={theme.colors.white}
              weight={theme.fonts.weight.bold}
              size={isMobile ? theme.fonts.size.h4 : theme.fonts.size.h3}
              lineHeight={isMobile ? "24px" : "36px"}
              style={{ width: "300px", height: isMobile ? "55px" : "72px" }}
            >
              {option.title1}{" "}
              <span style={{ color: option.color, fontFamily: theme.fonts.family.primaryMedium }}>{option.title2}</span>
            </Text>
            <Div width="100%" justify="end">
              <Signs color={option.color} style={{ cursor: "pointer" }} onClick={() => option.setAmount(option.amount + 1)}>
                +
              </Signs>
            </Div>
            <Div align="center" m="0px">
              <Image src={star} alt="star" width={isMobile ? 20 : 25} height={isMobile ? 20 : 25} style={{ marginBottom: "18px" }} />
              <Text 
                font={theme.fonts.family.primaryBold}
                color={theme.colors.white}
                size={isMobile ? theme.fonts.size.h3 : theme.fonts.size.h1}
                style={{ marginLeft: isMobile ? "8px" : "16px", marginRight: isMobile ? "4px" : "6px" }}
              >
                ${ (option.amount * 15000).toLocaleString('es-ES') }
              </Text>
              <Text 
                font={theme.fonts.family.primaryBold}
                color={option.color} 
                size={isMobile ? theme.fonts.size.xs : theme.fonts.size.default2}
                mt="18px"
              >
                Por mascota
              </Text>
              <Div direction="column" m={isMobile ? "0 0 0 38px" : "0 0 0 32px"}>
                <WrapperAmount>
                  {option.amount}
                </WrapperAmount>
              </Div>
            </Div>
            <Div width="100%" justify="end">
              <Signs color={option.color} style={{ marginTop: isMobile ? "-15px" : "-20px", cursor: "pointer" }} onClick={() => option.setAmount(option.amount - 1)}>
                -
              </Signs>  
            </Div>
            <Text 
              color={theme.colors.white}
              size={isMobile ? theme.fonts.size.default2 : theme.fonts.size.default}
              style={{ width: isMobile ? "280px" : "380px", height: isMobile ? "86px" : "86px" }}
              mt="20px"
              mb="20px"
            >
              {option.description}
            </Text>
            <Div justify="space-between">
              {option.butttons.map((button, index) => ( 
                <Button 
                  {...buttonProps}
                  borderHover={index === 0 ? option.colorButton : theme.colors.white}
                  border={index === 0 ? option.colorButton : theme.colors.white} 
                  key={index}
                >
                  {button.label}
                </Button>
              ))}
            </Div>
            <Div 
              style={{ 
                position: "absolute", 
                right: isMobile ? "-15px" : "-30px", 
                bottom: isMobile ? "-25px" : "-40px",
              }}
            >
              <Image src={arrowRight} alt="arrowRight" width={isMobile ? 50 : 80} height={isMobile ? 50 : 80} />
            </Div>
          </CardServices>
        ))}
      </Div>
    </WrapperServices>
  );
};
