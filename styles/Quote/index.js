import styled from "styled-components";
import { theme } from "../theme";

export const WrapperQuote = styled.div`
  display: flex;
  flex-direction: column;
  background: ${theme.colors.green};
  height: max-content;
  padding: 24px 0 0 36px;

  @media (max-width: ${theme.breakpoints.sm}) {
    padding: 24px 38px 24px 38px;
    height: 100vh;
  }
`

export const Col = styled.div`
  width: 549px;
  margin: ${({ m }) => m || "0px 0px 0px 0px"};
  align-items: ${({ align }) => align || null};

  @media (max-width: ${theme.breakpoints.sm}) {
    width: 100%;
    margin: 0;
    justify-content: ${({ justifyMobile }) => justifyMobile || null};
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

export const WrapperWappCal = styled.div`
  position: absolute;
  top: 610px;
  right: 38px;
`

export const WrapperInsurance = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 26px;
  height: 112px;
  width: 100%;
  background: ${theme.colors.white};
  border-radius: 8px;
  box-shadow: 0px 0px 8px 0px #00000014;
`

export const WrapperCodeNumber = styled.div`
  width: 99.25px;
  height: 72px;
  padding: 10px;
  border-radius: 10px;
  gap: 10px;
  background: ${theme.colors.primary25};

  @media (max-width: ${theme.breakpoints.sm}) {
    width: 66px;
    height: 56px;
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