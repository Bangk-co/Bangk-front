import React from "react";
import { Button } from "@/components/Common/Button";
import Image from "next/image";
import uploadFile from "@/assets/icons/uploadFile.svg"
import { theme } from "@/styles/theme";
import { Div, Text } from "@/styles/Common";

export const UploadButtonDoc = ({
  isMobile,
  label,
  labelColor,
  labelSize,
  labelFont,
  labelWeight,
  helper,
  helperColor,
  input,
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
      <label htmlFor="file-upload">
        {input}
        <Button
          font={"Gilroy"}
          variant="contained"
          component="span"
          startIcon={<Image alt="upload" src={uploadFile} style={{ marginLeft: "16px" }} />}
          background={theme.colors.primary25}
          hover={theme.colors.primary25}
          borderHover={theme.colors.primary25}
          labelColor={theme.colors.neutralGray500}
          size={isMobile ? theme.fonts.size.sm : theme.fonts.size.default2}
          labelWeight={theme.fonts.weight.regular}
          width={"100%"}
          mobileWidth={"100%"}
          height={"40px"}
          radius={"4px"}
          style={{ justifyContent: "flex-start" }}
        >
          Seleccionar archivo
        </Button>
      </label>

      {helper && (
        <Text
          size={theme.fonts.size.sm}
          color={helperColor}
          mt="2px"
          align="left"
        >
          {helper}
        </Text>
      )}
    </Div>
  );
};
