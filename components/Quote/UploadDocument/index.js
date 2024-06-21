/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { Button } from "@/components/Common/Button";
import Image from "next/image";
import uploadFile from "@/assets/icons/uploadFile.svg"
import { theme } from "@/styles/theme";
import { Col, Div, Text } from "@/styles/Common";
import success from "@/assets/icons/success.svg"
import trash from "@/assets/icons/trash.svg"
import error from "@/assets/icons/error.svg"
import { Grid, IconButton } from "@mui/material";
import { UploadYellowButton } from "./UploadButton";
import { LinearProgress } from "@/components/Common/LinearProgress";

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
  handleDelete,
  errorFile,
  errorMessage
}) => {
  const uploaded = value !== null
  const [hasError, setHasError] = useState(errorFile)

  const [uploadProgress, setUploadProgress] = useState(0);
  const [isUploading, setIsUploading] = useState(false);
  const [forceUpdate, setForceUpdate] = useState(false)

  useEffect(() => {
    setHasError(errorFile)
    setForceUpdate(!forceUpdate)
  }, [errorFile])

  const handleDeleteError = () => {
    setHasError(false)
  }

  const handleChange = (event, id) => {
    const { files } = event.target;

    if (files.length > 0) {
      setIsUploading(true);
      handleUpload(files[0], id);
      setForceUpdate(!forceUpdate)
    }
  };

  const handleUpload = async (file, id) => {
    const totalSize = file.size;
    const chunkSize = 1024;
    const uploadSpeed = 40;
    let loaded = 0;

    while (loaded < totalSize) {
      loaded += chunkSize * uploadSpeed;
      const progress = Math.min((loaded / totalSize) * 100, 100);
      setUploadProgress(progress);
      await new Promise((resolve) => setTimeout(resolve, 100));
    }

    setUploadProgress(0);
    setIsUploading(false);

    handleFile(file, id);
    setForceUpdate(!forceUpdate)
  };
  

  return (
    <Div width="100%" direction="column">
      <Grid container columnSpacing={{ xs: 1, sm: 1, md: 1 }}>
        <Grid item md={uploaded || hasError ? 12 : 10} xs={uploaded || hasError ? 12 : 10}>
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
              id={`file-upload-${id}`}
              type="file"
              multiple
              onChange={(event) => handleChange(event, id)}
            />
            <Button
              font={"Gilroy"}
              variant="contained"
              component="span"
              startIcon={<Image alt="upload" src={uploaded ? success : uploadFile} style={{ marginLeft: "16px" }} />}
              background={hasError ? theme.colors.error100 : theme.colors.primary25}
              hover={hasError ? theme.colors.error100 : theme.colors.primary25}
              borderHover={hasError ? theme.colors.error100 : theme.colors.primary25}
              labelColor={uploaded ? theme.colors.neutralGray900 : hasError ? theme.colors.error : theme.colors.neutralGray500}
              size={isMobile ? theme.fonts.size.sm : theme.fonts.size.default2}
              labelWeight={theme.fonts.weight.regular}
              width={"100%"}
              mobileWidth={"100%"}
              height={"40px"}
              radius={"4px"}
              style={{ justifyContent: "flex-start" }}
              onClick={(event) => {
                event.stopPropagation();
              }}
            >
              <Div width="90%" align="center" justify="space-between">
                {isMobile && (uploaded ? value.name.length < 20 ? value.name : `${value?.name.slice(0, 20)}...` : "Seleccionar archivo")}
                {!isMobile && (uploaded ? value.name.length < 40 ? value.name : `${value?.name.slice(0, 40)}...` : "Seleccionar archivo")}
                {(uploaded || hasError) &&
                  <IconButton
                    onClick={(event) => {
                      event.stopPropagation();
                      handleDelete(id);
                      hasError && handleDeleteError()
                    }}
                    style={{ zIndex: 5 }}
                  >
                    <Image alt="upload" src={uploaded ? trash : error} />
                  </IconButton>
                }
              </Div>
            </Button>
          </label>

          {hasError && (
            <Div width="159px" height="16px" style={{ background: theme.colors.error }}>
              <Text
                color={theme.colors.white}
                size={theme.fonts.size.xs}
              >
                No se pudo cargar el archivo
              </Text>
            </Div>
          )}

          {helper && !uploaded && !hasError && !isUploading && (
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
        {(!uploaded && !hasError) && (
          <UploadYellowButton handleChange={handleChange} id={id} />
        )}

        {isUploading && (
          <Col m="5px 0 0 10px" width="100%">
            <LinearProgress variant="determinate" value={uploadProgress} sx={{ width: '100%' }} />
            <Text
              color={theme.colors.white}
              size={theme.fonts.size.xs}
              weight={theme.fonts.weight.medium}
              mt="1px"
            >
              {`${Math.round(uploadProgress)}% Subido`}
            </Text>
          </Col>
        )}
      </Grid>
    </Div>
  );
};
