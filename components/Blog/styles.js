import { theme } from "@/styles/theme";
import Image from "next/image";
import styled from "styled-components";

//Banner
export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 75px 99px 10px 93px;

  @media (min-width: ${theme.breakpoints.sm}) and (max-width: ${theme
      .breakpoints.md}) {
    padding: 44px 24px;
  }

  @media (max-width: ${theme.breakpoints.sm}) {
    padding: 11px 17px 0px 22px;
  }
`;

export const WrapperButtons = styled.div`
  display: flex;
  flex-direction: row;
  gap: 12px;
  order: 1;
  margin-bottom: 66px;

  @media (min-width: ${theme.breakpoints.sm}) and (max-width: ${theme
      .breakpoints.md}) {
    gap: 10.73px;
    margin-bottom: 19.51px;
  }

  @media (max-width: ${theme.breakpoints.sm}) {
    flex-direction: column;
    order: 2;
    gap: 10px;
    height: 156px;
    justify-content: center;
    align-items: center;
    margin-bottom: 0px;
  }
`;

export const WrapperBanner = styled.div`
  display: flex;
  position: relative;
  background: ${theme.colors.yellow};
  border-radius: 16px;
  padding: 50.22px 47.12px 0px 73.23px;
  order: 2;

  @media (min-width: ${theme.breakpoints.sm}) and (max-width: ${theme
      .breakpoints.md}) {
    padding: 34.15px 27.32px 0px 41.95px;
  }

  @media (max-width: ${theme.breakpoints.sm}) {
    order: 1;
    padding: 7px 11.46px 0px 11px;
  }
`;

export const Title = styled.div`
  font-family: Gilroy Bold;
  font-size: ${theme.fonts.size.xxl};
  line-height: 70px;
  color: ${theme.colors.white};
  margin-bottom: 32px;

  @media (min-width: ${theme.breakpoints.sm}) and (max-width: ${theme
      .breakpoints.md}) {
    font-size: ${theme.fonts.size.h4};
    line-height: 28px;
    margin-bottom: 20.49px;
  }

  @media (max-width: ${theme.breakpoints.sm}) {
    font-size: ${theme.fonts.size.default};
    line-height: 19px;
    margin-bottom: 5px;
    margin-top: 17px;
  }
`;

export const Subtitle = styled.div`
  font-family: Gilroy Bold;
  font-size: ${theme.fonts.size.h3};
  line-height: 38px;
  color: ${theme.colors.white};

  @media (min-width: ${theme.breakpoints.sm}) and (max-width: ${theme
      .breakpoints.md}) {
    font-size: ${theme.fonts.size.h6};
    line-height: 23px;
  }

  @media (max-width: ${theme.breakpoints.sm}) {
    font-size: ${theme.fonts.size.xs};
    line-height: 14px;
    margin-bottom: 5px;
  }
`;

export const DayHour = styled.div`
  font-family: Gilroy Bold;
  font-size: ${theme.fonts.size.h3};
  line-height: 38px;
  color: ${theme.colors.white};

  @media (max-width: ${theme.breakpoints.sm}) {
    font-size: ${theme.fonts.size.xxxs};
    line-height: 9px;
  }
`;

export const Name = styled.div`
  font-family: Gilroy Bold;
  font-size: ${theme.fonts.size.lg};
  line-height: 60px;
  color: ${theme.colors.green};
  margin-bottom: 21px;

  @media (min-width: ${theme.breakpoints.sm}) and (max-width: ${theme
      .breakpoints.md}) {
    font-size: ${theme.fonts.size.h6};
    line-height: 23px;
    margin-bottom: 32px;
  }

  @media (max-width: ${theme.breakpoints.sm}) {
    font-size: ${theme.fonts.size.xs};
    line-height: 12px;
    margin-bottom: 2px;
  }
`;

export const Position = styled.div`
  font-size: ${theme.fonts.size.xs};
  line-height: 14px;
  color: ${theme.colors.white};
  margin-bottom: 70px;
  width: 47.66px;

  @media (min-width: ${theme.breakpoints.sm}) and (max-width: ${theme
      .breakpoints.md}) {
    width: 72.2px;
    margin-bottom: 17.8px;
  }

  @media (max-width: ${theme.breakpoints.sm}) {
    font-size: ${theme.fonts.size.xxs};
    line-height: 12px;
    width: 50px;
    margin-bottom: 5px;
  }
`;

export const WrapperDate = styled.div`
  display: flex;
  gap: 79px;

  @media (min-width: ${theme.breakpoints.sm}) and (max-width: ${theme
      .breakpoints.md}) {
    gap: 21.46px;
  }

  @media (max-width: ${theme.breakpoints.sm}) {
    gap: 6px;
  }
`;

export const Date = styled.div`
  font-family: Gilroy Medium;
  font-size: ${theme.fonts.size.xs};
  line-height: 14px;
  color: ${theme.colors.green};
  margin-top: 22px;
  margin-bottom: 62.77px;

  @media (min-width: ${theme.breakpoints.sm}) and (max-width: ${theme
      .breakpoints.md}) {
    margin-top: 21.15px;
    margin-bottom: 32.51px;
  }

  @media (max-width: ${theme.breakpoints.sm}) {
    font-size: ${theme.fonts.size.xxxs};
    line-height: 9px;
    margin-top: 8px;
    margin-bottom: 13px;
  }
`;

export const WrapperStar = styled.div`
  display: flex;
  position: absolute;
  top: 67.9px;
  right: 47.13px;
  width: 35.55px;
  height: 35.6px;

  @media (min-width: ${theme.breakpoints.sm}) and (max-width: ${theme
      .breakpoints.md}) {
    width: 20.49px;
    height: 20.49px;
    top: 39.02px;
    right: 27.32px;
  }

  @media (max-width: ${theme.breakpoints.sm}) {
    width: 16.54px;
    height: 16.58px;
    top: 15px;
    right: 11.46px;
  }
`;

export const WrapperLogo = styled.div`
  display: flex;
  position: absolute;
  bottom: 47.73px;
  right: 47.12px;
  width: 201.51px;

  @media (min-width: ${theme.breakpoints.sm}) and (max-width: ${theme
      .breakpoints.md}) {
    bottom: 27.32px;
    right: 27.32px;
    width: 116.09px;
  }

  @media (max-width: ${theme.breakpoints.sm}) {
    bottom: 10.58px;
    right: 17.25px;
    width: 79.1px;
  }
`;

export const ManImage = styled.div`
  display: flex;
  position: relative;
  width: 496.01px;
  height: 496.53px;
  padding: 0;
  margin: 0;

  @media (min-width: ${theme.breakpoints.sm}) and (max-width: ${theme
      .breakpoints.md}) {
    width: 285.85px;
    height: 285.85px;
    margin-left: 50.49px;
  }

  @media (max-width: ${theme.breakpoints.sm}) {
    width: 139.71px;
    height: 140px;
  }
`;

export const Circle1 = styled.div`
  display: flex;
  position: absolute;
  width: 20px;
  height: 20px;
  border-radius: 100%;
  top: 215px;
  right: 120px;
  background: ${theme.colors.green};

  @media (min-width: ${theme.breakpoints.sm}) and (max-width: ${theme
      .breakpoints.md}) {
    width: 11.71px;
    height: 11.71px;
    top: 130px;
    right: 55px;
  }

  @media (max-width: ${theme.breakpoints.sm}) {
    width: 7.94px;
    height: 7.94px;
    top: 68px;
    right: 28px;
  }
`;

export const Circle2 = styled.div`
  display: flex;
  position: absolute;
  width: 31px;
  height: 31px;
  border-radius: 100%;
  top: 190px;
  right: 85px;
  background: ${theme.colors.green};

  @media (min-width: ${theme.breakpoints.sm}) and (max-width: ${theme
      .breakpoints.md}) {
    width: 18.54px;
    height: 18.54px;
    top: 115px;
    right: 35px;
  }

  @media (max-width: ${theme.breakpoints.sm}) {
    width: 12.36px;
    height: 12.36px;
    top: 60px;
    right: 15px;
  }
`;

export const WrapperCloud = styled.div`
  display: flex;
  position: absolute;
  width: 195px;
  height: 125px;
  top: 80px;
  right: -115px;

  @media (min-width: ${theme.breakpoints.sm}) and (max-width: ${theme
      .breakpoints.md}) {
    width: 112.2px;
    height: 72.2px;
    top: 58px;
    right: -80px;
  }

  @media (max-width: ${theme.breakpoints.sm}) {
    width: 78.58px;
    height: 50.44px;
    top: 20px;
    right: -65px;
  }
`;

export const CloudText = styled.div`
  position: absolute;
  top: 110px;
  right: -80px;
  font-family: Gilroy Heavy;
  font-size: ${theme.fonts.size.h4};
  line-height: 35px;
  text-align: center;
  color: ${theme.colors.white};

  @media (min-width: ${theme.breakpoints.sm}) and (max-width: ${theme
      .breakpoints.md}) {
    top: 70px;
    right: -65px;
    font-size: ${theme.fonts.size.h6};
    line-height: 23px;
  }

  @media (max-width: ${theme.breakpoints.sm}) {
    top: 30px;
    right: -52px;
    font-size: ${theme.fonts.size.xs};
    line-height: 14px;
  }
`;

//Cards
export const WrapperCards = styled.div`
  display: flex;
  flex-direction: column;
  padding: 72.23px 99px 52px 93px;

  @media (min-width: ${theme.breakpoints.sm}) and (max-width: ${theme
      .breakpoints.md}) {
    padding: 69.49px 102px 64px 120px;
  }

  @media (max-width: ${theme.breakpoints.sm}) {
    padding: 0px 63px 10px 66px;
  }
`;

export const WrapperCard = styled.div`
  display: flex;
  flex-direction: column;
  height: 395px;
  position: relative;
  border-radius: 12px;
  cursor: pointer;

  @media (min-width: ${theme.breakpoints.sm}) and (max-width: ${theme
      .breakpoints.md}) {
    height: 163px;
  }

  @media (max-width: ${theme.breakpoints.sm}) {
    height: 164px;
    width: 258px;
  }
`;

export const WrapperButtonsCard = styled.div`
  display: flex;
  gap: 15px;
  position: absolute;
  top: -20px;
  left: 25px;
  z-index: 2;

  @media (min-width: ${theme.breakpoints.sm}) and (max-width: ${theme
      .breakpoints.md}) {
    gap: 5px;
    top: -10px;
    left: 10px;
  }

  @media (max-width: ${theme.breakpoints.sm}) {
    gap: 3px;
    top: -8px;
    left: 10px;
  }
`;

export const WrapperImage = styled.div`
  display: flex;
  position: relative;
  height: 60%;
  background-image: url(${(props) => props.image.src});
  background-size: cover;
  background-position: center center;
  border-radius: 12px 12px 0px 0px;
`;

export const WrapperMessage = styled.div`
  display: flex;
  position: absolute;
  width: 110px;
  top: 30px;
  right: 30px;

  @media (min-width: ${theme.breakpoints.sm}) and (max-width: ${theme
      .breakpoints.md}) {
    width: 50px;
    top: 15px;
    right: 15px;
  }

  @media (max-width: ${theme.breakpoints.sm}) {
    width: 50px;
    top: 15px;
    right: 15px;
  }
`;

export const BlogNumber = styled.div`
  position: absolute;
  font-family: Gilroy Bold;
  font-size: ${theme.fonts.size.default};
  color: ${theme.colors.white};
  top: 36px;
  right: 42px;

  @media (min-width: ${theme.breakpoints.sm}) and (max-width: ${theme
      .breakpoints.md}) {
    font-size: ${theme.fonts.size.xxxs};
    top: 18px;
    right: 22px;
  }

  @media (max-width: ${theme.breakpoints.sm}) {
    font-size: ${theme.fonts.size.xxxs};
    top: 18px;
    right: 22px;
  }
`;

export const WrapperFooter = styled.div`
  display: flex;
  height: 40%;
  background: ${theme.colors.green};
  border-radius: 0px 0px 12px 12px;
  justify-content: space-between;
  align-items: end;
  padding: 0px 40px 40px 40px;

  @media (min-width: ${theme.breakpoints.sm}) and (max-width: ${theme
      .breakpoints.md}) {
    padding: 0px 15px 15px 15px;
  }

  @media (max-width: ${theme.breakpoints.sm}) {
    padding: 0px 15px 15px 15px;
  }
`;

export const TitleCard = styled.div`
  position: absolute;
  bottom: 130px;
  left: 0;
  right: 0;
  margin: 0 auto;
  font-family: Gilroy Bold;
  font-size: ${theme.fonts.size.lg};
  line-height: 60px;
  color: ${theme.colors.white};
  text-align: center;

  @media (min-width: ${theme.breakpoints.sm}) and (max-width: ${theme
      .breakpoints.md}) {
    top: 88px;
    font-size: ${theme.fonts.size.h6};
    line-height: 20px;
  }

  @media (max-width: ${theme.breakpoints.sm}) {
    top: 90px;
    font-size: ${theme.fonts.size.default};
    line-height: 18px;
  }
`;

export const TextCard = styled.div`
  font-size: ${theme.fonts.size.default};
  line-height: 20px;

  @media (min-width: ${theme.breakpoints.sm}) and (max-width: ${theme
      .breakpoints.md}) {
    font-size: ${theme.fonts.size.xxs};
    line-height: 12px;
  }

  @media (max-width: ${theme.breakpoints.sm}) {
    font-size: ${theme.fonts.size.xxs};
    line-height: 12px;
  }
`;

export const WrapperCardLogo = styled.div`
  display: flex;
  width: 102px;

  @media (min-width: ${theme.breakpoints.sm}) and (max-width: ${theme
      .breakpoints.md}) {
    width: 52px;
  }

  @media (max-width: ${theme.breakpoints.sm}) {
    width: 42px;
  }
`;

//BlogDetail

//Top
export const WrapperTop = styled.div`
  display: flex;
  height: 210px;
  background: ${theme.colors.green};
  padding: 105px 0px 18px 0px;
  justify-content: center;
  align-items: center;

  @media (min-width: ${theme.breakpoints.sm}) and (max-width: ${theme
      .breakpoints.md}) {
    height: 139px;
    padding: 60px 0px 30px 0px;
  }

  @media (max-width: ${theme.breakpoints.sm}) {
    height: 55px;
    padding: 22px 0px 8px 0px;
  }
`;

export const TitleDetail = styled.div`
  font-family: Gilroy Bold;
  font-size: ${theme.fonts.size.xl};
  line-height: 70px;
  text-align: center;
  color: ${theme.colors.white};

  @media (min-width: ${theme.breakpoints.sm}) and (max-width: ${theme
      .breakpoints.md}) {
    font-size: ${theme.fonts.size.h2};
    line-height: 47px;
  }

  @media (max-width: ${theme.breakpoints.sm}) {
    font-size: ${theme.fonts.size.h6};
    line-height: 23px;
  }
`;

export const WrapperBlogImage = styled.div`
  display: flex;
  height: 498px;
  background-image: url(${(props) => props?.image?.src});
  background-size: cover;
  background-position: center center;

  @media (min-width: ${theme.breakpoints.sm}) and (max-width: ${theme
      .breakpoints.md}) {
    height: 330px;
  }

  @media (max-width: ${theme.breakpoints.sm}) {
    height: 131px;
  }
`;

export const WrapperWriterLogo = styled.div`
  display: flex;
  flex-direction: row;
  padding: 105px 123px 105px 93px;
  align-items: center;
  justify-content: space-between;

  @media (min-width: ${theme.breakpoints.sm}) and (max-width: ${theme
      .breakpoints.md}) {
    padding: 33px 54px 40px 55px;
    align-items: start;
  }
`;

export const WrapperWriter = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;

  @media (min-width: ${theme.breakpoints.sm}) and (max-width: ${theme
      .breakpoints.md}) {
    gap: 12px;
  }
`;

export const WriterName = styled.div`
  font-family: Gilroy Medium;
  font-size: ${theme.fonts.size.h4};
  line-height: 35px;
  width: 500px;
  color: ${theme.colors.green};

  @media (max-width: ${theme.breakpoints.sm}) {
    font-family: Gilroy;
    font-size: ${theme.fonts.size.xxs};
    line-height: 12px;
    color: ${theme.colors.black};
    margin-bottom: 20px;
    width: 180px;
  }
`;

export const WriterPosition = styled.div`
  font-size: ${theme.fonts.size.h6};
  line-height: 23px;
  color: ${theme.colors.green};
  width: 357px;

  @media (min-width: ${theme.breakpoints.sm}) and (max-width: ${theme
      .breakpoints.md}) {
    font-size: ${theme.fonts.size.md};
    line-height: 18px;
    width: 189px;
  }

  @media (max-width: ${theme.breakpoints.sm}) {
    font-size: ${theme.fonts.size.xxs};
    line-height: 12px;
    color: ${theme.colors.black};
    margin-bottom: 9px;
    width: 95px;
  }
`;

export const WriterPosition2 = styled.div`
  font-size: ${theme.fonts.size.h6};
  line-height: 23px;
  width: 170px;
  margin-bottom: 50px;
  align-items: start;

  @media (min-width: ${theme.breakpoints.sm}) and (max-width: ${theme
      .breakpoints.md}) {
    font-size: ${theme.fonts.size.h6};
    line-height: 23px;
    width: 170px;
  }

  @media (max-width: ${theme.breakpoints.sm}) {
    font-family: Gilroy Medium;
    font-size: ${theme.fonts.size.xxs};
    line-height: 12px;
    color: ${theme.colors.black};
    margin-bottom: 46px;
    width: 216px;
  }
`;

export const WrapperGreenStar = styled.div`
  display: flex;
  position: relative;
  width: 163px;
  height: 162px;

  @media (min-width: ${theme.breakpoints.sm}) and (max-width: ${theme
      .breakpoints.md}) {
    width: 88px;
    height: 86px;
  }

  @media (max-width: ${theme.breakpoints.sm}) {
    width: 47px;
    height: 47px;
  }
`;

export const WrapperSingleLogo = styled.div`
  display: flex;
  position: absolute;
  top: 32px;
  right: 40px;
  width: 82.6px;

  @media (min-width: ${theme.breakpoints.sm}) and (max-width: ${theme
      .breakpoints.md}) {
    width: 42.6px;
    top: 20px;
    right: 22px;
  }

  @media (max-width: ${theme.breakpoints.sm}) {
    width: 22.28px;
    top: 12px;
    right: 12px;
  }
`;

export const WrapperInfo = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0px 69px 30px 88px;
`;

export const WrapperRow = styled.div`
  display: flex;
  padding: 50px 208px 177px 85px;

  @media (min-width: ${theme.breakpoints.sm}) and (max-width: ${theme
      .breakpoints.md}) {
    padding: 0px 96px 73px 55px;
  }
`;

export const WrapperText = styled.div`
  display: flex;
  flex-direction: column;
  width: 70%;

  @media (min-width: ${theme.breakpoints.sm}) and (max-width: ${theme
      .breakpoints.md}) {
    width: 60%;
  }
`;

export const WrapperIcon = styled.div`
  display: flex;
  flex-direction: column;
  width: 30%;
  margin: 0;
  padding: 0;
  align-self: self-start;

  @media (min-width: ${theme.breakpoints.sm}) and (max-width: ${theme
      .breakpoints.md}) {
    width: 35%;
  }
`;

export const BlogText = styled.div`
  font-size: ${theme.fonts.size.h2};
  line-height: 47px;
  color: ${theme.colors.green};

  @media (min-width: ${theme.breakpoints.sm}) and (max-width: ${theme
      .breakpoints.md}) {
    font-size: ${theme.fonts.size.default};
    line-height: 21px;
  }

  @media (max-width: ${theme.breakpoints.sm}) {
    font-size: ${theme.fonts.size.xs};
    line-height: 14px;
  }
`;

export const HelpText = styled.div`
  position: relative;
  font-family: Gilroy Bold;
  font-size: ${theme.fonts.size.h2};
  line-height: 47px;
  text-align: right;
  color: ${theme.colors.green};
  width: 389px;
  align-self: self-end;
  margin-top: 80px;

  @media (min-width: ${theme.breakpoints.sm}) and (max-width: ${theme
      .breakpoints.md}) {
    font-size: ${theme.fonts.size.h4};
    line-height: 35px;
    margin-top: 47px;
    align-self: center;
    width: 367px;
  }

  @media (max-width: ${theme.breakpoints.sm}) {
    font-size: ${theme.fonts.size.default};
    line-height: 21px;
    width: 170px;
    margin-top: 0px;
  }
`;

export const YellowLine = styled.div`
  display: flex;
  position: absolute;
  bottom: -5px;
  background: ${theme.colors.yellow};
  border: 1.53px solid ${theme.colors.yellow};
  width: 408px;
  height: 36px;
  z-index: -1;

  @media (min-width: ${theme.breakpoints.sm}) and (max-width: ${theme
      .breakpoints.md}) {
    width: 297px;
    height: 25.85px;
    bottom: 5px;
    right: -5px;
  }

  @media (max-width: ${theme.breakpoints.sm}) {
    width: 177.53px;
    height: 14.87px;
    bottom: 5px;
    right: -5px;
  }
`;
