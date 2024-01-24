import { theme } from "@/styles/theme";
import styled from "styled-components";

export const WrapperModal = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  width: 450px;
  height: 724px;
  top: 50vh;
  left: 50vw;
  transform: translate(-50%, -50%);
  padding: 24px 32px 24px 32px;
  border-radius: 20px;
  gap: 32px;
  background: ${theme.colors.white};

  @media (max-width: ${theme.breakpoints.sm}) {
    width: 100% !important;
  }
`

export const WrapperInfo = styled.div`
  display: flex;
  width: 100%;
  height: 512px;
  max-height: 512px;
  overflow-y: auto;

  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-track {
    background-color: #D9D9D9;
    border-radius: 24px;
  }

  &::-webkit-scrollbar-track:hover {
    background-color: #D9D9D9;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #D9D9D9;
    border-radius: 24px;
    border: 8px solid ${theme.colors.secondary};
  }
  &::-webkit-scrollbar-thumb:hover {
    background-color: transparent;
  }
  &::-webkit-scrollbar-button {
    display: none;
  }
`