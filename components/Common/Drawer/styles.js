import styled from "styled-components";
import { Drawer } from "@mui/material";
import { theme } from "../../../styles/theme";

export const CustomDrawer = styled(Drawer)`
  .MuiDrawer-paper {
    width: ${({ width }) => width || "414px"};
    background: ${theme.colors.white};
    padding: ${({ padding }) => padding || "64px 24px 40px 24px"} !important;
    &::-webkit-scrollbar {
      width: 0;
      background: transparent;
    }

    .MuiDrawer-close {
      position: absolute;
      top: 40px;
      right: 0px;
      cursor: pointer;
    }
  }
`;
