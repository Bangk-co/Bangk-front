import styled from "styled-components";
import { Collapse } from "antd";
import { theme } from "../../../styles/theme";

export const CustomCollapse = styled(Collapse)`
  .ant-collapse-item {
    position: relative;
    width: ${({ width }) => width || "100%"};
    background-color: ${theme.colors.green} !important;
    border-color: ${theme.colors.green} !important;
    border-bottom: 1px solid ${theme.colors.white} !important;
    border-radius: 0px !important;

    .ant-collapse-content {
      opacity: 1;
      border: 1px solid ${theme.colors.green};
      background-color: ${theme.colors.green};
      width: 100%;
      height: min-content;
      max-height: min-content;
      padding-bottom: 20px;

      .ant-collapse-content-box {
        padding-top: 0px;
      }
    }

    .ant-collapse-header {
      width: ${({ width }) => width || "100%"};
      color: ${theme.colors.white};
      align-items: center;
      background-color: ${theme.colors.green};
      padding-left: 0px !important;

      .ant-collapse-header-text {
        font-family: ${theme.fonts.family.primary};
        font-weight: ${theme.fonts.weight.bold};
        font-size: ${theme.fonts.size.default2};
      }

      .ant-collapse-arrow {
        font-size: 14px;
      }
    }
  }
`;
