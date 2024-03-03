import React from "react";
import { TextField } from "@/components/Common/TextField";
import { Div, Text } from "@/styles/Common";
import { theme } from "@/styles/theme";
import { Grid, MenuItem } from "@mui/material";
import email from "@/assets/icons/email.svg"
import Image from "next/image";
import { Select } from "@/components/Common/Select";
import { Button } from "@/components/Common/Button";
import { ColForm } from "@/styles/Policy";
import { DatePicker } from "../Common/DatePicker";
import { useMediaQuery } from "react-responsive";

export const UserForm = ({
  isMobile,
  documentTypeOptions,
  indicativesOptions,
  formInfo,
  handleContinue,
  handleChange,
  handleSelect,
  handleChangeDate,
}) => {

  const isMiniMobile =
  useMediaQuery({
    query: `(max-width: ${theme.breakpoints.mini})`,
  })

  const inputsProps = {
    labelSize: isMobile ? theme.fonts.size.xs : theme.fonts.size.sm,
    labelColor: theme.colors.white,
    labelFont: theme.fonts.family.primaryMedium,
    labelWeight: theme.fonts.weight.medium,
    fontColor: theme.colors.neutralGray900,
    font: theme.fonts.family.primary,
    size: isMobile ? theme.fonts.size.sm : theme.fonts.size.default2,
    radius: "4px",
    height: "40px",
    background: theme.colors.primary25,
    border: theme.colors.primary25,
    notFocused: true,
    placeholderColor: theme.colors.neutralGray500,
  }

  const isFormValid = Object.values(formInfo).some(value => value === "");

  return (
    <ColForm m={"12px 0 0 0"}>
      <Text
        color={theme.colors.white}
        size={isMobile ? theme.fonts.size.h5 : theme.fonts.size.h3}
        font={theme.fonts.family.primaryBold}
        weight={theme.fonts.weight.bold}
        lineHeight={isMobile ? "32px" : "44px"}
      >
        Confirma los datos del <br></br>
        <span style={{ fontFamily: theme.fonts.family.primaryBold , color: theme.colors.yellow500 }}>titular del crédito</span>
      </Text>
      <Text
        color={theme.colors.white}
        size={isMobile ? theme.fonts.size.sm : theme.fonts.size.default2}
        lineHeight="20px"
        mt="10px"
      >
        Revisa la información del titular del crédito
      </Text>
      <Grid container rowSpacing={{ xs: 2, sm: 2, md: 3  }} columnSpacing={{ xs: 2, sm: 2, md: 2 }} style={{ marginTop: "8px" }}>
        <Grid item md={4} xs={4}>
          <Select
            {...inputsProps}
            label={"Tipo de documento*"}
            width={"100%"}
            placeholder={"Escribir"}
            name="documentIdentificationTypeId"
            value={formInfo.documentIdentificationTypeId}
            onChange={handleSelect}
          >
            {documentTypeOptions.map((ele, indx) => (
              <MenuItem key={indx} value={ele.value} style={{ fontFamily: theme.fonts.family.primary }}>{ele.label}</MenuItem>
            ))}
          </Select>
        </Grid>
        <Grid item md={8} xs={8} style={{ marginTop: isMobile ? "14px" : "0px" }}>
          <TextField
            {...inputsProps}
            label={"Número de documento*"}
            width={"100%"}
            placeholder={"Escribir"}
            id="identificationNumber"
            value={formInfo.identificationNumber}
            inputProps={{
              maxLength: 15,
              pattern: formInfo.documentType !== 78 && "\\d*",
              inputMode: formInfo.documentType !== 78 && "numeric"
            }}
            onChange={handleChange}
          />
        </Grid>
        <Grid item md="12" xs={12}>
          <DatePicker
            {...inputsProps}
            width={"100%"}
            label={"Fecha de expedición de la cédula*"}
            value={formInfo.documentIssueDate}
            onChange={handleChangeDate}
          />
        </Grid>
        <Grid item md={12} xs={12}>
          <TextField
            {...inputsProps}
            label={"Nombre(s)*"}
            width={"100%"}
            placeholder={"Escribir"}
            helper={"Escribe el nombre como aparece en la cédula"}
            helperColor={theme.colors.white}
            id="name"
            value={formInfo.name}
            inputProps={{ maxLength: 50 }}
            onChange={handleChange}
          />
        </Grid>
        <Grid item md={12} xs={12}>
          <TextField
            {...inputsProps}
            label={"Apellidos*"}
            width={"100%"}
            placeholder={"Escribir"}
            helper={"Escribe los apellidos como aparece en la cédula"}
            helperColor={theme.colors.white}
            id="lastName"
            value={formInfo.lastName}
            inputProps={{ maxLength: 50 }}
            onChange={handleChange}
          />
        </Grid>
        <Grid item md={4} xs={4}>
          <Select
            {...inputsProps}
            label={"Código de país*"}
            width={"100%"}
            placeholder={"Escribir"}
            name="countryCodePhoneId"
            value={formInfo.countryCodePhoneId}
            onChange={handleSelect}
          >
            {indicativesOptions.map((ele, indx) => (
              <MenuItem key={indx} value={ele.value} style={{ fontFamily: theme.fonts.family.primary }}>{ele.label}</MenuItem>
            ))}
          </Select>
        </Grid>
        <Grid item md={8} xs={8} style={{ marginTop: isMiniMobile ? "14px" : "0px" }}>
          <TextField
            {...inputsProps}
            label={"Número de telefono*"}
            width={"100%"}
            placeholder={"Escribir"}
            id="phoneNumber"
            value={formInfo.phoneNumber}
            inputProps={{
              maxLength: 10,
              pattern: "\\d*",
              inputMode: "numeric"
            }}
            onChange={handleChange}
          />
        </Grid>
        <Grid item md={12} xs={12}>
          <TextField
            {...inputsProps}
            label={"Correo electrónico"}
            width={"100%"}
            placeholder={"Escribir"}
            prefixIcon={
              <Image alt="mail" src={email} width={16} height={16} />
            }
            id="email"
            value={formInfo.email}
            disabled={true}
          />
        </Grid>
      </Grid>

      <Div m="46px 0 0 0" justify="center">
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
          onClick={handleContinue}
          disabled={isFormValid}
        >
          Confirmar
        </Button>
      </Div>
    </ColForm>
  )
}