import styled from "styled-components";
import { Button } from "@mui/material";
import { theme } from "../../../styles/theme";

export const CustomButton = styled(Button)`
  && {
    width: ${({ width }) => width || "163px"};
    height: ${({ height }) => height || "48px"};
    background: ${({ background }) => background || theme.colors.gray300} 0% 0%
      no-repeat padding-box;
    border-radius: ${({ radius }) => radius || "50px"};
    color: ${({ color }) => color || theme.colors.white};
    font-family: ${({ font }) => font || theme.fonts.family.secundary};
    font-size: ${({ size }) => size || theme.fonts.size.md};
    font-weight: ${theme.fonts.weight.semibold};
    border: 1px solid;
    border-color: ${({ border }) => border || theme.colors.gray300};
    text-align: center;
    justify-content: center;
    padding: ${({ padding }) => padding || "0px"};
    text-transform: none;

    &:hover {
      background: ${theme.colors.orange} 0% 0% no-repeat padding-box;
      border-color: ${theme.colors.orange};
      cursor: pointer;
    }

    @media (max-width: ${theme.breakpoints.sm}) {
      width: 140px;
      padding: 0 12px;
    }

    @media (min-width: ${theme.breakpoints.xs}) and (max-width: ${theme
        .breakpoints.sm}) {
      padding: 0 12px;
    }

    @media (min-width: ${theme.breakpoints.sm}) and (max-width: ${theme
        .breakpoints.md}) {
      padding: 0 16px;
    }
  }
`;
