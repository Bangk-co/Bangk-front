import React from "react";
import { Text } from "../../../styles/Common";
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
  border,
  label,
  prefixIcon,
  ...rest
}) => {
  return (
    <div>
      <Text
        size={theme.fonts.size.sm}
        color={theme.colors.gray900}
        mb="2px"
        align="left"
      >
        {label}
      </Text>
      <CustomTextField
        placeholder={placeholder}
        suffix={suffix}
        status={error ? "error" : ""}
        disabled={disabled}
        onChange={onChange}
        onPressEnter={onPressEnter}
        width={width}
        border={border}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">{prefixIcon}</InputAdornment>
          ),
        }}
        {...rest}
      />
      {helper && (
        <Text size={theme.fonts.size.sm} color={theme.colors.salmon} mt="2px">
          {helper}
        </Text>
      )}
    </div>
  );
};
