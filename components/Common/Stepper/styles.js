import styled from "styled-components";
import { StepConnector, StepLabel, Stepper } from "@mui/material";
import { theme } from "@/styles/theme";

export const CustomStepper = styled(Stepper)`
`

export const CustomStepLabel = styled(StepLabel)(({ isActive }) => ({
  "& .MuiStepLabel-label": {
    display: isActive ? "inline" : "none",
  },
  "& .MuiStepLabel-label.Mui-active": {
    fontFamily: theme.fonts.family.primaryBold,
    fontWeight: theme.fonts.weight.bold,
    fontSize: theme.fonts.size.ft,
    lineHeight: "28px",
    color: theme.colors.green900,
  },
  "& .MuiStepLabel-labelContainer": {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
}));

export const CustomStepConnector = styled(StepConnector)(() => ({
  display: "flex",
  width: "210px",
  border: `2px solid ${theme.colors.green900}`,
  backgroundColor: theme.colors.green900,
  marginLeft: "-1px",
}));

export const CustomIcon = styled('div')(({ ownerState }) => ({
  display: 'flex',
  display: "flex",
  width: "32px",
  height: "32px",
  borderRadius: "4px",
  alignItems: 'center',
  '& .StepIcon-completedIcon': {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "32px",
    height: "32px",
    borderRadius: "4px",
    background: theme.colors.green500,
  },
  '& .StepIcon-activeIcon': {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "32px",
    height: "32px",
    borderRadius: "4px",
    backgroundColor: theme.colors.green900,
    fontFamily: theme.fonts.family.primaryBold,
    fontSize: theme.fonts.size.h5s,
    lineHeight: "32px",
    color: theme.colors.primary25,
  },
  '& .StepIcon': {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "32px",
    height: "32px",
    borderRadius: "4px",
    backgroundColor: theme.colors.gray300,
    fontFamily: theme.fonts.family.primaryBold,
    fontSize: theme.fonts.size.h5s,
    lineHeight: "32px",
    color: theme.colors.primary25,
  },
}));