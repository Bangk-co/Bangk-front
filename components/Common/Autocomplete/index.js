import { Div, Text } from "@/styles/Common";
import React from "react";
import { CustomAutocomplete } from "./styles";
import { theme } from "@/styles/theme";

export const Autocomplete = ({  
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
      <CustomAutocomplete
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