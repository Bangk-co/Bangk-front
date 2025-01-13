import React from "react";
import { theme } from "@/styles/theme";
import { Col, Div, Row, Text } from "@/styles/Common";
import Image from "next/image";
import car from "@/assets/img/carJei.png";
import { WrapperAssistance } from "./styles";
import starOrange from "@/assets/img/starOrange.png";
import star from "@/assets/img/star.png";

const AssistanceInfo = ({ isMobile }) => {
  const assistanceText = [
    {
      text: "Asistencias para tu vehículo en caso de varada o accidente: grúa, carro taller, desplazamiento por inmovilización de tu auto, gastos de traslado para la recuperación del vehículo, depósito o custodia de tu auto.",
    },
    {
      text: "Conductor profesional.",
    },
    {
      text: "Asistencia en choque simple.",
    },
    {
      text: "Asistencia Internacional.",
    },
  ];
  return (
    <Div
      background={theme.colors.light4}
      direction={isMobile ? "column" : "row"}
    >
      <Col
        p={isMobile ? "60px 40px" : "80px 100px"}
        style={{ order: isMobile ? 2 : 0 }}
      >
        <Text
          color={theme.colors.green}
          size={isMobile ? theme.fonts.size.lg : theme.fonts.size.xxl}
          font={theme.fonts.family.primaryBold}
          mb="70px"
          style={{ lineHeight: 1.1 }}
        >
          Asistencias del Seguro X Kilometros
        </Text>

        <Image alt="star" src={starOrange} width={36} height={36} />
        <Col m="50px 0 20px 0" gap="20px">
          {assistanceText.map((step, index) => (
            <Text
              key={index}
              color={theme.colors.green}
              size={isMobile ? theme.fonts.size.h6 : theme.fonts.size.ft}
              font={theme.fonts.family.primary}
              align="left"
              style={{ flexDirection: "row", display: "flex" }}
            >
              <Div
                width="5px"
                height="5px"
                backgroundColor={theme.colors.orange}
                radius="50%"
                m="10px 10px 0 0"
                style={{ minWidth: "5px" }}
              />
              {step.text}
            </Text>
          ))}
        </Col>
      </Col>
      <WrapperAssistance
        isMobile={isMobile}
        style={{ order: isMobile ? 1 : 0, position: "relative" }}
      >
        <Image alt="star" src={star} />
        <Image
          alt="car"
          src={car}
          style={{
            position: "absolute",
            left: "50%",
            transform: "translateX(-50%)",
            zIndex: 1,
            maxWidth: isMobile ? "90%" : "65%",
            height: "auto",
          }}
        />
      </WrapperAssistance>
    </Div>
  );
};

export default AssistanceInfo;
