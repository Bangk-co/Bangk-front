import React from "react";
import Image from "next/image";
import { theme } from "@/styles/theme";
import coins from "@/assets/img/yellowCoins.png";
import { Div, Row, Text } from "@/styles/Common";
import { WrapperBanner } from "./styles";
import { Button } from "../Common/Button";

const Banner = ({ isMobile }) => {
  return (
    <WrapperBanner>
      <Text
        color={theme.colors.white}
        size={isMobile ? theme.fonts.size.ft : theme.fonts.size.h5}
        font={theme.fonts.family.primaryBold}
      >
        CAR-
        <span
          style={{
            color: theme.colors.orange,
            fontFamily: theme.fonts.family.primaryBold,
          }}
        >
          BANGK!
        </span>
      </Text>
      <Text
        color={theme.colors.white}
        size={isMobile ? theme.fonts.size.xl : theme.fonts.size.xxxl}
        font={theme.fonts.family.primaryBold}
        mb="60px"
        style={{ zIndex: 1 }}
      >
        Daños a Terceros
      </Text>

      <Text
        color={theme.colors.white}
        size={isMobile ? theme.fonts.size.default2 : theme.fonts.size.h6}
        font={theme.fonts.family.primary}
        mb="30px"
        style={{ width: "60%", zIndex: 1 }}
      >
        Es el producto básico para proteger a cualquier tercero en caso de un
        importuno, y a ti. De esta manera que evitarás responder por daños
        imposibles de cuantificar, tanto materiales, como físicos y/o morales
        (psicológicos).
      </Text>
      <Div
        width="auto"
        height="100%"
        style={{
          position: "absolute",
          right: -70,
          bottom: isMobile ? -250 : "auto",
          top: isMobile ? null : -60,
          zIndex: 0,
        }}
      >
        <Image
          alt="coins"
          src={coins}
          width={isMobile ? 250 : 600}
          height="100%"
        />
      </Div>
      <Button
        height={"40px"}
        width={"250px"}
        font={theme.fonts.family.primaryBold}
        size={isMobile ? theme.fonts.size.default : theme.fonts.size.h6}
        background={theme.colors.orange}
        labelColor={theme.colors.green}
        border={"transparent"}
        hover={theme.colors.orange}
        borderHover={theme.colors.orange}
        onClick={() =>
          window.open(
            " https://api.whatsapp.com/send?phone=573009136761&text=Hola%20Bangk,%20Quiero%20Ahorrar",
            "_blank"
          )
        }
      >
        Contacta a un asesor
      </Button>
    </WrapperBanner>
  );
};

export default Banner;
