import Checkbox from '@mui/material/Checkbox';
import styled from 'styled-components';
import { theme } from '@/styles/theme';

export const CustomCheckbox = styled(Checkbox)(({ checkedColor, hoverColor }) => ({
  '& .MuiSvgIcon-root': {
    color: theme.colors.white,
    width: "18px",
  },
  '&.MuiCheckbox-root': {
    background: "transparent",
    width: "34px",
    height: "34px",
    '&:hover': {
      background: theme.colors.terciary50,
      '& .MuiSvgIcon-root': {
        color: theme.colors.green900,
      },
      '&.Mui-checked': {
        '& .MuiSvgIcon-root': {
          color: checkedColor || theme.colors.secondary,
        },
      },
    }
  },
  '&.Mui-checked': {
    '& .MuiSvgIcon-root': {
      color: checkedColor || theme.colors.secondary,
    },
  },
}));
