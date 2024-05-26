import { theme } from "@/styles/theme";
import styled from "styled-components";

export const InfoCard = styled.div`
  display: flex;
  flex-direction: column;
  padding: 16px;
  border-radius: 10px;
  box-shadow: 0px 4px 4px 0px #00000040;
  cursor: ${(props) => !props.isExpanded && "pointer"};
  transition: background-color 0.3s ease;
`;

export const CardButton = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 209px;
  height: 89px;
  padding: 16px;
  border-radius: 8px;
  gap: 5px;
  background: ${theme.colors.white};
  cursor: pointer;
`;

export const WrapperDisease = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 28px;
  padding: 8px;
  border-radius: 16px;
  gap: 4px;
  background: ${theme.colors.green900};
`;
