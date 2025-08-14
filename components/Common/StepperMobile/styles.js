import styled from "styled-components";
import { theme } from "@/styles/theme";

export const WrapperMobileStepper = styled.div`
  display: flex;
  width: 100%;
  height: 72px;
  padding: 8px 16px 8px 16px;
  border-radius: 8px;
  gap: 8px;
  background: ${theme.colors.white};
  box-shadow: 4px 4px 8px 0px #00000014;
  align-items: center;
  margin-top: 10px;
`