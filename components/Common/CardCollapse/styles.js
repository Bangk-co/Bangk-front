import styled from "styled-components";
import { Collapse } from "antd";
import { theme } from "../../../styles/theme";

export const CustomCollapse = styled(Collapse)`
  .ant-collapse-item {
    position: relative;
    width: ${({ width }) => width || "100%"};
    height: auto;
    background-color: ${theme.colors.white} !important;
    border-color: ${theme.colors.white} !important;
    border-radius: 12px !important;
    box-shadow: 4px 4px 8px 0px rgba(0, 0, 0, 0.08);
    margin-top: 30px;

    .ant-collapse-content {
      opacity: 1;
      width: 100%;
      height: auto;
      max-height: none;
      padding-bottom: 20px;
      border-radius: 0 0 12px 12px !important;
      border-top: none !important;

      .ant-collapse-content-box {
        padding-top: 0px;
      }
    }

    .ant-collapse-header {
      height: ${({ height }) => height || "65px"};
      width: ${({ width }) => width || "100%"};
      color: ${theme.colors.gray150s};
      align-items: center;
      background-color: ${theme.colors.white};
      padding-left: 20px !important;
      border-radius: 12px !important;

      &.ant-collapse-item-active {
        border-radius: 12px 12px 0 0 !important;
      }

      .ant-collapse-header-text {
        font-family: ${theme.fonts.family.primaryBold};
        font-size: ${theme.fonts.size.h6};
        color: ${theme.colors.gray150};
      }

      .ant-collapse-arrow {
        font-size: 14px;
      }
    }
  }
`;

export const Divider = styled.div`
  border-top: 1px dashed ${theme.colors.gray1200};
  margin: 0px;
  width: 100%;
`;
