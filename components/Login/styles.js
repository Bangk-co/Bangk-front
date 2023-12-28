import { theme } from "@/styles/theme";
import styled from "styled-components";

export const BackgroundContainer = styled.div`
  display: flex;
  min-height: 100vh;
  background: ${theme.colors.green};
  align-items: stretch;
  overflow: hidden;
`;

export const WrapperImage = styled.div`
  display: flex;
  min-width: 686px;
  background: ${theme.colors.white};
  justify-content: center;
  align-items: center;
`;

export const WrapperForm = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: 0 102px;
  box-sizing: border-box;
`;

export const LoginCard = styled.div`
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
`;
