import React from "react";
import Image from "next/image";
import { theme } from "@/styles/theme";
import count from "@/assets/img/count.png";
import { Row, Text } from "@/styles/Common";
import { WrapperBanner } from "./styles";
import { Button } from "../Common/Button";

const Banner = ({ isMobile }) => {
  return (
    <WrapperBanner>
      <Text
        color={theme.colors.white}
        size={isMobile ? theme.fonts.size.xl : theme.fonts.size.xxxl}
        font={theme.fonts.family.primaryBold}
        mb="20px"
      >
        Bang-
        <span
          style={{
            color: theme.colors.orange,
            fontFamily: theme.fonts.family.primaryBold,
          }}
        >
          Km!
        </span>
      </Text>

      <Text
        color={theme.colors.white}
        size={isMobile ? theme.fonts.size.h6 : theme.fonts.size.ft}
        font={theme.fonts.family.primary}
        style={{ width: "87%" }}
      >
        ¿Por qué pagar por km que no recorres? Encontramos el seguro de carro
        ideal, el{" "}
        <span
          style={{
            fontFamily: theme.fonts.family.primaryBold,
          }}
        >
          Seguro por Kilómetro de SBS Seguros,{" "}
        </span>
        uno que se adapta a ti, al tiempo que conduces, que no necesita
        inspección de tu auto, puedes comprar 100% en línea y te ayuda a
        ahorrar.
      </Text>
      <Row width="100%" justify="end" m="0 0 30px 0">
        <Image
          alt="count"
          src={count}
          width={isMobile ? 300 : 1000}
          height={isMobile ? 80 : 268}
        />
      </Row>
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
    </WrapperBanner>
  );
};

export default Banner;
