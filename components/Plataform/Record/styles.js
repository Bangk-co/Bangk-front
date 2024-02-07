import { theme } from "@/styles/theme";
import styled from "styled-components";

export const Card = styled.div`
  display: flex;
  align-items: center;
  width: 80vw;
  height: 193px;
  padding: 24px;
  border-radius: 10px;
  background: ${theme.colors.white};
`

export const DashedLine = styled.div`
  border-left: 2px dashed ${theme.colors.green500};
  height: 185px; /* Ajusta la altura de la línea según tus necesidades */
`