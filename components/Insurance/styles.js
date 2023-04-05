import { theme } from "@/styles/theme";
import styled from "styled-components";

//Baner
export const WrapperBanner = styled.div`
  display: flex;
  height: 738px;
  width: 100%;
  background: ${theme.colors.light};
  padding: 42px 72px 78px 45px;

  @media (max-width: ${theme.breakpoints.sm}) {
    height: 182px;
    padding: 7px 19px 13px 24px;
  }

  @media (min-width: ${theme.breakpoints.sm}) and (max-width: ${theme
      .breakpoints.md}) {
    height: 464px;
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
  padding: 200px 0px 42px 62px;

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
  font-size: ${theme.fonts.size.xxl};
  line-height: 60px;
  font-weight: ${theme.fonts.weight.bold};
  color: ${theme.colors.green};

  @media (max-width: ${theme.breakpoints.sm}) {
    font-size: ${theme.fonts.size.h6};
    line-height: 20px;
  }

  @media (min-width: ${theme.breakpoints.sm}) and (max-width: ${theme
      .breakpoints.md}) {
    font-size: ${theme.fonts.size.h2};
    line-height: 40px;
  }
`;

//Save

export const WrapperSave = styled.div`
  display: flex;
  height: 896px;
  padding: 0px 44px 0px 69px;

  @media (min-width: ${theme.breakpoints.sm}) and (max-width: ${theme
      .breakpoints.md}) {
    height: 742px;
    padding: 0px 0px 0px 42px;
  }

  @media (max-width: ${theme.breakpoints.sm}) {
    height: 356px;
    padding: 24px 0px 22px 14px;
  }
`;

export const Col3 = styled.div`
  display: flex;

  @media (min-width: ${theme.breakpoints.sm}) and (max-width: ${theme
      .breakpoints.md}) {
    margin-top: -20vh;
  }
`;

export const Col4 = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 155px;

  @media (min-width: ${theme.breakpoints.sm}) and (max-width: ${theme
      .breakpoints.md}) {
    padding-top: 89px;
  }

  @media (max-width: ${theme.breakpoints.sm}) {
    padding: 50px 37px 0px 0px;
  }
`;

export const WrapperLogo = styled.div`
  display: flex;
  width: 63px;
  height: 100px;
  margin-bottom: 133px;

  @media (min-width: ${theme.breakpoints.sm}) and (max-width: ${theme
      .breakpoints.md}) {
    width: 52px;
    height: 80.02px;
    position: absolute;
    right: 5vw;
  }
`;

export const TitleSave = styled.div`
  font-size: ${theme.fonts.size.lg};
  line-height: 60px;
  font-weight: ${theme.fonts.weight.bold};
  color: ${theme.colors.green};
  margin-bottom: 100px;
  width: 680px;

  @media (min-width: ${theme.breakpoints.sm}) and (max-width: ${theme
      .breakpoints.md}) {
    font-size: ${theme.fonts.size.h2};
    line-height: 40px;
    width: 314px;
    margin-bottom: 40px;
  }

  @media (max-width: ${theme.breakpoints.sm}) {
    font-size: ${theme.fonts.size.h5};
    line-height: 30px;
    width: 293px;
    text-align: center;
  }
`;

export const MessageSave = styled.div`
  font-size: ${theme.fonts.size.h6};
  line-height: 24px;
  color: ${theme.colors.green};
  width: 760px;

  @media (min-width: ${theme.breakpoints.sm}) and (max-width: ${theme
      .breakpoints.md}) {
    font-size: ${theme.fonts.size.h6};
    line-height: 24px;
    width: 317px;
  }

  @media (max-width: ${theme.breakpoints.sm}) {
    font-size: ${theme.fonts.size.xxs};
    line-height: 12px;
    width: 220px;
  }
`;
