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
