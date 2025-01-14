import { theme } from "@/styles/theme";
import styled from "styled-components";

export const WrapperSummaryPlan = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  background-color: ${theme.colors.blue100};
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
  background-color: ${theme.colors.yellow};
  padding: 15px 20px 10px 20px;
  border-top-left-radius: 17px;
  border-top-right-radius: 17px;

  color: ${theme.colors.purple};
  font-size: ${theme.fonts.size.h5};
  font-family: ${theme.fonts.family.primaryBold};
`;

export const WrapperTitle = styled.div`
  position: absolute;
  right: ${({ right }) => right};
  top: ${({ top }) => top};
  display: flex;
  background-color: ${({ backgroundColor }) => backgroundColor};
  width: 150px;
  height: 54px;
  justify-content: center;
  align-items: center;
  text-align: center;
  border-top-left-radius: 13px;
  border-top-right-radius: 13px;

  color: ${theme.colors.white};
  font-size: ${theme.fonts.size.default2};
  font-family: ${theme.fonts.family.primaryBold};
`;

export const CardPlan = styled.div`
  background-color: ${({ backgroundColor }) => backgroundColor};
  padding: 50px 30px 20px 30px;
  border-radius: 23px;

   @media (min-width: ${theme.breakpoints.sm}) and (max-width: ${theme
      .breakpoints.md}) {
    padding: 40px 10px 20px 10px;
  }
`;

export const WrapperAmount = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  background: ${theme.colors.light};
  border-radius: 12%;

  font-size: ${theme.fonts.size.h6};
  color: ${theme.colors.neutralGray600};
  font-weight: ${theme.fonts.weight.bold};
  font-family: ${theme.fonts.family.primaryBold};

  @media (max-width: ${theme.breakpoints.sm}) {
    width: 30px;
    height: 30px;
    font-size: ${theme.fonts.size.default};
  }
`;

export const WrapperPetCare = styled.div`
  display: flex;
  flex-direction: column;
  padding: 80px 60px;
  align-items: left;
  background: ${theme.colors.light4};
  position: relative;
`;

export const WrapperAttendanceSummary = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  background-color: ${theme.colors.blue100};
  padding: 40px;
  border-radius: 13px;

  @media (max-width: ${theme.breakpoints.sm}) {
    padding: 20px;
  }
`;

export const WrapperAssistanceAreas = styled.div`
  display: flex;
  flex-direction: column;
  padding: 80px 60px;
  align-items: left;
  background: ${theme.colors.light4};
  position: relative;
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

  color: ${theme.colors.white};
  font-size: ${theme.fonts.size.h5};

  @media (max-width: ${theme.breakpoints.sm}) {
    width: 100%;
    height: 130px;
    font-size: ${theme.fonts.size.h6};
    margin-top: 30px;
  }
`;
