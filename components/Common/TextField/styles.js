import TextField from "@mui/material/TextField";
import { theme } from "../../../styles/theme";
import styled from "styled-components";

export const CustomTextField = styled(TextField)`
  .MuiOutlinedInput-root {
    border-radius: ${({ radius }) => radius || "43px"};
    width: ${({ width }) => width || "90%"};
    height: ${({ height }) => height || "44px"};
    font-family: ${({ font }) => font || theme.fonts.family.secondary};
    font-weight: ${theme.fonts.weight.regular};
    font-size: ${theme.fonts.size.sm};
    &.Mui-focused fieldset {
      border: 1px solid
        ${({ error }) => (error ? theme.colors.red : theme.colors.orange)} !important;
    }
    .MuiOutlinedInput-notchedOutline {
      border-color: ${theme.colors.gray500};
    }
    &.Mui-disabled fieldset {
      border-color: ${theme.colors.gray500};
    }
  }

  @media (max-width: ${theme.breakpoints.sm}) {
    width: 100%;
  }

  @media (min-width: ${theme.breakpoints.sm}) and (max-width: ${theme
      .breakpoints.md}) {
    width: 100%;
  }
`;
