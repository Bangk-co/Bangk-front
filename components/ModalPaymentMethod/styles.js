import { theme } from "@/styles/theme";
import styled from "styled-components";

export const WrapperModal = styled.div`
  display: flex;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 30%;
  height: 391px;
  flex-direction: column;
  padding: 24px 32px;
  border-radius: 20px;
  gap: 10px;
  background: ${theme.colors.white};
  box-shadow: 0px 4px 8px 0px rgba(0, 0, 0, 0.08);
`;
