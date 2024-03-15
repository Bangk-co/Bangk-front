import { theme } from "@/styles/theme";
import { CircularProgress } from "@mui/material";
import styled from "styled-components";

export const CustomCircularProgress = styled(CircularProgress)`
  && {
    .MuiCircularProgress-svg {
      width: 56px;
      height: 56px;
      color: ${({ lineColor }) => lineColor || theme.colors.green500} !important;
    }
  }
`;