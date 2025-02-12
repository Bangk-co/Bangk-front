import React from "react";
import { theme } from "@/styles/theme";
import { Col, Div, Row, Text } from "@/styles/Common";
import Image from "next/image";
import car from "@/assets/img/benefitsCar.png";
import { WrapperBenefits } from "./styles";
import star from "@/assets/img/starOrange.png";

const BenefitsInfo = ({ isMobile }) => {
  const benefitsText = [
    {
      text: (
        <Text
          color={theme.colors.green}
          size={isMobile ? theme.fonts.size.h6 : theme.fonts.size.ft}
          font={theme.fonts.family.primary}
        >
          Asegúrate fácilmente, cotización y emisión inmediata.
        </Text>
      ),
    },
    {
      text: (
        <Text
          color={theme.colors.green}
          size={isMobile ? theme.fonts.size.h6 : theme.fonts.size.ft}
          font={theme.fonts.family.primary}
        >
          <span style={{ fontFamily: theme.fonts.family.primaryBold }}>
            Inspección virtual
          </span>{" "}
          para que no tengas que desplazarte, o en centros de Automás.
        </Text>
      ),
    },
    {
      text: (
        <Text
          color={theme.colors.green}
          size={isMobile ? theme.fonts.size.h6 : theme.fonts.size.ft}
          font={theme.fonts.family.primary}
        >
          Programa de seguridad vial para clientes corporativos
        </Text>
      ),
    },
    {
      text: (
        <Text
          color={theme.colors.green}
          size={isMobile ? theme.fonts.size.h6 : theme.fonts.size.ft}
          font={theme.fonts.family.primary}
        >
          Chequeo preventivo del vehículo del asegurado antes de un viaje.
        </Text>
      ),
    },
    {
      text: (
        <Text
          color={theme.colors.green}
          size={isMobile ? theme.fonts.size.h6 : theme.fonts.size.ft}
          font={theme.fonts.family.primary}
        >
          Acompañamiento y asesoramiento en peritaje del vehículo
        </Text>
      ),
    },
  ];
  return (
    <Div
      background={theme.colors.light4}
      direction={isMobile ? "column" : "row"}
    >
      <WrapperBenefits isMobile={isMobile}>
        <Image
          alt="coins"
          src={car}
          width={isMobile ? 300 : "689px"}
          height={isMobile ? 300 : "642px"}
        />
      </WrapperBenefits>

      <Col p={isMobile ? "60px 40px" : "80px 100px"}>
        <Text
          color={theme.colors.green}
          size={isMobile ? theme.fonts.size.lg : theme.fonts.size.xxl}
          font={theme.fonts.family.primaryBold}
          mb="70px"
          style={{ lineHeight: 1.1 }}
        >
          Beneficios
          <br />
          Seguro Para Carros
        </Text>

        <Image alt="star" src={star} width={36} height={36} />
        <Col m="50px 0 20px 0" gap="20px">
          {benefitsText.map((step, index) => (
            <Row key={index} align="center" gap="10px">
              <Div
                width="5px"
                height="5px"
                backgroundColor={theme.colors.orange}
                radius="50%"
                style={{ minWidth: "5px" }}
              />
              <Text
                color={theme.colors.green}
                size={isMobile ? theme.fonts.size.h6 : theme.fonts.size.ft}
                font={theme.fonts.family.primary}
                align="left"
              >
                {step.text}
              </Text>
            </Row>
          ))}
        </Col>
      </Col>
    </Div>
  );
};

export default BenefitsInfo;
