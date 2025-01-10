import { theme } from "@/styles/theme";
import styled from "styled-components";

export const WrapperBanner = styled.div`
  display: flex;
  flex-direction: column;
  background: ${theme.colors.green};
  padding: 80px 72px 80px 72px;
  border-radius: 50px;
  margin: 40px 60px;

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
  padding: 80px 72px 80px 72px;
  border-radius: 50px;
  margin: 40px 60px;
  align-items: center;

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

export const WrapperBenefits = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${theme.colors.yellow};
  width: ${(props) => (props.isMobile ? "100%" : "50%")};
  min-width: ${(props) => (props.isMobile ? "100%" : "50%")};
  padding: 70px 72px 70px 72px;

  img {
    max-width: ${(props) => (props.isMobile ? "100%" : "90%")};
    height: auto;
  }

  @media (max-width: ${theme.breakpoints.sm}) {
    padding: 40px 22px 40px 22px;
    align-items: center;
  }

  @media (min-width: ${theme.breakpoints.sm}) and (max-width: ${theme
      .breakpoints.md}) {
    padding: 50px 40px 50px 40px;
    align-items: center;
  }
`;

export const WrapperAssistance = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${theme.colors.green};
  width: ${(props) => (props.isMobile ? "100%" : "50%")};
  min-width: ${(props) => (props.isMobile ? "100%" : "50%")};
  padding: 70px 72px 70px 72px;

  img {
    max-width: ${(props) => (props.isMobile ? "100%" : "100%")};
    height: auto;
  }

  @media (max-width: ${theme.breakpoints.sm}) {
    padding: 40px 22px 40px 22px;
    align-items: center;
  }

  @media (min-width: ${theme.breakpoints.sm}) and (max-width: ${theme
      .breakpoints.md}) {
    padding: 50px 40px 50px 40px;
    align-items: center;
  }
`;

export const WrapperQuote = styled.div`
  display: flex;
  flex-direction: column;
  background: ${theme.colors.gray100};
  padding: 80px 90px;
  border-radius: 50px;
  margin: 40px 60px;

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

export const WrapperFaqs = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px 72px;
  border-radius: 50px;
  margin: 20px 60px;
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
