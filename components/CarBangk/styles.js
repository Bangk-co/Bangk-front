import { theme } from "@/styles/theme";
import styled from "styled-components";

//Baner
export const WrapperBanner = styled.div`
  display: flex;
  width: 100%;
  background: ${theme.colors.light};
  padding: 42px 72px 78px 45px;

  @media (max-width: ${theme.breakpoints.sm}) {
    padding: 7px 19px 13px 24px;
  }

  @media (min-width: ${theme.breakpoints.sm}) and (max-width: ${theme
      .breakpoints.md}) {
    padding: 35.14px 34px 114.58px 34px;
  }
`;

export const BannerCard = styled.div`
  display: flex;
  width: 100%;
  height: max-content;
  border-radius: 24px;
  background: ${theme.colors.gray};
`;

export const Col1 = styled.div`
  display: flex;
  flex-direction: column;
  padding: 120px 0px 42px 62px;

  @media (max-width: ${theme.breakpoints.sm}) {
    padding: 36px 0px 16px 18px;
  }

  @media (min-width: ${theme.breakpoints.sm}) and (max-width: ${theme
      .breakpoints.md}) {
    padding: 97.86px 0px 27.42px 29px;
  }
`;

export const Col2 = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
`;

export const BannerText = styled.div`
  font-family: Gilroy Bold;
  font-size: ${theme.fonts.size.xxl};
  line-height: 60px;
  color: ${theme.colors.green};
  margin-bottom: 50px;

  @media (max-width: ${theme.breakpoints.sm}) {
    font-size: ${theme.fonts.size.h6};
    line-height: 20px;
    margin-bottom: 20px;
  }

  @media (min-width: ${theme.breakpoints.sm}) and (max-width: ${theme
      .breakpoints.md}) {
    font-size: ${theme.fonts.size.h2};
    line-height: 40px;
    margin-bottom: 30px;
  }
`;
