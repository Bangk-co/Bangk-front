import { theme } from "@/styles/theme";
import styled from "styled-components";

export const SaveSuccess = styled.div`
  display: flex;
  align-items: center;
  width: 331px;
  height: 54px;
  padding: 12px 16px 12px 16px;
  border-radius: 10px;
  border: 1px solid ${theme.colors.green900};
  gap: 12px;
  background: ${(props) => props.background || theme.colors.primary50};
`;
