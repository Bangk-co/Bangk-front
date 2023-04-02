import { theme } from "@/styles/theme";
import styled from "styled-components";

export const WrapperHeader = styled.div`
  display: flex;
  background: ${theme.colors.white};
  height: 141px;
  width: 100vw;
  padding: 0px 45px;
  justify-content: space-between;
  align-items: center;

  @media (max-width: ${theme.breakpoints.sm}) {
    height: 69px;
    padding: 0px 24px;
  }

  @media (min-width: ${theme.breakpoints.sm}) and (max-width: ${theme
      .breakpoints.md}) {
    height: 93px;
    padding: 0px 24px;
  }
`;
