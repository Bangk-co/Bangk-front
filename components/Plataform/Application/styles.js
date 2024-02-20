import { theme } from "@/styles/theme";
import styled from "styled-components";

export const WrapperPage = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 32px;
  justify-items: start;
  align-items: flex-start;
  background: #fafafa;
  min-height: 100v;
  overflow-y: auto;
  &::-webkit-scrollbar {
    width: 0;
    background: transparent;
  }
`;

export const HeaderInfo = styled.div`
  display: flex;
  flex-direction: column;
  background: ${theme.colors.white};
  border-radius: 0px 0px 25px 25px;
  min-width: 1290px;
  width: 100%;
  padding: 32px;
  gap: 32px;
`;
