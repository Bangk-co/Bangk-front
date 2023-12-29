import { theme } from "@/styles/theme";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  min-height: 100vh;
  align-items: stretch;
  overflow: hidden;
`;

export const WrapperImage = styled.div`
  display: flex;
  min-width: 686px;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow: hidden;
`;

export const WrapperUpStar = styled.div`
  display: flex;
  position: absolute;
  bottom: 80%;
  left: -10%;
`;
export const WrapperDownStar = styled.div`
  display: flex;
  position: absolute;
  bottom: -30%;
  left: -15%;
`;

export const WrapperRightStar = styled.div`
  display: flex;
  position: absolute;
  bottom: 70%;
  right: -15%;
`;

export const WrapperForm = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: 0 102px;
  box-sizing: border-box;
  background: ${theme.colors.green};
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
