import React, { useState } from "react";
import Image from "next/image";
import { theme } from "@/styles/theme";
import star from "@/assets/img/star.png";
import { Col, Div, Row, Text } from "@/styles/Common";
import { WrapperCoverage } from "./styles";
import { Collapse } from "@/components/Common/Collapse";
import { CollapseLanding } from "../Common/CollapseLanding";

const Coverage = ({ isMobile }) => {
  const [activeKey, setActiveKey] = useState(["1"]);
  const panels = [
    {
      key: "1",
      header: `Cobertura`,
      summary:
        "• Protegemos tu auto de daños o hurto a nivel nacional, sin deducible para pérdida total, y deducible de 1 SMMLV para pérdida parcial.",
      panel:
        "• Protegemos tu auto de daños o hurto a nivel nacional, sin deducible para pérdida total, y deducible de 1 SMMLV para pérdida parcial.",
    },
    {
      key: "2",
      header: `Coberturas adicionales`,
      summary:
        "• Vehículo de reemplazo en caso de hurto o accidente, para que puedas continuar.",
      panel:
        "• Vehículo de reemplazo en caso de hurto o accidente, para que puedas continuar.",
    },
    {
      key: "3",
      header: `Valores Agregados`,
      summary: "",
      panel: "",
    },
    {
      key: "4",
      header: `Beneficios por hábitos de conducción`,
      summary: "",
      panel: "",
    },
  ];
  return (
    <WrapperCoverage>
      <Col width="50%">
        <Text
          color={theme.colors.green}
          size={isMobile ? theme.fonts.size.lg : theme.fonts.size.xxl}
          font={theme.fonts.family.primaryBold}
          mb="120px"
          style={{ width: "87%", lineHeight: 1.1 }}
        >
          <span
            style={{
              position: "relative",
              display: "inline-block",
              zIndex: 1,
              fontFamily: theme.fonts.family.primaryBold,
            }}
          >
            Coberturas
            <Div
              style={{
                position: "absolute",
                bottom: "0",
                left: "-10px",
                width: "105%",
                height: "40%",
                backgroundColor: theme.colors.yellow,
                zIndex: -1,
              }}
            />
          </span>
          <br />
          Seguro x Kilómetros
        </Text>

        <Image
          alt="count"
          src={star}
          width={isMobile ? 80 : 350}
          height={isMobile ? 80 : 350}
        />
      </Col>
      <Col width="50%">
        <CollapseLanding
          panels={panels}
          activeKey={activeKey}
          setActiveKey={setActiveKey}
          textAlign="right"
          headerFontSize={theme.fonts.size.h5}
        />
      </Col>
    </WrapperCoverage>
  );
};

export default Coverage;
