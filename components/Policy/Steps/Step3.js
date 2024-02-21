import React from "react";
import { TextField } from "@/components/Common/TextField";
import { Div, Text } from "@/styles/Common";
import { theme } from "@/styles/theme";
import { Grid } from "@mui/material";
import Image from "next/image";
import { Button } from "@/components/Common/Button";
import arrowBack from "@/assets/icons/big-arrow-back-yellow.svg"
import { CardButton, ColForm } from "@/styles/Policy";
import pesosIcon from "@/assets/icons/pesos.svg";
import area from "@/assets/icons/area.svg";
import address from "@/assets/icons/address.svg";
import house from "@/assets/icons/house.svg";
import building from "@/assets/icons/building.svg";
import condominium from "@/assets/icons/condominium.svg";
import { numberFormat } from "@/utilities/helpers";
import { DatePicker } from "@/components/Common/DatePicker";
import { Select } from "@/components/Common/Select";

export const Step3 = ({
  isMobile,
  propertyDataForm,
  nextStep
}) => {
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
    width: "100%",
    background: theme.colors.primary25,
    border: theme.colors.primary25,
    notFocused: true,
    placeholderColor: theme.colors.neutralGray500,
  }

  const housingOptions = [
    { label: "Casa", value:"house", icon: house },
    { label: "Apartamento", value:"apartment", icon: building },
    { label: "Condominio", value:"condominium", icon: condominium },
  ]

  return (
    <ColForm m={"12px 0 0 0"}>
      <Text
        color={theme.colors.white}
        size={isMobile ? theme.fonts.size.h5 : theme.fonts.size.h3}
        font={theme.fonts.family.primaryBold}
        weight={theme.fonts.weight.bold}
        lineHeight={isMobile ? "32px" : "44px"}
        mt={isMobile ? "24px" : "12px"}
      >
        Datos de tu <span style={{ fontFamily: theme.fonts.family.primaryBold , color: theme.colors.yellow500 }}>inmueble</span>
      </Text>
      <Grid container rowSpacing={{ xs: 2, sm: 2, md: 3  }} columnSpacing={{ xs: 2, sm: 2, md: 2 }} style={{ marginTop: "8px" }}>
        <Grid item md={12} xs={12}>
          <Text
            size={theme.fonts.size.sm}
            color={theme.colors.white}
            mb="2px"
            align="left"
            font={theme.fonts.family.primaryMedium}
            weight={theme.fonts.weight.medium}
          >
            Tipo de vivienda*
          </Text>
          <Div justify="space-between">
            {housingOptions.map((ele, indx) => (
              <CardButton key={indx}>
                <Image alt="icon" src={ele.icon} />
                <Text
                  font={theme.fonts.family.primaryBold}
                  weight={theme.fonts.weight.bold}
                  color={theme.colors.green900}
                  size={theme.fonts.size.sm}
                  lineHeight={"20px"}
                >
                  {ele.label}
                </Text>
              </CardButton>
            ))}
          </Div>
        </Grid>
        <Grid item md={12} xs={12}>
          <TextField
            {...inputsProps}
            label={"Valor comercial*"}
            placeholder={"0"}
            id="commercialValue"
            notFocused={true}
            prefixIcon={
              <Image alt="pesos" src={pesosIcon} width={16} height={16} />
            }
            value={
              propertyDataForm.commercialValue === "" ? "" : numberFormat(Number(propertyDataForm.commercialValue))
            }
            inputProps={{
              pattern: "\\d*",
              inputMode: "numeric",
            }}
          />
        </Grid>
        <Grid item md={6} xs={6}>
          <DatePicker
            {...inputsProps}
            width={"100%"}
            label={"Año de construcción*"}
            value={propertyDataForm.constructionYear}
            views={['year']}
            format={"YYYY"}
          />
        </Grid>
        <Grid item md={6} xs={6}>
          <Div direction="column">
            <Text
              size={theme.fonts.size.sm}
              color={theme.colors.white}
              mb="2px"
              align="left"
              font={theme.fonts.family.primaryMedium}
              weight={theme.fonts.weight.medium}
            >
              Antiguedad
            </Text>
            <Div height="40px" align="center">
              <Text
                size={theme.fonts.size.sm}
                color={theme.colors.white}
                mb="2px"
                align="left"
                font={theme.fonts.family.primary}
              >
                _ años
              </Text>
            </Div>
          </Div>
        </Grid>
        <Grid item md={12} xs={12}>
          <TextField
            {...inputsProps}
            label={"Área de construcción*"}
            placeholder={"metros cuadrados"}
            id="constructionArea"
            notFocused={true}
            prefixIcon={
              <Image alt="area" src={area} />
            }
            value={propertyDataForm.constructionArea}
            inputProps={{
              pattern: "\\d*",
              inputMode: "numeric",
            }}
          />
        </Grid>
        <Grid item md={12} xs={12}>
          <TextField
            {...inputsProps}
            label={"Dirección del inmueble*"}
            id="housingAddress"
            notFocused={true}
            prefixIcon={
              <Image alt="address" src={address} />
            }
            value={propertyDataForm.housingAddress}
          />
        </Grid>
        <Grid item md={12} xs={12}>
          <Select
            {...inputsProps}
            label={"Departamento*"}
            width={"100%"}
            name="housingDepartmentId"
            value={propertyDataForm.housingDepartmentId}
          >
            {/* {documentTypeOptions.map((ele, indx) => (
              <MenuItem key={indx} value={ele.value} style={{ fontFamily: theme.fonts.family.primary }}>{ele.label}</MenuItem>
            ))} */}
          </Select>
        </Grid>
        <Grid item md={12} xs={12}>
          <Select
            {...inputsProps}
            label={"Ciudad*"}
            width={"100%"}
            name="housingCityId"
            value={propertyDataForm.housingCityId}
          >
            {/* {documentTypeOptions.map((ele, indx) => (
              <MenuItem key={indx} value={ele.value} style={{ fontFamily: theme.fonts.family.primary }}>{ele.label}</MenuItem>
            ))} */}
          </Select>
        </Grid>
      </Grid>

      <Div m="46px 0 24px 0" justify="space-between">
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
          // onClick={handleBack}
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
          onClick={nextStep}
          // disabled={!isFormValid}
        >
          Siguiente
        </Button>
      </Div>
    </ColForm>
  )
}