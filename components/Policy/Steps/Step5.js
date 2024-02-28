import React from "react";
import { Text } from "@/styles/Common";
import { theme } from "@/styles/theme";
import { Grid, MenuItem } from "@mui/material";
import { ColForm } from "@/styles/Policy";
import { RadioGroup } from "@/components/Common/Radio/Group";
import { Radio } from "@/components/Common/Radio";
import { TextField } from "@/components/Common/TextField";
import { Select } from "@/components/Common/Select";

export const Step5 = ({
  isMobile,
  formInfo,
  documentTypeOptions,
  handleSelect,
  handleChangeNumber,
  handleChangeRadio,
  handleChangeText
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
        Datos <span style={{ fontFamily: theme.fonts.family.primaryBold , color: theme.colors.yellow500 }}>adicionales</span>
      </Text>
      <Grid container rowSpacing={{ xs: 2, sm: 2, md: 3  }} columnSpacing={{ xs: 2, sm: 2, md: 2 }} style={{ marginTop: "8px" }}>
        <Grid item md={12} xs={12}>
          <RadioGroup
            gap="5px"
            name="convicted"
            direction="row"
            label="¿Has sido indiciado, investigado, procesado, inculpado, imputado, detenido y/o condenado por algún delito?"
            labelFont={theme.fonts.family.primaryMedium}
            labelSize={theme.fonts.size.sm}
            labelColor={theme.colors.white}
            color={theme.colors.white}
            value={formInfo.convicted}
            onChange={(event) => handleChangeRadio(event, "convicted")}
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
            name="lifeEnsure"
            direction="row"
            label="¿Tienes algún seguro de vida individual o de accidentes personales con Allianz o con cualquier aseguradora diferentes a aquellos que respaldan deudas en entidades financieras?"
            labelFont={theme.fonts.family.primaryMedium}
            labelSize={theme.fonts.size.sm}
            labelColor={theme.colors.white}
            color={theme.colors.white}
            value={formInfo.lifeEnsure}
            onChange={(event) => handleChangeRadio(event, "lifeEnsure")}
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
            name="beneficiaries"
            direction="row"
            label="*En caso de que faltes y exista algún remanente después de pagar el saldo total de tu deuda, puedes escoger quién o quienes pueden recibirlo por parte de la aseguradora"
            labelFont={theme.fonts.family.primaryMedium}
            labelSize={theme.fonts.size.sm}
            labelColor={theme.colors.white}
            color={theme.colors.white}
            value={formInfo.beneficiaries}
            onChange={(event) => handleChangeRadio(event, "beneficiaries")}
          >
            <Radio
              label="Mis herederos legales"
              value={true}
              labelColor={theme.colors.white}
              radioColor={theme.colors.white}
            />
            <Radio
              label="Designado por mi"
              value={false}
              labelColor={theme.colors.white}
              radioColor={theme.colors.white}
            />
          </RadioGroup>
        </Grid>
        {!formInfo.beneficiaries && (
          <>
            <Grid item md={12} xs={12}>
              <TextField
                {...inputsProps}
                label={"Nombre completo*"}
                width={"100%"}
                placeholder={"Nombre"}
                id="beneficiaryName"
                value={formInfo.beneficiaryName}
                inputProps={{ maxLength: 50 }}
                onChange={handleChangeText}
              />
            </Grid>
            <Grid item md={4} xs={4}>
              <Select
                {...inputsProps}
                label={"Tipo de documento*"}
                width={"100%"}
                name="beneficiaryIdentificationTypeId"
                value={formInfo.beneficiaryIdentificationTypeId}
                onChange={handleSelect}
              >
                {documentTypeOptions.map((ele, indx) => (
                  <MenuItem key={indx} value={ele.id} style={{ fontFamily: theme.fonts.family.primary }}>{ele.name}</MenuItem>
                ))}
              </Select>
            </Grid>
            <Grid item md={8} xs={8} style={{ marginTop: isMobile ? "14px" : "0px" }}>
              <TextField
                {...inputsProps}
                label={"Número de documento*"}
                width={"100%"}
                placeholder={"Escribir número"}
                id="beneficiaryIdentificationNumber"
                value={formInfo.beneficiaryIdentificationNumber}
                inputProps={{
                  maxLength: 15,
                  pattern: formInfo.beneficiaryIdentificationTypeId !== 78 && "\\d*",
                  inputMode: formInfo.beneficiaryIdentificationTypeId !== 78 && "numeric"
                }}
              />
            </Grid>
          </>
        )}
      </Grid>
    </ColForm>
  )
}