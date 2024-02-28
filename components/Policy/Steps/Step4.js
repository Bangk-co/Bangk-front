import React from "react";
import { TextField } from "@/components/Common/TextField";
import { Placeholder, Text } from "@/styles/Common";
import { theme } from "@/styles/theme";
import { Grid, MenuItem } from "@mui/material";
import { ColForm } from "@/styles/Policy";
import { Select } from "@/components/Common/Select";
import { RadioGroup } from "@/components/Common/Radio/Group";
import { Radio } from "@/components/Common/Radio";

export const Step4 = ({
  isMobile,
  formInfo,
  diseasesOptions,
  handleChangeNumber,
  handleChangeRadio
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
        Datos de tu <span style={{ fontFamily: theme.fonts.family.primaryBold , color: theme.colors.yellow500 }}>salud</span>
      </Text>
      <Grid container rowSpacing={{ xs: 2, sm: 2, md: 3  }} columnSpacing={{ xs: 2, sm: 2, md: 2 }} style={{ marginTop: "8px" }}>
        <Grid item md={6} xs={6}>
          <TextField
            {...inputsProps}
            label={"¿Cuál es tu peso en kilos? (kg)*"}
            placeholder={"Peso (kilos)"}
            id="weight"
            notFocused={true}
            value={formInfo.weight}
            inputProps={{
              pattern: "\\d*",
              inputMode: "numeric",
            }}
            onChange={handleChangeNumber}
          />
        </Grid>
        <Grid item md={6} xs={6}>
          <TextField
            {...inputsProps}
            label={"¿Cuál es tu estatura en centímetros? (cm)*"}
            placeholder={"Estatura (centímetros)"}
            id="height"
            notFocused={true}
            value={formInfo.height}
            inputProps={{
              pattern: "\\d*",
              inputMode: "numeric",
            }}
            onChange={handleChangeNumber}
          />
        </Grid>
        <Grid item md={12} xs={12}>
          <Select
            {...inputsProps}
            label={"¿Te han diagnosticado alguna(s) de estas enfermedades, circunstancias o eventos?*"}
            width={"100%"}
            name="diseases"
            value={formInfo.diseases}
            displayEmpty
            renderValue={(selected) => {
              if (selected === null) {
                return <Placeholder>Selecciona opciones</Placeholder>
              } else {
                return diseasesOptions.find((ele) => ele.id === selected)
                  ? diseasesOptions.find((ele) => ele.id === selected).name
                  : null
              }
            }}
          >
            {diseasesOptions.map((ele, indx) => (
              <MenuItem key={indx} value={ele.id} style={{ fontFamily: theme.fonts.family.primary }}>{ele.name}</MenuItem>
            ))}
          </Select>
        </Grid>
        <Grid item md={12} xs={12}>
          <RadioGroup
            gap="5px"
            name="hivActive"
            direction="row"
            label="¿Te han detectado la presencia de anticuerpos contra el virus V.I.H. productor del SIDA?"
            labelFont={theme.fonts.family.primaryMedium}
            labelSize={theme.fonts.size.sm}
            labelColor={theme.colors.white}
            color={theme.colors.white}
            value={formInfo.hivActive}
            onChange={(event) => handleChangeRadio(event, "hivActive")}
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
          <RadioGroup
            gap="5px"
            name="plannedMedicalProcidure"
            direction="row"
            label="¿Te encuentras actualmente en exámenes, estudios, investigación o te han indicado la necesidad de alguna cirugía o tratamiento que no te hayas realizado aún?"
            labelFont={theme.fonts.family.primaryMedium}
            labelSize={theme.fonts.size.sm}
            labelColor={theme.colors.white}
            color={theme.colors.white}
            value={formInfo.plannedMedicalProcidure}
            onChange={(event) => handleChangeRadio(event, "plannedMedicalProcidure")}
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
          <RadioGroup
            gap="5px"
            name="disability"
            direction="row"
            label="¿Tienes algún tipo de discapacidad, incapacidad o limitación física o mental?"
            labelFont={theme.fonts.family.primaryMedium}
            labelSize={theme.fonts.size.sm}
            labelColor={theme.colors.white}
            color={theme.colors.white}
            value={formInfo.disability}
            onChange={(event) => handleChangeRadio(event, "disability")}
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
      </Grid>
    </ColForm>
  )
}