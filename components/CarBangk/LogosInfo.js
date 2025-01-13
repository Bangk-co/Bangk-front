import React from "react";
import { theme } from "@/styles/theme";
import { Col, Div, Text } from "@/styles/Common";
import Image from "next/image";
import sbs from "@/assets/img/sbsLogo.png";
import logo from "@/assets/icons/green-logo.svg";

const LogosInfo = ({ isMobile }) => {
  return (
    <Div p={isMobile ? "50px 20px" : "50px 150px"} direction="column">
      <Div
        align="center"
        justify="space-between"
        direction={isMobile ? "column" : "row"}
      >
        <Image
          alt="star"
          src={sbs}
          width={isMobile ? 300 : 550}
          height={isMobile ? 163 : 325}
        />
        <Image
          alt="star"
          src={logo}
          width={isMobile ? 200 : 400}
          height={isMobile ? 125 : 250}
        />
      </Div>
      <Text
        color={theme.colors.green}
        size={isMobile ? theme.fonts.size.default : theme.fonts.size.h6}
        font={theme.fonts.family.primary}
        style={{
          margin: isMobile ? "0px 0px 20px 25px" : "60px 0px 20px 25px",
        }}
      >
        Somos una agencia de seguros intermediaria de los productos en seguros
        de SBS Seguros Colombia.
      </Text>
    </Div>
  );
};

export default LogosInfo;
