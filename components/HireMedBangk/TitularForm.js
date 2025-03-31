import React, { useEffect, useState } from "react";
import { theme } from "@/styles/theme";
import { Grid, MenuItem } from "@mui/material";
import { Select } from "../Common/Select";
import { TextField } from "../Common/TextField";
import { Button } from "../Common/Button";
import { Div, Row, Text } from "@/styles/Common";
import { Checkbox } from "../Common/Checkbox";

export const TitularForm = ({
  labelsProps,
  buttonProps,
  setForm,
  form,
  isMobile,
  setActiveKey,
  documentTypeOptions,
  phoneCodesOptions,
  errorForm,
  setErrorForm,
}) => {
  const [isFormValid, setIsFormValid] = useState(false);
  const updateBeneficiaryInfo = (updatedForm) => {
    updatedForm.beneficiariesInfo[0] = {
      ...updatedForm.beneficiariesInfo[0],
      beneficiaryName: updatedForm.name,
      beneficiaryLastname: updatedForm.lastName,
      documentNumber: updatedForm.documentNumber,
      documentType: updatedForm.documentType,
      email: updatedForm.email,
      countryCode: updatedForm.countryCode,
      phoneNumber: updatedForm.phoneNumber,
    };
    return updatedForm;
  };

  useEffect(() => {
    if (form.beneficiary) {
      const updatedForm = { ...form };
      setForm(updateBeneficiaryInfo(updatedForm));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [form.beneficiary]);

  const handleChange = (event) => {
    const { id, value } = event.target;
    const updatedForm = { ...form };
    updatedForm[id] = value;

    if (form.beneficiary) {
      setForm(updateBeneficiaryInfo(updatedForm));
    } else {
      setForm(updatedForm);
    }

    setErrorForm({});
  };

  const handleSelect = (field, event) => {
    const { value } = event.target;
    const updatedForm = { ...form };
    updatedForm[field] = value;

    if (form.beneficiary) {
      setForm(updateBeneficiaryInfo(updatedForm));
    } else {
      setForm(updatedForm);
    }
    setErrorForm(null);
  };

  const validateForm = () => {
    const isValid =
      form.documentType &&
      form.documentNumber &&
      form.name &&
      form.lastName &&
      form.email &&
      form.countryCode &&
      form.phoneNumber;

    setIsFormValid(isValid);
  };
  useEffect(() => {
    validateForm();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [form]);

  return (
    <Grid
      container
      spacing={2}
      width={"100%"}
      style={{ padding: "30px 20px 0px 20px" }}
    >
      <Grid item xs={12} md={6}>
        <Select
          {...labelsProps}
          label="Tipo de documento"
          value={form.documentType}
          onChange={(event) => handleSelect("documentType", event)}
          error={errorForm?.documentType?.error}
          helper={errorForm?.documentType?.message}
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
          type="number"
          placeholder={"Ingresa el número"}
          value={form.documentNumber}
          onChange={handleChange}
          error={errorForm?.documentNumber?.error}
          helper={
            errorForm?.documentNumber?.error
              ? errorForm?.documentNumber?.message
              : ""
          }
        />
      </Grid>
      <Grid item xs={12} md={6}>
        <TextField
          {...labelsProps}
          id="name"
          label="Nombre"
          placeholder={"Ingresa tu nombre"}
          value={form.name}
          onChange={handleChange}
          error={errorForm?.name?.error}
          helper={errorForm?.name?.message}
        />
      </Grid>
      <Grid item xs={12} md={6}>
        <TextField
          {...labelsProps}
          id="lastName"
          label="Apellido"
          placeholder={"Ingresa tu apellido"}
          value={form.lastName}
          onChange={handleChange}
          error={errorForm?.lastName?.error}
          helper={errorForm?.lastName?.message}
        />
      </Grid>
      <Grid item xs={12} md={6}>
        <TextField
          {...labelsProps}
          id="email"
          label="Email"
          placeholder={"Ej: correo@email.com"}
          value={form.email}
          onChange={handleChange}
          error={errorForm?.email?.error}
          helper={errorForm?.email?.message}
        />
      </Grid>
      <Grid item xs={12} md={6}>
        <Div direction={isMobile ? "column" : "row"}>
          <Div width={isMobile ? "100%" : "25%"}>
            <Select
              {...labelsProps}
              label={"Indicativo"}
              value={form.countryCode}
              onChange={(event) => handleSelect("countryCode", event)}
              error={errorForm?.countryCode?.error}
              helper={
                errorForm?.countryCode?.error
                  ? errorForm?.countryCode?.message
                  : ""
              }
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
          </Div>
          <Div width={isMobile ? "100%" : "72%"}>
            <TextField
              {...labelsProps}
              id="phoneNumber"
              label="Número de celular"
              type="number"
              placeholder={"Ingresa tu número"}
              value={form.phoneNumber}
              onChange={handleChange}
              error={errorForm?.phoneNumber?.error}
              helper={errorForm?.phoneNumber?.message}
            />
          </Div>
        </Div>
      </Grid>
      <Grid item xs={12} md={6}>
        <Row m="22px 0 0 0">
          <Checkbox
            borderColor={theme.colors.gray1000}
            width="22px"
            checked={form.beneficiary}
            onChange={(event) =>
              setForm({
                ...form,
                beneficiary: event.target.checked,
              })
            }
          />
          <Text
            color={theme.colors.gray1000}
            size={theme.fonts.size.default2}
            mt="7px"
          >
            Tambien soy beneficiario
          </Text>
        </Row>
      </Grid>
      <Grid item xs={12} md={6}></Grid>
      <Grid item xs={12} md={6}>
        <Button
          {...buttonProps}
          width={isMobile ? "100%" : "124px"}
          onClick={() => setActiveKey("1")}
          labelWeight={theme.fonts.weight.regular}
          disabled={!isFormValid}
        >
          Continuar
        </Button>
      </Grid>
    </Grid>
  );
};
