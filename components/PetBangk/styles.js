import styled from "styled-components";
import { theme } from "@/styles/theme";

export const WrapperBanner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  background: ${theme.colors.blue200};
  padding: 90px 72px 70px 102px;

  @media (max-width: ${theme.breakpoints.sm}) {
    padding: 40px 22px 40px 22px;
  }

  @media (min-width: ${theme.breakpoints.sm}) and (max-width: ${theme
      .breakpoints.md}) {
    padding: 50px 40px 50px 40px;
  }
`;

export const WrapperServices = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  background: ${theme.colors.light};
  padding: 80px 0 160px 0;

  @media (max-width: ${theme.breakpoints.sm}) {
    padding: 60px 0 80px 0;
  }

  @media (min-width: ${theme.breakpoints.sm}) and (max-width: ${theme
      .breakpoints.md}) {
    padding: 70px 0 120px 0;
  }
`;

export const Title = styled.div`
  font-family: Gilroy Bold;
  font-size: ${theme.fonts.size.xxxl};
  font-weight: ${theme.fonts.weight.bold};
  color: ${(props) => (props.color ? props.color : theme.colors.white)};
  height: 75px;

  @media (min-width: ${theme.breakpoints.sm}) and (max-width: ${theme
      .breakpoints.md}) {
    font-size: ${theme.fonts.size.h2};
    height: 47px;
  }

  @media (max-width: ${theme.breakpoints.sm}) {
    font-size: ${theme.fonts.size.h5s};
    height: 25px;
  }
`;

export const SubTitle = styled.div`
  font-family: ${theme.fonts.family.primaryMedium};
  font-size: ${theme.fonts.size.xl};
  font-weight: ${theme.fonts.weight.semibold};
  color: ${(props) => (props.color ? props.color : theme.colors.white)};
  height: 75px;

  @media (min-width: ${theme.breakpoints.sm}) and (max-width: ${theme
      .breakpoints.md}) {
    font-size: ${theme.fonts.size.h2};
    height: 47px;
  }

  @media (max-width: ${theme.breakpoints.sm}) {
    font-size: ${theme.fonts.size.h5};
    height: 25px;
  }
`;

export const Text = styled.div`
  font-size: ${theme.fonts.size.h5};
  color: ${(props) => (props.color ? props.color : theme.colors.white)};
  margin-top: ${(props) => (props.mt ? props.mt : "0px")};
  width: ${(props) => (props.width ? props.width : "80%")};

  @media (min-width: ${theme.breakpoints.sm}) and (max-width: ${theme
      .breakpoints.md}) {
    font-size: ${theme.fonts.size.default};
  }

  @media (max-width: ${theme.breakpoints.sm}) {
    font-size: ${theme.fonts.size.default2};
  }
`;

export const CardServices = styled.div`
  display: flex;
  width: 576px;
  flex-direction: column;
  align-items: center;
  background: ${({ background }) => background};
  border-radius: 32px;
  padding: 45px;

  @media (max-width: ${theme.breakpoints.sm}) {
    padding: 25px;
    width: 90%;
  }
`;

export const WrapperAmount = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 81px;
  height: 40px;
  background: ${theme.colors.white};
  border-radius: 20px;

  font-size: ${theme.fonts.size.h6};
  color: ${theme.colors.gray1000};
  font-family: ${theme.fonts.family.primaryBold};

  @media (max-width: ${theme.breakpoints.sm}) {
    width: 30px;
    height: 30px;
    font-size: ${theme.fonts.size.default};
  }
`;

export const Signs = styled.span`
  display: flex;
  width: 66px;
  height: 40px;
  align-items: center;
  justify-content: center;
  border-radius: 50px;
  font-size: ${theme.fonts.size.h5};
  color: ${theme.colors.white};
  cursor: pointer;

  @media (max-width: ${theme.breakpoints.sm}) {
    height: 30px;
  }
`;

//Reviews

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

export const CommentText = styled.div`
  font-size: ${theme.fonts.size.h2};
  line-height: 48px;
  color: ${theme.colors.neutralGray900};

  @media (min-width: ${theme.breakpoints.sm}) and (max-width: ${theme
      .breakpoints.md}) {
    font-size: ${theme.fonts.size.default};
    line-height: 22px;
  }

  @media (max-width: ${theme.breakpoints.sm}) {
    font-size: ${theme.fonts.size.sm};
    line-height: 12px;
    margin-bottom: 20px;
    text-align: center;
  }
`;

export const Line = styled.div`
  display: flex;
  width: 389px;
  height: 1px;
  background: ${theme.colors.orange};
  margin: 25px 0px 20px 0px;

  @media (min-width: ${theme.breakpoints.sm}) and (max-width: ${theme
      .breakpoints.md}) {
    width: 314px;
    margin: 24px 0px 16px 0px;
  }
`;

export const NameText = styled.div`
  font-family: ${theme.fonts.family.primaryMedium};
  font-size: ${theme.fonts.size.h4};
  line-height: 32px;
  color: ${theme.colors.black};

  @media (min-width: ${theme.breakpoints.sm}) and (max-width: ${theme
      .breakpoints.md}) {
    font-size: ${theme.fonts.size.h6};
    line-height: 24px;
  }

  @media (max-width: ${theme.breakpoints.sm}) {
    font-size: ${theme.fonts.size.sm};
    line-height: 12px;
  }
`;

export const NameText2 = styled.div`
  font-size: ${theme.fonts.size.sm};
  font-weight: ${theme.fonts.weight.light};
  line-height: 12px;
  color: ${theme.colors.neutralGray500};

  @media (min-width: ${theme.breakpoints.sm}) and (max-width: ${theme
      .breakpoints.md}) {
    font-size: ${theme.fonts.size.md};
    line-height: 20px;
  }

  @media (max-width: ${theme.breakpoints.sm}) {
    font-size: ${theme.fonts.size.xs};
    line-height: 10px;
  }
`;

export const RowReviews = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
`;

export const TitleReviews = styled.div`
  font-family: Gilroy Bold;
  font-size: ${theme.fonts.size.lg};
  line-height: 86px;
  color: ${theme.colors.blue200};

  @media (min-width: ${theme.breakpoints.sm}) and (max-width: ${theme
      .breakpoints.md}) {
    font-size: ${theme.fonts.size.h5};
    line-height: 28px;
  }

  @media (max-width: ${theme.breakpoints.sm}) {
    font-size: ${theme.fonts.size.ft};
    line-height: 24px;
    margin-bottom: 15px;
  }
`;

export const SubTitleReviews = styled.div`
  font-size: ${theme.fonts.size.h4};
  line-height: 24px;
  color: ${theme.colors.neutralGray900};

  @media (min-width: ${theme.breakpoints.sm}) and (max-width: ${theme
      .breakpoints.md}) {
    font-size: ${theme.fonts.size.xxs};
    line-height: 12px;
  }

  @media (max-width: ${theme.breakpoints.sm}) {
    font-size: ${theme.fonts.size.sm};
    line-height: 10px;
    margin-bottom: 6px;
  }
`;

export const WrapperAvatar = styled.div`
  display: flex;
  width: 69px;
  height: 69px;
  border-radius: 100%;

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

export const WrapperNameText = styled.div`
  display: flex;
  flex-direction: column;
`;

export const WrapperPerson = styled.div`
  display: flex;
  gap: 40px;
  align-items: center;

  @media (min-width: ${theme.breakpoints.sm}) and (max-width: ${theme
      .breakpoints.md}) {
    gap: 30px;
  }

  @media (max-width: ${theme.breakpoints.sm}) {
    gap: 12px;
  }
`;

export const WrapperComment = styled.div`
  display: flex;
  margin-bottom: 20px;

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

export const WrapperTitleReviews = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 110px 101px 0px 66px;
  margin-bottom: 85px;

  @media (min-width: ${theme.breakpoints.sm}) and (max-width: ${theme
      .breakpoints.md}) {
    padding: 54px 30px 0px 32.23px;
    margin-bottom: 36px;
  }
`;

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

export const OrangeCard = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 400px;
  height: 200px;
  background: ${theme.colors.orange500};
  border-radius: 32px;
  margin-top: 60px;
  cursor: pointer;

  color: ${theme.colors.green};
  font-size: ${theme.fonts.size.h5};

  @media (max-width: ${theme.breakpoints.sm}) {
    width: 100%;
    height: 130px;
    font-size: ${theme.fonts.size.h6};
    margin-top: 30px;
  }

  &:hover {
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
    background-color: ${theme.colors.yellow};
  }
`;
