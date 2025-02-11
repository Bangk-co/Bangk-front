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
      header: `Para tu carro`,
      summary:
        "<span style='color: " +
        theme.colors.orange +
        "'>•</span>  También están cubiertos los actos de otras personas que puedan afectar tu carro, por ejemplo terrorismo.",
      panel:
        "<span style='color: " +
        theme.colors.orange +
        "'>•</span>  También están cubiertos los actos de otras personas que puedan afectar tu carro, por ejemplo terrorismo.<br /><span style='color: " +
        theme.colors.orange +
        "'>•</span>  Vehículo de reemplazo en caso de robo o accidente, para que puedas continuar desplazándote.<br /><span style='color: " +
        theme.colors.orange +
        "'>•</span>  Eventos de la naturaleza como temblor, terremoto o erupción volcánica, huracán, tifón, ciclón, tsunami, maremoto están cubiertos.<br /><span style='color: " +
        theme.colors.orange +
        "'>•</span>  Gastos de traslado del carro al taller o a tu garaje, en caso de robo o accidente.",
    },
    {
      key: "2",
      header: `Por daños a terceros`,
      summary:
        "<span style='color: " +
        theme.colors.orange +
        "'>•</span> Te respaldamos con los amparos de Responsabilidad Civil Extracontractual y Amparo Patrimonial.",
      panel:
        "<span style='color: " +
        theme.colors.orange +
        "'>•</span>  Te respaldamos con los amparos de Responsabilidad Civil Extracontractual y Amparo Patrimonial.<br /><span style='color: " +
        theme.colors.orange +
        "'>•</span>  Si causas daños a otras personas o sus bienes te cubrimos hasta 4 mil millones de pesos.<br /><span style='color: " +
        theme.colors.orange +
        "'>•</span> Si tienes un accidente automovilístico, contarás con asistencia jurídica, si la necesitas.<br /><span style='color: " +
        theme.colors.orange +
        "'>•</span>  Cobertura de accidentes personales para ti y los ocupantes de tu auto en caso de accidente.",
    },
    {
      key: "3",
      header: `Valores Agregados`,
      summary:
        "<span style='color: " +
        theme.colors.orange +
        "'>•</span> Reemplazo de llantas estalladas...",
      panel:
        "<span style='color: " +
        theme.colors.orange +
        "'>•</span>  Reemplazo de llantas estalladas.<br /><span style='color: " +
        theme.colors.orange +
        "'>•</span>  Rectificación de rines.<br /><span style='color: " +
        theme.colors.orange +
        "'>•</span>  Reemplazo de Pequeños accesorios como tapas de gasolina, espejos, lunas de espejo, entre otros.<br /><span style='color: " +
        theme.colors.orange +
        "'>•</span> Reemplazo de las llaves de tu auto en caso de hurto calificado.<br /><span style='color: " +
        theme.colors.orange +
        "'>•</span> Asesoría en trámites de tránsito.<br /><span style='color: " +
        theme.colors.orange +
        "'>•</span> En caso de pérdida o hurto de tus documentos el seguro cubre el valor de expedirlos, y un auxilio para reemplazar tu billetera.",
    },
    {
      key: "4",
      header: `Asistencias`,
      summary:
        "<span style='color: " +
        theme.colors.orange +
        "'>•</span> Conductor elegido...",
      panel:
        "<span style='color: " +
        theme.colors.orange +
        "'>•</span>  Conductor elegido.<br /><span style='color: " +
        theme.colors.orange +
        "'>•</span>  Grúa por avería o accidente.<br /><span style='color: " +
        theme.colors.orange +
        "'>•</span>  Carro taller.<br /><span style='color: " +
        theme.colors.orange +
        "'>•</span> Paso de corriente.<br /><span style='color: " +
        theme.colors.orange +
        "'>•</span> Suministro de gasolina.<br /><span style='color: " +
        theme.colors.orange +
        "'>•</span> Cerrajería para tu auto.<br /><span style='color: " +
        theme.colors.orange +
        "'>•</span> Cambio de llantas.<br /><span style='color: " +
        theme.colors.orange +
        "'>•</span> Desactivación de alarma.<br /><span style='color: " +
        theme.colors.orange +
        "'>•</span> App disponible en  App Store y Google Play.<br /><span style='color: " +
        theme.colors.orange +
        "'>•</span> Tambien solicita asistencia por Whatsapp al 318 3900000",
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
            Seguro Para Carros
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
