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
