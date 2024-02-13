import { theme } from "@/styles/theme";
import styled from "styled-components";

export const HeaderInfo = styled.div`
  display: flex;
  flex-direction: column;
  background: ${theme.colors.white};
  border-radius: 0px 0px 25px 25px;
  width: 100%;
  min-width: 1290px;
  padding: 32px;
  gap: 32px;
`;
