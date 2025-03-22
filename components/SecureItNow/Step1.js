import React from "react";
import { Card, Signs, WrapperAmount } from "./styles";
import { Grid } from "@mui/material";
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
    setPetsForm
}) => {
  const radioOptions = [
    { label: "Mensual", value: "1" },
    { label: "Semestral", value: "2" },
    { label: "Anual", value: "3" }
  ];

  const handleRadio = (event) => {
    setPetsForm({
      ...petsForm,
      methodOfPayment: event.target.defaultValue
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
    setPetsForm({
      ...petsForm,
      [id]: value
    });
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
            value={petsForm.methodOfPayment}
            onChange={handleRadio}
          >
            {radioOptions.map((option, idx) => (
              <Radio
                key={idx}
                label={option.label}
                value={option.value}
                labelColor={theme.colors.gray1000}
                radioColor={theme.colors.gray1000}
                checked={petsForm.methodOfPayment === option.value}
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
            options={[]}
            value={petsForm.documentType}
            onChange={(event) => handleSelect("documentType", event)}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            {...labelsProps}
            id="documentNumber"
            label="Número de documento"
            placeholder={"Ingresa el número"}
            value={petsForm.documentNumber}
            onChange={handleChange}
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
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            {...labelsProps}
            id="email"
            label="Email"
            placeholder={"Ej: correo@email.com"}
            value={petsForm.email}
            onChange={handleChange}
          />
        </Grid>
        {isMobile ? (
          <>
            <Grid item xs={12} md={6}>
              <Select
                {...labelsProps}
                label="Indicativo"
                options={[]}
                value={petsForm.countryCode}
                onChange={(event) => handleSelect("countryCode", event)}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                {...labelsProps}
                id="phoneNumber"
                label="Número de celular"
                placeholder={"Ingresa tu número"}
                value={petsForm.phoneNumber}
                onChange={handleChange}
              />
            </Grid>
          </>
        ) : (
          <Grid item xs={12} md={6} style={{display: "flex", flexDirection: "row", gap: "5px"}}>
            <Div width="20%">
              <Select
                {...labelsProps}
                label="Indicativo"
                options={[]}
                value={petsForm.countryCode}
                onChange={(event) => handleSelect("countryCode", event)}
              />
            </Div>
            <Div width="75%">
              <TextField
                {...labelsProps}
                id="phoneNumber"
                label="Número de celular"
                placeholder={"Ingresa tu número"}
                value={petsForm.phoneNumber}
                onChange={handleChange}
              />
            </Div>
          </Grid>
        )}
        <Grid item xs={12} md={6}>
          <Button 
            {...buttonProps}
            width={isMobile ? "100%" : "124px"}
            onClick={handleContinue}
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
              onChange={(event) => setPetsForm({...petsForm, authorization: event.target.checked})}
            />
            <Text
              color={theme.colors.gray1000}
              size={theme.fonts.size.default2}
              mt="7px"
            >
              Doy autorización para el 
              <a 
                href="/legales/?section=policy" 
                style={{ color: theme.colors.orange500 }}
                target="_blank"
              > 
                tratamiento de mis datos por Bangk
              </a> 
              y poder ser contactado para la oferta del servicio.
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
