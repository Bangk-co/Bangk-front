import { theme } from "@/styles/theme";
import styled from "styled-components";
import carBangkBackground from "@/assets/img/allRiskBackground.png";
import benefitsBackground from "@/assets/img/benefitsBG.png";

//Baner
const backgroundImageUrl = carBangkBackground.src;
export const WrapperBanner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  background: ${theme.colors.light};
  padding: 70px 72px 70px 72px;
  background-image: url(${backgroundImageUrl});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

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

export const WrapperCoverage = styled.div`
  display: flex;
  flex-direction: column;
  padding: 40px 72px;
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

const backgroundImageUrlBenefits = benefitsBackground.src;
export const WrapperBenefits = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${theme.colors.yellow};
  width: ${(props) => (props.isMobile ? "100%" : "50%")};
  min-width: ${(props) => (props.isMobile ? "100%" : "50%")};
  padding: 70px 72px 70px 72px;
  background-image: url(${backgroundImageUrlBenefits});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

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
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: ${theme.colors.green};
  width: ${(props) => (props.isMobile ? "100%" : "50%")};
  min-width: ${(props) => (props.isMobile ? "100%" : "50%")};
  padding: 70px o;
  gap: 40px;

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
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
  }

  @media (max-width: ${theme.breakpoints.sm}) {
    width: 300px;
  }
`;
