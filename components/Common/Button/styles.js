import styled from "styled-components";
import { Button } from "@mui/material";
import { theme } from "../../../styles/theme";

export const CustomButton = styled(Button)`
  && {
    width: ${({ width }) => width || "163px"};
    min-width: ${({ width }) => width || "50px"};
    height: ${({ height }) => height || "48px"};
    background: ${({ background }) => background || theme.colors.gray300} 0% 0%
      no-repeat padding-box;
    border-radius: ${({ radius }) => radius || "50px"};
    color: ${({ labelColor }) => labelColor || theme.colors.white};
    font-family: ${({ font }) => font || theme.fonts.family.secondary};
    font-size: ${({ size }) => size || theme.fonts.size.md};
    font-weight: ${({ weight }) => weight || theme.fonts.weight.semibold};
    border: ${({ borderwidth }) => `${borderwidth} solid` || "1px solid"};
    border-color: ${({ border }) => border || theme.colors.gray300};
    text-align: center;
    justify-content: center;
    padding: ${({ padding }) => padding || "0px"};
    text-transform: none;

    &:hover {
      background: ${({ hover }) => hover || theme.colors.orange} 0% 0% no-repeat
        padding-box;
      border-color: ${({ labelColor }) => labelColor || theme.colors.orange};
      cursor: pointer;
    }

    &:disabled {
      background: ${theme.colors.neutralGray200} 0% 0% no-repeat padding-box;
      color: ${theme.colors.neutralGray400};
    }

    @media (max-width: ${theme.breakpoints.sm}) {
      width: ${({ mobileWidth }) => mobileWidth || "140px"};
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
