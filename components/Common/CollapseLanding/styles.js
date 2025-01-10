import styled from "styled-components";
import { Collapse } from "antd";
import { theme } from "../../../styles/theme";

export const CustomCollapse = styled(Collapse)`
  .ant-collapse-item {
    position: relative;
    width: ${({ width }) => width || "100%"};
    background-color: ${theme.colors.white} !important;
    border-color: ${theme.colors.white} !important;
    border-bottom: 1px solid ${theme.colors.white} !important;
    border-radius: 0px !important;

    .ant-collapse-content {
      opacity: 1;
      border: 1px solid ${theme.colors.white};
      background-color: ${theme.colors.white};
      font-family: ${theme.fonts.family.primaryBold};
      text-align: ${({ textAlign }) => textAlign};
      width: 100%;
      height: min-content;
      max-height: min-content;
      padding-bottom: 20px;

      .ant-collapse-content-box {
        padding-top: 0px;
        font-size: ${theme.fonts.size.md};
        font-family: ${theme.fonts.family.primary};
        color: ${theme.colors.green};
      }
    }

    .ant-collapse-header {
      width: ${({ width }) => width || "100%"};
      color: ${theme.colors.green};
      align-items: center;
      background-color: ${theme.colors.white};
      padding-left: 0px !important;
      display: flex;
      justify-content: space-between;
      align-items: start;

      .ant-collapse-header-text {
        font-size: ${({ headerFontSize }) =>
          headerFontSize || theme.fonts.size.ft};
        font-family: ${theme.fonts.family.primaryBold};
        font-weight: ${theme.fonts.weight.bold};
      }

      .ant-collapse-arrow {
        font-size: 14px;
        margin: 15px 0 0 0;
      }
    }
  }
`;
