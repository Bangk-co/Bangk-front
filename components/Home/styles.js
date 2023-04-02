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
  top: -50px;
  right: 0px;

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
    margin-left: 30px;
  }
`;

export const Title = styled.div`
  font-size: ${theme.fonts.size.xl};
  font-weight: ${theme.fonts.weight.bold};
  line-height: 72px;
  color: ${(props) => (props.color ? props.color : theme.colors.white)};
  height: 65px;

  @media (min-width: ${theme.breakpoints.sm}) and (max-width: ${theme
      .breakpoints.md}) {
    font-size: ${theme.fonts.size.h1};
    height: 57px;
  }

  @media (max-width: ${theme.breakpoints.sm}) {
    font-size: ${theme.fonts.size.h4};
    height: 60px;
    line-height: 25px;
  }
`;

export const Message = styled.h5`
  color: ${theme.colors.white};
  font-size: ${theme.fonts.size.h5};
  font-weight: ${theme.fonts.weight.regular};
  line-height: 24px;
  margin: 50px 0 30px 0;
  width: 500px;

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
  font-size: ${theme.fonts.size.xl};
  line-height: 60px;
  font-weight: ${theme.fonts.weight.bold};
  color: ${theme.colors.green};

  @media (max-width: ${theme.breakpoints.sm}) {
    font-size: ${theme.fonts.size.h3};
    line-height: 30px;
    margin-bottom: 31px;
  }

  @media (min-width: ${theme.breakpoints.sm}) and (max-width: ${theme
      .breakpoints.md}) {
    font-size: ${theme.fonts.size.h3};
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
    top: 160vh;
    left: 7vw;
  }

  @media (min-width: ${theme.breakpoints.sm}) and (max-width: ${theme
      .breakpoints.md}) {
    width: 18px;
    height: 19px;
    margin: 10.87px 0px 20px 0px;
  }
`;

export const TextWhy = styled.div`
  font-size: ${theme.fonts.size.h5};
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

export const WrapperButton = styled.div`
  display: flex;

  @media (max-width: ${theme.breakpoints.sm}) {
    position: absolute;
    top: 190vh;
    left: 40vw;
  }
`;
