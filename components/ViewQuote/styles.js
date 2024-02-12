import styled from "styled-components";
import { theme } from "../../styles/theme";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  background: ${theme.colors.green};
`;

export const WrapperQuote = styled.div`
  display: flex;
  flex-direction: column;
  height: ${({ isMobile }) => (isMobile ? "100%" : "1024px")};
`;

export const WrapperImage = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  position: relative;
  overflow: hidden;
`;

export const WrapperInfo = styled.div`
  min-width: 620px;
  padding: ${({ p }) => p || "0px 0px 0px 0px"};
  maring: ${({ m }) => m || "0px 0px 0px 0px"};
  align-items: ${({ align }) => align || null};
  gap: 24px;
  background-color: ${theme.colors.green700};

  @media (max-width: ${theme.breakpoints.sm}) {
    min-width: 100%;
    margin: 0;
    justify-content: ${({ justifyMobile }) => justifyMobile || null};
    padding: 20px 20px 40px 20px;
  }
`;

export const WrapperWapp = styled.div`
  display: flex;
  margin: 0 42px 28px 0;

  @media (max-width: ${theme.breakpoints.sm}) {
    margin: 62px 0px 0px 0;
    padding: 0px;
  }
`;

export const WrapperWappCal = styled.div`
  position: absolute;
  top: 612px;
  right: 38px;
`;

export const WrapperInsurance = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 26px;
  height: 239px;
  width: 100%;
  background: ${theme.colors.white};
  border-radius: 8px;
  box-shadow: 0px 0px 8px 0px #00000014;
`;

export const WrapperModal = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  width: 578px;
  height: max-content;
  top: 50vh;
  left: 50vw;
  transform: translate(-50%, -50%);
  padding: 24px 32px;
  border-radius: 20px;
  gap: 32px;
  background: ${theme.colors.white};

  @media (max-width: ${theme.breakpoints.sm}) {
    width: 100% !important;
    top: auto; // Nuevo
    bottom: ${({ isMobile }) => (isMobile ? "0" : "auto")}; // Nuevo
    transform: translate(-50%, 0);
    border-radius: ${({ isMobile }) => isMobile && "20px 20px 0 0"}
`;
