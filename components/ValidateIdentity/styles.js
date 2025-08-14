import styled from "styled-components";
import { theme } from "@/styles/theme";

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  width: 100%;
  padding: 40px;
  border-radius: 24px;
  background-color: ${theme.colors.white};
  box-shadow: 4px 4px 8px 0px rgba(0, 0, 0, 0.08);
  margin-top: 40px;
`;

export const WrapperCodeNumber = styled.div`
  width: 99.25px;
  height: 72px;
  border-radius: 10px;
  background: ${theme.colors.primary25};

  @media (max-width: ${theme.breakpoints.sm}) {
    width: 56px;
    height: 46px;
  }
`

export const InputCode = styled.input`
  width: 100%;
  height: 100%;
  font-size: ${theme.fonts.size.h3};
  font-family: ${theme.fonts.family.primary};
  font-weight: ${theme.fonts.weight.bold};
  text-align: center;
  border: none;
  background-color: transparent;
  outline: none;

  @media (max-width: ${theme.breakpoints.sm}) {
    font-size: ${theme.fonts.size.h5};
  }
`
export const WrapperError = styled.div`
  display: flex;
  align-items: center;
  width: max-content;
  height: 24px;
  padding: 0 4px;
  margin: 10px 0 0 0;
  border-radius: 2px;
  background: ${theme.colors.error300};
`

export const WrapperCounter = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 102px;
  height: 44px;
  padding: 0 8px;
  margin: 50px 0 16px 0;
  border-radius: 5px;
  gap: 8px;
  background: ${theme.colors.primary900}

  @media (max-width: ${theme.breakpoints.sm}) {
    width: 83px;
    height: 36px;
  }
`

export const WrapperReSend = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 549px;
  height: 36px;
  border-radius: 4px;
  margin: 42px 0 0 0;
  background: ${theme.colors.primary50};

  @media (max-width: ${theme.breakpoints.sm}) {
    width: 312px;
    height: 24px;
  }
`