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
  padding: 108px 76px 99px 76px;

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
  margin-top: 22px;

  @media (max-width: ${theme.breakpoints.sm}) {
    flex-direction: column;
    gap: 26px;
    align-items: center;
  }

  @media (min-width: ${theme.breakpoints.sm}) and (max-width: ${theme
      .breakpoints.md}) {
    flex-direction: column;
    gap: 21px;
    align-items: center;
  }
`;

export const WrapperCheck = styled.div`
  display: flex;
  gap: 12px;
  margin-top: 32px;

  @media (max-width: ${theme.breakpoints.sm}) {
    gap: 8px;
    margin-top: 22px;
  }

  @media (min-width: ${theme.breakpoints.sm}) and (max-width: ${theme
      .breakpoints.md}) {
    gap: 8px;
    align-self: center;
  }
`;

//HelpYou
export const WrapperHelpYou = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  padding: 0px 70px 99px 80px;

  @media (max-width: ${theme.breakpoints.sm}) {
    flex-direction: column;
    padding: 0px 37px 28px 37px;
  }

  @media (min-width: ${theme.breakpoints.sm}) and (max-width: ${theme
      .breakpoints.md}) {
    flex-direction: column;
    padding: 0px 130px 55px 139px;
  }
`;

export const WrapperText = styled.div`
  display: flex;
  flex-direction: column;
  width: 45%;
  justify-content: space-between;

  @media (max-width: ${theme.breakpoints.sm}) {
    width: 100%;
    justify-content: center;
    gap: 20px;
  }

  @media (min-width: ${theme.breakpoints.sm}) and (max-width: ${theme
      .breakpoints.md}) {
    width: 100%;
    justify-content: center;
    gap: 37px;
  }
`;

export const WrapperAllInfo = styled.div`
  display: flex;
  flex-direction: column;
  width: 55%;

  @media (max-width: ${theme.breakpoints.sm}) {
    width: 100%;
    justify-content: center;
  }

  @media (min-width: ${theme.breakpoints.sm}) and (max-width: ${theme
      .breakpoints.md}) {
    width: 100%;
    justify-content: center;
  }
`;

export const WrapperInfo = styled.div`
  display: flex;
  flex-direction: row;
  width: 674px;
  height: 149px;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1.5px solid ${theme.colors.green};

  @media (max-width: ${theme.breakpoints.sm}) {
    flex-direction: column;
    width: 100%;
    justify-content: center;
    width: 100%;
    height: 77px;
    gap: 12px;
  }

  @media (min-width: ${theme.breakpoints.sm}) and (max-width: ${theme
      .breakpoints.md}) {
    flex-direction: column;
    width: 100%;
    justify-content: center;
    width: 100%;
    height: 110px;
    gap: 25px;
  }
`;

export const WrapperSmallStar = styled.div`
  display: flex;
  width: 19px;
  height: 18px;

  @media (max-width: ${theme.breakpoints.sm}) {
    width: 13px;
    height: 13px;
  }

  @media (min-width: ${theme.breakpoints.sm}) and (max-width: ${theme
      .breakpoints.md}) {
    width: 21px;
    height: 22px;
  }
`;

export const Info = styled.div`
  font-size: ${theme.fonts.size.h6};
  line-height: 24px;
  text-align: right;
  color: ${theme.colors.green};
  width: 346px;

  @media (max-width: ${theme.breakpoints.sm}) {
    font-size: ${theme.fonts.size.xxs};
    line-height: 12px;
    text-align: center;
    width: 173px;
  }

  @media (min-width: ${theme.breakpoints.sm}) and (max-width: ${theme
      .breakpoints.md}) {
    font-size: ${theme.fonts.size.xxs};
    line-height: 12px;
    text-align: center;
    width: 270px;
  }
`;

export const TitleContact = styled.div`
  font-family: Gilroy Medium;
  font-size: ${theme.fonts.size.h2};
  line-height: 60px;
  color: ${theme.colors.green};

  @media (max-width: ${theme.breakpoints.sm}) {
    font-size: ${theme.fonts.size.h6};
    line-height: 60px;
    text-align: center;
  }

  @media (min-width: ${theme.breakpoints.sm}) and (max-width: ${theme
      .breakpoints.md}) {
    font-size: ${theme.fonts.size.h6};
    line-height: 60px;
    text-align: center;
  }
`;

export const TextHelpYou = styled.div`
  display: flex;
  position: relative;
  font-family: Gilroy Bold;
  font-size: ${theme.fonts.size.h2};
  line-height: 40px;
  color: ${theme.colors.green};
  width: 350px;

  @media (max-width: ${theme.breakpoints.sm}) {
    font-size: ${theme.fonts.size.md};
    line-height: 15px;
    text-align: center;
    width: 180px;
    align-self: center;
    margin-bottom: 12px;
  }

  @media (min-width: ${theme.breakpoints.sm}) and (max-width: ${theme
      .breakpoints.md}) {
    font-size: ${theme.fonts.size.md};
    line-height: 15px;
    text-align: center;
    width: 310px;
    align-self: center;
    margin-bottom: 12px;
  }
`;

export const Line = styled.div`
  display: flex;
  position: absolute;
  width: 250px;
  height: 20px;
  left: 0px;
  bottom: 35px;
  background: ${theme.colors.yellow};
  z-index: -1;

  @media (max-width: ${theme.breakpoints.sm}) {
    width: 180px;
    height: 15px;
    bottom: 0;
    left: 50;
  }

  @media (min-width: ${theme.breakpoints.sm}) and (max-width: ${theme
      .breakpoints.md}) {
    width: 190px;
    height: 15px;
    bottom: 0;
    left: 60px;
  }
`;

export const Line2 = styled.div`
  display: flex;
  position: absolute;
  width: 250px;
  height: 20px;
  left: 0px;
  bottom: -5px;
  background: ${theme.colors.yellow};
  z-index: -1;

  @media (max-width: ${theme.breakpoints.sm}) {
    display: none;
  }

  @media (min-width: ${theme.breakpoints.sm}) and (max-width: ${theme
      .breakpoints.md}) {
    display: none;
  }
`;

//ProtectedInformation
export const WrapperInformation = styled.div`
  display: flex;
  flex-direction: column;
  padding: 157px 150px 73px 166px;
  background: ${theme.colors.yellow};
  gap: 29px;

  @media (max-width: ${theme.breakpoints.sm}) {
    padding: 37px 70px 17px 70px;
    gap: 12px;
  }

  @media (min-width: ${theme.breakpoints.sm}) and (max-width: ${theme
      .breakpoints.md}) {
    padding: 49px 157px 46px 164px;
    gap: 22px;
  }
`;

export const Title = styled.div`
  font-family: Gilroy Bold;
  font-size: ${theme.fonts.size.m};
  line-height: 90px;
  text-align: center;
  color: ${theme.colors.green};

  @media (max-width: ${theme.breakpoints.sm}) {
    font-size: ${theme.fonts.size.h6};
    line-height: 20px;
    width: 143px;
    align-self: center;
  }

  @media (min-width: ${theme.breakpoints.sm}) and (max-width: ${theme
      .breakpoints.md}) {
    font-size: ${theme.fonts.size.h6};
    line-height: 20px;
    width: 249px;
    align-self: center;
  }
`;

export const Text = styled.div`
  font-size: ${theme.fonts.size.h6};
  line-height: 24px;
  text-align: center;
  color: ${theme.colors.green};

  @media (max-width: ${theme.breakpoints.sm}) {
    font-size: ${theme.fonts.size.xxs};
    line-height: 10px;
  }

  @media (min-width: ${theme.breakpoints.sm}) and (max-width: ${theme
      .breakpoints.md}) {
    font-size: ${theme.fonts.size.xxs};
    line-height: 10px;
  }
`;

export const Button = styled.button`
  width: 163px !important;
  height: 42.74px;
  background: ${theme.colors.yellow} 0% 0% no-repeat padding-box;
  border-radius: 43px;
  opacity: 1;
  color: ${theme.colors.green};
  font-family: Gilroy Bold;
  font-size: ${theme.fonts.size.h6};
  font-weight: ${theme.fonts.weight.bold};
  border: 1px solid;
  border-color: transparent;
  text-align: center;
  justify-content: center;
  padding: ${({ padding }) => padding || "0px"};
  cursor: pointer;

  @media (max-width: ${theme.breakpoints.sm}) {
    width: min-content !important;
    padding: 0 12px;
  }

  @media (min-width: ${theme.breakpoints.sm}) and (max-width: ${theme
      .breakpoints.md}) {
    width: min-content !important;
    padding: 0 16px;
  }

  && {
    &.ant-btn-link {
      &:hover {
        color: ${({ color }) => color || theme.colors.green};
      }
    }

    &.ant-btn-default {
      &:hover {
        color: ${({ color }) => color || theme.colors.green};
        border: 1px solid;
        border-color: ${({ border }) => border || "transparent"};
      }
    }
  }

  @media (min-width: ${theme.breakpoints.sm}) and (max-width: ${theme
      .breakpoints.md}) {
    width: 88px;
    height: 18px;
    font-size: ${theme.fonts.size.xxs};
  }

  @media (max-width: ${theme.breakpoints.sm}) {
    width: 80.83px;
    height: 16.53px;
    font-size: ${theme.fonts.size.xxs};
  }
`;
