import { theme } from "@/styles/theme";
import styled from "styled-components";
import carBangkBackground from "@/assets/img/allRiskBackground.png";

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
