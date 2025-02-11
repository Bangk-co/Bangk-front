import { theme } from "@/styles/theme";
import styled from "styled-components";

export const WrapperBanner = styled.div`
  display: flex;
  flex-direction: column;
  background: ${theme.colors.green};
  padding: 80px 72px 80px 72px;
  border-radius: 50px;
  margin: 40px 60px;
  justify-content: end;
  height: 600px;
  position: relative;
  overflow: hidden;

  @media (max-width: ${theme.breakpoints.sm}) {
    padding: 40px 22px 40px 22px;
    margin: 20px 30px;
  }

  @media (min-width: ${theme.breakpoints.sm}) and (max-width: ${theme
      .breakpoints.md}) {
    padding: 50px 40px 50px 40px;
    margin: 20px 30px;
  }
`;

export const WrapperCoverage = styled.div`
  display: flex;
  flex-direction: column;
  padding: 80px 60px;
  align-items: left;
  background: ${theme.colors.light4};
  position: relative;
`;

export const WrapperFaqs = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px 72px;
  border-radius: 50px;
  margin: 280px 60px 20px 60px;
  align-items: center;

  @media (max-width: ${theme.breakpoints.sm}) {
    padding: 30px 22px;
    margin: 10px 30px;
  }

  @media (min-width: ${theme.breakpoints.sm}) and (max-width: ${theme
      .breakpoints.md}) {
    padding: 50px 40px 50px 40px;
    margin: 20px 30px;
  }
`;

export const WrapperClause = styled.div`
  display: flex;
  flex-direction: column;
  padding: 40px 72px;
  border-radius: 50px;
  align-items: center;

  @media (max-width: ${theme.breakpoints.sm}) {
    padding: 20px 22px;
    margin: 10px 30px;
  }

  @media (min-width: ${theme.breakpoints.sm}) and (max-width: ${theme
      .breakpoints.md}) {
    padding: 50px 40px 50px 40px;
    margin: 20px 30px;
  }
`;

export const HoverDiv = styled.div`
  width: 380px;
  background-color: ${theme.colors.yellow};
  align-items: center;
  justify-content: center;
  padding: 60px 20px;
  border-radius: 25px;
  gap: 20px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${theme.colors.orange100};
  }

  @media (max-width: ${theme.breakpoints.sm}) {
    width: 300px;
  }
`;
