import styled from "styled-components";
import { theme } from "@/styles/theme";

export const WrapperCard = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 23px;
  width: 350px;

  @media (max-width: ${theme.breakpoints.sm}) {
    width: 300px;
  }
`;

export const WrapperSearchPackages = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  background-color: ${theme.colors.light4};
  padding: 90px 80px 120px 120px;

  @media (max-width: ${theme.breakpoints.sm}) {
    padding: 90px 80px;
  }
`;

export const SearchCard = styled.div`
  display: flex;
  border-radius: 23px;
  width: 100%;
  background-color: ${({ backgroundColor }) => backgroundColor};
  padding: 10px 10px 15px 30px;

  @media (max-width: ${theme.breakpoints.sm}) {
    height: 293px;
  }
`;

export const WrapperFooter = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  background-color: ${theme.colors.yellow};
  padding: 120px 0px 70px 0px;
`;