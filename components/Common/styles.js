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

  @media (min-width: ${theme.breakpoints.sm}) and (max-width: ${theme
      .breakpoints.md}) {
    padding: 119px 90.03px 73px 98.83px;
  }
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  width: 242.98px;
  height: 352.12px;
  background: ${theme.colors.green};
  padding: 19px 22px 0px 0px;
  border-radius: 32px;
  align-items: self-end;

  @media (max-width: ${theme.breakpoints.sm}) {
    height: 146.33px;
    width: 231px;
    margin-bottom: 26.59px;
    padding: 0px;
    justify-content: center;
    align-items: center;
    border-radius: 12px;
  }

  @media (min-width: ${theme.breakpoints.sm}) and (max-width: ${theme
      .breakpoints.md}) {
    height: 180.04px;
    width: 284.23px;
    border-radius: 12px;
    padding: 0px;
    justify-content: center;
    align-items: center;
  }
`;

export const Number = styled.div`
  font-family: Gilroy Bold;
  font-size: ${theme.fonts.size.lg};
  line-height: 56px;
  text-align: right;
  color: ${theme.colors.orange100};

  @media (max-width: ${theme.breakpoints.sm}) {
    font-size: ${theme.fonts.size.h5s};
    line-height: 35px;
  }

  @media (min-width: ${theme.breakpoints.sm}) and (max-width: ${theme
      .breakpoints.md}) {
    font-size: ${theme.fonts.size.h5s};
    line-height: 35px;
  }
`;

export const WrapperStar = styled.div`
  display: flex;
  width: 100%;
  height: 128px;
  justify-content: right;
  align-items: self-end;
  margin-bottom: 15px;

  @media (max-width: ${theme.breakpoints.sm}) {
    height: 60px;
    justify-content: center;
    align-items: center;
    margin-bottom: 0px;
  }

  @media (min-width: ${theme.breakpoints.sm}) and (max-width: ${theme
      .breakpoints.md}) {
    height: 70px;
    justify-content: center;
    align-items: center;
    margin-bottom: 0px;
  }
`;

export const Message = styled.div`
  font-size: ${theme.fonts.size.h5s};
  line-height: 23px;
  text-align: right;
  color: ${theme.colors.white};
  margin: 0;
  width: ${(props) => props.width};

  @media (max-width: ${theme.breakpoints.md}) {
    font-size: ${theme.fonts.size.md};
    line-height: 14px;
    text-align: center;
  }
`;

export const Message2 = styled.div`
  font-size: ${theme.fonts.size.xs};
  line-height: 12px;
  text-align: right;
  color: ${theme.colors.orange};
  width: ${(props) => props.width};
  margin: 5px 0px 0px 0px;
`;

export const Title1 = styled.div`
  font-size: ${theme.fonts.size.ft};
  line-height: 23px;
  text-align: center;
  color: ${theme.colors.black};
  margin-bottom: 9px;

  @media (max-width: ${theme.breakpoints.sm}) {
    font-size: ${theme.fonts.size.md};
    line-height: 13px;
    margin-bottom: 0;
  }

  @media (min-width: ${theme.breakpoints.sm}) and (max-width: ${theme
      .breakpoints.md}) {
    font-size: ${theme.fonts.size.h6};
    line-height: 21px;
    margin-bottom: 7px;
  }
`;

export const Title2 = styled.div`
  position: relative;
  font-family: Gilroy Bold;
  font-size: ${theme.fonts.size.xl};
  line-height: 59px;
  color: ${theme.colors.yellow};
  margin-bottom: 130px;

  @media (max-width: ${theme.breakpoints.sm}) {
    font-size: ${theme.fonts.size.ft};
    line-height: 29px;
    margin-bottom: 38px;
  }

  @media (min-width: ${theme.breakpoints.sm}) and (max-width: ${theme
      .breakpoints.md}) {
    font-size: ${theme.fonts.size.h1};
    line-height: 47px;
    margin-bottom: 57px;
  }
`;

export const WrapperUy = styled.div`
  position: absolute;
  top: -30px;
  right: -40px;
  width: 65px;
  height: 42px;

  @media (max-width: ${theme.breakpoints.sm}) {
    width: 29px;
    height: 19px;
    top: -20px;
    right: -17px;
  }

  @media (min-width: ${theme.breakpoints.sm}) and (max-width: ${theme
      .breakpoints.md}) {
    width: 51px;
    height: 34px;
    top: -25px;
    right: -10px;
  }
`;

export const WrapperTitle = styled.div`
  display: flex;
  flex-direction: column;
  align-self: self-end;
  margin-right: 79px;

  @media (max-width: ${theme.breakpoints.sm}) {
    align-self: center;
    margin-right: 0px;
  }

  @media (min-width: ${theme.breakpoints.sm}) and (max-width: ${theme
      .breakpoints.md}) {
    align-self: center;
    margin-right: 0px;
  }
`;
