import React from "react";
import { Text, Div } from "../../../styles/Common";
import { CustomRadio } from "./styles";
import { theme } from "../../../styles/theme";
import { FormControlLabel } from "@mui/material";

export const Radio = ({
  label,
  labelSize,
  labelColor,
  labelFont,
  labelWeight,
  helper,
  value,
  error,
  disabled,
  onChange,
  ...rest
}) => {
  return (
    <Div width="100%" direction="row" align="center">
      <FormControlLabel
        control={
          <CustomRadio
            value={value}
            error={error ? 1 : 0}
            disabled={disabled}
            onChange={onChange}
            {...rest}
          />
        }
        label={
          <Text
            size={labelSize || theme.fonts.size.sm}
            color={labelColor || theme.colors.gray900}
            align="left"
            font={labelFont || theme.fonts.family.primary}
            weight={labelWeight}
          >
            {label}
          </Text>
        }
      />
    </Div>
  );
};
