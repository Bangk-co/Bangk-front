import styled from "styled-components";
import { theme } from "../../../styles/theme";

export const FooterDiv = styled.div`
  display: flex;
  width: 100%;
  height: 52px;
  flex-direction: row;
  position: fixed;
  bottom: 0;
  left: 0;
  background: ${theme.colors.green900};
  border-radius: 8px 8px 0px 0px;
  justify-content: space-around;
  align-items: flex-end;
`;

export const AddDiv = styled.div`
  display: flex;
  width: 48px;
  height: 48px;
  position: fixed;
  bottom: 28px;
  background: ${theme.colors.orange};
  border-radius: 40px;
  justify-content: center;
  align-items: center;
`;
