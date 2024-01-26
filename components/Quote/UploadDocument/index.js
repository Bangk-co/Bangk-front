import React from "react";
import { Button } from "@/components/Common/Button";
import Image from "next/image";
import uploadFile from "@/assets/icons/uploadFile.svg"
import { theme } from "@/styles/theme";
import { Div, Text } from "@/styles/Common";
import success from "@/assets/icons/success.svg"
import trash from "@/assets/icons/trash.svg"
import { Grid, IconButton } from "@mui/material";

export const UploadButton = ({
  isMobile,
  label,
  labelColor,
  labelSize,
  labelFont,
  labelWeight,
  helper,
  helperColor,
  id,
  value,
  handleFile,
  handleDelete
}) => {
  const uploaded = value !== null

  return (
    <Div width="100%" direction="column">
      <Grid container columnSpacing={{ xs: 1, sm: 1, md: 1 }}>
        <Grid item md={uploaded ? 12 : 10} xs={uploaded ? 12 : 10}>
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
          <label htmlFor={`file-upload-${id}`}>
            <input
              style={{ display: 'none' }}
              accept=".pdf, .png, .jpeg, .jpg"
              id={`file-upload-${id}`}
              type="file"
              multiple
              onChange={(event) => handleFile(event, id)}
            />
            <Button
              font={"Gilroy"}
              variant="contained"
              component="span"
              startIcon={<Image alt="upload" src={uploaded ? success : uploadFile} style={{ marginLeft: "16px" }} />}
              background={theme.colors.primary25}
              hover={theme.colors.primary25}
              borderHover={theme.colors.primary25}
              labelColor={uploaded ? theme.colors.neutralGray900 : theme.colors.neutralGray500}
              size={isMobile ? theme.fonts.size.sm : theme.fonts.size.default2}
              labelWeight={theme.fonts.weight.regular}
              width={"100%"}
              mobileWidth={"100%"}
              height={"40px"}
              radius={"4px"}
              style={{ justifyContent: "flex-start" }}
              onClick={() => {}}
            >
              <Div width="90%" align="center" justify="space-between">
                {uploaded ? value?.name : "Seleccionar archivo"}
                {uploaded &&
                  <IconButton
                    onClick={(event) => {
                      event.stopPropagation();
                      handleDelete(id);
                    }}
                    style={{ zIndex: 5 }}
                  >
                    <Image alt="upload" src={trash} />
                  </IconButton>
                }
              </Div>
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
        </Grid>
        {!uploaded && (
          <Grid item md={2} xs={2}>
            <label htmlFor={`file-upload-${id}-2`}>
              <input
                style={{ display: 'none' }}
                accept=".pdf, .png, .jpeg, .jpg"
                id={`file-upload-${id}-2`}
                type="file"
                multiple
                onChange={handleFile}
              />
              <Button
                font={"Gilroy Bold"}
                background={theme.colors.yellow500}
                hover={theme.colors.yellow500}
                border={theme.colors.yellow500}
                borderHover={theme.colors.yellow500}
                labelColor={theme.colors.green900}
                size={theme.fonts.size.default2}
                width={"100%"}
                mobileWidth={"100%"}
                height={"40px"}
                radius={"4px"}
                style={{ marginTop: "19px" }}
              >
                Subir
              </Button>
            </label>
        </Grid>
        )}
      </Grid>
    </Div>
  );
};
