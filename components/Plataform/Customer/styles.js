import { theme } from "@/styles/theme";
import styled from "styled-components";

export const WrapperInfo = styled.div`
  display: flex;
  flex-direction: column;
  background: #fafafa;
  border-radius: 16px;
  height: 591px;
  padding: 32px;
  margin: 32px 0 32px 0;
  overflow-y: auto;
  &::-webkit-scrollbar {
    width: 0;
    background: transparent;
  }
`;

export const ApplicationCard = styled.div`
  display: flex;
  border-radius: 16px;
  background: ${theme.colors.white};
  height: 213px;
  width: 815px;
  padding: 24px;
  gap: 16px;
  margin: 0 0 40px 0;
  box-shadow: 0px 0px 8px 0px #00000014;
`;
