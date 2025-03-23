import React from "react";
import { Card, WrapperPetInfo, WrapperPlan } from "./styles";
import { Grid } from "@mui/material";
import { Div, Text } from "@/styles/Common";
import { theme } from "@/styles/theme";
import { Button } from "../Common/Button";
import dog from "@/assets/img/dog.png";
import Image from "next/image";
import dogIcon from "@/assets/icons/dog.svg";
import catIcon from "@/assets/icons/cat.svg";
import edit from "@/assets/icons/edit-gray.svg";
import trash from "@/assets/icons/trash-gray.svg";
import { numberFormat } from "@/utilities/helpers";

export const Step3 = ({ 
  isMobile,
  buttonProps,
  handleContinue,
  petsForm,
  setPetsForm,
  setSelectedTab,
  paymentOcurrencyOptions
}) => {
  const returnPlan = () => {
    const currentPlan = paymentOcurrencyOptions.find((option) => option.value === petsForm.paymentOcurrencyId);
    return currentPlan.label;
  };

  const handleEditPet = () => {
    setSelectedTab(1);
  }

  const handleDeletePet = (indx) => {
    const updatedPets = petsForm.pets.filter((_, i) => i !== indx);
    setPetsForm({ ...petsForm, pets: updatedPets });
  };

  const getPrice = (amount, frequency, paymentOcurrencyId) => {
    const prices = {
      monthly: [23800, 45220, 63546],
      semiannual: [135660, 257754, 358399],
      annual: [257040, 488376, 678671],
    };

    const additionalCosts = {
      monthly: 20825,
      semiannual: 98175,
      annual: 222768,
    };

    const frequencyMap = {
      [paymentOcurrencyId[0].value]: "monthly",
      [paymentOcurrencyId[1].value]: "semiannual",
      [paymentOcurrencyId[2].value]: "annual",
    };

    const frequencyKey = frequencyMap[frequency];
    if (!frequencyKey || !prices[frequencyKey]) {
      return 0;
    };

    const index = amount > 2 ? 2 : amount - 1;
    const basePrice = prices[frequencyKey][index];

    if (index < 0 || index >= prices[frequencyKey].length) {
      return 0;
    };

    const additionalCost = amount > 3 ? additionalCosts[frequencyKey] * (amount - 3) : 0;

    return basePrice + additionalCost;
  };

  return (
    <Card style={{ width: isMobile ? "100%" : "70%", alignSelf: "center" }}>
      <Text 
        color={theme.colors.gray150} 
        size={theme.fonts.size.h6}
        font={theme.fonts.family.primaryBold}
        mb="20px"
      >
        Aquí el resumen de tu asistencia
      </Text>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6} style={{ flexDirection: "column" }}>
          <Text
            color={theme.colors.gray1000}
            size={theme.fonts.size.default2}
            mb="10px"
          >
            Forma de pago seleccionada
          </Text>
          <WrapperPlan>
            {returnPlan()}
          </WrapperPlan>
        </Grid>
        <Grid item xs={12} md={6}>
          <Text
            color={theme.colors.gray1000}
            size={theme.fonts.size.default2}
            mb="10px"
          >
            Valor de tu asistencia {returnPlan()}
          </Text>
          <Text
            color={theme.colors.gray150}
            size={theme.fonts.size.h3s}
            font={theme.fonts.family.primaryBold}
            mb="10px"
          >
            $ {numberFormat(getPrice(petsForm.pets.length, petsForm.paymentOcurrencyId, paymentOcurrencyOptions))}
          </Text>
        </Grid>
        {petsForm.pets.length > 0 && petsForm.pets.map((pet, index) => (
          <Grid item xs={12} md={12} key={index}>
            <WrapperPetInfo>
              <Div align="center" gap="20px">
                <Image src={pet.petTypeId === 718 ? dogIcon : catIcon} alt="pet" />
                <Div direction="column">
                  <Text
                    font={theme.fonts.family.primaryBold}
                    size={isMobile ? theme.fonts.size.default : theme.fonts.size.h6}
                    color={theme.colors.gray150}
                  >
                    {pet.name}
                  </Text>
                  <Text
                    font={theme.fonts.family.primary}
                    size={isMobile ? theme.fonts.size.sm : theme.fonts.size.default}
                    color={theme.colors.gray150}
                    style={{ textAlign: "left" }}
                  >
                    {pet.breed}, {pet.age} {pet.ageTime}, {pet.color}
                  </Text>
                </Div>
              </Div>
              <Div gap="10px">
                <Image src={edit} alt="edit" style={{ cursor: "pointer" }} onClick={handleEditPet} />
                {petsForm.pets.length > 1 && <Image src={trash} alt="trash" style={{ cursor: "pointer" }} onClick={() => handleDeletePet(index)} />}
              </Div>
            </WrapperPetInfo>
          </Grid>
        ))}
        <Grid item xs={12} md={12} style={{ display: "flex", justifyContent: "center" }}>
          <Button 
            {...buttonProps}
            width={isMobile ? "100%" : "220px"}
            onClick={handleContinue}
            disabled={petsForm.pets.length === 0}
          >
            Pagar ahora
          </Button>
        </Grid>
      </Grid>
      {!isMobile && (
        <Image 
          src={dog} 
          alt="dog" 
          style={{
            position: "absolute",
            left: "-400px",
            bottom: "-32px"
          }}
        />
      )}
    </Card>
  );
};
