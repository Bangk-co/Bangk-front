import React, { useState, useEffect } from "react";
import { TextField } from "@/components/Common/TextField";
import { Placeholder, Text } from "@/styles/Common";
import { theme } from "@/styles/theme";
import { Grid, MenuItem } from "@mui/material";
import { Select } from "@/components/Common/Select";
import { ColForm } from "@/styles/Policy";
import { RadioGroup } from "@/components/Common/Radio/Group";
import { Radio } from "@/components/Common/Radio";
import useGetStates from "@/hooks/Common/useGetStates";
import useGetCities from "@/hooks/Common/useGetCities";

export const Step1 = ({
  isMobile,
  formInfo,
  setFormInfo,
  countriesOptions,
  nationalityOptions,
  civilStatusOptions,
  statesOptions,
  citiesOptions,
  economicActivityOptions,
  userName
}) => {
  const residenceStatesList = useGetStates(formInfo.residenceCountryId)
  const { data: dataResidenceStates, isSuccess: isSuccessResidenceStates } = residenceStatesList
  const [residenceStatesOptions, setResidenceStatesOptions] = useState([])
  const residenceCitiesList = useGetCities(formInfo.residenceStateId)
  const { data: dataResidenceCities, isSuccess: isSuccessResidenceCities } = residenceCitiesList
  const [residenceCitiesOptions, setResidenceCitiesOptions] = useState([])

  useEffect(() => {
    if (isSuccessResidenceStates) {
      setResidenceStatesOptions(dataResidenceStates?.data.states)
    }
  }, [isSuccessResidenceStates, dataResidenceStates])

  useEffect(() => {
    if (isSuccessResidenceCities) {
      setResidenceCitiesOptions(dataResidenceCities?.data.cities)
    }
  }, [isSuccessResidenceCities, dataResidenceCities])

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
    width:"100%"
  }

  const handleSelect = (event) => {
    const { name, value } = event.target
    const newInfo = { ...formInfo }

    newInfo[name] = value
    setFormInfo(newInfo)
  }

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

  const handleChangeRadio = (event, id) => {
    const { defaultValue } = event.target;
    const newInfo = { ...formInfo };

    newInfo[id] = JSON.parse(defaultValue);
    setFormInfo(newInfo);
  };

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
        Cuentanos más de ti, <br></br>
        <span style={{ fontFamily: theme.fonts.family.primaryBold , color: theme.colors.yellow500 }}>{userName}</span>
      </Text>
      <Grid container rowSpacing={{ xs: 2, sm: 2, md: 3  }} columnSpacing={{ xs: 2, sm: 2, md: 2 }} style={{ marginTop: "8px" }}>
        <Grid item md={12} xs={12}>
          <Select
            {...inputsProps}
            label={"País de nacimiento*"}
            width={"100%"}
            name="birthCountryId"
            value={formInfo.birthCountryId}
            displayEmpty
            renderValue={(selected) => {
              if (selected === null) {
                return <Placeholder>Selecciona un país</Placeholder>
              } else {
                return countriesOptions.find((ele) => ele.id === selected)
                  ? countriesOptions.find((ele) => ele.id === selected).name
                  : null
              }
            }}
            onChange={handleSelect}
          >
            {countriesOptions.map((ele, indx) => (
              <MenuItem key={indx} value={ele.id} style={{ fontFamily: theme.fonts.family.primary }}>{ele.name}</MenuItem>
            ))}
          </Select>
        </Grid>
        <Grid item md={12} xs={12}>
          <Select
            {...inputsProps}
            label={"Departamento/Estado de nacimiento*"}
            width={"100%"}
            name="birthStateId"
            value={formInfo.birthStateId}
            disabled={formInfo.birthCountryId === null}
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
            label={"Ciudad de nacimiento*"}
            width={"100%"}
            name="birthCityId"
            value={formInfo.birthCityId}
            disabled={formInfo.birthStateId === null}
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
        <Grid item md={12} xs={12}>
          <Select
            {...inputsProps}
            label={"Nacionalidad*"}
            width={"100%"}
            name="countryNationalityId"
            value={formInfo.countryNationalityId}
            displayEmpty
            renderValue={(selected) => {
              if (selected === null) {
                return <Placeholder>Selecciona tu nacionalidad</Placeholder>
              } else {
                return nationalityOptions.find((ele) => ele.id === selected)
                  ? nationalityOptions.find((ele) => ele.id === selected).nationality
                  : null
              }
            }}
            onChange={handleSelect}
          >
            {nationalityOptions.map((ele, indx) => (
              <MenuItem key={indx} value={ele.id} style={{ fontFamily: theme.fonts.family.primary }}>{ele.nationality}</MenuItem>
            ))}
          </Select>
        </Grid>
        <Grid item md={12} xs={12}>
          <Select
            {...inputsProps}
            label={"Estado civil*"}
            width={"100%"}
            name="civilStatusId"
            value={formInfo.civilStatusId}
            displayEmpty
            renderValue={(selected) => {
              if (selected === null) {
                return <Placeholder>Selecciona tu estado</Placeholder>
              } else {
                return civilStatusOptions.find((ele) => ele.id === selected)
                  ? civilStatusOptions.find((ele) => ele.id === selected).name
                  : null
              }
            }}
            onChange={handleSelect}
          >
            {civilStatusOptions.map((ele, indx) => (
              <MenuItem key={indx} value={ele.id} style={{ fontFamily: theme.fonts.family.primary }}>{ele.name}</MenuItem>
            ))}
          </Select>
        </Grid>
        <Grid item md={12} xs={12}>
          <TextField
            {...inputsProps}
            label={"Número de hijos*"}
            width={"100%"}
            id="numberChildren"
            value={formInfo.numberChildren}
            inputProps={{
              pattern: "\\d*",
              inputMode: "numeric",
              maxLength: 2,
            }}
            onChange={handleChangeNumber}
          />
        </Grid>
        <Grid item md={12} xs={12}>
          <TextField
            {...inputsProps}
            label={"Profesión*"}
            width={"100%"}
            id="occupation"
            value={formInfo.occupation}
            onChange={handleChangeText}
          />
        </Grid>
        <Grid item md={12} xs={12}>
          <Select
            {...inputsProps}
            label={"Actividad económica*"}
            width={"100%"}
            name="occupationActivityId"
            value={formInfo.occupationActivityId}
            onChange={handleSelect}
          >
            {economicActivityOptions.map((ele, indx) => (
              <MenuItem key={indx} value={ele.id} style={{ fontFamily: theme.fonts.family.primary }}>{ele.name}</MenuItem>
            ))}
          </Select>
        </Grid>
        <Grid item md={12} xs={12}>
          <RadioGroup
            gap="5px"
            name="isPublicPerson"
            direction="row"
            label="¿Eres una persona públicamente expuesta (Actores, políticos, estrellas deportivas, etc...)?"
            labelFont={theme.fonts.family.primaryMedium}
            labelSize={theme.fonts.size.sm}
            labelColor={theme.colors.white}
            color={theme.colors.white}
            value={formInfo.isPublicPerson}
            onChange={(event) => handleChangeRadio(event, "isPublicPerson")}
          >
            <Radio
              label="Si"
              value={true}
              labelColor={theme.colors.white}
              radioColor={theme.colors.white}
            />
            <Radio
              label="No"
              value={false}
              labelColor={theme.colors.white}
              radioColor={theme.colors.white}
            />
          </RadioGroup>
        </Grid>
        <Grid item md={12} xs={12} style={{ borderBottom: `1px solid ${theme.colors.primary25}` }}>
          <RadioGroup
            gap="5px"
            name="hasBondPublicPerson"
            direction="row"
            label="¿Tienes familiares que sean personas públicamente expuestas (Actores, políticos, estrellas deportivas, etc...)?"
            labelFont={theme.fonts.family.primaryMedium}
            labelSize={theme.fonts.size.sm}
            labelColor={theme.colors.white}
            color={theme.colors.white}
            value={formInfo.hasBondPublicPerson}
            onChange={(event) => handleChangeRadio(event, "hasBondPublicPerson")}
          >
            <Radio
              label="Si"
              value={true}
              labelColor={theme.colors.white}
              radioColor={theme.colors.white}
            />
            <Radio
              label="No"
              value={false}
              labelColor={theme.colors.white}
              radioColor={theme.colors.white}
            />
          </RadioGroup>
        </Grid>

        <Grid item md={12} xs={12}>
          <Text
            font={theme.fonts.family.primaryBold}
            weight={theme.fonts.weight.bold}
            color={theme.colors.white}
            size={theme.fonts.size.sm}
            lineHeight={"20px"}
          >
            Información de residencia
          </Text>
        </Grid>

        <Grid item md={12} xs={12}>
          <Select
            {...inputsProps}
            label={"País de residencia*"}
            width={"100%"}
            name="residenceCountryId"
            value={formInfo.residenceCountryId}
            displayEmpty
            renderValue={(selected) => {
              if (selected === null) {
                return <Placeholder>Selecciona un país</Placeholder>
              } else {
                return countriesOptions.find((ele) => ele.id === selected)
                  ? countriesOptions.find((ele) => ele.id === selected).name
                  : null
              }
            }}
            onChange={handleSelect}
          >
            {countriesOptions.map((ele, indx) => (
              <MenuItem key={indx} value={ele.id} style={{ fontFamily: theme.fonts.family.primary }}>{ele.name}</MenuItem>
            ))}
          </Select>
        </Grid>
        <Grid item md={12} xs={12}>
          <Select
            {...inputsProps}
            label={"Departamento de residencia*"}
            width={"100%"}
            name="residenceStateId"
            value={formInfo.residenceStateId}
            disabled={formInfo.residenceCountryId === null}
            displayEmpty
            renderValue={(selected) => {
              if (selected === null) {
                return <Placeholder>Selecciona un departamento</Placeholder>
              } else {
                return residenceStatesOptions.find((ele) => ele.id === selected)
                  ? residenceStatesOptions.find((ele) => ele.id === selected).name
                  : null
              }
            }}
            onChange={handleSelect}
          >
            {residenceStatesOptions.map((ele, indx) => (
              <MenuItem key={indx} value={ele.id} style={{ fontFamily: theme.fonts.family.primary }}>{ele.name}</MenuItem>
            ))}
          </Select>
        </Grid>
        <Grid item md={12} xs={12}>
          <Select
            {...inputsProps}
            label={"Ciudad de residencia*"}
            width={"100%"}
            name="residenceCityId"
            value={formInfo.residenceCityId}
            disabled={formInfo.residenceStateId === null}
            displayEmpty
            renderValue={(selected) => {
              if (selected === null) {
                return <Placeholder>Selecciona una ciudad</Placeholder>
              } else {
                return residenceCitiesOptions.find((ele) => ele.id === selected)
                  ? residenceCitiesOptions.find((ele) => ele.id === selected).name
                  : null
              }
            }}
            onChange={handleSelect}
          >
            {residenceCitiesOptions.map((ele, indx) => (
              <MenuItem key={indx} value={ele.id} style={{ fontFamily: theme.fonts.family.primary }}>{ele.name}</MenuItem>
            ))}
          </Select>
        </Grid>
      </Grid>
    </ColForm>
  )
}