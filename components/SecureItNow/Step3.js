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

export const Step3 = ({ 
    isMobile,
    buttonProps,
    handleContinue,
    petsForm,
    setPetsForm,
    setSelectedTab
}) => {
  const returnPlan = () => {
    switch (petsForm.methodOfPayment) {
      case "1":
        return "Mensual";
      case "2":
        return "Semestral";
      case "3":
        return "Anual";
    }
  };

  const handleEditPet = () => {
    setSelectedTab(1);
  }

  const handleDeletePet = (indx) => {
    const updatedPets = petsForm.petsInfo.filter((_, i) => i !== indx);
    setPetsForm({ ...petsForm, petsInfo: updatedPets });
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
            $85,000
          </Text>
        </Grid>
        {petsForm.petsInfo.length > 0 && petsForm.petsInfo.map((pet, index) => (
          <Grid item xs={12} md={12} key={index}>
            <WrapperPetInfo>
              <Div align="center" gap="20px">
                <Image src={pet.petType === "1" ? dogIcon : catIcon} alt="pet" />
                <Div direction="column">
                  <Text
                    font={theme.fonts.family.primaryBold}
                    size={isMobile ? theme.fonts.size.default : theme.fonts.size.h6}
                    color={theme.colors.gray150}
                  >
                    {pet.petName}
                  </Text>
                  <Text
                    font={theme.fonts.family.primary}
                    size={isMobile ? theme.fonts.size.sm : theme.fonts.size.default}
                    color={theme.colors.gray150}
                    style={{ textAlign: "left" }}
                  >
                    {pet.petBreed}, {pet.petAge}, {pet.petColor}
                  </Text>
                </Div>
              </Div>
              <Div gap="10px">
                <Image src={edit} alt="edit" style={{ cursor: "pointer" }} onClick={handleEditPet} />
                <Image src={trash} alt="trash" style={{ cursor: "pointer" }} onClick={() => handleDeletePet(index)} />
              </Div>
            </WrapperPetInfo>
          </Grid>
        ))}
        <Grid item xs={12} md={12} style={{ display: "flex", justifyContent: "center" }}>
          <Button 
            {...buttonProps}
            width={isMobile ? "100%" : "220px"}
            onClick={handleContinue}
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
