import React from "react";
import Image from "next/image";
import { theme } from "@/styles/theme";
import car from "@/assets/img/carIlustration.png";
import { Col, Text } from "@/styles/Common";
import { WrapperBanner } from "./styles";

const Banner = ({ isMobile }) => {
  return (
    <WrapperBanner>
      <Image
        alt="car"
        src={car}
        width={isMobile ? 300 : 360}
        height={isMobile ? 193 : 232}
      />
      <Col m="40px 0 0 0">
        <Text
          color={theme.colors.green}
          size={isMobile ? theme.fonts.size.h6 : theme.fonts.size.ft}
          font={theme.fonts.family.primaryBold}
          align="right"
        >
          (Todo riesgo)
        </Text>
        <Text
          color={theme.colors.green}
          size={isMobile ? theme.fonts.size.xl : theme.fonts.size.xxxl}
          font={theme.fonts.family.primaryBold}
          mb="10px"
          align="center"
        >
          Tradicional
        </Text>
      </Col>
      <Text
        color={theme.colors.green}
        size={isMobile ? theme.fonts.size.h6 : theme.fonts.size.ft}
        font={theme.fonts.family.primary}
        align="center"
        style={{ width: !isMobile && "50%" }}
      >
        Conduce tranquilo y con la seguridad que necesitas en cada recorrido,
        cuenta con coberturas{" "}
        <span
          style={{
            fontFamily: theme.fonts.family.primaryBold,
          }}
        >
          hasta de $4,000 millones
        </span>
      </Text>
    </WrapperBanner>
  );
};

export default Banner;
