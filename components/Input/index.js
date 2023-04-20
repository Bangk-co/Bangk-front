import React from "react";
import { Text } from "../../styles/Common";
import { CustomInput } from "./styles";
import { theme } from "../../styles/theme";

export const Input = ({
  placeholder,
  suffix,
  helper,
  error,
  disabled,
  onChange,
  onPressEnter,
  width,
  border,
  ...rest
}) => {
  return (
    <div>
      <CustomInput
        placeholder={placeholder}
        suffix={suffix}
        status={error ? "error" : ""}
        disabled={disabled}
        onChange={onChange}
        onPressEnter={onPressEnter}
        width={width}
        border={border}
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
