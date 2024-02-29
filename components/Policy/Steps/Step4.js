import React from "react";
import { TextField } from "@/components/Common/TextField";
import { Placeholder, Text } from "@/styles/Common";
import { theme } from "@/styles/theme";
import { Box, Chip, Grid, MenuItem } from "@mui/material";
import { ColForm, WrapperDisease } from "@/styles/Policy";
import { Select } from "@/components/Common/Select";
import { RadioGroup } from "@/components/Common/Radio/Group";
import { Radio } from "@/components/Common/Radio";
import { Checkbox } from "@/components/Common/Checkbox";
import close from "@/assets/icons/close-2.svg"
import Image from "next/image";

export const Step4 = ({
  isMobile,
  formInfo,
  setFormInfo,
  diseasesOptions,
  diseases,
  setDiseases
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

  const handleChangeDiseases = (event) => {
    const {
      target: { value },
    } = event;
    setDiseases(
      typeof value === 'string' ? value.split(',') : value,
    );
  };

  const handleDelete = (indx) => {
    const newDiseases = diseases.filter((ele, index) => index !== indx)
    setDiseases(newDiseases)
  }

  const MenuProps = {
    PaperProps: {
      style: {
        background: "#E4E4E5"
      },
    },
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
            height={diseases.length === 0 ? "40px" : "max-content"}
            name="diseases"
            multiple
            value={diseases}
            onChange={handleChangeDiseases}
            displayEmpty
            renderValue={(selected) => {
              if (selected.length === 0) {
                return <Placeholder>Selecciona opciones</Placeholder>
              } else {
                return (
                  <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                    {selected.map((value, indx) => (
                      <WrapperDisease key={indx}>
                        <Text
                          color={theme.colors.white}
                          font={theme.fonts.primaryMedium}
                          size={theme.fonts.size.sm}
                        >
                          {value}
                        </Text>
                        <span
                          onMouseDown={(event) => {
                            event.stopPropagation();
                            event.preventDefault();
                            handleDelete(indx);
                          }}
                          style={{ cursor: "pointer" }}
                        >
                          <Image
                            alt="delete"
                            src={close}
                          />
                        </span>
                      </WrapperDisease>
                    ))}
                  </Box>
                )
              }
            }}
            MenuProps={MenuProps}
          >
            {diseasesOptions.map((ele, indx) => (
              <MenuItem key={indx} value={ele.name} style={{ fontFamily: theme.fonts.family.primary }}>
                <Checkbox borderColor={theme.colors.neutralGray500} checked={diseases.indexOf(ele.name) > -1} />
                {ele.name}
              </MenuItem>
            ))}
          </Select>
        </Grid>
        {diseases.length > 0 && (
          <Grid item md={12} xs={12}>
            <TextField
              {...inputsProps}
              label={"Amplia información de tu diagnóstico, tratamiento y estado actual*"}
              id="diseasesMoreInfo"
              notFocused={true}
              value={formInfo.diseasesMoreInfo}
              onChange={handleChangeText}
            />
          </Grid>
        )}
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
        {formInfo.plannedMedicalProcidure && (
          <Grid item md={12} xs={12}>
            <TextField
              {...inputsProps}
              label={"Amplia información de tu diagnóstico, tratamiento y estado actual*"}
              id="plannedMedicalProcidureMoreInfo"
              notFocused={true}
              value={formInfo.plannedMedicalProcidureMoreInfo}
              onChange={handleChangeText}
            />
          </Grid>
        )}
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
        {formInfo.disability && (
          <Grid item md={12} xs={12}>
            <TextField
              {...inputsProps}
              label={"Amplia información de tu diagnóstico, tratamiento y estado actual*"}
              id="disabilityMoreInfo"
              notFocused={true}
              value={formInfo.disabilityMoreInfo}
              onChange={handleChangeText}
            />
          </Grid>
        )}
      </Grid>
    </ColForm>
  )
}