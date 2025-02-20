import React from "react";
import { WrapperHowSection, WrapperLeft } from "./styles";
import { Div, Text } from "@/styles/Common";
import Image from "next/image";
import youngMan from "@/assets/img/young-man.png";
import star from "@/assets/img/starOrange.png";
import { theme } from "@/styles/theme";

const HowSection = ({ isMobile, isTablet }) => {
  return (
    <WrapperHowSection>
      <WrapperLeft>
        <Div direction="column" gap="40px">
          <Text
            color={theme.colors.green1000}
            size={isMobile ? theme.fonts.size.h4s : theme.fonts.size.xl}
            font={theme.fonts.family.primaryBold}
          >
            ¿Cómo?
          </Text>
          <Text
            color={theme.colors.green1000}
            size={isMobile ? theme.fonts.size.h5 : theme.fonts.size.h4}
            font={theme.fonts.family.primary}
            style={{ width: "90%" }}
          >
            Con nuestro plan de <span style={{ fontFamily: theme.fonts.family.primaryBold }}>asistencia médica,
            tu mejor aliado.</span>
          </Text>
        </Div>
        <Div direction="column" gap="20px">
          <Image src={star} alt="star" />
          <Text 
            color={theme.colors.green1000}
            size={isMobile ? theme.fonts.size.h6 : theme.fonts.size.h5}
            mt="40px"
          >
            Nuestro Plan MedBangk por medio de GEA
            Colombia cuenta con una amplía cobertura y
            beneficios adicionales. Es ideal para quienes desean
            una atención médica más completa.
          </Text>
          <Text
            color={theme.colors.green1000}
            size={isMobile ? theme.fonts.size.h6 : theme.fonts.size.h5}
          >
            Contando con una cobertura de cerca del 80% del
            país, y con más de 400 proovedores a tu servicio.
          </Text>
        </Div>
      </WrapperLeft>
      <Div width={(isMobile || isTablet) ? "100%" : "45%"}>
        <Image src={youngMan} alt="youngMan" style={{ width: "100%", height: "100%" }} />
      </Div>
    </WrapperHowSection>
  )
};

export default HowSection;