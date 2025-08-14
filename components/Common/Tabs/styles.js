import { Tabs, Tab } from "@mui/material";
import styled from "styled-components";
import { theme } from "../../../styles/theme";

export const CustomTab = styled(Tab)`
  && {
    color: ${({ color }) => color || theme.colors.neutralGray400};
    font-size: ${({ size }) => size || theme.fonts.size.h6};
    font-weight: ${({ weight }) => weight || theme.fonts.weight.regular};
    font-family: ${({ font }) => font || theme.fonts.family.primary};
    text-transform: none;

    &.Mui-selected {
      color: ${({ source }) => source === "pet" ? theme.colors.gray150 : theme.colors.neutralGray900};
      font-family: ${theme.fonts.family.primaryBold};
      font-size: ${({ source }) => source === "pet" ? theme.fonts.size.h5s : theme.fonts.size.h6};
    }
  }
`;

export const CustomTabs = styled(Tabs)`
  && {
    & .MuiTabs-indicator {
      background-color: ${theme.colors.orange} !important;
      height: 3px;
    }
  }
`;
