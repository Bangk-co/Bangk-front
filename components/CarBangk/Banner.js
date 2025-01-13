import React from "react";
import Image from "next/image";
import { theme } from "@/styles/theme";
import motoCar from "@/assets/img/moto-car.png";
import { Text } from "@/styles/Common";
import { WrapperBanner } from "./styles";

const Banner = ({ isMobile }) => {
  return (
    <WrapperBanner>
      <Image
        alt="motoCar"
        src={motoCar}
        width={isMobile ? 370 : 846}
        height={isMobile ? 165 : 375}
      />
      <Text
        color={theme.colors.white}
        size={isMobile ? theme.fonts.size.xl : theme.fonts.size.xxxl}
        font={theme.fonts.family.primaryBold}
        mb="10px"
        align="center"
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
        size={isMobile ? theme.fonts.size.h6 : theme.fonts.size.ft}
        font={theme.fonts.family.primary}
        align="center"
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
    </WrapperBanner>
  );
};

export default Banner;
