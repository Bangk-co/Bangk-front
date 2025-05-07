import React from "react";
import { Div, Text } from "@/styles/Common";
import { Link } from "../Link";
import { theme } from "@/styles/theme";
import { useRouter } from "next/router";
import { OrangeCard } from "./styles";

export const GeneralConditions = ({ isMobile, isTablet }) => {
  const router = useRouter();
  const navigateToConditions = () => {
    router.push("/ahorra-en-tus-seguros/med-bangk/condiciones");
  };

  return (
    <Div
      p={isMobile ? "100px 20px 50px 20px" : "300px 90px 100px 90px"}
      direction="column"
      align="center"
      justify="center"
    >
      <Text
        color={theme.colors.green}
        style={{
          width: isMobile || isTablet ? "100%" : "950px",
          textAlign: "center",
        }}
      >
        Los servicios del plan de asistencias de MedBangk/PetBangk son prestados
        por{" "}
        <span style={{ fontFamily: theme.fonts.family.primaryBold }}>
          GEA, “Grupo Especializado de Asistencias Colombia S.A.S.”
        </span>
      </Text>
      <Text color={theme.colors.green} mt="18px">
        Consulta
        <Link
          color={theme.colors.green}
          size={theme.fonts.size.default}
          style={{ textDecoration: "underline" }}
          onClick={navigateToConditions}
        >
          aquí
        </Link>
        las Condiciones Generales del plan de asistencia
      </Text>
      <OrangeCard onClick={navigateToConditions}>
        Condiciones
        <br />
        Generales
      </OrangeCard>
    </Div>
  );
};
