import React from "react";
import { Text, Div } from "../../../styles/Common";
import { CustomSelect } from "./styles";
import { theme } from "../../../styles/theme";
import InputAdornment from "@mui/material/InputAdornment";

export const Select = ({
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
      <CustomSelect
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
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">{prefixIcon}</InputAdornment>
          ),
        }}
        {...rest}
      />
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
  );
};
