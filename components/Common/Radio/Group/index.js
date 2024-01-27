import React from "react";
import { Text, Div } from "../../../../styles/Common";
import { theme } from "../../../../styles/theme";

export const RadioGroup = ({
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
  gap,
  direction,
  children,
  ...rest
}) => {
  return (
    <Div width="100%" direction="column">
      <Text
        size={labelSize || theme.fonts.size.xs}
        color={labelColor || theme.colors.gray900}
        mb="2px"
        align="left"
        font={labelFont || theme.fonts.family.primary}
        weight={labelWeight}
      >
        {label}
      </Text>
      <Div gap={gap} direction={direction} justify="space-between">
        {React.Children.map(children, (child) =>
          React.cloneElement(child, {
            onChange: onChange,
            checked: child.props.value === value,
          })
        )}
      </Div>
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
