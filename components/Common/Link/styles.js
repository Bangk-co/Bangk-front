import styled from "styled-components";
import { Button } from "@mui/material";
import { theme } from "../../../styles/theme";

export const CustomLink = styled(Button)`
  && {
    font-family: Gilroy;
    padding: 0px;
    color: ${({ color }) => color || theme.colors.gray900};
    font-size: ${({ size }) => size || theme.fonts.size.h6};
    font-weight: ${({ weight }) => weight || theme.fonts.weight.regular};
    background: transparent;
    border: none;
    text-transform: none;

    &:hover {
      color: ${theme.colors.orange};
      cursor: pointer;
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
