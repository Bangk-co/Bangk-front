import React from "react";
import { TextField } from "@/components/Common/TextField";
import { Col, Div, Text } from "@/styles/Common";
import { theme } from "@/styles/theme";
import { Grid, LinearProgress, MenuItem } from "@mui/material";
import Image from "next/image";
import { Select } from "@/components/Common/Select";
import { Button } from "@/components/Common/Button";
import arrowBack from "@/assets/icons/big-arrow-back-yellow.svg"
import { UploadButton } from "../UploadDocument";

export const CreditForm = ({
    isMobile,
    banksOptions,
    creditTypeOptions,
    creditInfo,
    handleSelect,
    handleChange,
    username,
    handleBack,
    handleFile,
    handleDelete,
    handleCreate,
    errorFile,
    loading,
  }) => {
  const isFormValid = Object.values(creditInfo).every(value => value !== null && value !== "");

  return (
    <Col
      width={isMobile ? "312px" : "549px"}
      m={isMobile ? "0 0 0 0" : "12px 0 0 0"}
    >
      <Text
        color={theme.colors.white}
        size={isMobile ? theme.fonts.size.h5 : theme.fonts.size.h3}
        font={theme.fonts.family.primaryBold}
        weight={theme.fonts.weight.bold}
        lineHeight={isMobile ? "32px" : "44px"}
      >
        {`¡Hola  ${username}!`}
        <br></br>
        Cuéntanos sobre <span style={{ fontFamily: theme.fonts.family.primaryBold , color: theme.colors.yellow500 }}>tu crédito</span>
      </Text>
      <Grid container rowSpacing={{ xs: 2, sm: 2, md: 3  }} columnSpacing={{ xs: 1, sm: 1, md: 1 }} style={{ marginTop: "1px" }}>
        <Grid item md={12} xs={12}>
          <Select
            font={theme.fonts.family.primary}
            label={"Banco con quién tienes tu crédito*"}
            width={"100%"}
            radius="4px"
            height="40px"
            size={isMobile ? theme.fonts.size.sm : theme.fonts.size.default2}
            labelSize={isMobile ? theme.fonts.size.xs : theme.fonts.size.sm}
            labelColor={theme.colors.white}
            labelFont={"Gilroy"}
            labelWeight={theme.fonts.weight.medium}
            background={theme.colors.primary25}
            border={theme.colors.primary25}
            notFocused={true}
            name="bankId"
            value={creditInfo.bankId}
            onChange={handleSelect}
            displayEmpty
            renderValue={() => {
              if (creditInfo.bankId === null) {
                return (
                  <Text
                    color={theme.colors.neutralGray500}
                    size={isMobile ? theme.fonts.size.sm : theme.fonts.size.default2}
                    mt="2px"
                  >
                    Selecciona la entidad
                  </Text>
                )
              } else {
                return banksOptions.find(
                  (ele) => ele.value === creditInfo.bankId
                )
                  ? banksOptions.find(
                      (ele) => ele.value === creditInfo.bankId
                    ).label
                  : null;
              }
            }}
          >
            {banksOptions.map((ele, indx) => (
              <MenuItem key={indx} value={ele.value} style={{ fontFamily: theme.fonts.family.primary }}>{ele.label}</MenuItem>
            ))}
          </Select>
        </Grid>
        <Grid item md={12} xs={12}>
          <Select
            font={theme.fonts.family.primary}
            label={"Tipo de credito*"}
            width={"100%"}
            radius="4px"
            height="40px"
            size={isMobile ? theme.fonts.size.sm : theme.fonts.size.default2}
            labelSize={isMobile ? theme.fonts.size.xs : theme.fonts.size.sm}
            labelColor={theme.colors.white}
            labelFont={"Gilroy"}
            labelWeight={theme.fonts.weight.medium}
            background={theme.colors.primary25}
            border={theme.colors.primary25}
            notFocused={true}
            name="loanTypeId"
            value={creditInfo.loanTypeId}
            onChange={handleSelect}
            displayEmpty
            renderValue={() => {
              if (creditInfo.loanTypeId === null) {
                return (
                  <Text
                    color={theme.colors.neutralGray500}
                    size={isMobile ? theme.fonts.size.sm : theme.fonts.size.default2}
                    mt="2px"
                  >
                    Selecciona el tipo
                  </Text>
                )
              } else {
                return creditTypeOptions.find(
                  (ele) => ele.value === creditInfo.loanTypeId
                )
                  ? creditTypeOptions.find(
                      (ele) => ele.value === creditInfo.loanTypeId
                    ).label
                  : null;
              }
            }}
          >
            {creditTypeOptions.map((ele, indx) => (
              <MenuItem key={indx} value={ele.value} style={{ fontFamily: theme.fonts.family.primary }}>{ele.label}</MenuItem>
            ))}
          </Select>
        </Grid>
        <Grid item md={12} xs={12}>
          <TextField
            font={theme.fonts.family.primary}
            type="number"
            label={"Número de tu crédito*"}
            width={"100%"}
            placeholder={"Escribe el número"}
            radius="4px"
            height="40px"
            size={isMobile ? theme.fonts.size.sm : theme.fonts.size.default2}
            labelSize={isMobile ? theme.fonts.size.xs : theme.fonts.size.sm}
            labelColor={theme.colors.white}
            labelFont={"Gilroy"}
            labelWeight={theme.fonts.weight.medium}
            background={theme.colors.primary25}
            border={theme.colors.primary25}
            notFocused={true}
            placeholderColor={theme.colors.neutralGray500}
            id="loanNumber"
            value={creditInfo.loanNumber}
            onChange={handleChange}
            inputProps={{
              maxLength: 30,
              pattern: "\\d*",
              inputMode: "numeric"
            }}
          />
        </Grid>
        <Grid item md={12} xs={12}>
          <Text
            color={theme.colors.white}
            size={theme.fonts.size.sm}
          >
            Para poder brindarte información precisa carga <span style={{ color: theme.colors.yellow500, fontFamily: theme.fonts.family.primaryBold }}>el último extracto de tu crédito.</span>
          </Text>
        </Grid>
        <Grid item md={12} xs={12}>
          <UploadButton
            isMobile={isMobile}
            label={"Último extracto*"}
            labelSize={isMobile ? theme.fonts.size.xs : theme.fonts.size.sm}
            labelColor={theme.colors.white}
            labelFont={"Gilroy"}
            labelWeight={theme.fonts.weight.medium}
            helper={"Archivo en .PDF, .PNG, o .JPG"}
            helperColor={theme.colors.white}
            id={"bankStatementFile"}
            value={creditInfo.bankStatementFile}
            handleFile={handleFile}
            handleDelete={handleDelete}
            errorFile={errorFile}
          />
        </Grid>
        <Grid direction={"column"} item md={12} xs={12}>
          <UploadButton
            isMobile={isMobile}
            label={"Documento de identidad*"}
            labelSize={isMobile ? theme.fonts.size.xs : theme.fonts.size.sm}
            labelColor={theme.colors.white}
            labelFont={"Gilroy"}
            labelWeight={theme.fonts.weight.medium}
            helper={"Archivo en .PDF, .PNG, o .JPG"}
            helperColor={theme.colors.white}
            id={"identificationFile"}
            value={creditInfo.identificationFile}
            handleFile={handleFile}
            handleDelete={handleDelete}
            errorFile={errorFile}
          />
        </Grid>
      </Grid>
      <Div m="46px 0 0 0" justify="space-between">
        <Button
          font={theme.fonts.family.primaryBold}
          background={theme.colors.green900}
          border={theme.colors.yellow500}
          hover={theme.colors.terciary50}
          borderHover={theme.colors.yellow500}
          colorHover={theme.colors.green900}
          labelColor={theme.colors.yellow500}
          size={theme.fonts.size.default2}
          borderHeight={"3px solid"}
          width={isMobile ? "56px" : "113px"}
          mobileWidth={"56px"}
          height={"40px"}
          onClick={handleBack}
        >
          <Image alt="arrow" src={arrowBack} style={{ marginRight: "4px" }} />
          {isMobile ? "" : "Atrás"}
        </Button>
        <Button
          font={theme.fonts.family.primaryBold}
          background={theme.colors.yellow500}
          hover={theme.colors.yellow500}
          borderHover={theme.colors.yellow500}
          labelColor={theme.colors.green900}
          size={theme.fonts.size.default2}
          width={isMobile ? "224px" : "300px"}
          mobileWidth={"224px"}
          height={"40px"}
          radius={"40px"}
          onClick={handleCreate}
          disabled={!isFormValid || loading}
        >
          Cotizar
        </Button>
      </Div>
    </Col>
  )
}