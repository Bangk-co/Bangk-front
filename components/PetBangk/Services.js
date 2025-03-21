import React, { useState } from "react";
import { CardServices, Signs, SubTitle, WrapperAmount, WrapperServices } from "./styles";
import { theme } from "@/styles/theme";
import { Div, Text } from "@/styles/Common";
import arrowRight from "@/assets/icons/arrow-right.svg";
import { Button } from "../Common/Button";
import Image from "next/image";
import { useRouter } from "next/router";

const getPrice = (amount, frequency) => {
  const prices = {
    monthly: [23800, 45220, 63546],
    semiannual: [135660, 257754, 358399],
    annual: [257040, 488376, 678671],
  };

  const additionalCosts = {
    monthly: 20825,
    semiannual: 98175,
    annual: 222768,
  };

  const frequencyMap = {
    1: 'monthly',
    2: 'semiannual',
    3: 'annual',
  };

  const frequencyKey = frequencyMap[frequency];
  if (!frequencyKey || !prices[frequencyKey]) {
    return 0;
  }

  const index = amount > 3 ? 2 : amount - 1;
  let basePrice = prices[frequencyKey][index];

  if (amount > 3) {
    const additionalPets = amount - 3;
    basePrice += additionalPets * additionalCosts[frequencyKey];
  }

  if (index < 0 || index >= prices[frequencyKey].length) {
    return 0;
  }

  return basePrice;
};

export const Services = ({ isMobile, isTablet }) => {
  const router = useRouter();
  const [petBangkAmount, setPetBangkAmount] = useState(1);
  const [searchAmount, setSearchAmount] = useState(1);
  const [selectedAsistance, setSelectedAsistance] = useState(1);
  const [selectedSearch, setSelectedSearch] = useState(1);

  const buttonProps = {
    labelColor: theme.colors.white,
    size: isMobile ? theme.fonts.size.sm : theme.fonts.size.default2,
    mobileWidth: "90px",
    width: isMobile ? "120px" : '192px',
    height: '100%',
    border: 'transparent',
    borderHover: 'transparent',
  };

  const options = [
    {
      id: 1,
      title: "Asistencia para <span style='font-family: Gilroy Bold; color: #FFC400'>mascotas</span>",
      color: theme.colors.yellow,
      description: "Con el <span style='font-family: Gilroy Bold; color: #FFC400'>Plan PetBangk</span> tienes una asistencia que protege frente a múltiples percances, brindando tranquilidad para ti y tu mascota.",
      butttons: [
        { label: "Mensual", id: 1 },
        { label: "Semestral", id: 2 },
        { label: "Anual", id: 3 },
      ],
      colorButton: theme.colors.darkBlue,
      background: theme.colors.blue200,
      onClick: (value) => setSelectedAsistance(value),
      buttonText: "Protege a tu mascota ahora!",
      urlButton: "/pet-bangk/asegura-ya",
      countButtonsColor: theme.colors.orange500,
      amount: petBangkAmount,
      setAmount: setPetBangkAmount
    },
    {
      id: 2,
      title: "Buscamos tu <span style='font-family: Gilroy Bold; color: #563f88'>mascota</span>",
      color: theme.colors.purple,
      description: "Servicio el cual hace viral la busqueda de tu mascota en la zona del percance, siendo rápido y efectivo la divulgación, ahorrando tiempo y esfuerzos.",
      butttons: [
        { label: "Básico", id: 1 },
        { label: "Avanzado", id: 2 },
        { label: "Premium", id: 3 },
      ],
      colorButton: theme.colors.purple,
      background: theme.colors.orange500,
      onClick: (value) => setSelectedSearch(value),
      buttonText: "Anunciar mi mascota perdida",
      urlButton: "/",
      amount: searchAmount,
      setAmount: setSearchAmount,
      countButtonsColor: theme.colors.purple,
    },
  ];

  const returnGap = () => {
    if (isMobile) {
      return "40px";
    } else if (isTablet) {
      return "80px";
    } else {
      return "30px";
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
        align={"center"}
        width={"100%"}
      >
        {options.map((option, index) => (
          <CardServices key={index} background={option.background}>
            <Text
              font={theme.fonts.family.primaryBold}
              color={theme.colors.white}
              size={isMobile ? theme.fonts.size.h4 : theme.fonts.size.h3}
              dangerouslySetInnerHTML={{ __html: option.title }}
            />
            <Text 
              color={theme.colors.white}
              size={isMobile ? theme.fonts.size.default2 : theme.fonts.size.h6}
              mt="20px"
              mb="20px"
              style={{ textAlign: "center", height: "100px" }}
              dangerouslySetInnerHTML={{ __html: option.description }}
            />
            <Text 
              color={theme.colors.white}
              size={theme.fonts.size.default2}
              mb="10px"
              style={{ textAlign: "center" }}
            >
              Selecciona una forma de pago
            </Text>
            <Div 
              style={{ 
                background: "rgba(255, 255, 255, 0.2)", 
                width: "100%", 
                height: isMobile ? "40px" : "50px", 
                borderRadius: "40px",
                justifyContent: isMobile ? "space-around" : "center",
                alignItems: "center",
              }}
            >
              {option.butttons.map((button, index) => ( 
                <Button 
                  {...buttonProps}
                  key={index}
                  style={{ 
                    marginLeft: isMobile ? '-20px' : (index > 0 ? '-45px' : '0'),
                  }}
                  font={option.id === 1 ? button.id === selectedAsistance ? theme.fonts.family.primaryBold : theme.fonts.family.primary : button.id === selectedSearch ? theme.fonts.family.primaryBold : theme.fonts.family.primary}
                  background={option.id === 1 ? button.id === selectedAsistance ? option.colorButton : "transparent" : button.id === selectedSearch ? option.colorButton : "transparent"}
                  hover={option.id === 1 ? button.id === selectedAsistance ? option.colorButton : "transparent" : button.id === selectedSearch ? option.colorButton : "transparent"}
                  onClick={() => option.onClick(button.id)}
                >
                  {button.label}
                </Button>
              ))}
            </Div>
            <Div direction="column" align="center" m="20px 0 0 0">
              <Text color={theme.colors.white} size={theme.fonts.size.sm} mb="10px">
                Número de mascotas
              </Text>
              <Div gap="10px">
                <Signs style={{ background: option.countButtonsColor }} onClick={() => option.amount > 1 && option.setAmount(option.amount - 1)}>
                  -
                </Signs>
                <WrapperAmount>
                  {option.amount}
                </WrapperAmount>
                <Signs style={{ background: option.countButtonsColor }} onClick={() => option.setAmount(option.amount + 1)}>
                  +
                </Signs>
              </Div>
            </Div>
            <Div m="20px 0 0 0">
              <Text 
                font={theme.fonts.family.primaryBold}
                color={theme.colors.white}
                size={isMobile ? theme.fonts.size.h3 : theme.fonts.size.h2}
                style={{ marginLeft: isMobile ? "8px" : "16px", marginRight: isMobile ? "4px" : "6px" }}
              >
                {option.id === 1 ? `$${getPrice(option.amount, selectedAsistance).toLocaleString('es-ES') }*` : "$0*"}
              </Text>
            </Div>
            <Button
              width={isMobile ? "100%" : "352px"}
              height={isMobile ? "max-content" : "40px"}
              background={"transparent"}
              hover={"transparent"}
              labelColor={theme.colors.white}
              font={theme.fonts.family.primary}
              size={theme.fonts.size.h6}
              border={theme.colors.white}
              borderHover={theme.colors.white}
              borderRadius={"50px"}
              style={{ marginTop: "30px" }}
              onClick={() => router.push(`${option.urlButton}?selectedPlan=${selectedAsistance}&&petsAmount=${petBangkAmount}`)}
            >
              {option.buttonText}
              <Image src={arrowRight} alt="arrowRight" />
            </Button>
          </CardServices>
        ))}
      </Div>
    </WrapperServices>
  );
};
