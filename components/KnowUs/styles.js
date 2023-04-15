import styled from "styled-components";
import { theme } from "../../styles/theme";

//Banner
export const WrapperBanner = styled.div`
  display: flex;
  background-image: url(${(props) => props.image.src});
  background-size: cover;
  background-position: center;
  padding: 183px 420px 137px 75px;
  height: 664px;

  @media (max-width: ${theme.breakpoints.sm}) {
    padding: 61px 128px 42px 24px;
    height: 180px;
  }

  @media (min-width: ${theme.breakpoints.sm}) and (max-width: ${theme
      .breakpoints.md}) {
    padding: 96px 395px 63px 45px;
    height: 344px;
  }
`;

export const Text = styled.div`
  font-size: ${theme.fonts.size.h2};
  line-height: 50px;
  color: ${theme.colors.white};

  @media (max-width: ${theme.breakpoints.sm}) {
    font-size: ${theme.fonts.size.xxs};
    line-height: 10px;
  }

  @media (min-width: ${theme.breakpoints.sm}) and (max-width: ${theme
      .breakpoints.md}) {
    font-size: ${theme.fonts.size.h6};
    line-height: 20px;
  }
`;

//KnowUsSection
export const WrapperKnowUs = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  padding: 151px 181px 56px 55px;
  justify-content: space-between;

  @media (max-width: ${theme.breakpoints.sm}) {
    padding: 19px 56px;
    justify-content: center;
  }

  @media (min-width: ${theme.breakpoints.sm}) and (max-width: ${theme
      .breakpoints.md}) {
    flex-direction: column;
    padding: 29px 134px 50px 134px;
    justify-content: center;
  }
`;

export const WrapperText = styled.div`
  display: flex;
  flex-direction: column;
  width: 70%;
  order: 1;

  @media (max-width: ${theme.breakpoints.sm}) {
    width: 100%;
    align-items: center;
  }

  @media (min-width: ${theme.breakpoints.sm}) and (max-width: ${theme
      .breakpoints.md}) {
    width: 100%;
    align-items: center;
    order: 2;
  }
`;

export const WrapperLogo = styled.div`
  display: flex;
  width: 293px;
  height: 465px;
  order: 2;

  @media (max-width: ${theme.breakpoints.sm}) {
    display: none;
  }

  @media (min-width: ${theme.breakpoints.sm}) and (max-width: ${theme
      .breakpoints.md}) {
    width: 27px;
    height: 43px;
    order: 1;
    align-self: center;
  }
`;

export const TitleKnowUs = styled.div`
  font-family: Gilroy Bold;
  font-size: ${theme.fonts.size.xl};
  line-height: 70px;
  color: ${theme.colors.green};
  padding: 6px 0px 125px 2px;

  @media (max-width: ${theme.breakpoints.sm}) {
    font-size: ${theme.fonts.size.h6};
    line-height: 20px;
    padding: 0px;
    margin-bottom: 25px;
  }

  @media (min-width: ${theme.breakpoints.sm}) and (max-width: ${theme
      .breakpoints.md}) {
    font-size: ${theme.fonts.size.h2};
    line-height: 70px;
    padding: 0px;
    margin-bottom: 30px;
  }
`;

export const WrapperStar = styled.div`
  display: none;

  @media (max-width: ${theme.breakpoints.sm}) {
    display: flex;
    width: 15px;
    height: 15px;
    margin-bottom: 7px;
  }

  @media (min-width: ${theme.breakpoints.sm}) and (max-width: ${theme
      .breakpoints.md}) {
    display: none;
  }
`;

export const TextKnowUs = styled.div`
  font-size: ${theme.fonts.size.h6};
  line-height: 24px;
  color: ${theme.colors.green};
  width: 701px;

  @media (max-width: ${theme.breakpoints.sm}) {
    font-size: ${theme.fonts.size.xxs};
    line-height: 11px;
    width: 310px;
    text-align: center;
  }

  @media (min-width: ${theme.breakpoints.sm}) and (max-width: ${theme
      .breakpoints.md}) {
    font-size: ${theme.fonts.size.xs};
    line-height: 14px;
    width: 500px;
    text-align: center;
  }
`;

//OurGain
export const WrapperOurain = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  padding: 73.26px 70px 0px 142.63px;
  background: ${theme.colors.yellow};
  justify-content: space-between;

  @media (min-width: ${theme.breakpoints.sm}) and (max-width: ${theme
      .breakpoints.md}) {
    padding: 51px 0px 0px 59px;
    justify-content: center;
  }

  @media (max-width: ${theme.breakpoints.sm}) {
    font-size: ${theme.fonts.size.xxs};
    flex-direction: column;
    padding: 20px 0px 0px 0px;
  }
`;

export const WrapperPhone = styled.div`
  display: flex;
  width: 246.75px;
  height: 373.93px;
  align-self: self-end;
  order: 1;

  @media (min-width: ${theme.breakpoints.sm}) and (max-width: ${theme
      .breakpoints.md}) {
    width: 170.38px;
    height: 258.19px;
  }

  @media (max-width: ${theme.breakpoints.sm}) {
    font-size: ${theme.fonts.size.xxs};
    width: 120px;
    height: 142px;
    order: 2;
    align-self: center;
  }
`;

export const WrapperTextOurGain = styled.div`
  display: flex;
  flex-direction: column;
  width: 70%;
  align-items: self-end;
  margin-bottom: 80.19px;
  order: 2;

  @media (min-width: ${theme.breakpoints.sm}) and (max-width: ${theme
      .breakpoints.md}) {
    align-items: center;
    margin-bottom: 0px;
  }

  @media (max-width: ${theme.breakpoints.sm}) {
    font-size: ${theme.fonts.size.xxs};
    width: 100%;
    align-items: center;
    margin-bottom: 0px;
    order: 1;
  }
`;

export const TitleOurGain = styled.div`
  font-family: Gilroy Bold;
  font-size: ${theme.fonts.size.lg};
  line-height: 60px;
  color: ${theme.colors.green};
  margin-bottom: 27px;

  @media (min-width: ${theme.breakpoints.sm}) and (max-width: ${theme
      .breakpoints.md}) {
    font-size: ${theme.fonts.size.h4};
    line-height: 30px;
    margin-top: 16px;
  }

  @media (max-width: ${theme.breakpoints.sm}) {
    font-size: ${theme.fonts.size.h6};
    line-height: 60px;
    margin-bottom: 7px;
  }
`;

export const WrapperStarOurGain = styled.div`
  display: flex;
  width: 53px;
  height: 50.05px;
  margin-bottom: 37.95px;

  @media (min-width: ${theme.breakpoints.sm}) and (max-width: ${theme
      .breakpoints.md}) {
    width: 29px;
    height: 27px;
    margin-bottom: 25px;
  }

  @media (max-width: ${theme.breakpoints.sm}) {
    display: none;
  }
`;

export const TextOurGain = styled.div`
  font-size: ${theme.fonts.size.h6};
  line-height: 20px;
  color: ${theme.colors.green};
  text-align: -webkit-right;
  width: 580px;

  @media (min-width: ${theme.breakpoints.sm}) and (max-width: ${theme
      .breakpoints.md}) {
    font-size: ${theme.fonts.size.sm};
    line-height: 16px;
    text-align: center;
    width: 280px;
  }

  @media (max-width: ${theme.breakpoints.sm}) {
    font-size: ${theme.fonts.size.xxs};
    line-height: 12px;
    text-align: center;
    width: 276px;
    margin-bottom: 5px;
  }
`;
