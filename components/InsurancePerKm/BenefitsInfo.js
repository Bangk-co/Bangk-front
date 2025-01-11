import React from "react";
import { theme } from "@/styles/theme";
import { Col, Div, Row, Text } from "@/styles/Common";
import Image from "next/image";
import coins from "@/assets/img/coinsFlag.png";
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
          Cargo fijo mensual de{" "}
          <span style={{ fontFamily: theme.fonts.family.primaryBold }}>
            40 mil pesos más los km
          </span>{" "}
          que recorras.
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
          Proceso ágil, cotización y emisión en línea
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
            No necesitas inspección
          </span>{" "}
          para asegurarte.
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
            Beneficios por tus buenos hábitos
          </span>{" "}
          de conducción.
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
          src={coins}
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
