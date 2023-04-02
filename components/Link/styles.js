import styled from "styled-components";
import { Button } from "antd";
import { theme } from "../../styles/theme";

export const CustomLink = styled(Button)`
  padding: 0px;
  color: ${({ color }) => color || theme.colors.black};
  font-size: ${({ size }) => size || theme.fonts.size.h6};
  font-weight: ${({ weight }) => weight || theme.fonts.weight.regular};
  background: transparent;
  border: none;

  && {
    &.ant-btn-link {
      &:hover {
        color: ${({ color }) => color || theme.colors.black};
      }
    }

    &.ant-btn-default {
      &:hover {
        color: ${({ color }) => color || theme.colors.black};
      }
    }
  }
`;
