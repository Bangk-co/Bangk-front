import { theme } from "@/styles/theme";
import React from "react";
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

