import styled from "styled-components";
import { theme } from "../theme";

export const Div = styled.div`
  display: flex;
  flex: ${({ flex }) => flex || null};
  align-items: ${({ align }) => align || null};
  justify-content: ${({ justify }) => justify || null};
  gap: ${({ gap }) => gap || null};
  margin: ${({ m }) => m || null};
  padding: ${({ p }) => p || null};
  width: ${({ width }) => width || null};
  height: ${({ height }) => height || null};
  min-width: ${({ minwidth }) => minwidth || null};
  min-height: ${({ minheight }) => minheight || null};
  max-width: ${({ maxwidth }) => maxwidth || null};
  max-height: ${({ maxheight }) => maxheight || null};
  flex-direction: ${({ direction }) => direction || null};
  background: ${({ background }) => background || null};
  color: ${(color) => (color ? color : theme.colors.black)};
  border-radius: ${({ radius }) => radius || null};
`;

export const Text = styled.div`
  color: ${(props) => (props.color ? props.color : theme.colors.black)};
  font-size: ${(props) => (props.size ? props.size : theme.fonts.size.default)};
  font-weight: ${(props) =>
    props.weight ? props.weight : theme.fonts.weight.regular};
  text-align: ${(props) => props.align};
  margin-top: ${(props) => props.mt};
  margin-bottom: ${(props) => props.mb};
  line-height: ${(props) => props.lineHeight || "normal"};
  font-family: ${({ font }) => font || theme.fonts.family.primary};
`;

export const H5 = styled.h6`
  color: ${(props) => (props.color ? props.color : theme.colors.black)};
  font-size: ${theme.fonts.size.h6};
  font-weight: ${theme.fonts.weight.regular};
  line-height: 24px;
  text-align: ${(props) => props.align};
  margin-top: ${(props) => props.mt};
  margin-bottom: ${(props) => props.mb};
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  height: ${({ height }) => height || null};
  width: ${({ width }) => width || null};
  margin: ${({ m }) => m || "0px 0px 0px 0px"};
  padding: ${({ p }) => p || "0px 0px 0px 0px"};
  align-items: ${({ align }) => align || null};
  justify-content: ${({ justify }) => justify || null};
  gap: ${({ gap }) => gap || null};
`;

export const Col = styled.div`
  display: flex;
  flex-direction: column;
  height: ${({ height }) => height || null};
  width: ${({ width }) => width || null};
  margin: ${({ m }) => m || "0px 0px 0px 0px"};
  padding: ${({ p }) => p || "0px 0px 0px 0px"};
  align-items: ${({ align }) => align || null};
  justify-content: ${({ justify }) => justify || null};
  gap: ${({ gap }) => gap || null};
  min-width: ${({ minWidth }) => minWidth || null};
`;
