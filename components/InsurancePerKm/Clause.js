import React, { useState } from "react";
import Image from "next/image";
import { theme } from "@/styles/theme";
import download from "@/assets/icons/downloadWhite.svg";
import arrow from "@/assets/icons/arrow-back-white.svg";
import { Div, Text } from "@/styles/Common";
import { HoverDiv, WrapperClause } from "./styles";

const Clause = ({ isMobile }) => {
  const downloadClausePdf = () => {
    const clausePdf = "/files/Seguro_Auto_x_Kil_metro_26-08-2021.pdf";
    window.open(clausePdf, "_blank");
  };
  return (
    <WrapperClause>
      <Text
        color={theme.colors.green}
        size={isMobile ? theme.fonts.size.lg : theme.fonts.size.xxl}
        font={theme.fonts.family.primary}
        mt="20px"
        mb="50px"
        align="center"
        style={{ lineHeight: 1.1 }}
      >
        Da{" "}
        <span style={{ fontFamily: theme.fonts.family.primaryBold }}>clic</span>{" "}
        para <br /> más{" "}
        <span style={{ fontFamily: theme.fonts.family.primaryBold }}>
          información
        </span>
      </Text>
      <HoverDiv onClick={downloadClausePdf}>
        <Text
          color={theme.colors.green}
          size={isMobile ? theme.fonts.size.h6 : theme.fonts.size.ft}
          font={theme.fonts.family.primary}
          align="center"
          style={{ lineHeight: 1.1 }}
        >
          Clausulado{" "}
          <span style={{ fontFamily: theme.fonts.family.primaryBold }}>
            SXKM
          </span>{" "}
          de <br />
          <span style={{ fontFamily: theme.fonts.family.primaryBold }}>
            SBS Seguros{" "}
          </span>{" "}
          Colombia
        </Text>
      </HoverDiv>
    </WrapperClause>
  );
};

export default Clause;
