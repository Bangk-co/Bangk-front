import styled from "styled-components";
import { Input } from "antd";
import { theme } from "../../styles/theme";

export const CustomInput = styled(Input)`
  width: ${({ width }) => width || "90%"};
  height: ${({ height }) => height || "44px"};
  border: 1px solid ${({ border }) => border || theme.colors.white};
  border-radius: ${({ radius }) => radius || "43px"};
  padding: 0 16px;
  opacity: 1;

  @media (max-width: ${theme.breakpoints.sm}) {
    width: 100%;
  }

  @media (min-width: ${theme.breakpoints.sm}) and (max-width: ${theme
      .breakpoints.md}) {
    width: 100%;
  }

  && {
    &.ant-input,
    &.ant-input-affix-wrapper {
      color: ${theme.colors.grey};
      size: 16px;

      &::placeholder {
        color: ${theme.colors.grey};
      }

      &:focus {
        outline: 0;
        border: 1px solid ${({ border }) => border || theme.colors.white} !important;
        box-shadow: initial;
      }

      &:hover {
        border: 1px solid ${({ border }) => border || theme.colors.white} !important;
        box-shadow: initial;
      }
    }

    &.ant-input-affix-wrapper {
      &-focused {
        outline: 0;
        border: 1px solid ${({ border }) => border || theme.colors.white} !important;
        box-shadow: initial;
      }

      input {
        &::placeholder {
          color: ${theme.colors.grey};
        }
      }
    }
  }
`;
