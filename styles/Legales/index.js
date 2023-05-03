import styled from "styled-components";
import { theme } from "../theme";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  background: ${theme.colors.light};
  padding: 100px 200px;
  align-items: center;

  @media (max-width: ${theme.breakpoints.sm}) {
    padding: 60px 20px;
  }

  @media (min-width: ${theme.breakpoints.sm}) and (max-width: ${theme
      .breakpoints.md}) {
    padding: 60px 100px;
  }
`;

export const Title = styled.div`
  font-family: Gilroy Bold;
  font-size: ${theme.fonts.size.h1};
  line-height: 48px;
  color: ${theme.colors.green};
  text-align: center;
  margin-bottom: 60px;

  @media (max-width: ${theme.breakpoints.sm}) {
    font-size: ${theme.fonts.size.h5};
    line-height: 25px;
    margin-bottom: 40px;
  }

  @media (min-width: ${theme.breakpoints.sm}) and (max-width: ${theme
      .breakpoints.md}) {
    font-size: ${theme.fonts.size.h2};
    line-height: 40px;
    margin-bottom: 40px;
  }
`;

export const Text = styled.div`
  font-size: ${theme.fonts.size.h6};
  line-height: 22px;
  color: ${theme.colors.green};
  text-align: justify;
  width: 640px;

  @media (max-width: ${theme.breakpoints.sm}) {
    font-size: ${theme.fonts.size.md};
    line-height: 15px;
    width: 300px;
  }

  @media (min-width: ${theme.breakpoints.sm}) and (max-width: ${theme
      .breakpoints.md}) {
    font-size: ${theme.fonts.size.default};
    line-height: 20px;
    width: 580px;
  }
`;

export const BulletPoint = styled.div`
  display: flex;
  width: 5px;
  height: 5px;
  border-radius: 100%;
  background: ${theme.colors.orange};
  align-self: start;
  margin-top: 8px;
`;
