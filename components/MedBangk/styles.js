import { theme } from "@/styles/theme";
import styled from "styled-components";

export const WrapperBanner = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 660px;
  background: ${theme.colors.green1000};
  padding: 50px 50px 50px 90px;

  @media (max-width: ${theme.breakpoints.sm}) {
    padding: 40px 32px 20px 32px;
  }

  @media (min-width: ${theme.breakpoints.sm}) and (max-width: ${theme
      .breakpoints.md}) {
    padding: 50px 40px 0px 40px;
  }
`;

export const WrapperHowSection = styled.div`
  display: flex;
  width: 100%;

  @media (max-width: ${theme.breakpoints.sm}) {
    flex-direction: column;
  }

  @media (min-width: ${theme.breakpoints.sm}) and (max-width: ${theme
      .breakpoints.md}) {
    flex-direction: column;
  }
`;

export const WrapperLeft = styled.div`
  display: flex;
  flex-direction: column;
  width: 55%;
  background-color: ${theme.colors.light};
  padding: 120px 100px;
  justify-content: space-between;

  @media (max-width: ${theme.breakpoints.sm}) {
    width: 100%;
    padding: 80px 50px;
  }

  @media (min-width: ${theme.breakpoints.sm}) and (max-width: ${theme
      .breakpoints.md}) {
    width: 100%;
  }
`;

export const WrapperSummaryPlanContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 100px 200px;

  @media (max-width: ${theme.breakpoints.sm}) {
    padding: 50px 20px;
  }

  @media (min-width: ${theme.breakpoints.sm}) and (max-width: ${theme
      .breakpoints.md}) {
    padding: 50px 70px;
  }
`;

export const WrapperSummaryPlan = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  background-color: ${theme.colors.greeLigth};
  padding: 40px;
  border-radius: 13px;

  @media (max-width: ${theme.breakpoints.sm}) {
    padding: 20px;
  }
`;

export const WrapperServicesTitle = styled.div`
  position: absolute;
  left: 75px;
  top: -14px;
  display: flex;
  background-color: ${theme.colors.green1000};
  padding: 15px 20px 10px 20px;
  border-top-left-radius: 17px;
  border-top-right-radius: 17px;

  color: ${theme.colors.white};
  font-size: ${theme.fonts.size.h5};
  font-family: ${theme.fonts.family.primaryBold};
`;

export const WrapperTitle = styled.div`
  position: absolute;
  right: ${({ right }) => right};
  top: ${({ top }) => top};
  display: flex;
  background-color: ${({ backgroundColor }) => backgroundColor};
  width: 300px;
  height: 54px;
  justify-content: center;
  align-items: center;
  text-align: center;
  border-top-left-radius: 13px;
  border-top-right-radius: 13px;

  color: ${theme.colors.white};
  font-size: ${theme.fonts.size.h5};
  font-family: ${theme.fonts.family.primaryBold};
`;

export const WrapperAmount = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 61px;
  height: 40px;
  background: ${theme.colors.white};
  border-radius: 20px;
  border: 1px solid ${theme.colors.gray1100};

  font-size: ${theme.fonts.size.h6};
  color: ${theme.colors.gray1000};
  font-family: ${theme.fonts.family.primaryBold};

  @media (max-width: ${theme.breakpoints.sm}) {
    width: 30px;
    height: 30px;
    font-size: ${theme.fonts.size.default};
  }
`;

export const Signs = styled.span`
  display: flex;
  width: 66px;
  height: 40px;
  align-items: center;
  justify-content: center;
  border-radius: 50px;
  font-size: ${theme.fonts.size.h5};
  color: ${theme.colors.white};
  cursor: pointer;

  @media (max-width: ${theme.breakpoints.sm}) {
    height: 30px;
  }
`;

export const CardPlan = styled.div`
  background-color: ${({ backgroundColor }) => backgroundColor};
  padding: 50px 35px 30px 35px;
  border-radius: 23px;
  width: 378px;
  border: 1px solid ${theme.colors.gray1100};
  cursor: pointer;

  @media (max-width: ${theme.breakpoints.sm}) {
    width: 90%;
  }

  @media (min-width: ${theme.breakpoints.sm}) and (max-width: ${theme
      .breakpoints.md}) {
    padding: 40px 10px 20px 10px;
  }
`;

export const WrapperIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 68px;
  height: 68px;
  border-radius: 100%;
  background-color: rgba(255, 255, 255, 0.2);
`;

export const WrapperCare = styled.div`
  display: flex;
  flex-direction: column;
  padding: 80px 60px;
  align-items: left;
  background: ${theme.colors.light4};
  position: relative;

  @media (max-width: ${theme.breakpoints.sm}) {
    padding: 40px 20px;
  }
`;

export const OrangeCard = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 400px;
  height: 200px;
  background: ${theme.colors.orange500};
  border-radius: 32px;
  margin-top: 60px;
  cursor: pointer;

  color: ${theme.colors.green};
  font-size: ${theme.fonts.size.h5};

  @media (max-width: ${theme.breakpoints.sm}) {
    width: 100%;
    height: 130px;
    font-size: ${theme.fonts.size.h6};
    margin-top: 30px;
  }

  &:hover {
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
    background-color: ${theme.colors.yellow};
  }
`;
