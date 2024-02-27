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
