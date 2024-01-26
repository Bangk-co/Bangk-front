const { theme } = require("@/styles/theme");
const { LinearProgress } = require("@mui/material");
const { default: styled } = require("styled-components");

export const CustomLinearProgress = styled(LinearProgress)`
  && {
    height: ${({ height }) => height || "6px"};
    border-radius: ${({ radius }) => radius || "6px"};
    background-color: #D9D9D9;
  }

  .MuiLinearProgress-barColorPrimary {
    background-color: ${({ lineColor }) => lineColor || theme.colors.secondary};
  }
`;
