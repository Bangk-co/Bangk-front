import { theme } from "@/styles/theme";
import styled from "styled-components";

export const WraperInsurance = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
  align-self: flex-start;
  padding: 0 0 100px 0; //Margen para Footer
  background: #f0f0f0 0% 0% no-repeat padding-box;
`;

export const HeaderInsuranceDetail = styled.div`
  display: flex;
  flex-direction: column;
  background: ${theme.colors.white};
  border-radius: 0px 0px 25px 25px;
  width: 100%;
  padding: 24px 36px;
  gap: 32px;
`;
