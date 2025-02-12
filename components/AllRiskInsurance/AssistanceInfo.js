import React from "react";
import { useRouter } from "next/router";
import { theme } from "@/styles/theme";
import { Col, Div, Row, Text } from "@/styles/Common";
import Image from "next/image";
import bangk from "@/assets/img/assistanceBangk.png";
import { WrapperAssistance } from "./styles";
import starOrange from "@/assets/img/starOrange.png";
import { Button } from "../Common/Button";

const AssistanceInfo = ({ isMobile }) => {
  const router = useRouter();
  const assistanceText = [
    {
      text: (
        <Text
          color={theme.colors.green}
          size={isMobile ? theme.fonts.size.default : theme.fonts.size.h6}
          font={theme.fonts.family.primary}
        >
          Asistencia para ti y tu vehículo en caso de{" "}
          <span style={{ fontFamily: theme.fonts.family.primaryBold }}>
            varada o accidente.
          </span>{" "}
        </Text>
      ),
    },
    {
      text: (
        <Text
          color={theme.colors.green}
          size={isMobile ? theme.fonts.size.default : theme.fonts.size.h6}
          font={theme.fonts.family.primary}
        >
          <span style={{ fontFamily: theme.fonts.family.primaryBold }}>
            Asistencia jurídica
          </span>{" "}
          en audiencias de comparendos por accidente y centros de conciliación.
        </Text>
      ),
    },
    {
      text: (
        <Text
          color={theme.colors.green}
          size={isMobile ? theme.fonts.size.default : theme.fonts.size.h6}
          font={theme.fonts.family.primary}
        >
          <span style={{ fontFamily: theme.fonts.family.primaryBold }}>
            Asistencia exequial
          </span>{" "}
          en caso de fallecimiento del asegurado en accidente de tránsito.
        </Text>
      ),
    },
    {
      text: (
        <Text
          color={theme.colors.green}
          size={isMobile ? theme.fonts.size.default : theme.fonts.size.h6}
          font={theme.fonts.family.primaryBold}
        >
          Conductor Elegido Ilimitado.
        </Text>
      ),
    },
    {
      text: (
        <Text
          color={theme.colors.green}
          size={isMobile ? theme.fonts.size.default : theme.fonts.size.h6}
          font={theme.fonts.family.primary}
        >
          <span style={{ fontFamily: theme.fonts.family.primaryBold }}>
            Asistencia Platino:
          </span>{" "}
          Remolque o transporte del vehículo (hasta 140 smdlv). Rotura de
          cristales (hasta 30 smdlv) Traslado al aeropuerto (2 al año). Segundo
          servicio de remolque o transporte del vehículo (3 al año). Extensión
          conductor elegido.
        </Text>
      ),
    },
    {
      text: (
        <Text
          color={theme.colors.green}
          size={isMobile ? theme.fonts.size.default : theme.fonts.size.h6}
          font={theme.fonts.family.primary}
        >
          <span style={{ fontFamily: theme.fonts.family.primaryBold }}>
            Asistencia al hogar:
          </span>{" "}
          Plomería, desinundación y secado de alfombras, vidriería, cerrajería,
          reparación de tejas, electricidad.
        </Text>
      ),
    },
    {
      text: (
        <Text
          color={theme.colors.green}
          size={isMobile ? theme.fonts.size.default : theme.fonts.size.h6}
          font={theme.fonts.family.primary}
        >
          <span style={{ fontFamily: theme.fonts.family.primaryBold }}>
            Asistencia a las personas:
          </span>{" "}
          Médico a domicilio, traslado médico, repatriación en caso de
          fallecimiento, gastos de estancia y desplazamiento para un
          acompañante, gastos por pérdida de equipaje.
        </Text>
      ),
    },
    {
      text: (
        <Text
          color={theme.colors.green}
          size={isMobile ? theme.fonts.size.default : theme.fonts.size.h6}
          font={theme.fonts.family.primary}
        >
          <span style={{ fontFamily: theme.fonts.family.primaryBold }}>
            Asistencia en viajes internacionales:
          </span>{" "}
          gastos médicos y odontológicos de emergencia, certificados para visas.
        </Text>
      ),
    },
  ];
  return (
    <Div
      background={theme.colors.light4}
      direction={isMobile ? "column" : "row"}
    >
      <Col
        p={isMobile ? "60px 40px" : "80px 100px"}
        style={{ order: isMobile ? 2 : 0, position: "relative" }}
      >
        <Text
          color={theme.colors.green}
          size={isMobile ? theme.fonts.size.lg : theme.fonts.size.xxl}
          font={theme.fonts.family.primaryBold}
          mb="20px"
          style={{ lineHeight: 1.1 }}
        >
          Asistencias del Seguro para Carros
        </Text>

        <Image
          alt="star"
          src={starOrange}
          width={36}
          height={36}
          style={{ position: "absolute", top: 50, right: 50 }}
        />
        <Col m="20px 0 20px 0" gap="20px">
          {assistanceText.map((step, index) => (
            <Row key={index}>
              <Div
                width="5px"
                height="5px"
                backgroundColor={theme.colors.orange}
                radius="50%"
                m="10px 10px 0 0"
                style={{ minWidth: "5px" }}
              />
              {step.text}
            </Row>
          ))}
        </Col>
      </Col>
      <WrapperAssistance
        isMobile={isMobile}
        style={{ order: isMobile ? 1 : 0 }}
      >
        <Image
          alt="car"
          src={bangk}
          width={isMobile ? "90%" : "100%"}
          height={"auto"}
        />
        <Button
          width={"200px"}
          font={theme.fonts.family.primaryBold}
          size={isMobile ? theme.fonts.size.default : theme.fonts.size.h6}
          background={theme.colors.yellow}
          labelColor={theme.colors.green}
          border={"transparent"}
          hover={theme.colors.yellow}
          borderHover={theme.colors.yellow}
          onClick={() =>
            router.push("https://www.sbseguros.co/indemnizaciones/asistencias")
          }
        >
          Asistencia aquí
        </Button>
      </WrapperAssistance>
    </Div>
  );
};

export default AssistanceInfo;
