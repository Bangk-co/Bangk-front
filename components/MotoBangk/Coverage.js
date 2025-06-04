import React, { useState } from "react";
import Image from "next/image";
import { theme } from "@/styles/theme";
import star from "@/assets/img/star.png";
import starOrange from "@/assets/img/starOrange.svg";
import { Col, Div, Row, Text } from "@/styles/Common";
import { WrapperCoverage } from "./styles";
import { CollapseLanding } from "../Common/CollapseLanding";

const Coverage = ({ isMobile }) => {
  const [activeKey, setActiveKey] = useState(["0"]);
  const panels = [
    {
      key: "1",
      header: `Para tu moto`,
      summary:
        "<span style='color: " +
        theme.colors.orange +
        "'>•</span>  Eventos de la naturaleza como temblor, terremoto o erupción volcánica, huracán, tifón, ciclón, tsunami, maremoto están cubiertos.",
      panel:
        "<span style='color: " +
        theme.colors.orange +
        "'>•</span>  Eventos de la naturaleza como temblor, terremoto o erupción volcánica, huracán, tifón, ciclón, tsunami, maremoto están cubiertos.<br /><span style='color: " +
        theme.colors.orange +
        "'>•</span>  Cubrimos los gastos de traslado de tu moto al taller o, a tu garaje, en caso de hurto o accidente.",
    },
    {
      key: "2",
      header: `Por daños a terceros`,
      summary:
        "<span style='color: " +
        theme.colors.orange +
        "'>•</span> Te respaldamos con los amparos de Responsabilidad Civil Extracontractual y Amparo Patrimonial en caso de que causes daños a otras personas o a sus bienes hasta mil millones de pesos.",
      panel:
        "<span style='color: " +
        theme.colors.orange +
        "'>•</span>  Te respaldamos con los amparos de Responsabilidad Civil Extracontractual y Amparo Patrimonial en caso de que causes daños a otras personas o a sus bienes hasta mil millones de pesos.<br /><span style='color: " +
        theme.colors.orange +
        "'>•</span>  Si tienes un accidente automovilístico, contarás con asistencia jurídica, si la necesitas",
    },
    {
      key: "3",
      header: `Valores Agregados`,
      summary:
        "<span style='color: " +
        theme.colors.orange +
        "'>•</span> Reemplazo de las llaves de tu moto en caso de hurto calificado.",
      panel:
        "<span style='color: " +
        theme.colors.orange +
        "'>•</span>  Reemplazo de las llaves de tu moto en caso de hurto calificado.<br /><span style='color: " +
        theme.colors.orange +
        "'>•</span>  En caso de pérdida o hurto de tus documentos el seguro cubre el valor de expedirlos, y un auxilio para reemplazar tu billetera hasta 150 mil pesos.<br /><span style='color: " +
        theme.colors.orange +
        "'>•</span>  Reemplazo de llantas estalladas.<br /><span style='color: " +
        theme.colors.orange +
        "'>•</span> Reemplazo de Pequeños accesorios como maniguetas, los espejos o bombillos exteriores.<br /><span style='color: " +
        theme.colors.orange +
        "'>•</span> Gastos de transporte en caso que por pérdida total no puedas usar tu moto.",
    },
  ];

  return (
    <WrapperCoverage>
      <Div m="0 0 40px 0" direction={isMobile ? "column" : "row"}>
        <Col width={isMobile ? "100%" : "50%"} justify="center">
          <Text
            color={theme.colors.green}
            size={isMobile ? theme.fonts.size.lg : theme.fonts.size.xxl}
            font={theme.fonts.family.primaryBold}
            mb={isMobile ? "40px" : "120px"}
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
            Seguro Para Motos
          </Text>
        </Col>
        <Col width={isMobile ? "100%" : "50%"}>
          <CollapseLanding
            panels={panels}
            activeKey={activeKey}
            setActiveKey={setActiveKey}
            textAlign="right"
            headerFontSize={theme.fonts.size.h5}
          />
        </Col>
      </Div>
    </WrapperCoverage>
  );
};

export default Coverage;
