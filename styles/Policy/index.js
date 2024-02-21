import styled from "styled-components";
import { theme } from "../theme";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  background: ${theme.colors.green};
`;

export const WrapperPolicy = styled.div`
  display: flex;
  flex-direction: column;
  background: ${theme.colors.green};
  height: max-content;
  min-height: 100vh;
  padding: 24px 0 24px 36px;

  @media (max-width: ${theme.breakpoints.sm}) {
    padding: 24px 38px 24px 38px;
  }
`

export const ColForm = styled.div`
  width: 549px;
  margin: ${({ m }) => m || "0px 0px 0px 0px"};
  align-items: ${({ align }) => align || null};

  @media (max-width: ${theme.breakpoints.sm}) {
    width: 312px;
    margin: 0;
    justify-content: ${({ justifyMobile }) => justifyMobile || null};
  }
`
export const WrapperStepper = styled.div`
  display: flex;
  height: 80px;
  padding: 24px 40px 24px 40px;
  gap: 16px;
  background: ${theme.colors.white};
  box-shadow: 0px 2px 6px 2px #00000026;
  box-shadow: 0px 1px 2px 0px #0000004D;
  justify-content: space-around;
`
export const WrapperMobileStepper = styled.div`
  display: flex;
  width: 312px;
  height: 72px;
  padding: 8px 16px 8px 16px;
  border-radius: 8px;
  gap: 8px;
  background: ${theme.colors.white};
  box-shadow: 4px 4px 8px 0px #00000014;
  align-items: center;
  margin-top: 10px;
`

export const CardButton = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 177.67px;
  height: 89px;
  padding: 16px;
  border-radius: 8px;
  border: 3px;
  gap: 5px;
  background: ${theme.colors.primary25};
  border: 3px solid ${theme.colors.primary25};
  cursor: pointer;
`