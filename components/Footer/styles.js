import { theme } from "@/styles/theme";
import styled from "styled-components";

export const WrapperFooter = styled.div`
  display: flex;
  flex-direction: row;
  background: ${theme.colors.green};
  height: 443px;
  width: 100vw;
  padding: 78.93px 127px 74.07px 66px;
  justify-content: space-between;

  @media (max-width: ${theme.breakpoints.sm}) {
    flex-direction: column;
    align-items: center;
    height: max-content;
    padding: 34px 0px 27px 0px;
  }

  @media (min-width: ${theme.breakpoints.sm}) and (max-width: ${theme
      .breakpoints.md}) {
    height: max-content;
    padding: 23.02px 61px 33.07px 66px;
  }
`;

export const Title = styled.h3`
  color: ${(props) => (props.color ? props.color : theme.colors.white)};
  font-size: ${theme.fonts.size.h3};
  font-weight:   color: ${(props) =>
    props.weight ? props.weight : theme.fonts.weight.bold};
  line-height: 29px;
  text-align: ${(props) => props.align};

  @media (max-width: ${theme.breakpoints.md}) {
    font-size: ${theme.fonts.size.h5};
    line-height: 23px;
  }
`;

export const MessageText = styled.h4`
  color: ${(props) => (props.color ? props.color : theme.colors.white)};
  font-size: ${theme.fonts.size.h4};
  font-weight: ${theme.fonts.weight.medium};
  line-height: 29px;
  text-align: ${(props) => props.align};
  width: 202px;
  margin-top: 40.07px;
  margin-bottom: 71.07px;

  @media (min-width: ${theme.breakpoints.sm}) and (max-width: ${theme
      .breakpoints.md}) {
    font-size: ${theme.fonts.size.default};
    line-height: 21px;
    width: 145px;
    margin-top: 70px;
    margin-bottom: 28.07px;
  }
`;
