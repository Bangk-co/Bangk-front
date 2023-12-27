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
    font-family: "Gilroy Bold";
    font-size: ${({ size }) => size || theme.fonts.size.md};
    font-weight: ${theme.fonts.weight.bold};
    border: 1px solid;
    border-color: ${({ border }) => border || theme.colors.gray300};
    text-align: center;
    justify-content: center;
    padding: ${({ padding }) => padding || "0px"};

    &:hover {
      background: ${theme.colors.orange} 0% 0% no-repeat padding-box;
      border-color: ${theme.colors.orange};
    }

    @media (max-width: ${theme.breakpoints.sm}) {
      width: min-content;
      padding: 0 12px;
    }

    @media (min-width: ${theme.breakpoints.sm}) and (max-width: ${theme
        .breakpoints.md}) {
      width: min-content;
      padding: 0 16px;
    }
  }
`;
