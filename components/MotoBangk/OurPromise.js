import React from "react";
import { useRouter } from "next/router";
import { theme } from "@/styles/theme";
import { Col, Div, Row, Text } from "@/styles/Common";
import Image from "next/image";
import bangk from "@/assets/img/basketCoins.png";
import { WrapperPromise } from "./styles";
import starOrange from "@/assets/img/starOrange.png";

const OurPromise = ({ isMobile }) => {
  const router = useRouter();
  const assistanceText = [
    {
      text: (
        <Text
          color={theme.colors.green}
          size={isMobile ? theme.fonts.size.default : theme.fonts.size.h6}
          font={theme.fonts.family.primary}
        >
          Pagamos las pérdidas totales en los{" "}
          <span style={{ fontFamily: theme.fonts.family.primaryBold }}>
            tres días hábiles
          </span>{" "}
          siguientes al perfeccionamiento de la reclamación ante SBS Seguros
          Colombia S.A
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
            Atención inmediata
          </span>{" "}
          en el Contact Center +1 317 2193 / 01 8000 522 244 y en nuestra red de
          talleres aliados
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
            En pérdidas parciales
          </span>{" "}
          se emitirá la{" "}
          <span style={{ fontFamily: theme.fonts.family.primaryBold }}>
            orden de reparación dentro de las 48hs.
          </span>{" "}
          hábiles de efectuada la inspección.
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
            Auditoría permanente
          </span>{" "}
          del proceso de reparación de tu moto
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
            Garantía
          </span>{" "}
          de reparación de tu moto.
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
        style={{ order: isMobile ? 2 : 0 }}
      >
        <Text
          color={theme.colors.green}
          size={isMobile ? theme.fonts.size.lg : theme.fonts.size.xxl}
          font={theme.fonts.family.primaryBold}
          mb="30px"
          style={{ lineHeight: 1.1 }}
        >
          Nuestra promesa
        </Text>
        <Text
          color={theme.colors.green}
          size={isMobile ? theme.fonts.size.default : theme.fonts.size.h6}
          font={theme.fonts.family.primary}
          mb="40px"
        >
          Nuestro compromiso de servicio es garantizar tu protección y
          tranquilidad con una respuesta confiable.
        </Text>

        <Image alt="star" src={starOrange} width={36} height={36} />
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
      <WrapperPromise isMobile={isMobile} style={{ order: isMobile ? 1 : 0 }}>
        <Image
          alt="bangk"
          src={bangk}
          width={isMobile ? "90%" : "100%"}
          height={"auto"}
        />
      </WrapperPromise>
    </Div>
  );
};

export default OurPromise;
