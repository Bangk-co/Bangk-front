import React from "react";
import { Div, Text } from "@/styles/Common";
import { theme } from "@/styles/theme";
import housingLawImg from "@/assets/img/housingLaw.svg";
import Image from "next/image";

const HousingLaw = ({ isMobile, isTablet }) => {
  return (
    <Div
      direction="column"
      width="100%"
      padding={isMobile ? "60px 50px 0px 50px" : "70px 72px"}
      justify="center"
      align="center"
    >
      <Text
        color={theme.colors.green}
        size={isMobile ? theme.fonts.size.h5 : theme.fonts.size.lg}
        font={theme.fonts.family.primaryBold}
        mb={isMobile ? "30px" : "50px"}
      >
        Descubre cómo{" "}
        <span
          style={{
            color: theme.colors.green1100,
            fontFamily: theme.fonts.family.primaryBold,
          }}
        >
          ahorrar millones
        </span>{" "}
        {!isMobile && <br />}
        con tu crédito!
      </Text>
      <Text
        color={theme.colors.green}
        size={isMobile ? theme.fonts.size.default2 : theme.fonts.size.h3s}
        font={theme.fonts.family.primaryMedium}
        mb={isMobile ? "50px" : "70px"}
      >
        En Bangk, te ayudamos a usar la Ley de Vivienda para obtener beneficios
        en tus créditos
      </Text>
      <Image
        src={housingLawImg}
        alt="housing-law"
        width={isMobile ? 300 : isTablet ? 700 : "100%"}
      />
    </Div>
  );
};

export default HousingLaw;
