import styled from "styled-components";
import { theme } from "@/styles/theme";

export const WrapperHeader = styled.div`
  display: flex;
  justify-content: space-between;
  background: ${theme.colors.green};
  width: 100%;
  height: 66px;
  box-shadow: 0px 2px 6px 2px #00000026;
  box-shadow: 0px 1px 2px 0px #0000004D;
  align-items: center;
  padding-left: 30px;
  padding-right: 36px;
  z-index: 5;

  @media (max-width: ${theme.breakpoints.sm}) and (max-width: ${theme
  .breakpoints.md}) {
    box-shadow: none;
    z-index: 0;
    justify-content: ${({ isAuth }) => isAuth ? "space-between" : "center"};
    padding-left: 0px;
    padding-top: 10px;
    padding: ${({ isAuth }) => isAuth ? "0px 24px" : "0px"};
  }
`