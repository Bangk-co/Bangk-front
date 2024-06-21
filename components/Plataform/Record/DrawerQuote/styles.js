import { theme } from "@/styles/theme";
import styled from "styled-components";

export const Card = styled.div`
  height: 224px;
  border-radius: 8px;
  box-shadow: 0px 0px 8px 0px #00000014;
`

export const WrapperData = styled.div`
  display: flex;
  flex-direction: column;
  width: 85%;
  height: 70px;
  justify-content: center;
  align-items: center;
  gap: 4px;
`

export const SaveWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 44px;
  border-radius: 8px;
  background: ${theme.colors.primary25};
  `