import { Select } from "@mui/material";
import { theme } from "../../../styles/theme";
import styled from "styled-components";

export const CustomSelect = styled(Select)`
  && {
    background: ${({ background }) => background};
    border-radius: ${({ radius }) => radius || "43px"};
    width: ${({ width }) => width || "90%"};
    height: ${({ height }) => height || "44px"};
    font-family: ${({ font }) => font || theme.fonts.family.secondary};
    font-weight: ${theme.fonts.weight.regular};
    font-size: ${({ size }) => size || theme.fonts.size.sm};
    text-align: center;
    &.Mui-focused fieldset {
      border: 1px solid
        ${(props) =>
          props.error
            ? theme.colors.red
            : props.notFocused
            ? props.border
            : theme.colors.orange} !important;
    }
    .MuiOutlinedInput-notchedOutline {
      border-color: ${({ border }) => border || theme.colors.gray500};
    }
    &.Mui-disabled fieldset {
      border-color: ${({ border }) => border || theme.colors.gray500};
    }
    & input::placeholder {
      color: ${({ placeholderColor }) => placeholderColor};
      font-family: ${({ font }) => font || theme.fonts.family.secondary};
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
