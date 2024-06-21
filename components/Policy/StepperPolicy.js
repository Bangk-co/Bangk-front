import React, { useState } from "react";
import { Stepper } from "../Common/Stepper/index";
import { Div } from "@/styles/Common";
import { WrapperStepper } from "@/styles/Policy";

export const StepperPolicy = ({ activeStep, steps }) => {
  return (
    <WrapperStepper>
      <Stepper activeStep={activeStep} steps={steps} />
    </WrapperStepper>
  )
}