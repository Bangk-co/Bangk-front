import styled from "styled-components";
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { theme } from "@/styles/theme";
import CalendarTodayOutlinedIcon from '@mui/icons-material/CalendarTodayOutlined';


export const CustomDatePicker = styled(DatePicker)`
  .MuiOutlinedInput-root {
    padding-left: 20px;
    background: ${({ background }) => background};
    border-radius: ${({ radius }) => radius || "43px"};
    width: ${({ width }) => width || "90%"};
    height: ${({ height }) => height || "44px"};
    font-family: ${({ font }) => font || theme.fonts.family.secondary};
    font-weight: ${theme.fonts.weight.regular};
    font-size: ${({ size }) => size || theme.fonts.size.sm};
    border-color: ${({ border }) => border || theme.colors.primary25} !important;
    &.Mui-focused fieldset {
      border: 1px solid
        ${( props ) => props.error ? theme.colors.red : props.border || theme.colors.primary25} !important;
    }
    .MuiOutlinedInput-notchedOutline {
      border-color: ${( props ) => props.error ? theme.colors.red : props.border || theme.colors.primary25};
    }
    &.Mui-disabled fieldset {
      border-color: ${( props ) => props.error ? theme.colors.red : props.border || theme.colors.primary25};
    }
  }

  & input::placeholder {
    color: ${({ placeholderColor }) => placeholderColor};
    font-family: ${({ font }) => font || theme.fonts.family.secondary};
    font-size: ${({ size }) => size || theme.fonts.size.sm};
  }
`

export const CustomCalendarIcon = styled(CalendarTodayOutlinedIcon)`
  color: ${theme.colors.neutralGray900};
  height: 16px;
  width: 16px;
`