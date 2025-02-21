import { theme } from "@/styles/theme";
import styled from "styled-components";

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