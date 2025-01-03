import React from "react";
import Image from "next/image";
import { theme } from "@/styles/theme";
import motoCar from "@/assets/img/moto-car.png";
import carBangkBackground from "@/assets/img/carBangkBanner.png";
import { Div, Text } from "@/styles/Common";

const Banner = ({ isMobile }) => {
  const backgroundImageUrl = carBangkBackground.src;
  return (
    <Div
      p={"70px 72px 70px 72px"}
      direction="column"
      align="center"
      style={{
        backgroundImage: `url(${backgroundImageUrl})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <Image
        alt="motoCar"
        src={motoCar}
        width={isMobile ? 191 : 846}
        height={isMobile ? 160 : 375}
      />
      <Text
        color={theme.colors.white}
        size={theme.fonts.size.xxxl}
        font={theme.fonts.family.primaryBold}
      >
        CAR-
        <span
          style={{
            color: theme.colors.green,
            fontFamily: theme.fonts.family.primaryBold,
          }}
        >
          BANGK!
        </span>
      </Text>
      <Text
        color={theme.colors.green}
        size={theme.fonts.size.ft}
        font={theme.fonts.family.primary}
        style={{ width: "80%" }}
      >
        En Bangk queremos revolucionarlo todo. ¡Incluso la forma en que te{" "}
        <span
          style={{
            fontFamily: theme.fonts.family.primaryBold,
          }}
        >
          mueves!{" "}
        </span>
        Conduce tranquilo y con la seguridad que necesitas en cada recorrido, en
        tu camino cuentas con las coberturas y asistencias que te ofrece el{" "}
        <span
          style={{
            fontFamily: theme.fonts.family.primaryBold,
          }}
        >
          Seguros de Vehículos de SBS.
        </span>
      </Text>
    </Div>
  );
};

export default Banner;
