import { theme } from "@/styles/theme";
import { Document, Page } from "react-pdf";
import styled from "styled-components";

export const Card = styled.div`
  display: flex;
  width: 80vw;
  height: 193px;
  padding: 24px;
  border-radius: 10px;
  background: ${theme.colors.white};
`

export const DashedLine = styled.div`
  border-left: 2px dashed ${theme.colors.green500};
  height: 185px;
`

export const WrapperClose = styled.div`
  display: flex;
  width: 100%;
  justify-content: right;
  margin-bottom: 16px;
`

export const StyledDocument = styled(Document)`
  /* Estilos para el componente Document */
  margin-top: 16px;
  padding: 10px;
  max-width: 100%;
  width: 100%;
  max-height: 100%;
`;

export const StyledPage = styled(Page)`
  max-width: 100%;
  width: 100%;
  display: block;
  margin: 0 auto;
  margin-bottom: 20px !important;

  canvas.react-pdf__Page__canvas {
    /* Estilos específicos para el canvas */
    border: 1px solid #ddd; /* Ejemplo: Agregar un borde al canvas */
    width: 100% !important;
    height: auto !important;
  }
`;