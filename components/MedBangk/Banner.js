import React from "react";
import { WrapperBanner } from "./styles";
import Image from "next/image";
import oldMan from "@/assets/img/old-man.png";
import cross from "@/assets/img/cross.png";
import { Div, Text } from "@/styles/Common";
import { Button } from "../Common/Button";
import { theme } from "@/styles/theme";
import logo from "@/assets/img/med-logo-white.png";
import stethoscope from "@/assets/icons/stethoscope.png";

const Banner = ({ isMobile, isTablet, handleScrollTo }) => {
  return (
    <WrapperBanner>
      <Image
        src={oldMan}
        alt="oldMan"
        height={isMobile ? 410 : 610}
        style={{
          marginTop: "50px",
          zIndex: 5,
          position: "absolute",
          bottom: 0,
          left: "50%",
          transform: "translateX(-50%)",
        }}
      />
      <Image
        src={cross}
        alt="cross"
        height={isMobile ? 410 : 660}
        style={{
          position: "absolute",
          bottom: 0,
          left: "50%",
          transform: "translateX(-50%)",
          zIndex: 1,
          width: isMobile && "100%",
        }}
      />
      <Div
        direction="column"
        width="100%"
        height="100%"
        justify="space-between"
        style={{ zIndex: 10 }}
      >
        <Div
          direction="column"
          width="100%"
          style={{ alignItems: isMobile ? "center" : "flex-end" }}
        >
          <Text
            color={theme.colors.white}
            size={theme.fonts.size.h5s}
            family={theme.fonts.family.primary}
            mb="25px"
            style={{
              width: isMobile ? "370px" : "420px",
              textAlign: isMobile ? "center" : "right",
            }}
          >
            A un mensaje, llamada, notificación de distancia cuidarte se hace
            fácil.
          </Text>
          <Button
            labelColor={theme.colors.orange}
            background={theme.colors.white}
            border={theme.colors.white}
            hover={theme.colors.white}
            borderHover={theme.colors.white}
            height={"40px"}
            labelWeight={theme.fonts.weight.bold}
            size={theme.fonts.size.h6}
            onClick={handleScrollTo}
          >
            Cotiza ya!
          </Button>
        </Div>
        <Div width="100%" justify="space-between" align="center">
          <Image alt="logo" src={logo} width={isMobile ? 250 : 290} />
          <Image
            alt="stethoscope"
            src={stethoscope}
            width={isMobile ? 110 : 120}
          />
        </Div>
      </Div>
    </WrapperBanner>
  );
};

export default Banner;
