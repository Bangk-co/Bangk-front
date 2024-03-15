import React, { useEffect, useState } from "react";
import { Select } from "@/components/Common/Select";
import { TextField } from "@/components/Common/TextField";
import { Placeholder, Text } from "@/styles/Common";
import { ColForm } from "@/styles/Policy";
import { theme } from "@/styles/theme";
import { Grid, InputAdornment, MenuItem } from "@mui/material";
import Image from "next/image";
import useGetStates from "@/hooks/Common/useGetStates";
import useGetCities from "@/hooks/Common/useGetCities";
import location from "@/assets/icons/location.svg"
import numeral from "@/assets/icons/numeral.svg"

export const Step3V = ({
  isMobile,
  formInfo,
  setFormInfo
}) => {
  const statesList = useGetStates(15)
  const { data: dataStates, isSuccess: isSuccessStates } = statesList
  const [statesOptions, setStatesOptions] = useState([])
  const citiesList = useGetCities(formInfo.stateVehiculeId)
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

  const handleChange = (event) => {
    const { id, value } = event.target
    const newInfo = { ...formInfo }

    newInfo[id] = value
    setFormInfo(newInfo)
  }

  const handleSelect = (event) => {
    const { name, value } = event.target
    const newInfo = { ...formInfo }

    newInfo[name] = value
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
        Datos de tu <span style={{ fontFamily: theme.fonts.family.primaryBold , color: theme.colors.yellow500 }}>vehículo</span>
      </Text>
      <Grid container rowSpacing={{ xs: 2, sm: 2, md: 3  }} columnSpacing={{ xs: 2, sm: 2, md: 2 }} style={{ marginTop: "8px" }}>
        <Grid item md={12} xs={12}>
          <Select
            {...inputsProps}
            label={"Departamento de circulación*"}
            width={"100%"}
            name="stateVehiculeId"
            value={formInfo.stateVehiculeId}
            displayEmpty
            renderValue={(selected) => {
              if (selected === null) {
                return <Placeholder>Selecciona un departamento/estado</Placeholder>
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
            label={"Ciudad de circulación*"}
            width={"100%"}
            name="cityVehiculeId"
            value={formInfo.cityVehiculeId}
            startAdornment={
              <InputAdornment position="start">
                  <Image alt="location" src={location} />
              </InputAdornment>
            }
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
            helper={"Lugar donde te sueles movilizar en el vehículo"}
            helperColor={theme.colors.white}
          >
            {citiesOptions.map((ele, indx) => (
              <MenuItem key={indx} value={ele.id} style={{ fontFamily: theme.fonts.family.primary }}>{ele.name}</MenuItem>
            ))}
          </Select>
        </Grid>
        <Grid item md={12} xs={12}>
          <TextField
            {...inputsProps}
            label={"Placa*"}
            placeholder={"Ej: LMR 457"}
            id="vehicleLicensePlate"
            notFocused={true}
            prefixIcon={
              <Image alt="numeral" src={numeral} />
            }
            value={formInfo.vehicleLicensePlate}
            onChange={handleChange}
          />
        </Grid>
      </Grid>
    </ColForm>
  )
}