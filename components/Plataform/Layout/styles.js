import styled from "styled-components";
import { theme } from "../../../styles/theme";

export const WrapperLayout = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  min-height: 696px;
  overflow-x: hidden;
  flex-direction: column;
`;

export const WrapperContent = styled.div`
  display: flex;
  flex: 1;
  width: 100%;
  background: ${theme.colors.white} 0% 0% no-repeat padding-box;
  opacity: 1;
  box-shadow: 1px 0px 2px rgba(0, 0, 0, 0.06);
  min-height: 696px;
  height: 100%;
`;

export const Sider = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: flex-start;
  padding: 20px 0px 0px;
  height: 100%;
  width: 150px;
  background: ${theme.colors.green900} 0% 0% no-repeat padding-box;
  border-radius: 0px 8px 8px 0px;
  @media (max-width: ${theme.breakpoints.md}) {
    width: 120px;
  }
`;

export const Content = styled.div`
  position: relative;
  display: flex;
  padding: ${({ p }) => p || "32px"};
  height: 100%;
  width: calc(100% - 150px);
  background: ${theme.colors.white} 0% 0% no-repeat padding-box;
  box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
  justify-content: center;
  overflow-y: auto;
  &::-webkit-scrollbar {
    width: 0;
    background: transparent;
  }
`;
