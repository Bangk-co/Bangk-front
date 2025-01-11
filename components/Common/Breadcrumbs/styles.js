import { theme } from "@/styles/theme";
import styled from "styled-components";

export const WrapperBreadcrumbs = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 50px;
  background-color: ${theme.colors.gray100};
  padding: 0 110px;
  border: 1px solid ${theme.colors.gray300};

  @media (max-width: ${theme.breakpoints.sm}) {
    padding: 0 55px;
    height: 40px;
  }

  @media (min-width: ${theme.breakpoints.sm}) and (max-width: ${theme
      .breakpoints.md}) {
    padding: 0 55px;
    height: 40px;
  }
`;
