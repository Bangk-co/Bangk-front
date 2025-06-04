import React from "react";
import { Card, Signs, WrapperAmount } from "./styles";
import { Alert, Grid, MenuItem } from "@mui/material";
import { RadioGroup } from "../Common/Radio/Group";
import { Radio } from "../Common/Radio";
import { Div, Row, Text } from "@/styles/Common";
import { Select } from "../Common/Select";
import { TextField } from "../Common/TextField";
import { Checkbox } from "../Common/Checkbox";
import { theme } from "@/styles/theme";
import { Button } from "../Common/Button";
import dog from "@/assets/img/dog.png";
import Image from "next/image";

export const Step1 = ({ 
  isMobile,
  buttonProps,
  labelsProps, 
  handleContinue,
  petsForm,
  setPetsForm,
  indicativesOptions,
  documentTypeOptions,
  paymentOcurrencyOptions,
  setTreatPersonalDataDate,
  setErrorForm,
  errorForm,
  errorValidateUser,
}) => {
  const handleRadio = (event) => {
    setPetsForm({
      ...petsForm,
      paymentOcurrencyId: event.target.defaultValue
    });
  };

  const handleSelect = (id, event) => {
    setPetsForm({
      ...petsForm,
      [id]: event.target.value
    });
  };

  const handleChange = (event) => {
    const { id, value } = event.target;
    const cleanedValue = value.replace(/[^a-zA-ZáéíóúÁÉÍÓÚñÑ\s]/g, '');

    setPetsForm({
      ...petsForm,
      [id]: cleanedValue
    });
    setErrorForm({...errorForm, [id]: { error: false, message: "" }});
  };

  const handleChangeEmail = (event) => {
    const { id, value } = event.target;

    setPetsForm({
      ...petsForm,
      [id]: value
    });
    setErrorForm({...errorForm, [id]: { error: false, message: "" }});
  };

  const handleChangeNumber = (event) => {
    const { id, value } = event.target;
    const cleanedValue = value.replace(/[^0-9]/g, '');

    setPetsForm({
      ...petsForm,
      [id]: cleanedValue
    });
    setErrorForm({...errorForm, [id]: { error: false, message: "" }});
  };

  const handleAuthorization = (event) => {
    const { checked } = event.target;
    const acceptDate = new Date();

    setTreatPersonalDataDate(acceptDate);
    setPetsForm({
      ...petsForm,
      authorization: checked
    });
  };

  const isFormValid = () => {
    return (
      petsForm.documentNumber &&
      petsForm.name &&
      petsForm.lastName &&
      petsForm.email &&
      petsForm.phoneNumber &&
      petsForm.paymentOcurrencyId &&
      petsForm.documentTypeId &&
      petsForm.authorization
    );
  };
  return (
    <Card>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6} >
          <RadioGroup
            name="paymentMethod"
            direction="row"
            label="Forma de pago"
            labelSize={theme.fonts.size.default2}
            labelColor={theme.colors.gray1000}
            value={Number(petsForm.paymentOcurrencyId)}
            onChange={handleRadio}
          >
            {paymentOcurrencyOptions.map((option, idx) => (
              <Radio
                key={idx}
                label={option.label}
                value={option.value}
                labelColor={theme.colors.gray1000}
                radioColor={theme.colors.gray1000}
                checked={Number(petsForm.paymentOcurrencyId) === Number(option.value)}
              />
            ))}
          </RadioGroup>
        </Grid>
        <Grid item xs={12} md={6}>
          <Text color={theme.colors.gray1000} size={theme.fonts.size.default2}>
            Cantidad de mascotas
          </Text>
          <Div gap="5px" m="2px 0 0 0">
            <Signs onClick={() => petsForm.petsAmount > 1 && setPetsForm({...petsForm, petsAmount: petsForm.petsAmount - 1})}>-</Signs>
            <WrapperAmount>{petsForm.petsAmount || 1}</WrapperAmount>
            <Signs onClick={() => setPetsForm({...petsForm, petsAmount: petsForm.petsAmount + 1})}>+</Signs>
          </Div>
        </Grid>
        <Grid item xs={12} md={6}>
          <Select
            {...labelsProps}
            label="Tipo de documento"
            value={petsForm.documentTypeId}
            onChange={(event) => handleSelect("documentTypeId", event)}
          >
            {documentTypeOptions.map((ele, indx) => (
              <MenuItem key={indx} value={ele.value}>
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
            value={petsForm.documentNumber}
            onChange={handleChangeNumber}
            error={errorForm?.documentNumber?.error}
            helperText={errorForm?.documentNumber?.message}
            inputProps={{
              maxLength: 13,
            }}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            {...labelsProps}
            id="name"
            label="Nombre"
            placeholder={"Ingresa tu nombre"}
            value={petsForm.name}
            onChange={handleChange}
            error={errorForm?.name?.error}
            helperText={errorForm?.name?.message}
            inputProps={{
              maxLength: 50,
            }}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            {...labelsProps}
            id="lastName"
            label="Apellido"
            placeholder={"Ingresa tu apellido"}
            value={petsForm.lastName}
            onChange={handleChange}
            error={errorForm?.lastName?.error}
            helperText={errorForm?.lastName?.message}
            inputProps={{
              maxLength: 50,
            }}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            {...labelsProps}
            id="email"
            label="Email"
            placeholder={"Ej: correo@email.com"}
            value={petsForm.email}
            onChange={handleChangeEmail}
            error={errorForm?.email?.error}
            helperText={errorForm?.email?.message}
            inputProps={{
              maxLength: 256,
            }}
          />
        </Grid>
        {isMobile ? (
          <>
            <Grid item xs={12} md={6}>
              <Select
                {...labelsProps}
                label="Indicativo"
                options={indicativesOptions}
                value={petsForm.countryCodePhoneId}
                onChange={(event) => handleSelect("countryCodePhoneId", event)}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                {...labelsProps}
                id="phoneNumber"
                label="Número de celular"
                placeholder={"Ingresa tu número"}
                value={petsForm.phoneNumber}
                onChange={handleChangeNumber}
                error={errorForm?.phoneNumber?.error}
                helperText={errorForm?.phoneNumber?.message}
                inputProps={{
                  maxLength: 15,
                }}
              />
            </Grid>
          </>
        ) : (
          <Grid item xs={12} md={6} style={{display: "flex", flexDirection: "row"}}>
            <Div width="25%">
              <Select
                {...labelsProps}
                label="Indicativo"
                value={petsForm.countryCodePhoneId}
                onChange={(event) => handleSelect("countryCodePhoneId", event)}
              >
                {indicativesOptions.map((ele, indx) => (
                  <MenuItem key={indx} value={ele.value}>
                    {ele.label}
                  </MenuItem>
                ))}
              </Select>
            </Div>
            <Div width="72%">
              <TextField
                {...labelsProps}
                id="phoneNumber"
                label="Número de celular"
                placeholder={"Ingresa tu número"}
                value={petsForm.phoneNumber}
                onChange={handleChangeNumber}
                error={errorForm?.phoneNumber?.error}
                helperText={errorForm?.phoneNumber?.message}
                inputProps={{
                  maxLength: 15,
                }}
              />
            </Div>
          </Grid>
        )}
        {errorValidateUser.error && (
          <Grid item xs={12} md={12}>
            <Alert severity="error">
              {errorValidateUser.message}
            </Alert>
          </Grid>
        )}
        <Grid item xs={12} md={6}>
          <Button 
            {...buttonProps}
            width={isMobile ? "100%" : "124px"}
            onClick={handleContinue}
            disabled={!isFormValid()}
          >
            Continuar
          </Button>
        </Grid>
        <Grid item xs={12} md={6}>
          <Row>
            <Checkbox 
              borderColor={theme.colors.gray1000}
              width="22px"
              checked={petsForm.authorization}
              onChange={handleAuthorization}
            />
            <Text
              color={theme.colors.gray1000}
              size={theme.fonts.size.default2}
              mt="7px"
            >
              Doy autorización para el {" "}
              <a 
                href="/legales/?section=policy" 
                style={{ color: theme.colors.orange500 }}
                target="_blank"
              > 
                tratamiento de mis datos por Bangk
              </a> 
              {""} y poder ser contactado para la oferta del servicio.
            </Text>
          </Row>
        </Grid>
      </Grid>
      {!isMobile && 
        <Image 
          src={dog} 
          alt="dog" 
          style={{
            position: "absolute",
            left: "-300px",
            bottom: "-32px",
            zIndex: 0,
            pointerEvents: "none"
          }}
        />
      }
    </Card>
  );
};
