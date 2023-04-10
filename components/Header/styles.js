import { theme } from "@/styles/theme";
import styled from "styled-components";

export const WrapperHeader = styled.div`
  display: flex;
  background: ${theme.colors.white};
  height: 141px;
  width: 100vw;
  padding: 0px 45px;
  justify-content: space-between;
  align-items: center;

  @media (max-width: ${theme.breakpoints.sm}) {
    height: 69px;
    padding: 0px 24px;
  }

  @media (min-width: ${theme.breakpoints.sm}) and (max-width: ${theme
      .breakpoints.md}) {
    height: 93px;
    padding: 0px 24px;
  }
`;

export const WrapperMenu = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 69px;
  right: 0px;
  left: 0px;
  width: 100%;
  height: 93%;
  background: ${theme.colors.green};
  z-index: 5;
`;

export const Text = styled.div`
  font-size: ${theme.fonts.size.xxxs};
  line-height: 9px;
  color: ${theme.colors.white};
  text-align: center;
  margin: 18.29px 0px 38px 0px;
`;
