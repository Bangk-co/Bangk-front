import React from "react";
import { theme } from "@/styles/theme";
import { Grid, MenuItem } from "@mui/material";
import { Select } from "../Common/Select";
import { TextField } from "../Common/TextField";
import { Button } from "../Common/Button";
import { Div, Text } from "@/styles/Common";
import { Autocomplete } from "../Common/Autocomplete";

export const BasicForm = ({
  labelsProps,
  buttonProps,
  setForm,
  form,
  index,
  isMobile,
  setActiveKey,
  documentTypeOptions,
  phoneCodesOptions,
  errorForm,
  setErrorForm,
}) => {
  const handleChange = (event) => {
    const { id, value } = event.target;

    const updatedBeneficiaries = [...form.beneficiariesInfo];
    updatedBeneficiaries[index] = {
      ...updatedBeneficiaries[index],
      [id]: value,
    };
    setForm({ ...form, beneficiariesInfo: updatedBeneficiaries });
    setErrorForm({});
  };

  const handleChangeNumber = (event) => {
    const { id, value } = event.target;
    const cleanedValue = value.replace(/[^0-9]/g, '');

    const updatedBeneficiaries = [...form.beneficiariesInfo];
    updatedBeneficiaries[index] = {
      ...updatedBeneficiaries[index],
      [id]: cleanedValue
    };
    setForm({ ...form, beneficiariesInfo: updatedBeneficiaries });
    setErrorForm({});
  };

  const handleSelect = (field, event) => {
    const { value } = event.target;

    const updatedBeneficiaries = [...form.beneficiariesInfo];
    updatedBeneficiaries[index] = {
      ...updatedBeneficiaries[index],
      [field]: value,
    };

    setForm({ ...form, beneficiariesInfo: updatedBeneficiaries });
    setErrorForm({});
  };

  const handleAutocomplete = (field, value) => {
    const phoneCodeId = phoneCodesOptions.find(
      (ele) => ele.label === value
    )?.value;

    const updatedBeneficiaries = [...form.beneficiariesInfo];
    updatedBeneficiaries[index] = {
      ...updatedBeneficiaries[index],
      [field]: phoneCodeId,
    };

    setForm({ ...form, beneficiariesInfo: updatedBeneficiaries });
    setErrorForm({});
  };

  return (
    <Grid
      container
      spacing={2}
      width={"100%"}
      style={{ padding: "30px 20px 0px 20px" }}
    >
      {index === 0 && form.beneficiary && (
        <>
          <Grid item xs={12} md={6}>
            <Text color={theme.colors.orange}>El titular es beneficiario</Text>
          </Grid>
          <Grid item xs={12} md={6} />
        </>
      )}

      <Grid item xs={12} md={6}>
        <Select
          {...labelsProps}
          label="Tipo de documento"
          value={form.beneficiariesInfo[index]?.documentType}
          onChange={(event) => handleSelect("documentType", event)}
          disabled={index === 0 && form.beneficiary}
          error={errorForm?.[`beneficiariesInfo[${index}].documentType`]?.error}
          helper={
            errorForm?.[`beneficiariesInfo[${index}].documentType`]?.error
              ? errorForm?.[`beneficiariesInfo[${index}].documentType`]?.message
              : ""
          }
        >
          {documentTypeOptions.map((ele, indx) => (
            <MenuItem
              key={indx}
              value={ele.value}
              style={{ fontFamily: theme.fonts.family.primary }}
            >
              {ele.label}
            </MenuItem>
          ))}
        </Select>
      </Grid>
      <Grid item xs={12} md={6}>
        <TextField
          {...labelsProps}
          id="documentNumber"
          label="Número de documento"
          placeholder={"Ingresa el número"}
          value={form.beneficiariesInfo[index]?.documentNumber}
          onChange={handleChangeNumber}
          disabled={index === 0 && form.beneficiary}
          error={
            errorForm?.[`beneficiariesInfo[${index}].documentNumber`]?.error
          }
          helper={
            errorForm?.[`beneficiariesInfo[${index}].documentNumber`]?.error
              ? errorForm?.[`beneficiariesInfo[${index}].documentNumber`]
                  ?.message
              : ""
          }
          inputProps={{
            maxLength: 13,
          }}
        />
      </Grid>
      <Grid item xs={12} md={6}>
        <TextField
          {...labelsProps}
          id="beneficiaryName"
          label="Nombre"
          placeholder={"Ingresa tu nombre"}
          value={form.beneficiariesInfo[index]?.beneficiaryName}
          onChange={handleChange}
          disabled={index === 0 && form.beneficiary}
          error={
            errorForm?.[`beneficiariesInfo[${index}].beneficiaryName`]?.error
          }
          helper={
            errorForm?.[`beneficiariesInfo[${index}].beneficiaryName`]?.error
              ? errorForm?.[`beneficiariesInfo[${index}].beneficiaryName`]
                  ?.message
              : ""
          }
        />
      </Grid>
      <Grid item xs={12} md={6}>
        <TextField
          {...labelsProps}
          id="beneficiaryLastname"
          label="Apellido"
          placeholder={"Ingresa tu apellido"}
          value={form.beneficiariesInfo[index]?.beneficiaryLastname}
          onChange={handleChange}
          disabled={index === 0 && form.beneficiary}
          error={
            errorForm?.[`beneficiariesInfo[${index}].beneficiaryLastname`]
              ?.error
          }
          helper={
            errorForm?.[`beneficiariesInfo[${index}].beneficiaryLastname`]
              ?.error
              ? errorForm?.[`beneficiariesInfo[${index}].beneficiaryLastname`]
                  ?.message
              : ""
          }
        />
      </Grid>
      <Grid item xs={12} md={6}>
        <TextField
          {...labelsProps}
          id="email"
          label="Email"
          placeholder={"Ej: correo@email.com"}
          value={form.beneficiariesInfo[index]?.email}
          onChange={handleChange}
          disabled={index === 0 && form.beneficiary}
          error={errorForm?.[`beneficiariesInfo[${index}].email`]?.error}
          helper={
            errorForm?.[`beneficiariesInfo[${index}].email`]?.error
              ? errorForm?.[`beneficiariesInfo[${index}].email`]?.message
              : ""
          }
        />
      </Grid>
      <Grid item xs={12} md={6}>
        <Div direction={isMobile ? "column" : "row"}>
          <Div width={isMobile ? "100%" : "25%"}>
            <Autocomplete
              {...labelsProps}
              disablePortal
              disableClearable
              noOptionsText="No hay opciones"
              width={"100%"}
              name="countryCode"
              label="Indicativo"
              options={phoneCodesOptions}
              getOptionLabel={(option) => `${option.label}`}
              value={phoneCodesOptions.find(
                (ele) => ele.value === form.beneficiariesInfo[index]?.countryCode
              )}
              onInputChange={(event, value) =>
                handleAutocomplete("countryCode", value)
              }
              renderInput={(params) => (
                <TextField
                  {...params}
                  {...labelsProps}
                  value={form.beneficiariesInfo[index]?.countryCode}
                />
              )}
            />
          </Div>
          <Div width={isMobile ? "100%" : "72%"}>
            <TextField
              {...labelsProps}
              id="phoneNumber"
              label="Número de celular"
              type="number"
              placeholder={"Ingresa tu número"}
              value={form.beneficiariesInfo[index]?.phoneNumber}
              onChange={handleChange}
              disabled={index === 0 && form.beneficiary}
              error={
                errorForm?.[`beneficiariesInfo[${index}].phoneNumber`]?.error
              }
              helper={
                errorForm?.[`beneficiariesInfo[${index}].phoneNumber`]?.error
                  ? errorForm?.[`beneficiariesInfo[${index}].phoneNumber`]
                      ?.message
                  : ""
              }
            />
          </Div>
        </Div>
      </Grid>

      <Grid item xs={12} md={6}>
        <Button
          {...buttonProps}
          width={isMobile ? "100%" : "124px"}
          labelWeight={theme.fonts.weight.regular}
          onClick={() => setActiveKey(`${index + 2}`)}
        >
          Continuar
        </Button>
      </Grid>
    </Grid>
  );
};
