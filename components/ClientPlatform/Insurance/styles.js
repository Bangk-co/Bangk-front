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
