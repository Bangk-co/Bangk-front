import React from "react";
import { CircularProgress } from "../../Common/CircularProgress";
import { Div } from "@/styles/Common";
import { theme } from "@/styles/theme";

export const Progress = ({ currentStep, activeStep, lineColor }) => {
  return (
    <Div style={{ position: 'relative' }}>
      <CircularProgress 
        thickness={6} 
        variant="determinate" 
        value={100}
        lineColor={theme.colors.gray100}
        style={{ position: 'absolute', left: '0px', top: '-20px' }}
      />
      <CircularProgress 
        thickness={6} 
        variant="determinate" 
        lineColor={lineColor}
        value={currentStep(activeStep).value}
        style={{ position: 'absolute', left: '0px', top: '-20px' }}
      />
    </Div>
  ); 
};