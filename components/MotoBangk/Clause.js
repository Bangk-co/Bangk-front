import React from "react";
import { theme } from "@/styles/theme";
import { Div, Text } from "@/styles/Common";
import { HoverDiv, WrapperClause } from "./styles";

const Clause = ({ isMobile }) => {
  const downloadClausePdf = () => {
    const clausePdf =
      "/files/Seguro_Moto_30112022-1322-NT-P-03-POLIZAMOTOSGENER.pdf";
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
            Seguro de motos
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
