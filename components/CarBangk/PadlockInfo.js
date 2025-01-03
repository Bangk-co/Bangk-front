import React from "react";
import { theme } from "@/styles/theme";
import { Col, Div, Row, Text } from "@/styles/Common";
import Image from "next/image";
import padlock from "@/assets/img/padlock.png";
import { WrapperPadlock } from "./styles";
import star from "@/assets/img/starOrange.png";

const PadlockInfo = ({ isMobile }) => {
  return (
    <Div background={theme.colors.light4}>
      <WrapperPadlock>
        <Image
          alt="padlock"
          src={padlock}
          width={isMobile ? 200 : "100%"}
          height={isMobile ? 200 : "100%"}
        />
      </WrapperPadlock>
      <Col p={"80px 110px"}>
        <Text
          color={theme.colors.green}
          size={isMobile ? theme.fonts.size.lg : theme.fonts.size.xl}
          font={theme.fonts.family.primaryBold}
          mb="20px"
        >
          Importancia<br></br> de Estar<br></br> Asegurado
        </Text>
        <Text
          color={theme.colors.green}
          size={isMobile ? theme.fonts.size.default : theme.fonts.size.h6}
          font={theme.fonts.family.primary}
          mb="80px"
        >
          Asegura tu Futuro Financiero
        </Text>
        <Image alt="star" src={star} width={36} height={36} />
        <Text
          color={theme.colors.green}
          size={isMobile ? theme.fonts.size.default : theme.fonts.size.h6}
          font={theme.fonts.family.primary}
          mt="40px"
          mb="20px"
        >
          Tener un seguro para tu vehículo no solo protege tu inversión, sino
          que también es{" "}
          <span style={{ fontFamily: theme.fonts.family.primaryBold }}>
            una de las mejores formas de crear y mantener riqueza.
          </span>
        </Text>
        <Text
          color={theme.colors.green}
          size={isMobile ? theme.fonts.size.default : theme.fonts.size.h6}
          font={theme.fonts.family.primary}
        >
          La mayoría de las personas no están preparadas para afrontar los
          costos de un siniestro. Un seguro adecuado garantiza que no tendrás
          que cubrir grandes gastos imprevistos,{" "}
          <span style={{ fontFamily: theme.fonts.family.primaryBold }}>
            permitiéndote mantener tus finanzas personales y familiares estables
            y seguras.
          </span>
        </Text>
      </Col>
    </Div>
  );
};

export default PadlockInfo;
