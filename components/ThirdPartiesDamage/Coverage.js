import React, { useState } from "react";
import Image from "next/image";
import { theme } from "@/styles/theme";
import star from "@/assets/img/star.png";
import starOrange from "@/assets/img/starOrange.svg";
import { Col, Div, Row, Text } from "@/styles/Common";
import { WrapperCoverage } from "./styles";
import { CollapseLanding } from "../Common/CollapseLanding";

const Coverage = ({ isMobile }) => {
  const coveragesText = [
    {
      text: "Te respaldamos con los amparos de Responsabilidad Civil Extracontractual y Amparo Patrimonial.",
    },
    {
      text: "Si causas daños a otras personas o sus bienes te cubrimos hasta 4 mil millones de pesos.",
    },
    {
      text: "Si tienes un accidente automovilístico, contarás con asistencia jurídica, si la necesitas",
    },
    {
      text: "Cobertura de accidentes personales para ti y los ocupantes de tu auto en caso de accidente.",
    },
  ];
  return (
    <WrapperCoverage>
      <Div m="0 0 40px 0" direction={isMobile ? "column" : "row"}>
        <Col width={isMobile ? "100%" : "50%"}>
          <Text
            color={theme.colors.green}
            size={isMobile ? theme.fonts.size.lg : theme.fonts.size.xxl}
            font={theme.fonts.family.primaryBold}
            mb={isMobile ? "0px" : "120px"}
            style={{ width: "87%", lineHeight: 1.1 }}
          >
            Coberturas
            <br />X Daño a Terceros
          </Text>
        </Col>
        <Col m="50px 0 20px 0" gap="20px">
          {coveragesText.map((step, index) => (
            <Row
              key={index}
              align="center"
              gap={isMobile ? "20px" : "40px"}
              p={isMobile ? "20px 10px" : "50px 90px"}
              style={{
                borderBottom:
                  index + 1 < coveragesText.length &&
                  `2px solid ${theme.colors.gray200}`,
              }}
            >
              <Image alt="star" src={starOrange} width={20} height={20} />
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
      </Div>
      <Image
        alt="star"
        src={star}
        width={isMobile ? 80 : 350}
        height={isMobile ? 80 : 350}
        style={{
          position: "absolute",
          bottom: isMobile ? "-40px" : "-175px",
        }}
      />
    </WrapperCoverage>
  );
};

export default Coverage;
