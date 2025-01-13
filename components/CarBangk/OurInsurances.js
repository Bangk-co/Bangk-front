import React from "react";
import { theme } from "@/styles/theme";
import { WrapperInsurance } from "./styles";
import { Div, Text } from "@/styles/Common";
import { Button } from "../Common/Button";
import { useRouter } from "next/router";

const OurInsurances = ({ isMobile }) => {
  const router = useRouter();
  const insuranceCards = [
    {
      secureColor: theme.colors.gray100,
      background: theme.colors.green,
      title: "POR KILÓMETROS",
      titleColor: theme.colors.orange500,
      description: `Único seguro <span style="font-family: ${theme.fonts.family.primaryBold};">100% digital, sin inspección</span>. Cargo fijo mensual de $40.000 más los kilómetros que recorras`,
      descriptionColor: theme.colors.white,
      buttonColor: theme.colors.yellow,
      buttonText: theme.colors.green,
      onClick: () => {
        router.push("/ahorra-en-tus-seguros/car-bangk/seguro-por-kilometro");
      },
    },
    {
      secureColor: theme.colors.gray100,
      background: theme.colors.orange500,
      title: `TRADICIONAL <span style="font-size: ${theme.fonts.size.ft}; font-family: ${theme.fonts.family.primaryBold}">(Todo Riesgos)</span>`,
      titleColor: theme.colors.green,
      description: `<span style="font-family: ${theme.fonts.family.primaryBold};">Perdidas totales y parciales, daños a terceros hasta $4.000 millones de pesos.</span> Contamos con inspección virtual.`,
      descriptionColor: theme.colors.green,
      buttonColor: theme.colors.green,
      buttonText: theme.colors.yellow,
      onClick: null,
    },
    {
      secureColor: theme.colors.white,
      background: theme.colors.yellow,
      title: "DAÑOS A TERCEROS",
      titleColor: theme.colors.green,
      description: `<span style="font-family: ${theme.fonts.family.primaryBold};">Responsabilidad civil extracontractual hasta $4.000 millones</span> de pesos.`,
      descriptionColor: theme.colors.green,
      buttonColor: theme.colors.orange500,
      buttonText: theme.colors.green,
      onClick: () => {
        router.push("/ahorra-en-tus-seguros/car-bangk/danos-a-terceros");
      },
    },
    {
      secureColor: theme.colors.green,
      background: theme.colors.light4,
      title: "BANGK-MOTOS",
      titleColor: theme.colors.orange500,
      description: `Perdidas totales y parciales, daños a terceros hasta $1.000 millones de pesos. Contamos con inspección virtual.`,
      descriptionColor: theme.colors.green,
      buttonColor: theme.colors.orange500,
      buttonText: theme.colors.green,
      onClick: null,
    },
  ];
  return (
    <WrapperInsurance>
      <Text
        color={theme.colors.green}
        size={isMobile ? theme.fonts.size.h6 : theme.fonts.size.ft}
        font={theme.fonts.family.primary}
        align="center"
      >
        Conoce
      </Text>
      <Text
        color={theme.colors.green}
        size={isMobile ? theme.fonts.size.lg : theme.fonts.size.xl}
        font={theme.fonts.family.primaryBold}
        align="center"
      >
        Nuestros seguros
      </Text>
      <Div
        direction={isMobile ? "column" : "row"}
        m="40px 0 0 0"
        gap="30px"
        align="center"
      >
        {insuranceCards.map((insurance, index) => (
          <Div
            key={index}
            width={isMobile ? "90%" : "300px"}
            height={isMobile ? "auto" : "400px"}
            p="30px 40px"
            background={insurance.background}
            radius="20px"
            direction="column"
            align="center"
            style={{ minHeight: isMobile && "350px" }}
          >
            <Text
              color={insurance.secureColor}
              size={
                isMobile ? theme.fonts.size.default2 : theme.fonts.size.default
              }
              font={theme.fonts.family.primary}
              mb="14px"
            >
              SEGURO
            </Text>
            <Text
              color={insurance.titleColor}
              size={isMobile ? theme.fonts.size.h4 : theme.fonts.size.h2}
              font={theme.fonts.family.primaryBold}
              mb="30px"
              dangerouslySetInnerHTML={{
                __html: insurance.title,
              }}
            />
            <Text
              color={insurance.descriptionColor}
              size={theme.fonts.size.default}
              font={theme.fonts.family.primary}
              mb="auto"
              dangerouslySetInnerHTML={{
                __html: insurance.description,
              }}
            />
            <Button
              height={"40px"}
              font={theme.fonts.family.primaryBold}
              size={isMobile ? theme.fonts.size.default : theme.fonts.size.h6}
              background={insurance.buttonColor}
              labelColor={insurance.buttonText}
              border={"transparent"}
              hover={insurance.buttonColor}
              borderHover={insurance.buttonColor}
              onClick={insurance.onClick}
            >
              Conoce más
            </Button>
          </Div>
        ))}
      </Div>
    </WrapperInsurance>
  );
};

export default OurInsurances;
