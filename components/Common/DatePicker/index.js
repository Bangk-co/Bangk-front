import React, { useState } from "react";
import { Text, Div } from "../../../styles/Common";
import { theme } from "@/styles/theme";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { CustomDatePicker } from "./styles";
import { CustomCalendarIcon } from "./styles";
import 'dayjs/locale/es';

export const DatePicker = ({
  placeholder,
  suffix,
  helper,
  error,
  disabled,
  onChange,
  onPressEnter,
  width,
  height,
  radius,
  font,
  size,
  border,
  label,
  prefixIcon,
  labelSize,
  labelColor,
  labelFont,
  labelWeight,
  notFocused,
  placeholderColor,
  ...rest
}) => {
  return (
    <Div width="100%" direction="column">
      <Text
        size={labelSize || theme.fonts.size.xs}
        color={labelColor || theme.colors.gray900}
        mb="2px"
        align="left"
        font={labelFont || "Rubik"}
        weight={labelWeight}
      >
        {label}
      </Text>
      <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale={"es"}>
        <CustomDatePicker
          placeholder={placeholder}
          suffix={suffix}
          error={error}
          status={error ? "error" : ""}
          disabled={disabled}
          onChange={onChange}
          onPressEnter={onPressEnter}
          width={width}
          height={height}
          radius={radius}
          font={font}
          size={size}
          border={border}
          notFocused={notFocused}
          placeholderColor={placeholderColor}
          format="DD/MM/YYYY"
          slots={{
            openPickerIcon: CustomCalendarIcon,
          }}
          slotProps={{
            inputAdornment: {
              position: 'start'
            }
          }}
          {...rest}
        />
      </LocalizationProvider>
      {helper && (
        <Text
          size={theme.fonts.size.sm}
          color={theme.colors.red}
          mt="2px"
          align="left"
        >
          {helper}
        </Text>
      )}
    </Div>
  )
}