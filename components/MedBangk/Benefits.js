import React from "react";
import Image from "next/image";
import { theme } from "@/styles/theme";
import cross from "@/assets/img/cross.png";
import starOrange from "@/assets/img/starOrange.svg";
import { Col, Div, Text } from "@/styles/Common";
import { WrapperCare } from "./styles";

export const Benefits = ({ isMobile }) => {
  const benefitsOptions = [
    {
      title: "Orientación médica telefónica",
      text: "Previa solicitud del Afiliado, GEA brindará orientación médica telefónica 24/7, para resolver dudas sobre enfermedades, tratamientos, medicamentos y análisis de exámenes de laboratorio. Se proporcionarán recomendaciones médicas sin emitir diagnósticos o cambios de tratamiento.",
    },
    {
      title: "Telemedicina",
      text: "GEA brindará video consulta con un profesional en medicina general, psicología y/o nutrición, por medio del aplicativo E-DOCTOR, disponible para el Afiliado.",
    },
    {
      title: "Médico a domicilio",
      text: "En caso de una emergencia médica que pueda tratarse en el domicilio del Afiliado y que no requiera traslado hospitalario (según criterio y autorización del equipo médico telefónico de GEA), Se coordinará el envío de un médico al domicilio para realizar un chequeo, revisión o diagnóstico basado en la emergencia médica reportada previamente."
    },
    {
      title: "Acompañamiento a citas médicas",
      text: "En caso de que el Afiliado presente incapacidad superior a tres (3) días y requiera una persona que le acompañe en sustitución de un familiar a una cita médica, GEA brindará el servicio de acompañamiento por un tiempo máximo de tres (3) horas.",
    },
    {
      title: "Ambulancia terrestre",
      text: "En caso de que el Afiliado sufra un accidente donde se evidencie una urgencia vital y amerite la atención en un centro asistencial con previa autorización del equipo médico de GEA, se coordinará y cubrirá el costo del traslado en ambulancia terrestre hasta la clínica, hospital o centro médico de la red de prestadores más cercana, siempre y cuando exista la infraestructura privada que lo permita.",
    },
    {
      title: "Empleada doméstica",
      text: "En caso de que el Afiliado tenga incapacidad médica por accidente mayor a 5 días, GEA asignará una empleada de hogar que realizará la limpieza interna del domicilio (limpieza de sala, comedor, cocina, baños y habitaciones) por un máximo de 4 horas por evento.",
    },
    {
      title: "Recordatorio de Ingesta de medicamentos",
      text: "GEA pone a disposición del Afiliado el servicio para recordar la ingesta de medicamentos a las horas precisas, según recomendaciones indicados por el médico tratante y de este modo contribuir con el adecuado manejo de los tratamientos del titular o beneficiario del plan de asistencia.",
    },
    {
      title: "Terapias básicas a domicilio",
      text: "En caso de que el Afiliado requiera el servicio de terapias físicas básicas o respiratorias básicas a domicilio, GEA coordinará el servicio a través de personal capacitado para llevar a cabo este procedimiento.",
    },
  ];

  return (
    <WrapperCare>
      <Div m="0 0 40px 0" direction={isMobile ? "column" : "row"}>
        <Col width={isMobile ? "100%" : "35%"}>
          <Text
            color={theme.colors.green1000}
            size={isMobile ? theme.fonts.size.lg : theme.fonts.size.xxl}
            font={theme.fonts.family.primaryBold}
            mb="5px"
            style={{ width: "87%", lineHeight: 1.1 }}
          >
            Beneficios
            <br />
            para la 
            <br />
            salud
          </Text>
          <Text
            color={theme.colors.green1000}
            size={theme.fonts.size.sm}
            mb={isMobile ? "40px" : "120px"}
            style={{ width: "200px" }}
          >
            Con este plan de cobertura individual puedes tener todos estos befenicios y más.
          </Text>
        </Col>
        <Col m="0px 0 20px 0" width="65%" gap="20px">
          {benefitsOptions.map((step, index) => (
            <>
              <Div
                key={index}
                p={isMobile ? "20px" : "50px 90px"}
                gap="50px"
                width={isMobile ? "350px" : "100%"}
                style={{
                  borderBottom:
                    index + 1 < benefitsOptions.length &&
                    `2px solid ${theme.colors.gray200}`,
                }}
              >
                <Image alt="star" src={starOrange} width={20} height={20} />
                <Div direction="column" gap="15px">
                  <Text
                    color={theme.colors.green1000}
                    size={isMobile ? theme.fonts.size.h6 : theme.fonts.size.ft}
                    font={theme.fonts.family.primaryBold}
                    align="left"
                  >
                    {step.title}
                  </Text>
                  <Text
                    color={theme.colors.green1000}
                    size={isMobile ? theme.fonts.size.h6 : theme.fonts.size.ft}
                    align="left"
                  >
                    {step.text}
                    {step.list && (
                      <Div direction="column" m="20px 0 0 0">
                        {step.list.map((item, index) => (
                          <Text 
                            color={theme.colors.green1000}
                            size={isMobile ? theme.fonts.size.h6 : theme.fonts.size.ft}
                            key={index}
                          >
                            - {item}
                          </Text>
                        ))}
                      </Div>
                    )}
                  </Text>
                </Div>
              </Div>
            </>
          ))}
        </Col>
      </Div>
      <Image
        alt="cross"
        src={cross}
        width={isMobile ? 80 : 300}
        style={{
          position: "absolute",
          bottom: isMobile ? "-40px" : "-150px",
        }}
      />
    </WrapperCare>
  );
};