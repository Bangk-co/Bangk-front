import { Col, Div, Text } from "@/styles/Common";
import { WrapperMobileStepper } from "@/styles/Policy";
import { theme } from "@/styles/theme";
import React from "react";
import { Progress } from "./Progress";

export const MobileStepperPolicy = ({ loanTypeId, steps, activeStep }) => {

  const currentStepFree = (step) => {
    switch (step) {
      case 0:
        return { label: steps[0], value: 25};
      case 1:
        return { label: steps[1], value: 50};
      case 2:
        return { label: steps[2], value: 75};
      case 3:
        return { label: steps[3], value: 100};
      default:
        return { label: "", value: 0 };
    }
  }

  const currentStep = (step) => {
    switch (step) {
      case 0:
        return { label: steps[0], value: 20};
      case 1:
        return { label: steps[1], value: 40};
      case 2:
        return { label: steps[2], value: 60};
      case 3:
        return { label: steps[3], value: 80};
      case 4:
        return { label: steps[4], value: 100};
      default:
        return { label: "", value: 0 };
    }
  }

  const nextStep = (step) => {
    switch (step) {
      case 0:
        return steps[1];
      case 1:
        return steps[2];
      case 2:
        return steps[3];
      case 3:
        return loanTypeId === 104 || loanTypeId === 105 ? "" : steps[4];
      default:
        return "";
    }
  }

  return (
    <WrapperMobileStepper>
      <Div m="16px 0 0 0" width="30%" align="center" style={{ position: "relative" }}>
        <Progress currentStepFree={currentStepFree} loanTypeId={loanTypeId} currentStep={currentStep} activeStep={activeStep} />
        <Div style={{ position: "absolute", top: "-15px", left: "10px" }}>
          <Text
            size={theme.fonts.size.xs}
            color={theme.colors.green900}
            font={theme.fonts.family.primaryBold}
            weight={theme.fonts.weight.bold}
          >
            {`${activeStep + 1} de ${steps.length}`}
          </Text>
        </Div>
      </Div>
      <Col width="70%" align="right">
        <Text
          color={theme.colors.gray900}
          font={theme.fonts.family.primaryBold}
          weight={theme.fonts.weight.bold}
          size={theme.fonts.size.default}
          lineHeight={"22.28px"}
        >
          {loanTypeId === 104 || loanTypeId === 105 ? currentStepFree(activeStep).label : currentStep(activeStep).label}
        </Text>
        <Text
          color={theme.colors.gray900}
          font={theme.fonts.family.primary}
          size={theme.fonts.size.xs}
          lineHeight={"14.4px"}
        >
          {activeStep === 4 ? "Este es el último paso" : `Siguiente: ${nextStep(activeStep)}`}
        </Text>
      </Col>
    </WrapperMobileStepper>
  )
}