import { theme } from "@/styles/theme";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  min-height: 100vh;
  align-items: stretch;
  overflow: hidden;
`;

export const WrapperForm = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: 0 102px;
  box-sizing: border-box;
  background: ${theme.colors.green};

  @media (min-width: ${theme.breakpoints.sm}) and (max-width: ${theme
      .breakpoints.md}) {
    padding: 0 22px;
  }

  @media (max-width: ${theme.breakpoints.sm}) {
    width: 100%;
    padding: 0 22px;
  }
`;

export const SetPasswordCard = styled.div`
  display: flex;
  flex-direction: column;
  height: auto;
  width: 100%;
  max-width: 555px;
  background: ${theme.colors.white};
  border-radius: 32px;
  align-items: center;
  padding: 64px 40px;
  box-sizing: border-box;

  @media (max-width: ${theme.breakpoints.sm}) {
    max-width: 100%;
  }
`;
