import React, { useState } from "react";
import { CustomIcon, CustomStepConnector, CustomStepLabel, CustomStepper } from "./styles";
import { Step } from "@mui/material";
import success from "@/assets/icons/check-success.svg"
import Image from "next/image";

export const Stepper = ({ activeStep, steps }) => {

  const StepIcon = (props) => {
    const { active, completed, className, icon } = props;

    return (
      <CustomIcon ownerState={{ active }} className={className}>
        {completed ? (
          <div className="StepIcon-completedIcon">
            <Image alt="success" src={success} />
          </div>
        ) : active ? (
          <div className="StepIcon-activeIcon">
            {icon}
          </div>
        ) : (
          <div className="StepIcon">
            {icon}
          </div>
        )
      }
      </CustomIcon>
    );
  }

  return (
    <CustomStepper activeStep={activeStep} connector={<CustomStepConnector />}>
      {steps.map((label, index) => {
        return (
          <Step key={label}>
            <CustomStepLabel StepIconComponent={StepIcon} isActive={index === activeStep}>
              {label}
            </CustomStepLabel>
          </Step>
        );
      })}
    </CustomStepper>
  )
}