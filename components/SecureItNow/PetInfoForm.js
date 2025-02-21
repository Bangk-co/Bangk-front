import React from "react";
import { theme } from "@/styles/theme";
import { Grid } from "@mui/material";
import { Radio } from "../Common/Radio";
import { RadioGroup } from "../Common/Radio/Group";
import { Select } from "../Common/Select";
import { TextField } from "../Common/TextField";
import { Button } from "../Common/Button";

export const PetInfoForm = ({ 
  labelsProps,
  buttonProps,
  handleContinue,
  setPetsForm,
  petsForm,
  index,
  isMobile
}) => {
  const radioOptions = [
    {
      label: "Perro",
      value: "1"
    },
    {
      label: "Gato",
      value: "2"
    },
  ];

  const handleRadio = (event) => {
    const selectedValue = event.target.defaultValue;
  
    setPetsForm((prev) => {
      const updatedPets = [...prev.petsInfo];
      updatedPets[index] = { ...updatedPets[index], petType: selectedValue };
      return { ...prev, petsInfo: updatedPets };
    });
  };
  

  const handleChange = (event) => {
    const { id, value } = event.target;
    
    const updatedPets = [...petsForm.petsInfo];
    updatedPets[index] = { ...updatedPets[index], [id]: value };
    setPetsForm({ ...petsForm, petsInfo: updatedPets });
  };

  return (
    <Grid container spacing={2} width={"100%"} style={{ padding: "30px 20px 0px 20px" }}>
      <Grid item xs={12} md={6}>
        <RadioGroup
          name="petType"
          direction="row"
          label="Tipo de mascota"
          labelSize={theme.fonts.size.default2}
          labelColor={theme.colors.gray1000}
          onChange={handleRadio}
        >
          {radioOptions.map((option, idx) => (
            <Radio
              key={idx}
              label={option.label}
              value={option.value}
              labelColor={theme.colors.gray1000}
              radioColor={theme.colors.gray1000}
              checked={petsForm.petsInfo[index]?.petType === option.value}
            />
          ))}
        </RadioGroup>
      </Grid>
      <Grid item xs={12} md={6}>
        <TextField
          {...labelsProps}
          id="petName"
          label="Nombre de tu mascota"
          placeholder={"Cómo se llama?"}
          value={petsForm.petsInfo[index]?.petName}
          onChange={handleChange}
        />
      </Grid>
      <Grid item xs={12} md={6}>
        <Select
          {...labelsProps}
          id="petBreed"
          label="Raza"
          options={[]}
          value={petsForm.petsInfo[index]?.petBreed}
          onChange={handleChange}
        />
      </Grid>
      <Grid item xs={12} md={6}>
        <TextField
          {...labelsProps}
          id="petAge"
          label="Edad"
          placeholder={"Ingresa el número"}
          value={petsForm.petsInfo[index]?.petAge}
          onChange={handleChange}
        />
      </Grid>
      <Grid item xs={12} md={6}>
        <TextField
          {...labelsProps}
          id="petColor"
          label="Color"
          placeholder={"Indica tu nombre"}
          value={petsForm.petsInfo[index]?.petColor}
          onChange={handleChange}
        />
      </Grid>
      <Grid item xs={12} md={6}></Grid>
      <Grid item xs={12} md={6}>
        <Button 
          {...buttonProps}
          width={isMobile ? "100%" : "124px"}
          onClick={handleContinue}
          style={{ marginTop: "20px" }}
        >
          Continuar
        </Button>
      </Grid>
    </Grid>
  )
};
