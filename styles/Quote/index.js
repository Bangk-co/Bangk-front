import styled from "styled-components";
import { theme } from "../theme";

export const WrapperQuote = styled.div`
  display: flex;
  flex-direction: column;
  background: ${theme.colors.green};
  height: max-content;
  padding: 24px 0 0 36px;

  @media (max-width: ${theme.breakpoints.sm}) {
    padding: 24px;
    height: 100vh;
  }
`

export const CardButton = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 270.5px;
  height: 81px;
  padding: 16px;
  border-radius: 8px;
  gap: 5px;
  cursor: pointer;
`

export const WrapperWapp = styled.div`
  display: flex;
  justify-content: end;
  margin: 0 42px 28px 0;

  @media (max-width: ${theme.breakpoints.sm}) {
    margin: 62px 0px 0px 0;
    padding: 0px;
  }
`