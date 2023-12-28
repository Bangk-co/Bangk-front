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
  border,
  label,
  prefixIcon,
  ...rest
}) => {
  return (
    <Div width="100%" direction="column">
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
        error={error}
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
