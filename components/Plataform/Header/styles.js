import { theme } from "@/styles/theme";
import styled from "styled-components";

export const WrapperHeader = styled.div`
  display: flex;
  background: ${theme.colors.white};
  height: 72px;
  padding: 20px 31px;
  justify-content: space-between;
  align-items: center;
  box-shadow: 8px 8px 16px 0px #00000014;
  position: relative;
  z-index: 2;
`;
