import React from "react";
import Image from "next/image";
import { theme } from "@/styles/theme";
import star from "@/assets/img/starOrange.png";
import starGray from "@/assets/img/starGray.png";
import { Col, Div, Row, Text } from "@/styles/Common";
import { WrapperQuote } from "./styles";
import { Button } from "../Common/Button";

const Quote = ({ isMobile }) => {
  return (
    <WrapperQuote>
      <Row align="center" width="100%" justify={isMobile && "center"}>
        <Image
          alt="star"
          src={star}
          width={25}
          height={25}
          style={{ position: "relative", zIndex: 2 }}
        />

        <Div
          width={isMobile ? "30%" : "50%"}
          height="3px"
          background={theme.colors.gray50}
        />
        <Image
          alt="star"
          src={starGray}
          width={25}
          height={25}
          style={{ position: "relative", zIndex: 2 }}
        />

        <Div
          width={isMobile ? "30%" : "50%"}
          height="3px"
          background={theme.colors.gray50}
        />
        <Image
          alt="star"
          src={starGray}
          width={25}
          height={25}
          style={{ position: "relative", zIndex: 2 }}
        />
      </Row>

      <Row
        align="center"
        width={isMobile ? "90%" : "100%"}
        justify="space-between"
      >
        <Text
          size={isMobile ? theme.fonts.size.xs : theme.fonts.size.md}
          color="black"
          mt="8px"
          style={{
            width: isMobile ? "calc(33% + 30px)" : "calc(33% + 30px)",
          }}
          align="left"
        >
          Datos Personales
        </Text>

        <Text
          size={isMobile ? theme.fonts.size.xs : theme.fonts.size.md}
          color="black"
          mt="8px"
          style={{ width: isMobile ? "23%" : "33%" }}
        >
          Cotiza
        </Text>

        <Text
          size={isMobile ? theme.fonts.size.xs : theme.fonts.size.md}
          color="black"
          mt="8px"
          style={{ width: isMobile ? "calc(23% + 30px)" : "calc(33% + 30px)" }}
          align="right"
        >
          Paga
        </Text>
      </Row>

      <Col p="40px 0 0 30px">
        <Text
          color={theme.colors.green}
          size={isMobile ? theme.fonts.size.h1 : theme.fonts.size.xl}
          font={theme.fonts.family.primaryBold}
          mb="20px"
          style={{ lineHeight: 1.1 }}
        >
          Cotiza en <br />
          <span
            style={{
              color: theme.colors.orange,
              fontFamily: theme.fonts.family.primaryBold,
            }}
          >
            Minutos
          </span>
        </Text>

        <Text
          color={theme.colors.green}
          size={isMobile ? theme.fonts.size.h6 : theme.fonts.size.ft}
          font={theme.fonts.family.primary}
          style={{ width: "50%" }}
        >
          Ingresa tu placa con el formato AAA000, aplica para vehículos con
          menos de 15 años de antigüedad
        </Text>
        <Row width="100%" m="40px 0 0 0" justify="space-between">
          <Div width="20%" height="2px" background={theme.colors.orange} />
          <Button
            height={"40px"}
            font={theme.fonts.family.primaryBold}
            size={isMobile ? theme.fonts.size.default : theme.fonts.size.h6}
            background={theme.colors.orange}
            labelColor={theme.colors.green}
            border={"transparent"}
            hover={theme.colors.orange}
            borderHover={theme.colors.orange}
            onClick={() =>
              (window.location.href = "https://sxkm.co/?intermediaro:202699")
            }
          >
            Cotiza ya!
          </Button>
        </Row>
      </Col>
    </WrapperQuote>
  );
};

export default Quote;
