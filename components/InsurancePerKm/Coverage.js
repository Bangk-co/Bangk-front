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
      header: `Cobertura`,
      summary:
        "<span style='color: " +
        theme.colors.orange +
        "'>•</span>  Protegemos tu auto de daños o hurto a nivel nacional, sin deducible para pérdida tota...",
      panel:
        "<span style='color: " +
        theme.colors.orange +
        "'>•</span>  Protegemos tu auto de daños o hurto a nivel nacional, sin deducible para pérdida total, y deducible de 1 SMMLV para pérdida parcial.<br /><span style='color: " +
        theme.colors.orange +
        "'>•</span>  Si tienes un accidente automovilístico, contarás con asistencia jurídica, si la necesitas.<br /><span style='color: " +
        theme.colors.orange +
        "'>•</span>  Si causas daños a otras personas o sus bienes te cubrimos hasta 4 mil millones de pesos.<br /><span style='color: " +
        theme.colors.orange +
        "'>•</span>  Cobertura de Accidentes personales para ti y los ocupantes del auto.",
    },
    {
      key: "2",
      header: `Coberturas adicionales`,
      summary:
        "<span style='color: " +
        theme.colors.orange +
        "'>•</span> Vehículo de reemplazo en caso de hurto o accidente, para que puedas continuar desplazándote. 10 días en perdidas parciales y 15 días en pérdidas totales.",
      panel:
        "<span style='color: " +
        theme.colors.orange +
        "'>•</span>  Vehículo de reemplazo en caso de hurto o accidente, para que puedas continuar desplazándote. 10 días en perdidas parciales y 15 días en pérdidas totales.<br /><span style='color: " +
        theme.colors.orange +
        "'>•</span>  Asistencias como grúa, cambio de llanta y más beneficios. ",
    },
    {
      key: "3",
      header: `Valores Agregados`,
      summary:
        "<span style='color: " +
        theme.colors.orange +
        "'>•</span> Reemplazo de llantas estalladas y rectificación de rines.",
      panel:
        "<span style='color: " +
        theme.colors.orange +
        "'>•</span>  Reemplazo de llantas estalladas y rectificación de rines.<br /><span style='color: " +
        theme.colors.orange +
        "'>•</span>  Reemplazo de pequeños accesorios como tapas de gasolina, espejos, lunas de espejo, entre otros.<br /><span style='color: " +
        theme.colors.orange +
        "'>•</span>  Conductor elegido ilimitado.",
    },
    {
      key: "4",
      header: `Beneficios por hábitos de conducción`,
      summary:
        "<span style='color: " +
        theme.colors.orange +
        "'>•</span> Dependiendo de la forma en que conduzcas, podrás ir subiendo de “nivel” de conducción, y así mismo, tendrás derecho a acceder a coberturas o servicios adicionales tales como:",
      panel:
        "<span style='color: " +
        theme.colors.orange +
        "'>•</span>  Dependiendo de la forma en que conduzcas, podrás ir subiendo de “nivel” de conducción, y así mismo, tendrás derecho a acceder a coberturas o servicios adicionales tales como: <br />• Trasporte o traslado al aeropuerto.<br />• Eliminación del deducible en pérdida parcial por hurto. <br />• Pequeños rayones o golpes leves. <br />• Disminución de deducible en la cobertura de pérdida parcial por daños, entre otros.",
    },
  ];

  const stepText = [
    {
      text: "Cotiza tu seguro y elige el paquete de kilómetros que necesites.",
    },
    {
      text: (
        <Text
          color={theme.colors.green}
          size={isMobile ? theme.fonts.size.h6 : theme.fonts.size.ft}
          font={theme.fonts.family.primary}
        >
          {" "}
          Paga tu seguro de inmediato,{" "}
          <span style={{ fontFamily: theme.fonts.family.primaryBold }}>
            no necesitas inspección.
          </span>{" "}
        </Text>
      ),
    },
    {
      text: "Recibe en tu domicilio el dispositivo PIA e instálalo en tu carro",
    },
    {
      text: "Recarga tus kilómetros y paga tu cargo fijo mensualmente.",
    },
    {
      text: "Descarga nuestra App y administra tus kilómetros.",
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
            Seguro x Kilómetros
          </Text>

          <Image
            alt="star"
            src={star}
            width={isMobile ? 80 : 350}
            height={isMobile ? 80 : 350}
          />
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

      <Image alt="star" src={starOrange} width={80} height={80} />
      <Text
        color={theme.colors.green}
        size={isMobile ? theme.fonts.size.lg : theme.fonts.size.xxl}
        font={theme.fonts.family.primaryBold}
        mt="20px"
        mb="50px"
        align="center"
        style={{ lineHeight: 1.1 }}
      >
        ¿Cómo funciona?
      </Text>
      <Div width="15%" height="2px" backgroundColor={theme.colors.green} />
      <Col
        m="50px 0 20px 0"
        gap="20px"
        style={{
          display: "grid",
          gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr",
          gridAutoRows: "minmax(50px, auto)",
          gap: "20px",
        }}
      >
        {stepText.map((step, index) => (
          <Row key={index} align="center" gap="5px">
            <Div
              width="5px"
              height="5px"
              backgroundColor={theme.colors.orange}
              radius="50%"
              style={{ minWidth: "5px" }}
            />
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
    </WrapperCoverage>
  );
};

export default Coverage;
