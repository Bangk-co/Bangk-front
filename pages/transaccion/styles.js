import { theme } from "@/styles/theme";
import styled from "styled-components";
export const Wrapper = styled.div`
  display: flex;
  position: relative;
  overflow: hidden;
  flex-direction: column;
  width: 100%;
  height: 100%;
  background-color: ${theme.colors.light};
  padding: 40px 280px 30px 280px;
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  width: 100%;
  padding: ${({ isMobile }) => (isMobile ? "40px 20px" : "40px")};
  border-radius: 24px;
  background-color: ${theme.colors.white};
  box-shadow: 4px 4px 8px 0px rgba(0, 0, 0, 0.08);
  margin-top: 20px;
`;
