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
  font-family: Gilroy Bold;
  font-size: ${theme.fonts.size.xxl};
  line-height: 60px;
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
  font-family: Gilroy Bold;
  font-size: ${theme.fonts.size.lg};
  line-height: 60px;
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

// BangkData
export const WrapperData = styled.div`
  display: flex;
  flex-direction: column;
  padding: 87px 69.5px 53px 69px;
  background: ${theme.colors.yellow};

  @media (max-width: ${theme.breakpoints.sm}) {
    padding: 20px 17px 0px 26px;
  }

  @media (min-width: ${theme.breakpoints.sm}) and (max-width: ${theme
      .breakpoints.md}) {
    padding: 20px 43px 0px 26px;
  }
`;

export const RowData = styled.div`
  display: flex;
  height: 207.5px;
  width: 100%;

  @media (max-width: ${theme.breakpoints.sm}) {
    height: 91px;
  }

  @media (min-width: ${theme.breakpoints.sm}) and (max-width: ${theme
      .breakpoints.md}) {
    height: 71px;
  }
`;

export const TitleData = styled.div`
  font-family: Gilroy Bold;
  font-size: ${theme.fonts.size.xl};
  line-height: 60px;
  color: ${theme.colors.green};

  @media (max-width: ${theme.breakpoints.sm}) {
    font-size: ${theme.fonts.size.h6};
    line-height: 20px;
  }

  @media (min-width: ${theme.breakpoints.sm}) and (max-width: ${theme
      .breakpoints.md}) {
    font-size: ${theme.fonts.size.h3};
    line-height: 30px;
  }
`;

export const InfoText = styled.div`
  font-size: ${theme.fonts.size.h6};
  line-height: 24px;
  color: ${theme.colors.green};
  width: 523px;
  align-self: center;

  @media (max-width: ${theme.breakpoints.sm}) {
    font-size: ${theme.fonts.size.xxxs};
    line-height: 10px;
    width: 171px;
  }

  @media (min-width: ${theme.breakpoints.sm}) and (max-width: ${theme
      .breakpoints.md}) {
    font-size: ${theme.fonts.size.xxxs};
    line-height: 10px;
    width: 171px;
  }
`;

export const WrapperStar = styled.div`
  display: flex;
  width: 20px;
  height: 20px;
  margin: 70px 158px 0px 341px;

  @media (max-width: ${theme.breakpoints.sm}) {
    width: 9px;
    height: 9px;
    margin: 25px 9px 0px 68px;
  }

  @media (min-width: ${theme.breakpoints.sm}) and (max-width: ${theme
      .breakpoints.md}) {
    width: 11px;
    height: 11px;
    margin: 15px 11px 0px 409px;
  }
`;

export const WrapperBigStar = styled.div`
  display: flex;
  width: 283px;
  height: 283px;
  position: absolute;
  top: 150em;

  @media (max-width: ${theme.breakpoints.sm}) {
    font-size: ${theme.fonts.size.xxxs};
    width: 110px;
    height: 110px;
    top: 105.8em;
  }

  @media (min-width: ${theme.breakpoints.sm}) and (max-width: ${theme
      .breakpoints.md}) {
    width: 110px;
    height: 116px;
    top: 92.2em;
  }
`;

export const LineData = styled.div`
  display: flex;
  width: 100%;
  height: 2px;
  background: ${theme.colors.green};

  @media (max-width: ${theme.breakpoints.sm}) {
    width: 90%;
    height: 1px;
    align-self: self-end;
  }

  @media (min-width: ${theme.breakpoints.sm}) and (max-width: ${theme
      .breakpoints.md}) {
    width: 50%;
    height: 1px;
    align-self: self-end;
  }
`;

//FormInfo
export const WrapperInfo = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  padding: 48px 186px 0px 141px;

  @media (max-width: ${theme.breakpoints.sm}) {
    padding: 20px 47px 0px 31px;
  }

  @media (min-width: ${theme.breakpoints.sm}) and (max-width: ${theme
      .breakpoints.md}) {
    padding: 20px 67px 0px 68px;
  }
`;

export const WrapperInfoText = styled.div`
  display: flex;
  width: 1085px;
  height: 392px;
  background: ${theme.colors.gray};
  border-radius: 50px 50px 0px 0px;
  margin-left: 28px;
  padding: 91px 82px 20px 118px;

  @media (max-width: ${theme.breakpoints.sm}) {
    width: 283px;
    height: min-content;
    border-radius: 21px 20px 0px 0px;
    padding: 38px 29px 20px 15px;
  }

  @media (min-width: ${theme.breakpoints.sm}) and (max-width: ${theme
      .breakpoints.md}) {
    width: 633px;
    height: min-content;
    padding: 101px 40px 23px 33px;
  }
`;

export const WrapperTitle = styled.div`
  display: flex;
  width: 627px;
  height: 92px;
  background: ${theme.colors.orange};
  border-radius: 20px;
  padding: 30px 0px 17px 43px;
  position: absolute;
  top: 80px;
  left: 120px;

  font-family: Gilroy Bold;
  font-size: ${theme.fonts.size.h3};
  line-height: 42px;
  color: ${theme.colors.green};

  @media (max-width: ${theme.breakpoints.sm}) {
    height: 23px;
    width: max-content;
    padding: 7px 8px 4px 15px;
    top: 85px;
    left: 45px;

    font-size: ${theme.fonts.size.xxs};
    line-height: 12px;
  }

  @media (min-width: ${theme.breakpoints.sm}) and (max-width: ${theme
      .breakpoints.md}) {
    height: 47px;
    width: max-content;
    border-radius: 11px;
    padding: 6px 18px 15px 15px;
    top: 125px;
    left: 80px;

    font-size: ${theme.fonts.size.h6};
    line-height: 20px;
  }
`;

export const Text1 = styled.div`
  font-size: ${theme.fonts.size.h6};
  line-height: 24px;
  color: ${theme.colors.green};
  margin-bottom: 60px;

  @media (max-width: ${theme.breakpoints.sm}) {
    font-size: ${theme.fonts.size.sm};
    line-height: 17px;
    width: 179px;
    align-self: center;
    text-align: center;
    margin-bottom: 40px;
  }

  @media (min-width: ${theme.breakpoints.sm}) and (max-width: ${theme
      .breakpoints.md}) {
    font-size: ${theme.fonts.size.h6};
    line-height: 24px;
    width: 320px;
    margin-bottom: 80px;
    margin-left: 40px;
  }
`;

export const Text2 = styled.div`
  font-size: ${theme.fonts.size.default};
  line-height: 20px;
  color: ${theme.colors.green};
  width: 373px;

  @media (max-width: ${theme.breakpoints.sm}) {
    font-size: ${theme.fonts.size.xxs};
    line-height: 12px;
    width: 215px;
  }

  @media (min-width: ${theme.breakpoints.sm}) and (max-width: ${theme
      .breakpoints.md}) {
    font-size: ${theme.fonts.size.sm};
    line-height: 17px;
    width: 252px;
  }
`;

export const WrapperStarInfo = styled.div`
  display: flex;
  width: 24.12px;
  height: 24.13px;

  @media (max-width: ${theme.breakpoints.sm}) {
    width: 11px;
    height: 11px;
  }

  @media (min-width: ${theme.breakpoints.sm}) and (max-width: ${theme
      .breakpoints.md}) {
    width: 11px;
    height: 11px;
  }
`;

export const Text3 = styled.div`
  font-size: ${theme.fonts.size.default};
  line-height: 18px;
  color: ${theme.colors.white};
  width: 203px;
  position: absolute;
  right: 95px;
  bottom: 180px;

  @media (max-width: ${theme.breakpoints.sm}) {
    font-size: ${theme.fonts.size.n};
    line-height: 6px;
    width: 66.57px;
    right: 28px;
    bottom: 87px;
  }

  @media (min-width: ${theme.breakpoints.sm}) and (max-width: ${theme
      .breakpoints.md}) {
    font-size: ${theme.fonts.size.xs};
    line-height: 12px;
    width: 136px;
    right: 165px;
    top: 125px;
  }
`;

export const WrapperImgInfo = styled.div`
  display: flex;
  width: 248.01px;
  height: 139.01px;
  position: absolute;
  right: 70px;
  bottom: 120px;

  @media (max-width: ${theme.breakpoints.sm}) {
    width: 75px;
    height: 42.041px;
    right: 25px;
    bottom: 70px;
  }

  @media (min-width: ${theme.breakpoints.sm}) and (max-width: ${theme
      .breakpoints.md}) {
    width: 168.01px;
    height: 94.01px;
    right: 150px;
    top: 110px;
  }
`;

export const RowInfo = styled.div`
  display: flex;
  flex-direction: row;
`;
