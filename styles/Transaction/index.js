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
  align-items: center;

  @media (max-width: ${theme.breakpoints.sm}) {
    padding: 40px 20px;
  };
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  width: 100%;
  padding: 43px 40px;
  border-radius: 24px;
  background-color: ${theme.colors.white};
  box-shadow: 4px 4px 8px 0px rgba(0, 0, 0, 0.08);
  margin-top: 20px;

  @media (max-width: ${theme.breakpoints.sm}) {
    padding: 27px;
  };
`;

export const WrapperPayment = styled.div`
  display: flex;
  position: relative;
  overflow: hidden;
  flex-direction: column;
  width: 100%;
  background-color: ${theme.colors.light};
  padding: 40px 92px 145px 92px;

  @media (max-width: ${theme.breakpoints.sm}) {
    padding: 40px 20px;
  };
`;

export const CardPayment = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  width: 100%;
  padding: 37px 47px 47px 47px;
  border-radius: 24px;
  background-color: ${theme.colors.white};
  margin-top: 20px;

  @media (max-width: ${theme.breakpoints.sm}) {
    padding: 27px 37px 37px 37px;
  };
`;

export const Divider = styled.div`
  display: flex;
  width: 100%;
  border: 1px dashed ${theme.colors.gray1200};
  margin-bottom: 30px;
`;

export const WrapperStatus = styled.div`
  display: flex;
  width: 170px;
  height: 35px;
  border-radius: 50px;
  background-color: ${({ background }) => background};
  color: ${({ color }) => color};
  font-family: ${theme.fonts.family.primary};
  font-size: ${theme.fonts.size.h6};
  align-items: center;
  justify-content: center;
  gap: 10px;

  @media (max-width: ${theme.breakpoints.sm}) {
    width: 140px;
    font-size: ${theme.fonts.size.default2};
    gap: 5px;
  };
`;
