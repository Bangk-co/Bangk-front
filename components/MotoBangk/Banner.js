import React from "react";
import Image from "next/image";
import { theme } from "@/styles/theme";
import moto from "@/assets/img/motoIlustration.png";
import { Col, Text } from "@/styles/Common";
import { WrapperBanner } from "./styles";

const Banner = ({ isMobile }) => {
  return (
    <WrapperBanner>
      <Image
        alt="moto"
        src={moto}
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
          NUEVO!
        </Text>
        <Text
          color={theme.colors.orange}
          size={isMobile ? theme.fonts.size.xl : theme.fonts.size.xxxl}
          font={theme.fonts.family.primaryBold}
          mb="10px"
          align="center"
        >
          Bangk-
          <span
            style={{
              color: theme.colors.green,
              fontFamily: theme.fonts.family.primaryBold,
            }}
          >
            motos!
          </span>
        </Text>
      </Col>
      <Text
        color={theme.colors.green}
        size={isMobile ? theme.fonts.size.h6 : theme.fonts.size.ft}
        font={theme.fonts.family.primary}
        align="center"
        style={{ width: !isMobile && "50%" }}
      >
        Sábemos que quieres sentir seguro en todo momento por eso traemos a ti
        Bangk-Motos con{" "}
        <span
          style={{
            fontFamily: theme.fonts.family.primaryBold,
          }}
        >
          SBS Seguros!
        </span>
      </Text>
    </WrapperBanner>
  );
};

export default Banner;
