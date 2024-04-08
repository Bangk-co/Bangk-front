import React, { useEffect, useState } from "react";
import { TextField } from "@/components/Common/TextField";
import { Div, Placeholder, Text } from "@/styles/Common";
import { theme } from "@/styles/theme";
import { Grid, MenuItem } from "@mui/material";
import Image from "next/image";
import { CardButton, ColForm } from "@/styles/Policy";
import pesosIcon from "@/assets/icons/pesos.svg";
import area from "@/assets/icons/area.svg";
import address from "@/assets/icons/address.svg";
import { numberFormat } from "@/utilities/helpers";
import { DatePicker } from "@/components/Common/DatePicker";
import { Select } from "@/components/Common/Select";
import useGetStates from "@/hooks/Common/useGetStates";
import useGetCities from "@/hooks/Common/useGetCities";
import dayjs from "dayjs";

export const Step3 = ({
  isMobile,
  formInfo,
  setFormInfo,
  housingTypeOptions,
}) => {
  const statesList = useGetStates(15)
  const { data: dataStates, isSuccess: isSuccessStates } = statesList
  const [statesOptions, setStatesOptions] = useState([])
  const citiesList = useGetCities(formInfo.stateId)
  const { data: dataCities, isSuccess: isSuccessCities } = citiesList
  const [citiesOptions, setCitiesOptions] = useState([])

  useEffect(() => {
    if (isSuccessStates) {
      setStatesOptions(dataStates?.data.states)
    }
  }, [isSuccessStates, dataStates])

  useEffect(() => {
    if (isSuccessCities) {
      setCitiesOptions(dataCities?.data.cities)
    }
  }, [isSuccessCities, dataCities])

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

  const currentYear = new Date().getFullYear();
  const builtYear = new Date(formInfo.builtgDate).getFullYear()

  const handleChangeText = (event) => {
    const { id, value } = event.target
    const newInfo = { ...formInfo }

    newInfo[id] = value
    setFormInfo(newInfo)
  }

  const handleChangeNumber = (event) => {
    const { id, value } = event.target
    const newInfo = { ...formInfo }

    newInfo[id] = value.replace(/\D/g, "");
    setFormInfo(newInfo)
  }

  const handleSelect = (event) => {
    const { name, value } = event.target
    const newInfo = { ...formInfo }

    newInfo[name] = value
    setFormInfo(newInfo)
  }

  const handleChangeYear = (event) => {
    const newInfo = { ...formInfo }

    if (event > new Date()) {
      newInfo["builtgDate"] = null
    } else {
      newInfo["builtgDate"] = event
    }
    
    setFormInfo(newInfo)
  }

  const handleSelectHousingType = (id) => {
    const newInfo = { ...formInfo }

    newInfo["housingTypeId"] = id
    setFormInfo(newInfo)
  }

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
            {housingTypeOptions.map((ele, indx) => (
              <CardButton
                key={indx}
                onClick={() => handleSelectHousingType(ele.id)}
                style={{ border: formInfo.housingTypeId === ele.id ? `3px solid ${theme.colors.yellow500}` : `3px solid ${theme.colors.primary25}` }}
              >
                <Image alt="icon" src={ele.icon} />
                <Text
                  font={theme.fonts.family.primaryBold}
                  weight={theme.fonts.weight.bold}
                  color={theme.colors.green900}
                  size={theme.fonts.size.sm}
                  lineHeight={"20px"}
                >
                  {ele.name}
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
            id="housingValue"
            notFocused={true}
            prefixIcon={
              <Image alt="pesos" src={pesosIcon} width={16} height={16} />
            }
            value={
              formInfo.housingValue === null ? "" : numberFormat(Number(formInfo.housingValue))
            }
            inputProps={{
              maxLength: 14,
              pattern: "\\d*",
              inputMode: "numeric",
            }}
            onChange={handleChangeNumber}
          />
        </Grid>
        {formInfo.housingTypeId === 147 &&
          <>
            <Grid item md={6} xs={12}>
              <TextField
                {...inputsProps}
                label={"Área de construcción*"}
                placeholder={"metros cuadrados"}
                id="builtArea"
                notFocused={true}
                prefixIcon={<Image alt="area" src={area} />}
                value={formInfo.builtArea === null ? "" : numberFormat(Number(formInfo.builtArea))}
                inputProps={{
                  maxLength: 7,
                  pattern: "\\d*",
                  inputMode: "numeric",
                }}
                onChange={handleChangeNumber}
              />
            </Grid>
            <Grid item md={6} xs={12}>
              <TextField
                {...inputsProps}
                label={"Número de piso del apartamento*"}
                id="apartmentNumber"
                notFocused={true}
                value={formInfo.apartmentNumber}
                inputProps={{
                  maxLength: 4,
                  pattern: "\\d*",
                  inputMode: "numeric",
                }}
                onChange={handleChangeNumber}
              />
            </Grid>
            <Grid item md={6} xs={12}>
              <TextField
                {...inputsProps}
                label={"Cantidad de pisos del edificio*"}
                id="buildingFloorsNumber"
                notFocused={true}
                value={formInfo.buildingFloorsNumber}
                inputProps={{
                  maxLength: 4,
                  pattern: "\\d*",
                  inputMode: "numeric",
                }}
                onChange={handleChangeNumber}
              />
            </Grid>
            <Grid item md={6} xs={12}>
              <TextField
                {...inputsProps}
                label={"Cantidad de sótanos del edificio*"}
                id="basementNumber"
                notFocused={true}
                value={formInfo.basementNumber}
                inputProps={{
                  maxLength: 4,
                  pattern: "\\d*",
                  inputMode: "numeric",
                }}
                onChange={handleChangeNumber}
              />
            </Grid>
          </>
        }
        <Grid item md={6} xs={6}>
          <DatePicker
            {...inputsProps}
            width={"100%"}
            label={"Año de construcción*"}
            value={formInfo.builtgDate}
            views={['year']}
            format={"YYYY"}
            onChange={handleChangeYear}
            maxDate={dayjs(new Date())}
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
              Antigüedad
            </Text>
            <Div height="40px" align="center">
              <Text
                size={theme.fonts.size.sm}
                color={theme.colors.white}
                mb="2px"
                align="left"
                font={theme.fonts.family.primary}
              >
                {formInfo.builtgDate ? `${currentYear - builtYear} años` : "_ años"}
              </Text>
            </Div>
          </Div>
        </Grid>
        {formInfo.housingTypeId !== 147 &&
          <Grid item md={12} xs={12}>
            <TextField
              {...inputsProps}
              label={"Área de construcción*"}
              placeholder={"metros cuadrados"}
              id="builtArea"
              notFocused={true}
              prefixIcon={
                <Image alt="area" src={area} />
              }
              value={formInfo.builtArea === null ? "" : numberFormat(Number(formInfo.builtArea))}
              inputProps={{
                maxLength: 7,
                pattern: "\\d*",
                inputMode: "numeric",
              }}
              onChange={handleChangeNumber}
            />
          </Grid>
        }
        <Grid item md={12} xs={12}>
          <TextField
            {...inputsProps}
            label={"Dirección del inmueble*"}
            id="address"
            notFocused={true}
            prefixIcon={
              <Image alt="address" src={address} />
            }
            value={formInfo.address}
            inputProps={{
              maxLength: 200
            }}
            onChange={handleChangeText}
          />
        </Grid>
        <Grid item md={12} xs={12}>
          <Select
            {...inputsProps}
            label={"Departamento*"}
            width={"100%"}
            name="stateId"
            value={formInfo.stateId}
            displayEmpty
            renderValue={(selected) => {
              if (selected === null) {
                return <Placeholder>Selecciona un departamento</Placeholder>
              } else {
                return statesOptions.find((ele) => ele.id === selected)
                  ? statesOptions.find((ele) => ele.id === selected).name
                  : null
              }
            }}
            onChange={handleSelect}
          >
            {statesOptions.map((ele, indx) => (
              <MenuItem key={indx} value={ele.id} style={{ fontFamily: theme.fonts.family.primary }}>{ele.name}</MenuItem>
            ))}
          </Select>
        </Grid>
        <Grid item md={12} xs={12}>
          <Select
            {...inputsProps}
            label={"Ciudad*"}
            width={"100%"}
            name="cityId"
            value={formInfo.cityId}
            displayEmpty
            renderValue={(selected) => {
              if (selected === null) {
                return <Placeholder>Selecciona una ciudad</Placeholder>
              } else {
                return citiesOptions.find((ele) => ele.id === selected)
                  ? citiesOptions.find((ele) => ele.id === selected).name
                  : null
              }
            }}
            onChange={handleSelect}
          >
            {citiesOptions.map((ele, indx) => (
              <MenuItem key={indx} value={ele.id} style={{ fontFamily: theme.fonts.family.primary }}>{ele.name}</MenuItem>
            ))}
          </Select>
        </Grid>
      </Grid>
    </ColForm>
  )
}