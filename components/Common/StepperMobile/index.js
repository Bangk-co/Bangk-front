import React from "react";
import { Col, Div, Text } from "@/styles/Common";
import { WrapperMobileStepper } from "./styles";
import { theme } from "@/styles/theme";
import { Progress } from "./progress";

export const StepperMobile = ({ steps, activeStep, lineColor }) => {
  const stepsCount = steps.length;

  const currentStep = (step) => {
    if (step < 0 || step >= stepsCount) {
      return { label: "", value: 0 };
    }
    return { label: steps[step], value: (step + 1) * (100 / stepsCount) };
  };

  const nextStep = (step) => {
    if (step < 0 || step >= stepsCount - 1) {
      return "";
    }
    return steps[step + 1];
  };

  return (
    <WrapperMobileStepper>
      <Div m="16px 0 0 0" width="30%" align="center" style={{ position: "relative" }}>
        <Progress currentStep={currentStep} activeStep={activeStep} lineColor={lineColor} />
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
          {activeStep === stepsCount - 1 ? "Este es el último paso" : `Siguiente: ${nextStep(activeStep)}`}
        </Text>
      </Col>
    </WrapperMobileStepper>
  )
};