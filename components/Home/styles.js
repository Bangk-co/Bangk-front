import { theme } from "@/styles/theme";
import styled from "styled-components";

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
