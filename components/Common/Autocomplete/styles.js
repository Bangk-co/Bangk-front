import { Autocomplete } from '@mui/material';
import { theme } from "../../../styles/theme";
import styled from "styled-components";

export const CustomAutocomplete = styled(Autocomplete)`
  && {
    background: ${({ background }) => background};
    border-radius: ${({ radius }) => radius || "4px"};
    width: ${({ width }) => width || "100%"};
    height: ${({ height }) => height || "40px"};
    font-family: ${({ font }) => font || theme.fonts.family.primary};
    font-weight: ${theme.fonts.weight.regular};
    font-size: ${({ size }) => size || theme.fonts.size.sm};
    align-content: center !important;

    &.Mui-focused fieldset {
      border: 1px solid
        ${(props) => (props.error ? theme.colors.red : props.border)} !important;
    }
    .MuiOutlinedInput-notchedOutline {
      border-color: ${({ border }) => border || theme.colors.gray500};
    }
    &.Mui-disabled fieldset {
      border-color: ${({ border }) => border || theme.colors.gray500};
    }
    & input::placeholder {
      color: ${({ placeholderColor }) => placeholderColor};
      font-family: ${({ font }) => font || theme.fonts.family.primary};
      font-size: ${({ size }) => size || theme.fonts.size.sm};
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
