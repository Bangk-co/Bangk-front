import React from "react";
import { theme } from "@/styles/theme";
import { Col, Div, Text } from "@/styles/Common";
import Image from "next/image";
import coins from "@/assets/img/coins.png";
import { WrapperWealth } from "./styles";
import star from "@/assets/img/starOrange.png";

const WealthInfo = ({ isMobile }) => {
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
          mb="20px"
          style={{ lineHeight: 1.1 }}
        >
          Protege lo<br></br> que más Importa
        </Text>
        <Text
          color={theme.colors.green}
          size={isMobile ? theme.fonts.size.default : theme.fonts.size.h6}
          font={theme.fonts.family.primary}
          mb="70px"
        >
          Crea Riqueza a{" "}
          <span style={{ fontFamily: theme.fonts.family.primaryBold }}>
            Largo Plazo
          </span>
        </Text>
        <Image alt="star" src={star} width={36} height={36} />
        <Text
          color={theme.colors.green}
          size={isMobile ? theme.fonts.size.default : theme.fonts.size.h6}
          font={theme.fonts.family.primary}
          mt="40px"
          mb="20px"
        >
          La tranquilidad de estar asegurado no tiene precio. Al proteger tu
          vehículo con un seguro adecuado, estás tomando una decisión
          inteligente que{" "}
          <span style={{ fontFamily: theme.fonts.family.primaryBold }}>
            te resguarda de pérdidas económicas significativas.
          </span>
        </Text>
        <Text
          color={theme.colors.green}
          size={isMobile ? theme.fonts.size.default : theme.fonts.size.h6}
          font={theme.fonts.family.primary}
        >
          En caso de un accidente, un buen seguro{" "}
          <span style={{ fontFamily: theme.fonts.family.primaryBold }}>
            cubre tanto los daños materiales como los posibles daños físicos y
            morales,{" "}
          </span>
          asegurando que tú y tu familia estén siempre protegidos.
        </Text>
      </Col>
      <WrapperWealth isMobile={isMobile} style={{ order: isMobile ? 1 : 0 }}>
        <Image alt="coins" src={coins} />
      </WrapperWealth>
    </Div>
  );
};

export default WealthInfo;
