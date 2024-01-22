import styled from "styled-components";
import { Button } from "@mui/material";
import { theme } from "../../../styles/theme";

export const CustomLink = styled(({ color, ...props }) => (
  <Button {...props} />
))`
  && {
    width: ${({ width }) => width};
    height: ${({ height }) => height};
    font-family: ${({ font }) => font || theme.fonts.family.secondary};
    padding: 0px;
    color: ${({ color }) => color || theme.colors.gray900};
    font-size: ${({ size }) => size || theme.fonts.size.h6};
    font-weight: ${({ weight }) => weight || theme.fonts.weight.regular};
    background: ${({ background }) => background || "transparent"};
    border: none;
    border-radius: ${({ radius }) => radius || "0px"};
    text-transform: none;

    &:hover {
      color: ${({ color }) => color || theme.colors.orange};
      background: ${({ hover }) => hover || "transparent"};
      cursor: pointer;
    }

    @media (max-width: ${theme.breakpoints.sm}) {
      width: 205px;
      padding: 12px 12px;
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
