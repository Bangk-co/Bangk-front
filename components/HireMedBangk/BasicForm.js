import React from "react";
import { theme } from "@/styles/theme";
import { Grid, MenuItem } from "@mui/material";
import { Select } from "../Common/Select";
import { TextField } from "../Common/TextField";
import { Button } from "../Common/Button";
import { Row, Text } from "@/styles/Common";

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
}) => {
  const handleChange = (event) => {
    const { id, value } = event.target;

    const updatedBeneficiaries = [...form.beneficiariesInfo];
    updatedBeneficiaries[index] = {
      ...updatedBeneficiaries[index],
      [id]: value,
    };
    setForm({ ...form, beneficiariesInfo: updatedBeneficiaries });
  };

  const handleSelect = (field, event) => {
    const { value } = event.target;

    const updatedBeneficiaries = [...form.beneficiariesInfo];
    updatedBeneficiaries[index] = {
      ...updatedBeneficiaries[index],
      [field]: value,
    };

    setForm({ ...form, beneficiariesInfo: updatedBeneficiaries });
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
          value={form.beneficiariesInfo[index].documentType}
          onChange={(event) => handleSelect("documentType", event)}
          disabled={index === 0 && form.beneficiary}
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
          value={form.beneficiariesInfo[index].documentNumber}
          onChange={handleChange}
          disabled={index === 0 && form.beneficiary}
        />
      </Grid>
      <Grid item xs={12} md={6}>
        <TextField
          {...labelsProps}
          id="beneficiaryName"
          label="Nombre"
          placeholder={"Indica tu nombre"}
          value={form.beneficiariesInfo[index].beneficiaryName}
          onChange={handleChange}
          disabled={index === 0 && form.beneficiary}
        />
      </Grid>
      <Grid item xs={12} md={6}>
        <TextField
          {...labelsProps}
          id="beneficiaryLastname"
          label="Apellido"
          placeholder={"Indica tu apellido"}
          value={form.beneficiariesInfo[index].beneficiaryLastname}
          onChange={handleChange}
          disabled={index === 0 && form.beneficiary}
        />
      </Grid>
      <Grid item xs={12} md={6}>
        <TextField
          {...labelsProps}
          id="email"
          label="Email"
          placeholder={"Ej: correo@email.com"}
          value={form.beneficiariesInfo[index].email}
          onChange={handleChange}
          disabled={index === 0 && form.beneficiary}
        />
      </Grid>
      <Grid item xs={12} md={6}>
        <Row>
          <Select
            {...labelsProps}
            label="Ind del país"
            value={form.beneficiariesInfo[index].countryCode}
            onChange={(event) => handleSelect("countryCode", event)}
            disabled={index === 0 && form.beneficiary}
          >
            {phoneCodesOptions.map((ele, indx) => (
              <MenuItem
                key={indx}
                value={ele.value}
                style={{ fontFamily: theme.fonts.family.primary }}
              >
                {ele.label}
              </MenuItem>
            ))}
          </Select>

          <TextField
            {...labelsProps}
            id="phoneNumber"
            label="Número de celular"
            placeholder={"Indica tu número"}
            value={form.beneficiariesInfo[index].phoneNumber}
            onChange={handleChange}
            disabled={index === 0 && form.beneficiary}
          />
        </Row>
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
