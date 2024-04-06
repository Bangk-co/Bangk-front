import React from "react";
import { Text, Div } from "../../../styles/Common";
import { CustomTextField } from "./styles";
import { theme } from "../../../styles/theme";
import InputAdornment from "@mui/material/InputAdornment";

export const TextField = ({
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
  fontColor,
  notFocused,
  placeholderColor,
  helperColor,
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
      <CustomTextField
        autoComplete="off"
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
        fontColor={fontColor}
        border={border}
        notFocused={notFocused}
        placeholderColor={placeholderColor}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">{prefixIcon}</InputAdornment>
          ),
          endAdornment: (
            <InputAdornment position="end">{suffix}</InputAdornment>
          )
        }}
        {...rest}
      />
      {helper && (
        <Text
          size={theme.fonts.size.sm}
          color={helperColor || theme.colors.red}
          mt="2px"
          align="left"
        >
          {helper}
        </Text>
      )}
    </Div>
  );
};
