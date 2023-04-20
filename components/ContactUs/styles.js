import { theme } from "@/styles/theme";
import styled from "styled-components";

//Banner
export const WrapperBanner = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  background: ${theme.colors.green};
  padding: 223px 0px 175px 0px;
  justify-content: center;
  align-items: center;

  @media (max-width: ${theme.breakpoints.sm}) {
    padding: 43px 0px 35px 0px;
  }

  @media (min-width: ${theme.breakpoints.sm}) and (max-width: ${theme
      .breakpoints.md}) {
    padding: 85px 0px 69px 0px;
  }
`;

export const WrapperHalfStar = styled.div`
  display: flex;
  position: absolute;
  top: 0;
  right: 0;

  @media (max-width: ${theme.breakpoints.sm}) {
    width: 39px;
    height: 43px;
  }

  @media (min-width: ${theme.breakpoints.sm}) and (max-width: ${theme
      .breakpoints.md}) {
    width: 77px;
    height: 89.82px;
  }
`;

export const TitleBanner = styled.div`
  font-family: Gilroy Bold;
  font-size: ${theme.fonts.size.m};
  line-height: 105px;
  color: ${theme.colors.white};
  margin-bottom: 7px;

  @media (max-width: ${theme.breakpoints.sm}) {
    font-size: ${theme.fonts.size.h6};
    line-height: 23px;
    margin-bottom: 23px;
  }

  @media (min-width: ${theme.breakpoints.sm}) and (max-width: ${theme
      .breakpoints.md}) {
    font-size: ${theme.fonts.size.h4};
    line-height: 35px;
    margin-bottom: 28px;
  }
`;

export const TextBanner = styled.div`
  font-size: ${theme.fonts.size.md};
  line-height: 15px;
  color: ${theme.colors.white};
  width: 561px;
  text-align: center;
  margin-bottom: 68px;

  @media (max-width: ${theme.breakpoints.sm}) {
    font-size: ${theme.fonts.size.xxxs};
    line-height: 8px;
    width: 196px;
    margin-bottom: 15px;
  }

  @media (min-width: ${theme.breakpoints.sm}) and (max-width: ${theme
      .breakpoints.md}) {
    font-size: ${theme.fonts.size.md};
    line-height: 15px;
    width: 385px;
    margin-bottom: 45px;
  }
`;

export const WrapperSocial = styled.div`
  display: flex;
  gap: 34.5px;
  align-items: center;

  @media (max-width: ${theme.breakpoints.sm}) {
    gap: 9.21px;
  }

  @media (min-width: ${theme.breakpoints.sm}) and (max-width: ${theme
      .breakpoints.md}) {
    gap: 18.16px;
  }
`;

export const WrapperMail = styled.div`
  display: flex;
  width: 57.11px;
  height: 39.83px;

  @media (max-width: ${theme.breakpoints.sm}) {
    width: 15.2px;
    height: 11.02px;
  }

  @media (min-width: ${theme.breakpoints.sm}) and (max-width: ${theme
      .breakpoints.md}) {
    width: 29.99px;
    height: 22.04px;
  }
`;

export const WrapperWhatsapp = styled.div`
  display: flex;
  width: 47.02px;
  height: 47.01px;

  @media (max-width: ${theme.breakpoints.sm}) {
    width: 12.52px;
    height: 13px;
  }

  @media (min-width: ${theme.breakpoints.sm}) and (max-width: ${theme
      .breakpoints.md}) {
    width: 24.69px;
    height: 26px;
  }
`;

//ContactForm
export const WrapperContactForm = styled.div`
  display: flex;
  width: 100%;
  padding: 108px 76px;

  @media (max-width: ${theme.breakpoints.sm}) {
    padding: 35px 49px;
  }

  @media (min-width: ${theme.breakpoints.sm}) and (max-width: ${theme
      .breakpoints.md}) {
    padding: 72px 141px 60px 162px;
  }
`;

export const CardForm = styled.div`
  display: flex;
  background: ${theme.colors.light3};
  border-radius: 32px;

  @media (max-width: ${theme.breakpoints.sm}) {
    width: 100%;
    border-radius: 13px;
  }

  @media (min-width: ${theme.breakpoints.sm}) and (max-width: ${theme
      .breakpoints.md}) {
    width: 100%;
    border-radius: 13px;
  }
`;

export const WrapperForm = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  padding: 69px 47px 52px 47px;

  @media (max-width: ${theme.breakpoints.sm}) {
    width: 100%;
    justify-content: center;
    padding: 14px 16px 29px 16px;
  }

  @media (min-width: ${theme.breakpoints.sm}) and (max-width: ${theme
      .breakpoints.md}) {
    width: 100%;
    justify-content: center;
    padding: 14px 25px 67px 25px;
  }
`;

export const WrapperIcons = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  padding: 43px 0px 0px 0px;
  justify-content: center;

  @media (max-width: ${theme.breakpoints.sm}) {
    display: none;
  }

  @media (min-width: ${theme.breakpoints.sm}) and (max-width: ${theme
      .breakpoints.md}) {
    display: none;
  }
`;

export const WrapperPadlock = styled.div`
  display: flex;
  width: 80%;
  height: 80%;
  align-self: center;
`;

export const WrapperStar = styled.div`
  display: flex;
  width: 66px;
  height: 66px;
  align-self: self-end;
  margin-right: 88px;
`;

export const TitleForm = styled.div`
  font-size: ${theme.fonts.size.md};
  line-height: 15px;
  color: ${theme.colors.green};
  margin-bottom: 19px;

  @media (max-width: ${theme.breakpoints.sm}) {
    font-size: ${theme.fonts.size.xxs};
    line-height: 9px;
    margin-bottom: 8px;
    text-align: center;
    align-self: center;
    width: 205px;
  }

  @media (min-width: ${theme.breakpoints.sm}) and (max-width: ${theme
      .breakpoints.md}) {
    margin-bottom: 15px;
    width: 301px;
    text-align: center;
    align-self: center;
  }
`;

export const Label = styled.div`
  font-size: ${theme.fonts.size.md};
  line-height: 15px;
  color: ${theme.colors.green};
  margin: 28px 0px 9px 0px;

  @media (max-width: ${theme.breakpoints.sm}) {
    font-size: ${theme.fonts.size.xxs};
    line-height: 9px;
    margin: 10px 0px 4px 0px;
  }

  @media (min-width: ${theme.breakpoints.sm}) and (max-width: ${theme
      .breakpoints.md}) {
    font-size: ${theme.fonts.size.xs};
    line-height: 12px;
    margin: 12px 0px 3px 0px;
  }
`;

export const TextForm = styled.div`
  font-size: ${theme.fonts.size.md};
  line-height: 15px;
  color: ${theme.colors.green};
  width: 530px;

  @media (max-width: ${theme.breakpoints.sm}) {
    font-size: ${theme.fonts.size.xxs};
    line-height: 9px;
    width: 230px;
    text-align: center;
  }

  @media (min-width: ${theme.breakpoints.sm}) and (max-width: ${theme
      .breakpoints.md}) {
    font-size: ${theme.fonts.size.xs};
    line-height: 12px;
    width: 301px;
    text-align: center;
  }
`;

export const WrapperFooter = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 22px;
  margin-top: 32px;

  @media (max-width: ${theme.breakpoints.sm}) {
    flex-direction: column;
    gap: 26px;
    margin-top: 13px;
    align-items: center;
  }

  @media (min-width: ${theme.breakpoints.sm}) and (max-width: ${theme
      .breakpoints.md}) {
    flex-direction: column;
    gap: 21px;
    margin-top: 21px;
    align-items: center;
  }
`;
