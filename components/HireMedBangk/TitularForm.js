import React, { useEffect } from "react";
import { theme } from "@/styles/theme";
import { Grid, MenuItem } from "@mui/material";
import { Select } from "../Common/Select";
import { TextField } from "../Common/TextField";
import { Button } from "../Common/Button";
import { Row, Text } from "@/styles/Common";
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
}) => {
  useEffect(() => {
    if (form.beneficiary) {
      const updatedForm = { ...form };
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
      setForm(updatedForm);
    } else {
      const updatedForm = { ...form };
      updatedForm.beneficiariesInfo[0] = {
        ...updatedForm.beneficiariesInfo[0],
        beneficiaryName: "",
        beneficiaryLastname: "",
        documentNumber: "",
        documentType: "",
        email: "",
        countryCode: "",
        phoneNumber: "",
      };
      setForm(updatedForm);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [form.beneficiary]);

  const handleChange = (event) => {
    const { id, value } = event.target;
    const updatedForm = { ...form };
    updatedForm[id] = value;

    setForm(updatedForm);
  };

  const handleSelect = (field, event) => {
    const { value } = event.target;
    const updatedForm = { ...form };
    updatedForm[field] = value;

    setForm(updatedForm);
  };

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
          value={form.documentNumber}
          onChange={handleChange}
        />
      </Grid>
      <Grid item xs={12} md={6}>
        <TextField
          {...labelsProps}
          id="name"
          label="Nombre"
          placeholder={"Indica tu nombre"}
          value={form.name}
          onChange={handleChange}
        />
      </Grid>
      <Grid item xs={12} md={6}>
        <TextField
          {...labelsProps}
          id="lastName"
          label="Apellido"
          placeholder={"Indica tu apellido"}
          value={form.lastName}
          onChange={handleChange}
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
        />
      </Grid>
      <Grid item xs={12} md={6}>
        <Row>
          <Select
            {...labelsProps}
            label="Ind del país"
            value={form.countryCode}
            onChange={(event) => handleSelect("countryCode", event)}
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
            value={form.phoneNumber}
            onChange={handleChange}
          />
        </Row>
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
        >
          Continuar
        </Button>
      </Grid>
    </Grid>
  );
};
