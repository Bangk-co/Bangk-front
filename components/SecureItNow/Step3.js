import React from "react";
import { Card, WrapperPetInfo } from "./styles";
import { Grid } from "@mui/material";
import { Div, Text } from "@/styles/Common";
import { theme } from "@/styles/theme";
import { Button } from "../Common/Button";
import dog from "@/assets/img/dog.png";
import Image from "next/image";
import dogIcon from "@/assets/icons/dog.svg";
import edit from "@/assets/icons/edit-gray.svg";
import trash from "@/assets/icons/trash-gray.svg";

export const Step3 = ({ 
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
    <Card>
      <Text 
        color={theme.colors.gray150} 
        size={theme.fonts.size.h6}
        font={theme.fonts.family.primaryBold}
        mb="20px"
      >
        Aquí el resumen de tu seguro
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
          <Button
            background={theme.colors.blue200}
            labelColor={theme.colors.white}
            font={theme.fonts.family.primary}
            size={theme.fonts.size.h6}
            border={theme.colors.blue200}
            hover={theme.colors.blue200}
            borderHover={theme.colors.blue200}
            width="155px"
            height="40px"
            borderRadius="50px"
          >
            {returnPlan()}
          </Button>
        </Grid>
        <Grid item xs={12} md={6}>
          <Text
            color={theme.colors.gray1000}
            size={theme.fonts.size.default2}
            mb="10px"
          >
            Valor de tu seguro {returnPlan()}
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
                <Image src={dogIcon} alt="dog" />
                <Div direction="column">
                  <Text
                    font={theme.fonts.family.primaryBold}
                    size={theme.fonts.size.h6}
                    color={theme.colors.gray150}
                  >
                    {pet.petName}
                  </Text>
                  <Text
                    font={theme.fonts.family.primary}
                    size={theme.fonts.size.default}
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
        <Grid item xs={12} md={6}>
          <Button 
            {...buttonProps}
            width="147px"
            onClick={handleContinue}
          >
            Pagar ahora
          </Button>
        </Grid>
      </Grid>
      <Image 
        src={dog} 
        alt="dog" 
        style={{
          position: "absolute",
          left: "-300px",
          bottom: "-32px"
        }}
      />
    </Card>
  );
};
