import React from "react";
import { TextField } from "@/components/Common/TextField";
import { Div, Text } from "@/styles/Common";
import { theme } from "@/styles/theme";
import { Grid, MenuItem } from "@mui/material";
import Image from "next/image";
import { Select } from "@/components/Common/Select";
import { Button } from "@/components/Common/Button";
import arrowBack from "@/assets/icons/big-arrow-back-yellow.svg"
import { ColForm } from "@/styles/Policy";
import { RadioGroup } from "@/components/Common/Radio/Group";
import { Radio } from "@/components/Common/Radio";

export const Step1 = ({
  isMobile,
  perdonalDataForm,
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
    background: theme.colors.primary25,
    border: theme.colors.primary25,
    notFocused: true,
    placeholderColor: theme.colors.neutralGray500,
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
        Cuentanos más de ti, <br></br>
        <span style={{ fontFamily: theme.fonts.family.primaryBold , color: theme.colors.yellow500 }}>Maria del Pilar</span>
      </Text>
      <Grid container rowSpacing={{ xs: 2, sm: 2, md: 3  }} columnSpacing={{ xs: 2, sm: 2, md: 2 }} style={{ marginTop: "8px" }}>
        <Grid item md={12} xs={12}>
          <Select
            {...inputsProps}
            label={"País de nacimiento*"}
            width={"100%"}
            name="countryOfBirthId"
            value={perdonalDataForm.countryOfBirthId}
          >
            {/* {documentTypeOptions.map((ele, indx) => (
              <MenuItem key={indx} value={ele.value} style={{ fontFamily: theme.fonts.family.primary }}>{ele.label}</MenuItem>
            ))} */}
          </Select>
        </Grid>
        <Grid item md={12} xs={12}>
          <Select
            {...inputsProps}
            label={"Departamento/Estado de nacimiento*"}
            width={"100%"}
            name="departmentOfBirthId"
            value={perdonalDataForm.departmentOfBirthId}
          >
            {/* {documentTypeOptions.map((ele, indx) => (
              <MenuItem key={indx} value={ele.value} style={{ fontFamily: theme.fonts.family.primary }}>{ele.label}</MenuItem>
            ))} */}
          </Select>
        </Grid>
        <Grid item md={12} xs={12}>
          <Select
            {...inputsProps}
            label={"Ciudad de nacimiento*"}
            width={"100%"}
            name="cityOfBirthId"
            value={perdonalDataForm.cityOfBirthId}
          >
            {/* {documentTypeOptions.map((ele, indx) => (
              <MenuItem key={indx} value={ele.value} style={{ fontFamily: theme.fonts.family.primary }}>{ele.label}</MenuItem>
            ))} */}
          </Select>
        </Grid>
        <Grid item md={12} xs={12}>
          <Select
            {...inputsProps}
            label={"Nacionalidad*"}
            width={"100%"}
            name="nationality"
            value={perdonalDataForm.nationality}
          >
            {/* {documentTypeOptions.map((ele, indx) => (
              <MenuItem key={indx} value={ele.value} style={{ fontFamily: theme.fonts.family.primary }}>{ele.label}</MenuItem>
            ))} */}
          </Select>
        </Grid>
        <Grid item md={12} xs={12}>
          <Select
            {...inputsProps}
            label={"Estado civil*"}
            width={"100%"}
            name="civilStatus"
            value={perdonalDataForm.civilStatus}
          >
            {/* {documentTypeOptions.map((ele, indx) => (
              <MenuItem key={indx} value={ele.value} style={{ fontFamily: theme.fonts.family.primary }}>{ele.label}</MenuItem>
            ))} */}
          </Select>
        </Grid>
        <Grid item md={12} xs={12}>
          <TextField
            {...inputsProps}
            label={"Número de hijos*"}
            width={"100%"}
            id="numberOfChildren"
            value={perdonalDataForm.numberOfChildren}
            inputProps={{
              pattern: "\\d*",
              inputMode: "numeric"
            }}
          />
        </Grid>
        <Grid item md={12} xs={12}>
          <TextField
            {...inputsProps}
            label={"Profesión*"}
            width={"100%"}
            id="profession"
            value={perdonalDataForm.profession}
          />
        </Grid>
        <Grid item md={12} xs={12}>
          <Select
            {...inputsProps}
            label={"Actividad económica*"}
            width={"100%"}
            name="economicActivity"
            value={perdonalDataForm.economicActivity}
          >
            {/* {documentTypeOptions.map((ele, indx) => (
              <MenuItem key={indx} value={ele.value} style={{ fontFamily: theme.fonts.family.primary }}>{ele.label}</MenuItem>
            ))} */}
          </Select>
        </Grid>
        <Grid item md={12} xs={12} style={{ borderBottom: `1px solid ${theme.colors.primary25}` }}>
          <RadioGroup
            gap="5px"
            name="publicFamily"
            direction="row"
            label="¿Eres o tienes familiares Públicamente Expuestos (Actores, políticos, estrellas deportivas, etc...)?"
            labelFont={theme.fonts.family.primaryMedium}
            labelSize={theme.fonts.size.sm}
            labelColor={theme.colors.white}
            color={theme.colors.white}
            value={perdonalDataForm.publicFamily}
          >
            <Radio
              label="Yes"
              value={"Yes"}
              labelColor={theme.colors.white}
              radioColor={theme.colors.white}
            />
            <Radio
              label="No"
              value={"No"}
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
            name="countryOfResidenceId"
            value={perdonalDataForm.countryOfResidenceId}
          >
            {/* {documentTypeOptions.map((ele, indx) => (
              <MenuItem key={indx} value={ele.value} style={{ fontFamily: theme.fonts.family.primary }}>{ele.label}</MenuItem>
            ))} */}
          </Select>
        </Grid>
        <Grid item md={12} xs={12}>
          <Select
            {...inputsProps}
            label={"Departamento de residencia*"}
            width={"100%"}
            name="departmentOfResidenceId"
            value={perdonalDataForm.departmentOfResidenceId}
          >
            {/* {documentTypeOptions.map((ele, indx) => (
              <MenuItem key={indx} value={ele.value} style={{ fontFamily: theme.fonts.family.primary }}>{ele.label}</MenuItem>
            ))} */}
          </Select>
        </Grid>
        <Grid item md={12} xs={12}>
          <Select
            {...inputsProps}
            label={"Ciudad de residencia*"}
            width={"100%"}
            name="cityOfResidenceId"
            value={perdonalDataForm.cityOfResidenceId}
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