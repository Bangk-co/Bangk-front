import styled from "styled-components";
import { Button } from "antd";
import { theme } from "../../styles/theme";

export const CustomButton = styled(Button)`
  width: ${({ width }) => width || "163px"} !important;
  height: ${({ height }) => height || "42.74px"};
  background: ${({ background }) => background || theme.colors.yellow} 0% 0%
    no-repeat padding-box;
  border-radius: 43px;
  opacity: 1;
  color: ${({ color }) => color || theme.colors.green};
  font-family: Gilroy Bold;
  font-size: ${({ size }) => size || theme.fonts.size.h6};
  font-weight: ${theme.fonts.weight.bold};
  border: 1px solid;
  border-color: ${({ border }) => border || "transparent"};
  text-align: center;
  justify-content: center;
  padding: ${({ padding }) => padding || "0px"};

  @media (max-width: ${theme.breakpoints.sm}) {
    width: ${({ width }) => width || "min-content"} !important;
    padding: 0 12px;
  }

  @media (min-width: ${theme.breakpoints.sm}) and (max-width: ${theme
      .breakpoints.md}) {
    width: min-content !important;
    padding: 0 16px;
  }

  && {
    &.ant-btn-link {
      &:hover {
        color: ${({ color }) => color || theme.colors.green};
      }
    }

    &.ant-btn-default {
      &:hover {
        color: ${({ color }) => color || theme.colors.green};
        border: 1px solid;
        border-color: ${({ border }) => border || "transparent"};
      }
    }
  }

  @media (min-width: ${theme.breakpoints.sm}) and (max-width: ${theme
      .breakpoints.md}) {
    width: 88px;
    height: 18px;

    font-size: ${({ size }) => size || theme.fonts.size.xxs};
  }

  @media (max-width: ${theme.breakpoints.sm}) {
    width: ${({ width }) => width || "min-content"} !important;
    height: ${({ height }) => height || "16.53px"};
    font-size: ${({ size }) => size || theme.fonts.size.xxs};
  }
`;
