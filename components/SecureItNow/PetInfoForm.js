import React from "react";
import { theme } from "@/styles/theme";
import { Grid, MenuItem } from "@mui/material";
import { Radio } from "../Common/Radio";
import { RadioGroup } from "../Common/Radio/Group";
import { TextField } from "../Common/TextField";
import { Button } from "../Common/Button";
import { Select } from "../Common/Select";
import { Div } from "@/styles/Common";

export const PetInfoForm = ({ 
  labelsProps,
  buttonProps,
  handleContinue,
  setPetsForm,
  petsForm,
  index,
  isMobile,
  petTypeOptions,
  errorForm,
  setErrorForm
}) => {
  const ageTimeOptions = [
    { label: "Meses", value: "Meses" },
    { label: "Años", value: "Años" },
  ];

  const handleRadio = (event) => {
    const selectedValue = event.target.defaultValue;
  
    setPetsForm((prev) => {
      const updatedPets = [...prev.pets];
      updatedPets[index] = { ...updatedPets[index], petTypeId: Number(selectedValue) };
      return { ...prev, pets: updatedPets };
    });
    setErrorForm((prev) => {
      const updatedPets = [...prev.pets];
      updatedPets[index] = { ...updatedPets[index], petTypeId: { error: false, message: "" } };
      return { ...prev, pets: updatedPets };
    });
  };

  const handleChange = (event) => {
    const { id, value } = event.target;
    const cleanedValue = value.replace(/[^a-zA-ZáéíóúÁÉÍÓÚñÑ\s]/g, '');

    const updatedPets = [...petsForm.pets];
    updatedPets[index] = { ...updatedPets[index], [id]: cleanedValue };
    setPetsForm({ ...petsForm, pets: updatedPets });
    setErrorForm((prev) => {
      const updatedPets = [...prev.pets];
      updatedPets[index] = { ...updatedPets[index], [id]: { error: false, message: "" } };
      return { ...prev, pets: updatedPets };
    });
  };

  const handleChangeNumber = (event) => {
    const { id, value } = event.target;
    const cleanedValue = value.replace(/[^0-9]/g, '');

    const updatedPets = [...petsForm.pets];
    updatedPets[index] = { ...updatedPets[index], [id]: cleanedValue };
    setPetsForm({ ...petsForm, pets: updatedPets });
    setErrorForm((prev) => {
      const updatedPets = [...prev.pets];
      updatedPets[index] = { ...updatedPets[index], [id]: { error: false, message: "" } };
      return { ...prev, pets: updatedPets };
    });
  };

  const handleSelect = (id, event) => {
    const { value } = event.target;
    setPetsForm((prev) => {
      const updatedPets = [...prev.pets];
      updatedPets[index] = { ...updatedPets[index], [id]: value };
      return { ...prev, pets: updatedPets };
    });
  };

  const isFormValid = () => {
    return petsForm.pets.every(pet => 
      pet.name && pet.breed && pet.age && pet.ageTime && pet.color && pet.petTypeId
    );
  };

  return (
    <Grid container spacing={2} width={"100%"} style={{ padding: "30px 20px 0px 20px" }}>
      <Grid item xs={12} md={6}>
        <RadioGroup
          name="petTypeId"
          direction="row"
          label="Tipo de mascota"
          labelSize={theme.fonts.size.default2}
          labelColor={theme.colors.gray1000}
          onChange={handleRadio}
          value={petsForm.pets[index]?.petTypeId}
        >
          {petTypeOptions.map((option, idx) => (
            <Radio
              key={idx}
              label={option.label}
              value={option.value}
              labelColor={theme.colors.gray1000}
              radioColor={theme.colors.gray1000}
              checked={petsForm.pets[index]?.petTypeId === option.value}
              error={errorForm?.petTypeId?.error}
              helperText={errorForm?.petTypeId?.message}
            />
          ))}
        </RadioGroup>
      </Grid>
      <Grid item xs={12} md={6}>
        <TextField
          {...labelsProps}
          id="name"
          label="Nombre de tu mascota"
          placeholder={"Cómo se llama?"}
          value={petsForm.pets[index]?.name}
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
          id="breed"
          label="Raza"
          placeholder={"Ingresa la raza"}
          value={petsForm.pets[index]?.breed}
          onChange={handleChange}
          error={errorForm?.breed?.error}
          helperText={errorForm?.breed?.message}
          inputProps={{
            maxLength: 50,
          }}
        />
      </Grid>
      <Grid item xs={12} md={6} style={{display: "flex", flexDirection: "row"}}>
        <Div width="50%">
          <TextField
            {...labelsProps}
            id="age"
            label="Edad"
            placeholder={"Ingresa el número"}
            value={petsForm.pets[index]?.age}
            onChange={handleChangeNumber}
            error={errorForm?.age?.error}
            helperText={errorForm?.age?.message}
            inputProps={{
              maxLength: 3,
            }}
          />
        </Div>
        <Div width="45%">
          <Select
            {...labelsProps}
            label="Meses o años"
            value={petsForm.pets[index]?.ageTime}
            onChange={(event) => handleSelect("ageTime", event)}
          >
            {ageTimeOptions.map((option, idx) => (
              <MenuItem key={idx} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </Select>
        </Div>
      </Grid>
      <Grid item xs={12} md={6}>
        <TextField
          {...labelsProps}
          id="color"
          label="Color"
          placeholder={"Ingresa el color"}
          value={petsForm.pets[index]?.color}
          onChange={handleChange}
          error={errorForm?.color?.error}
          helperText={errorForm?.color?.message}
          inputProps={{
            maxLength: 50,
          }}
        />
      </Grid>
      <Grid item xs={12} md={6}></Grid>
      <Grid item xs={12} md={6}>
        <Button 
          {...buttonProps}
          width={isMobile ? "100%" : "124px"}
          onClick={handleContinue}
          style={{ marginTop: "20px" }}
          disabled={!isFormValid()}
        >
          Continuar
        </Button>
      </Grid>
    </Grid>
  )
};
