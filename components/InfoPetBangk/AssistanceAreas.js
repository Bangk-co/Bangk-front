import React from "react";
import Image from "next/image";
import { theme } from "@/styles/theme";
import footprint from "@/assets/img/footprint.png";
import starYellow from "@/assets/img/starYellow.svg";
import cat from "@/assets/img/cat.png";
import { Col, Div, Text } from "@/styles/Common";
import { WrapperAssistanceAreas } from "./style";

const AssistanceAreas = ({ isMobile }) => {
  const AssistanceAreasOptions = [
    {
      title: "Referencia y coordinación de adiestrador de perros",
      text: "GEA pone a disposición del Afiliado el personal experto en orientación telefónica para referenciar y/o coordinar asistencias con adiestradores profesionales para perros."
    },
    {
      title: "Referencia y coordinación de caminatas eco-recreativas caninas",
      text: "GEA pone a disposición del Afiliado el personal experto en orientación telefónica para referenciar y/o coordinar asistencias con expertos para caminaras eco recreativas caninas."
    },
    {
      title: "Referencia y coordinación de clínicas veterinarias",
      text: "A solicitud del Afiliado, GEA podrá informar los nombres y teléfonos de centros de atención veterinaria."
    },
    {
      title: "Información sobre guarderías de mascotas",
      text: "GEA pone a disposición del Afiliado el personal experto en orientación telefónica para referenciar y/o coordinar servicios en guarderías para su mascota."
    },
    {
      title: "Orientación telefónica para el transporte de mascotas",
      text: "GEA pone a disposición del Afiliado el personal experto en orientación telefónica para referenciar y/o coordinar transporte para mascotas.",
    },
    {
      title: "Coordinación radiografías, ecografías, y cirugías",
      text: "GEA pone a disposición de Afiliado el personal experto en servicios de orientación telefónica para coordinar la toma de radiografías, ecografías o la realización de cirugías a su mascota."
    },
    {
      title: "Referencia y coordinación con salón de belleza, boutiques y clínicas veterinarias",
      text: "GEA pone a disposición del Afiliado el personal experto en servicios de orientación telefónica para referenciar y/o coordinar asistencias con salones de belleza, boutiques o clínicas veterinarias para su mascota.",
    },
    {
      title: "Referencia y coordinación con cementerios de mascotas",
      text: "GEA pone a disposición de Afiliado el personal experto en orientación telefónica para referenciar y/o coordinar el traslado a un cementerio de su mascota fallecida."
    },
    {
      title: "Asistencia legal telefónica",
      text: "A consecuencia de afectación a la salud de terceros en donde se vea involucrada la mascota (perro o gato), el Afiliado podrá solicitar los servicios de referencia y consultoría legal telefónica donde le orientarán en los trámites necesarios ante las autoridades competentes y otras que sean necesarias dependiendo del lugar donde haya ocurrido la situación."
    },
  ];

  return (
    <WrapperAssistanceAreas>
      <Div m="0 0 40px 0" direction={isMobile ? "column" : "row"}>
        <Col width={isMobile ? "100%" : "35%"}>
          <Text
            color={theme.colors.blue200}
            size={isMobile ? theme.fonts.size.lg : theme.fonts.size.xxl}
            font={theme.fonts.family.primaryBold}
            mb="5px"
            style={{ width: "87%", lineHeight: 1.1 }}
          >
            Áreas de
            <br />
            asistencia
          </Text>
          <Text
            color={theme.colors.blue200}
            size={theme.fonts.size.sm}
            mb={isMobile ? "0px" : "120px"}
          >
            Toda la Información sobre su
            <br />
            funcionamiento
          </Text>
        </Col>
        <Col m="0px 0 20px 0" width="65%" gap="20px">
          {AssistanceAreasOptions.map((step, index) => (
            <>
              <Div
                key={index}
                p={isMobile ? "20px" : "50px 90px"}
                gap="50px"
                width={isMobile ? "350px" : "100%"}
                style={{
                  borderBottom:
                    index + 1 < AssistanceAreasOptions.length &&
                    `2px solid ${theme.colors.gray200}`,
                }}
              >
                <Image alt="star" src={starYellow} width={20} height={20} />
                <Div direction="column" gap="15px">
                  <Text
                    color={theme.colors.blue200}
                    size={isMobile ? theme.fonts.size.h6 : theme.fonts.size.ft}
                    font={theme.fonts.family.primaryBold}
                    align="left"
                  >
                    {step.title}
                  </Text>
                  <Text
                    color={theme.colors.blue200}
                    size={isMobile ? theme.fonts.size.h6 : theme.fonts.size.ft}
                    align="left"
                  >
                    {step.text}
                  </Text>
                </Div>
              </Div>
            </>
          ))}
        </Col>
      </Div>
      <Image
        alt="cat"
        src={cat}
        width={isMobile ? 100 : 500}
        style={{
          position: "absolute",
          left: -180,
          top: 1180
        }}
      />
      <Image
        alt="footprint"
        src={footprint}
        width={isMobile ? 80 : 300}
        style={{
          position: "absolute",
          bottom: isMobile ? "-20px" : "-85px",
        }}
      />
    </WrapperAssistanceAreas>
  );
};

export default AssistanceAreas;