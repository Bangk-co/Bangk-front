import { theme } from "@/styles/theme";
import styled from "styled-components";

export const WrapperToast = styled.div`
  display: flex;
  align-items: center;
  width: 502px;
  padding: 15px 16px 15px 12px;
  border-radius: 16px;
  border: 1px solid ${theme.colors.errorToast};
  gap: 12px;
  background: ${theme.colors.error1000};
`

export const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background: ${theme.colors.errorToast};
`