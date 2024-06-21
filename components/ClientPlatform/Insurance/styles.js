import { theme } from "@/styles/theme";
import styled from "styled-components";

export const WraperInsurance = styled.div`
  display: flex;
  flex-direction: column;
  align-self: flex-start;
  margin: 0 0 100px 0; //Margen para Footer
`;

export const HeaderInsurace = styled.div`
  display: flex;
  padding: 40px 0 40px 0;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  width: 100%;
`;

export const HeaderInsuranceMobile = styled.div`
  display: flex;
  padding: 24px;
  margin: 0 0 10px 0;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  width: 100%;
  box-shadow: 4px 4px 8px 0px #00000014;
`;

export const WrapperCard = styled.div`
  display: flex;
  flex-direction: row;
  width: 560px;
  height: 279px;
  justify-content: center;
  align-items: center;
  gap: 4px;
  border-radius: 16px;
  background: ${theme.colors.primary25};
  box-shadow: 4px 4px 8px 0px rgba(0, 0, 0, 0.08);

  @media (max-width: ${theme.breakpoints.sm}) and (max-width: ${theme
    .breakpoints.md}) {
      flex-direction: column;
      width: 80%;
      height: 381px;
      margin-top: 24px;
    }
`;
