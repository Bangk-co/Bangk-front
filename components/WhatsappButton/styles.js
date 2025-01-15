import { theme } from "@/styles/theme";
import styled from "styled-components";

export const WrapperButton = styled.div`
  display: flex;
  position: fixed;
  bottom: 40px;
  right: 40px;
  width: 60px;
  height: 60px;
  border-radius: 100%;
  background: ${(props) => props.background || theme.colors.whatsapp};
  align-items: center;
  justify-content: center;
  z-index: 5;
`;
