import { theme } from "@/styles/theme";
import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  background: ${theme.colors.light};
  padding: 46px 35px 152px 35px;
  align-items: center;

  @media (max-width: ${theme.breakpoints.sm}) {
    padding: 60px 77px 86px 83px;
  }
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  width: 146.33px;
  height: 231px;
  background: ${theme.colors.green};
  padding: 19px 22px 0px 0px;
  border-radius: 32px;
  align-items: self-end;

  @media (max-width: ${theme.breakpoints.sm}) {
    font-size: ${theme.fonts.size.h4};
    line-height: 29px;
    margin-bottom: 38px;
    padding: 16px 8px 0px 0px;
  }
`;

export const Number = styled.div`
  font-size: ${theme.fonts.size.h1};
  line-height: 56px;
  font-weight: ${theme.fonts.weight.bold};
  text-align: right;
  color: ${theme.colors.orange};
`;

export const WrapperStar = styled.div`
  display: flex;
  width: 100%;
  height: 128px;
  justify-content: right;
  align-items: self-end;
  margin-bottom: 15px;
`;

export const Message = styled.div`
  font-size: ${theme.fonts.size.h5};
  line-height: 23px;
  text-align: right;
  color: ${theme.colors.white};
  margin: 0;
  width: ${(props) => props.width};
`;

export const Message2 = styled.div`
  font-size: ${theme.fonts.size.xxs};
  line-height: 12px;
  text-align: right;
  color: ${theme.colors.orange};
  width: ${(props) => props.width};
  margin: 5px 0px 0px 0px;
`;

export const Title1 = styled.div`
  font-size: ${theme.fonts.size.h5};
  line-height: 23px;
  text-align: center;
  color: ${theme.colors.black};
  margin-bottom: 9px;

  @media (max-width: ${theme.breakpoints.sm}) {
    font-size: ${theme.fonts.size.xs};
    line-height: 13px;
    margin-bottom: 0;
  }
`;

export const Title2 = styled.div`
  font-size: ${theme.fonts.size.lg};
  line-height: 59px;
  font-weight: bold;
  color: ${theme.colors.yellow};
  margin-bottom: 130px;

  @media (max-width: ${theme.breakpoints.sm}) {
    font-size: ${theme.fonts.size.h4};
    line-height: 29px;
    margin-bottom: 38px;
  }
`;

export const WrapperUy = styled.div`
  position: absolute;
  top: 96vh;
  right: 34vw;
  width: 65px;
  height: 42px;
`;
