import { theme } from "@/styles/theme";
import styled from "styled-components";

export const HeaderProfile = styled.div`
  display: flex;
  padding: 40px;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  width: 100%;
`;

export const infoCard = styled.div`
  display: flex;
  width: 752px;
  padding: var(--Base-Spacing-2xl, 32px) var(--Base-Spacing-3xl, 40px);
  flex-direction: column;
  align-items: flex-start;
  gap: var(--Base-Spacing-xl, 24px);
`;
