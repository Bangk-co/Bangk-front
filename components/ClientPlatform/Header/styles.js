import { theme } from "@/styles/theme";
import styled from "styled-components";

export const WrapperHeader = styled.div`
  display: flex;
  background: ${(props) =>
    props.isMobile ? theme.colors.green900 : theme.colors.white};
  height: 72px;
  padding: 20px 31px;
  justify-content: space-between;
  align-items: center;
  box-shadow: 8px 8px 16px 0px #00000014;
  position: relative;
  z-index: 2;
`;

export const WrapperMenu = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  width: 90%;
  height: max-content;
  margin: 0 auto;
  left: 50%;
  transform: translateX(-50%);
  top: 72px;
  padding: 10px 16px;
  border-radius: 0px 0px 8px 8px;
  gap: 10px;
  background: ${theme.colors.white};
  box-shadow: 0px 4px 8px 0px rgba(0, 0, 0, 0.08);
`;

export const WrapperModal = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  width: 100%;
  height: max-content;
  margin: 0 auto;
  left: 50%;
  transform: translateX(-50%);
  bottom: 0px;
  padding: 10px 16px;
  border-radius: 20px 20px 0 0;
  gap: 10px;
  background: ${theme.colors.white};
  box-shadow: 0px 4px 8px 0px rgba(0, 0, 0, 0.08);
`;
