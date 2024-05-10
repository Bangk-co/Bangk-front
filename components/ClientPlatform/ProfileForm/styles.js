import { theme } from "@/styles/theme";
import styled from "styled-components";

export const HeaderProfile = styled.div`
  display: flex;
  padding: 40px;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  width: 100%;
`;

export const HeaderProfileMobile = styled.div`
  display: flex;
  padding: 24px;
  margin: 0 0 10px 0;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  width: 100%;
  box-shadow: 4px 4px 8px 0px #00000014;
`;

export const WrapperModal = styled.div`
  display: flex;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  flex-direction: column;
  width: 530px;
  height: max-content;
  padding: 24px 32px;
  border-radius: 20px;
  gap: 10px;
  background: ${theme.colors.white};
  box-shadow: 0px 4px 8px 0px rgba(0, 0, 0, 0.08);
`;
