import { theme } from "@/styles/theme";
import styled from "styled-components";
import carBangkBackground from "@/assets/img/carBangkBanner.png";

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

export const WrapperInsurance = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 70px 72px 70px 72px;

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

export const WrapperPadlock = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${theme.colors.green};
  width: ${(props) => (props.isMobile ? "100%" : "50%")};
  padding: 70px 72px 70px 72px;

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

export const WrapperWealth = styled.div`
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
