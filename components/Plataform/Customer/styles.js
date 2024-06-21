import { theme } from "@/styles/theme";
import styled from "styled-components";

export const WrapperInfo = styled.div`
  display: flex;
  flex-direction: column;
  background: #fafafa;
  border-radius: 16px;
  height: 591px;
  width: 879px;
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

export const DocumentCard = styled.div`
  display: flex;
  border-radius: 8px;
  background: linear-gradient(0deg, #fafafa, #fafafa),
    linear-gradient(
      0deg,
      ${theme.colors.neutralGray500},
      ${theme.colors.neutralGray500}
    );
  width: 395.5px;
  min-height: 80px;
  padding: 8px 16px;
  box-shadow: 0px 2px 6px 2px #00000026, 0px 1px 2px 0px #0000004d;
  border: 1px solid ${theme.colors.neutralGray500};
  align-items: center;
  justify-items: space-between;
`;
