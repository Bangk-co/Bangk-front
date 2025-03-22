import React from "react";
import { Col, Div, Text } from "@/styles/Common";
import { WrapperMobileStepper } from "../styles";
import { theme } from "@/styles/theme";
import { Progress } from "./progress";

export const MobileStepper = ({ activeStep }) => {

  const steps = [
    "Información general",
    "Datos de tu mascota",
    "Resumen de tu asistencia",
  ];

  const currentStep = (step) => {
    switch (step) {
      case 0:
        return { label: steps[0], value: 33.33};
      case 1:
        return { label: steps[1], value: 66.66};
      case 2:
        return { label: steps[2], value: 100};
      default:
        return { label: "", value: 0 };
    }
  };

  const nextStep = (step) => {
    switch (step) {
      case 0:
        return steps[1];
      case 1:
        return steps[2];
      case 2:
        return steps[3];
      default:
        return "";
    }
  };

  return (
    <WrapperMobileStepper>
      <Div m="16px 0 0 0" width="30%" align="center" style={{ position: "relative" }}>
        <Progress currentStep={currentStep} activeStep={activeStep} />
        <Div style={{ position: "absolute", top: "-15px", left: "10px" }}>
          <Text
            size={theme.fonts.size.xs}
            color={theme.colors.gray150}
            font={theme.fonts.family.primaryBold}
            weight={theme.fonts.weight.bold}
          >
            {`${activeStep + 1} de ${steps.length}`}
          </Text>
        </Div>
      </Div>
      <Col width="70%" align="right">
        <Text
          color={theme.colors.gray150}
          font={theme.fonts.family.primaryBold}
          weight={theme.fonts.weight.bold}
          size={theme.fonts.size.default}
          lineHeight={"22.28px"}
        >
          {currentStep(activeStep).label}
        </Text>
        <Text
          color={theme.colors.gray150}
          font={theme.fonts.family.primary}
          size={theme.fonts.size.xs}
          lineHeight={"14.4px"}
        >
          {activeStep === 2 ? "Este es el último paso" : `Siguiente: ${nextStep(activeStep)}`}
        </Text>
      </Col>
    </WrapperMobileStepper>
  )
};