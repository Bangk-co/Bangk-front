import { theme } from "@/styles/theme";
import styled from "styled-components";
import { Document, Page } from "react-pdf";
import { height } from "@mui/system";

export const WraperInsurance = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
  align-self: flex-start;
  padding: 0 0 100px 0;
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

export const Card = styled.div`
  display: flex;
  width: 80vw;
  min-height: 106px;
  padding: 24px;
  border-radius: 10px;
  background: ${theme.colors.white};
`;

export const DashedLine = styled.div`
  border-left: ${(props) => `2px dashed ${props.color}`};
  height: ${(props) => `${props.heightRef}px`};
`;

export const WrapperClose = styled.div`
  display: flex;
  width: 100%;
  justify-content: right;
  margin-bottom: 16px;
`;

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
