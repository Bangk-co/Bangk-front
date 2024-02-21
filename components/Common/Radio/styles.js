import { Radio } from "@mui/material";
import { theme } from "../../../styles/theme";
import styled from "styled-components";

export const CustomRadio = styled(Radio)`
  &.MuiRadio-root {
    color: ${({ radioColor }) => radioColor || theme.colors.neutralGray900};
  }

  &.Mui-checked {
    color: ${theme.colors.orange}!important;
  }
  .MuiTypography-root {
    color: ${theme.colors.neutralGray900};
  }
`;
