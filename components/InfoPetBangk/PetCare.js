import React from "react";
import Image from "next/image";
import { theme } from "@/styles/theme";
import footprint from "@/assets/img/footprint.png";
import starYellow from "@/assets/img/starYellow.svg";
import brownDog from "@/assets/img/brownDog.png";
import { Col, Div, Text } from "@/styles/Common";
import { WrapperPetCare } from "./style";

const PetCare = ({ isMobile }) => {
  const petCareOptions = [
    {
      title: "Paseador",
      text: "Si el Afiliado dueño de la mascota (perro) se encuentra hospitalizado por un periodo superior a 3 días, GEA brindará y coordinará el envío hasta su domicilio de un profesional, para que pasee al perro por un máximo de 1 hora.",
    },
    {
      title: "Hotel para mascotas",
      text: "Si el Afiliado dueño de la mascota está hospitalizado por un periodo superior a tres (3) días y no cuenta con alguien que cuide de su mascota, GEA pondrá a disposición de éste, el servicio de guardería para que la mascota pueda hospedarse en un centro veterinario autorizado por GEA hasta por tres (3) días continuos para que allí cuiden de ella.",
    },
    {
      title: "Consulta médica veterinaria telefónica",
      text: "GEA ofrece orientación telefónica 24/7 al Afiliado para resolver dudas sobre la salud de sus mascotas (gatos o perros). El profesional proporcionará consejos provisionales y preventivos que se puedan aplicar en el hogar. Además, el Afiliado puede consultar sobre primeros auxilios en casos de emergencia o enfermedad de la mascota, así como obtener recomendaciones para el cuidado durante viajes.",
    },
    {
      title: "Consulta médica veterinaria en clínica",
      text: "Por solicitud del Afiliado y de acuerdo con la valoración previamente autorizada por el equipo veterinario telefónico, GEA brindará consulta veterinaria en sitio, la cual será coordinada en la clínica más cercana de la red de proveedores de GEA",
    },
    {
      title: "Vacunación en red veterinaria",
      text: "A solicitud del Afiliado, GEA brindará el servicio de refuerzo de vacunación médica veterinaria con la vacuna triple viral felina o antirrábica en gatos y en el caso de perros será la vacuna pentavalente o antirrábica en perros.",
    },
    {
      title: "Traslado de la mascota por accidente o enfermedad",
      text: "A consecuencia de accidente de la mascota (perro o gato) propiedad del Afiliado, donde ésta requiera de atención médica inmediata en clínica veterinaria, GEA coordinará el servicio de traslado en automóvil (tipo taxi) para recogerla y llevarla a la clínica veterinaria más cercana.",
    },
    {
      title: "Asistencia médica veterinaria de control por ingesta de cuerpos extraños",
      text: "Si a consecuencia de ingesta de un cuerpo extraño la mascota (perro o gato) propiedad del Afiliado sufre alteraciones de tráquea o se ve comprometida su vida, GEA indicará el centro médico veterinario al cual deberá acercarse para para recibir el control respectivo, posterior al suceso por ingesta de cuerpos extraños.",
    },
    {
      title: "Auxilio para la esterilización de la mascota",
      text: "A solicitud del Afiliado, GEA brindará auxilio económico hasta por el monto de cobertura para la esterilización para la mascota (perro o gato).",
    },
    {
      title: "Servicio de eutanasia por enfermedad o accidente grave",
      text: "En caso de accidente o enfermedad grave vital de la mascota (perro o gato) propiedad del Afiliado y sea necesario realizar la aplicación de la eutanasia por expresa recomendación del médico veterinario tratante, GEA coordinará la prestación del servicio a través de los prestadores de su red a nivel nacional hasta el monto máximo de cobertura.",
    },
    {
      title: "Servicio de cremación por enfermedad o accidente",
      text: "En caso de fallecimiento de la mascota (perro o gato) propiedad del Afiliado a causa de un accidente o enfermedad súbita, GEA se encargará de coordinar y llevar a cabo mediante su red de proveedores la asistencia exequial hasta el monto máximo de cobertura.",
    },
    {
      title: "Auxilio para desparasitación de la mascota",
      text: "En caso de que la mascota (perro o gato) propiedad del Afiliado requiera de desparasitación interna, GEA otorgará un auxilio para los medicamentos necesarios por concepto de desparasitación hasta por el monto máximo de cobertura...",
    },
    {
      title: "Auxilio pipeta antipulgas",
      text: "En caso de que la mascota (perro o gato) propiedad del Afiliado requiera de limpieza de pulgas o garrapatas, GEA otorgará un auxilio para los hasta por el monto máximo de cobertura para la compra del medicamento.",
    },
    {
      title: "Auxilio para radiografías, ecografías o cirugías",
      text: "A consecuencia de accidente de la mascota (perro o gato) y ésta requiera de atención médica en clínica veterinaria, GEA brindará un auxilio hasta el monto máximo de cobertura definido para cubrir uno de los siguientes procedimientos:",
      list: [
        "Radiografías",
        "Ecografías",
        "Cirugías",
      ],
    },
  ];

  return (
    <WrapperPetCare>
      <Div m="0 0 40px 0" direction={isMobile ? "column" : "row"}>
        <Col width={isMobile ? "100%" : "35%"}>
          <Text
            color={theme.colors.blue200}
            size={isMobile ? theme.fonts.size.lg : theme.fonts.size.xxl}
            font={theme.fonts.family.primaryBold}
            mb="5px"
            style={{ width: "87%", lineHeight: 1.1 }}
          >
            Cuidado
            <br />
            de la 
            <br />
            Mascota
          </Text>
          <Text
            color={theme.colors.blue200}
            size={theme.fonts.size.sm}
            mb={isMobile ? "0px" : "120px"}
          >
            En específico
          </Text>
        </Col>
        <Col m="0px 0 20px 0" width="65%" gap="20px">
          {petCareOptions.map((step, index) => (
            <>
              <Div
                key={index}
                p={isMobile ? "20px" : "50px 90px"}
                gap="50px"
                width={isMobile ? "350px" : "100%"}
                style={{
                  borderBottom:
                    index + 1 < petCareOptions.length &&
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
                    {step.list && (
                      <Div direction="column" m="20px 0 0 0">
                        {step.list.map((item, index) => (
                          <Text 
                            color={theme.colors.blue200}
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
        alt="brownDog"
        src={brownDog}
        width={isMobile ? 100 : 500}
        style={{
          position: "absolute",
          left: -200,
          top: 1800
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
    </WrapperPetCare>
  );
};

export default PetCare;