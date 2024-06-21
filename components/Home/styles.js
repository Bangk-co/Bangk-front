import { theme } from "@/styles/theme";
import styled from "styled-components";

//Banner
export const Wrapper = styled.div`
  display: flex;
  background: ${theme.colors.green};
  padding: 90px 40px 60px 70px;

  @media (min-width: ${theme.breakpoints.sm}) and (max-width: ${theme
      .breakpoints.md}) {
    padding: 70px 20px 40px 50px;
  }

  @media (max-width: ${theme.breakpoints.sm}) {
    padding: 40px 10px 20px 30px;
  }
`;

export const WrapperStar = styled.div`
  display: flex;
  position: absolute;
  top: -10%;
  right: 0%;

  @media (min-width: ${theme.breakpoints.sm}) and (max-width: ${theme
      .breakpoints.md}) {
    display: none;
  }

  @media (max-width: ${theme.breakpoints.sm}) {
    display: none;
  }
`;

export const WrapperImage = styled.div`
  display: flex;
  width: 100%;
  height: 100%;

  @media (max-width: ${theme.breakpoints.sm}) {
    width: 90%;
    height: 90%;
    margin-left: 10px;
  }
`;

export const Title = styled.div`
  font-family: Gilroy Bold;
  font-size: ${theme.fonts.size.xl};
  line-height: 72px;
  color: ${(props) => (props.color ? props.color : theme.colors.white)};
  height: 65px;

  @media (min-width: ${theme.breakpoints.sm}) and (max-width: ${theme
      .breakpoints.md}) {
    font-size: ${theme.fonts.size.h1};
    height: 57px;
  }

  @media (max-width: ${theme.breakpoints.sm}) {
    font-size: ${theme.fonts.size.h6};
    height: 60px;
    line-height: 25px;
  }
`;

export const Message = styled.h6`
  color: ${theme.colors.white};
  font-size: ${theme.fonts.size.h6};
  font-weight: ${theme.fonts.weight.regular};
  line-height: 24px;
  margin: 50px 0 30px 0;
  width: 520px;

  @media (min-width: ${theme.breakpoints.sm}) and (max-width: ${theme
      .breakpoints.md}) {
    font-size: ${theme.fonts.size.default};
    width: 340px;
    margin: 30px 0 20px 0;
  }

  @media (max-width: ${theme.breakpoints.sm}) {
    font-size: ${theme.fonts.size.xxs};
    line-height: 12px;
    width: 200px;
    margin: 0 0 15px 0;
  }
`;

export const WrapperText = styled.div`
  display: flex;
  width: 60%;
  margin-bottom: 30px;

  @media (min-width: ${theme.breakpoints.sm}) and (max-width: ${theme
      .breakpoints.md}) {
    width: 70%;
  }

  @media (max-width: ${theme.breakpoints.sm}) {
    width: 100%;
    margin-bottom: 15px;
  }
`;

//WhyWeDoIt
export const WrapperWhy = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 747px;

  @media (max-width: ${theme.breakpoints.sm}) {
    flex-direction: column;
    height: 810px;
  }

  @media (min-width: ${theme.breakpoints.sm}) and (max-width: ${theme
      .breakpoints.md}) {
    height: 356px;
  }
`;

export const Col1 = styled.div`
  display: flex;
  width: 50%;
  background: ${theme.colors.green};
  order: 1;

  @media (max-width: ${theme.breakpoints.sm}) {
    width: 100%;
    order: 2;
  }
`;

export const Col2 = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  background: ${theme.colors.white};
  padding: 97px 140px 38.26px 64px;
  order: 2;

  @media (max-width: ${theme.breakpoints.sm}) {
    width: 100%;
    height: 356px;
    padding: 38px 121px 22px 59.27px;
    order: 1;
  }

  @media (min-width: ${theme.breakpoints.sm}) and (max-width: ${theme
      .breakpoints.md}) {
    padding: 19px 150px 19.21px 43px;
  }
`;

export const TitleWhy = styled.div`
  font-family: Gilroy Bold;
  font-size: ${theme.fonts.size.xl};
  line-height: 60px;
  color: ${theme.colors.green};

  @media (max-width: ${theme.breakpoints.sm}) {
    font-size: ${theme.fonts.size.h6};
    line-height: 30px;
    margin-bottom: 31px;
  }

  @media (min-width: ${theme.breakpoints.sm}) and (max-width: ${theme
      .breakpoints.md}) {
    font-size: ${theme.fonts.size.h6};
    line-height: 30px;
  }
`;

export const WrapperStarWhy = styled.div`
  display: flex;
  width: 41px;
  height: 43px;
  margin: 31px 0px 57px 0px;

  @media (max-width: ${theme.breakpoints.sm}) {
    position: absolute;
    width: 19.48px;
    height: 20.44px;
    top: 91.3em;
    left: 1.6em;
  }

  @media (min-width: ${theme.breakpoints.sm}) and (max-width: ${theme
      .breakpoints.md}) {
    width: 18px;
    height: 19px;
    margin: 10.87px 0px 20px 0px;
  }
`;

export const TextWhy = styled.div`
  font-size: ${theme.fonts.size.h6};
  line-height: 24px;
  color: ${theme.colors.green};
  letter-spacing: -0.05em;
  margin-bottom: 30px;

  @media (max-width: ${theme.breakpoints.sm}) {
    font-size: ${theme.fonts.size.xxs};
    line-height: 12px;
  }

  @media (min-width: ${theme.breakpoints.sm}) and (max-width: ${theme
      .breakpoints.md}) {
    font-size: ${theme.fonts.size.xxs};
    line-height: 12px;
  }
`;

//Bangk
export const WrapperBangk = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 900px;

  @media (max-width: ${theme.breakpoints.sm}) {
    flex-direction: column;
    height: max-content;
  }

  @media (min-width: ${theme.breakpoints.sm}) and (max-width: ${theme
      .breakpoints.md}) {
    height: 406px;
  }
`;

export const Col3 = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  background: ${theme.colors.white};
  padding: 92px 154px 48.26px 42px;

  @media (max-width: ${theme.breakpoints.sm}) {
    width: 100%;
    height: 405.66px;
    padding: 29px 130px 15.66px 24px;
  }

  @media (min-width: ${theme.breakpoints.sm}) and (max-width: ${theme
      .breakpoints.md}) {
    padding: 41px 87px 19.66px 81px;
  }
`;

export const Col4 = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  background: ${theme.colors.green};
  padding: 169px 51.49px 168.99px 112px;

  @media (max-width: ${theme.breakpoints.sm}) {
    width: 100%;
    height: 382px;
    padding: 21.08px 14.17px 39.01px 61.83px;
  }

  @media (min-width: ${theme.breakpoints.sm}) and (max-width: ${theme
      .breakpoints.md}) {
    padding: 22.19px 46.29px 41.67px 43.91px;
  }
`;

export const TitleBangk = styled.div`
  font-family: Gilroy Bold;
  font-size: ${theme.fonts.size.xxxl};
  line-height: 80px;
  color: ${theme.colors.green};

  @media (max-width: ${theme.breakpoints.sm}) {
    font-size: ${theme.fonts.size.h6};
    line-height: 30px;
  }

  @media (min-width: ${theme.breakpoints.sm}) and (max-width: ${theme
      .breakpoints.md}) {
    font-size: ${theme.fonts.size.h6};
    line-height: 30px;
  }
`;

export const Text1Bangk = styled.div`
  font-size: ${theme.fonts.size.h6};
  line-height: 36px;
  color: ${theme.colors.green};
  margin: 60px 0px 56px 0px;

  @media (max-width: ${theme.breakpoints.sm}) {
    font-size: ${theme.fonts.size.md};
    line-height: 18px;
    margin: 17px 0px 28px 0px;
  }

  @media (min-width: ${theme.breakpoints.sm}) and (max-width: ${theme
      .breakpoints.md}) {
    font-size: ${theme.fonts.size.md};
    line-height: 18px;
    margin: 21px 0px 8px 0px;
  }
`;

export const Text2Bangk = styled.div`
  font-size: ${theme.fonts.size.h6};
  line-height: 24px;
  color: ${theme.colors.green};
  margin-bottom: 27px;

  @media (max-width: ${theme.breakpoints.sm}) {
    font-size: ${theme.fonts.size.xxs};
    line-height: 11px;
  }

  @media (min-width: ${theme.breakpoints.sm}) and (max-width: ${theme
      .breakpoints.md}) {
    font-size: ${theme.fonts.size.xxs};
    line-height: 11px;
  }
`;

//BlogSection
export const WrapperBlog = styled.div`
  display: flex;
  flex-direction: column;
  height: 835px;
  background: ${theme.colors.light};
  padding: 33px 0px 0px 0px;
  align-items: center;

  @media (max-width: ${theme.breakpoints.sm}) {
    height: max-content;
    padding: 20px 0px 0px 0px;
  }
`;

export const WrapperBlogTablet = styled.div`
  display: flex;
  height: 406px;
  background: ${theme.colors.light};
`;

export const WrapperRow = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;

  @media (max-width: ${theme.breakpoints.sm}) {
    flex-direction: column;
  }
`;

export const Col5 = styled.div`
  display: flex;
  flex-direction: column;
  width: 70%;
  padding: 30px 0px 0px 228px;

  @media (max-width: ${theme.breakpoints.sm}) {
    width: 100%;
    padding: 0;
    align-items: center;
  }
`;

export const Col5Tablet = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  align-items: center;
  justify-content: center;
`;

export const Col6 = styled.div`
  display: flex;
  width: 30%;

  @media (max-width: ${theme.breakpoints.sm}) {
    width: 100%;
    padding: 0;
    justify-content: center;
  }
`;

export const Col6Tablet = styled.div`
  display: flex;
  width: 50%;
  justify-content: center;
  align-items: self-end;
`;

export const TitleBlog = styled.div`
  font-family: Gilroy Bold;
  font-size: ${theme.fonts.size.xxxl};
  line-height: 80px;
  text-align: center;
  color: ${theme.colors.green};
  margin-bottom: 47px;

  @media (max-width: ${theme.breakpoints.sm}) {
    font-size: ${theme.fonts.size.h6};
    line-height: 25px;
    margin-bottom: 7px;
  }

  @media (min-width: ${theme.breakpoints.sm}) and (max-width: ${theme
      .breakpoints.md}) {
    font-size: ${theme.fonts.size.h6};
    line-height: 25px;
    margin-bottom: 14px;
  }
`;

export const Text1Blog = styled.div`
  font-size: ${theme.fonts.size.h3};
  line-height: 43px;
  text-align: center;
  color: ${theme.colors.green};
  margin-bottom: 103px;

  @media (max-width: ${theme.breakpoints.sm}) {
    font-size: ${theme.fonts.size.xxs};
    line-height: 12px;
    margin-bottom: 29px;
  }

  @media (min-width: ${theme.breakpoints.sm}) and (max-width: ${theme
      .breakpoints.md}) {
    font-size: ${theme.fonts.size.xxs};
    line-height: 12px;
    margin-bottom: 40px;
  }
`;

export const Text2Blog = styled.div`
  font-family: Gilroy Bold;
  font-size: ${theme.fonts.size.h4};
  line-height: 36px;
  color: ${theme.colors.orange100};
  margin: 90px 0px 23px 30px;

  @media (max-width: ${theme.breakpoints.sm}) {
    font-size: ${theme.fonts.size.xxs};
    line-height: 12px;
    margin: 0px 0px 11px 0px;
  }

  @media (min-width: ${theme.breakpoints.sm}) and (max-width: ${theme
      .breakpoints.md}) {
    font-size: ${theme.fonts.size.xxs};
    line-height: 12px;
    margin: 0px 0px 9px 0px;
  }
`;

export const WrapperIcon = styled.div`
  display: flex;
  width: 392px;
  height: 110px;

  @media (max-width: ${theme.breakpoints.sm}) {
    width: 92px;
    height: 25.63px;
    margin-bottom: 30.37px;
  }

  @media (min-width: ${theme.breakpoints.sm}) and (max-width: ${theme
      .breakpoints.md}) {
    width: 180.24px;
    height: 50.18px;
  }
`;

export const WrapperPhone = styled.div`
  display: flex;
  width: 293.62px;
  height: 445px;

  @media (max-width: ${theme.breakpoints.sm}) {
    width: 126.37px;
    height: 192px;
  }

  @media (min-width: ${theme.breakpoints.sm}) and (max-width: ${theme
      .breakpoints.md}) {
    width: 190.48px;
    height: 289px;
  }
`;

//Reviews
export const WrapperReviews = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: max-content;

  @media (max-width: ${theme.breakpoints.sm}) {
    padding: 25px 80px 32px 80px;
    align-items: center;
  }
`;

export const WrapperTitleReviews = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 110px 101px 0px 66px;
  margin-bottom: 135px;

  @media (min-width: ${theme.breakpoints.sm}) and (max-width: ${theme
      .breakpoints.md}) {
    padding: 54px 30px 0px 32.23px;
    margin-bottom: 36px;
  }
`;

export const RowReviews = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
`;

export const Col7 = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  padding: 10px 10px 22px 66px;

  @media (min-width: ${theme.breakpoints.sm}) and (max-width: ${theme
      .breakpoints.md}) {
    padding: 10px 75.64px 37px 32.68px;
  }
`;

export const Col8 = styled.div`
  display: flex;
  width: 50%;
`;

export const TitleReviews = styled.div`
  font-family: Gilroy Bold;
  font-size: ${theme.fonts.size.lg};
  line-height: 86px;
  color: ${theme.colors.green};

  @media (min-width: ${theme.breakpoints.sm}) and (max-width: ${theme
      .breakpoints.md}) {
    font-size: ${theme.fonts.size.h5};
    line-height: 28px;
  }

  @media (max-width: ${theme.breakpoints.sm}) {
    font-size: ${theme.fonts.size.h6};
    line-height: 24px;
    margin-bottom: 15px;
  }
`;

export const SubTitleReviews = styled.div`
  font-size: ${theme.fonts.size.h6};
  line-height: 24px;
  color: ${theme.colors.green};
  color: ${theme.colors.green};

  @media (min-width: ${theme.breakpoints.sm}) and (max-width: ${theme
      .breakpoints.md}) {
    font-size: ${theme.fonts.size.xxs};
    line-height: 12px;
  }

  @media (max-width: ${theme.breakpoints.sm}) {
    font-size: ${theme.fonts.size.xxxs};
    line-height: 10px;
    margin-bottom: 6px;
  }
`;

export const WrapperVideo = styled.div`
  display: flex;
  width: 656px;
  height: 422px;
  border-radius: 24px;
  background: ${theme.colors.orange};

  @media (min-width: ${theme.breakpoints.sm}) and (max-width: ${theme
      .breakpoints.md}) {
    width: 309px;
    height: 199px;
    margin-left: 50px;
  }

  @media (max-width: ${theme.breakpoints.sm}) {
    width: 219px;
    height: 142px;
    margin-bottom: 16px;
  }
`;

export const WrapperComment = styled.div`
  display: flex;
  width: 35px;
  height: 31px;

  @media (min-width: ${theme.breakpoints.sm}) and (max-width: ${theme
      .breakpoints.md}) {
    width: 30px;
    height: 26px;
    margin-bottom: 30px;
  }

  @media (max-width: ${theme.breakpoints.sm}) {
    width: 20px;
    height: 17px;
    margin-bottom: 10px;
  }
`;

export const CommentText = styled.div`
  font-size: ${theme.fonts.size.h2};
  line-height: 48px;
  color: ${theme.colors.green};

  @media (min-width: ${theme.breakpoints.sm}) and (max-width: ${theme
      .breakpoints.md}) {
    font-size: ${theme.fonts.size.default};
    line-height: 22px;
  }

  @media (max-width: ${theme.breakpoints.sm}) {
    font-size: ${theme.fonts.size.xxs};
    line-height: 12px;
    margin-bottom: 20px;
    text-align: center;
  }
`;

export const WrapperPerson = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0px;

  @media (min-width: ${theme.breakpoints.sm}) and (max-width: ${theme
      .breakpoints.md}) {
    flex-direction: row;
    gap: 14px;
  }

  @media (max-width: ${theme.breakpoints.sm}) {
    flex-direction: row;
    gap: 12px;
  }
`;

export const WrapperAvatar = styled.div`
  display: flex;
  width: 69px;
  height: 69px;
  border-radius: 100%;
  margin-bottom: 34px;

  @media (min-width: ${theme.breakpoints.sm}) and (max-width: ${theme
      .breakpoints.md}) {
    width: 49px;
    height: 49px;
  }

  @media (max-width: ${theme.breakpoints.sm}) {
    width: 22px;
    height: 22px;
    margin-bottom: 0px;
  }
`;

export const Line = styled.div`
  display: flex;
  width: 389px;
  height: 1px;
  background: ${theme.colors.orange};
  margin: 65px 0px 47px 0px;

  @media (min-width: ${theme.breakpoints.sm}) and (max-width: ${theme
      .breakpoints.md}) {
    width: 314px;
    margin: 24px 0px 16px 0px;
  }
`;

export const WrapperNameText = styled.div`
  display: flex;
  flex-direction: column;
`;

export const NameText = styled.div`
  font-size: ${theme.fonts.size.h5};
  line-height: 30px;
  color: ${theme.colors.black};

  @media (min-width: ${theme.breakpoints.sm}) and (max-width: ${theme
      .breakpoints.md}) {
    font-size: ${theme.fonts.size.h6};
    line-height: 24px;
  }

  @media (max-width: ${theme.breakpoints.sm}) {
    font-size: ${theme.fonts.size.xxs};
    line-height: 12px;
  }
`;

export const NameText2 = styled.div`
  font-size: ${theme.fonts.size.h6};
  line-height: 24px;
  color: ${theme.colors.green};

  @media (min-width: ${theme.breakpoints.sm}) and (max-width: ${theme
      .breakpoints.md}) {
    font-size: ${theme.fonts.size.md};
    line-height: 20px;
  }

  @media (max-width: ${theme.breakpoints.sm}) {
    font-size: ${theme.fonts.size.xxxs};
    line-height: 10px;
  }
`;
