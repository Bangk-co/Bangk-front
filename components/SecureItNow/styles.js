import { theme } from "@/styles/theme";
import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  position: relative;
  overflow: hidden;
  flex-direction: column;
  width: 100%;
  height: 100%;
  background-color: ${theme.colors.light};
  padding: 40px 280px 30px 280px;

  @media (max-width: ${theme.breakpoints.sm}) {
    padding: 30px;
  }

  @media (min-width: ${theme.breakpoints.sm}) and (max-width: ${theme
      .breakpoints.md}) {
    padding: 40px 100px 30px 100px;
  }
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  width: 100%;
  padding: 40px;
  border-radius: 24px;
  background-color: ${theme.colors.white};
  box-shadow: 4px 4px 8px 0px rgba(0, 0, 0, 0.08);
  margin-top: 40px;
`;

export const WrapperAmount = styled.div`
  display: flex;
  width: 79px;
  height: 40px;
  border-radius: 20px;
  background-color: ${theme.colors.white};
  justify-content: center;
  align-items: center;
  border: 1px solid ${theme.colors.gray1100};

  color: ${theme.colors.gray1000};
  font-family: ${theme.fonts.family.primaryBold};
  font-size: ${theme.fonts.size.h6};
`;

export const Signs = styled.div`
  display: flex;
  width: 56px;
  heigth: 40px;
  align-items: center;
  justify-content: center;
  border: 1px solid ${theme.colors.orange500};
  border-radius: 50px;
  cursor: pointer;
  color: ${theme.colors.orange500};
  font-family: ${theme.fonts.family.primaryBold};
  font-size: ${theme.fonts.size.h5s};
`;

export const WrapperPetInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 77px;
  background-color: ${theme.colors.light};
  border: 1px solid ${theme.colors.gray1300};
  border-radius: 16px;
  padding: 0 16px;
`;

export const WrapperPlan = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: ${theme.colors.blue200};
  color: ${theme.colors.white};
  font-family: ${theme.fonts.family.primary};
  font-size: ${theme.fonts.size.h6};
  width: 155px;
  height: 40px;
  border-radius: 50px;
`;

export const WrapperModal = styled.div`
  display: flex;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 367px;
  height: 371px;
  flex-direction: column;
  padding: 40px 32px 0 32px;
  border-radius: 24px;
  gap: 10px;
  background: ${theme.colors.white};
  box-shadow: 0px 4px 13px 3px #0000000F;
  align-items: center;
`;

export const WrapperIcon = styled.div`
  display: flex;
  width: 52px;
  height: 52px;
  align-items: center;
  justify-content: center;
  background-color: ${theme.colors.yellow700};
  border-radius: 50%;
`;

export const WrapperCodeNumber = styled.div`
  width: 99.25px;
  height: 72px;
  padding: 10px;
  border-radius: 10px;
  gap: 10px;
  background: ${theme.colors.primary25};

  @media (max-width: ${theme.breakpoints.sm}) {
    width: 56px;
    height: 46px;
  }
`

export const InputCode = styled.input`
  width: 100%;
  height: 100%;
  font-size: ${theme.fonts.size.h3};
  font-family: ${theme.fonts.family.primary};
  font-weight: ${theme.fonts.weight.bold};
  text-align: center;
  border: none;
  background-color: transparent;
  outline: none;

  @media (max-width: ${theme.breakpoints.sm}) {
    font-size: ${theme.fonts.size.h5};
  }
`
export const WrapperError = styled.div`
  display: flex;
  align-items: center;
  width: max-content;
  height: 24px;
  padding: 0 4px;
  margin: 10px 0 0 0;
  border-radius: 2px;
  background: ${theme.colors.error300};
`

export const WrapperCounter = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 102px;
  height: 44px;
  padding: 0 8px;
  margin: 50px 0 16px 0;
  border-radius: 5px;
  gap: 8px;
  background: ${theme.colors.primary900}

  @media (max-width: ${theme.breakpoints.sm}) {
    width: 83px;
    height: 36px;
  }
`

export const WrapperReSend = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 549px;
  height: 36px;
  border-radius: 4px;
  margin: 42px 0 0 0;
  background: ${theme.colors.primary50};

  @media (max-width: ${theme.breakpoints.sm}) {
    width: 312px;
    height: 24px;
  }
`