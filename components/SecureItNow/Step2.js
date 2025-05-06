import React, { useState, useEffect } from "react";
import { Div, Text } from "@/styles/Common";
import { CardCollapse } from "../Common/CardCollapse";
import { PetInfoForm } from "./PetInfoForm";
import catImg from "@/assets/img/footprintCat.png";
import Image from "next/image";
import { Button } from "../Common/Button";
import { theme } from "@/styles/theme";

export const Step2 = ({
  isMobile,
  buttonProps,
  labelsProps,
  handleContinue,
  petsForm,
  setPetsForm,
  petTypeOptions,
  errorForm,
  setErrorForm,
  activeKey,
  setActiveKey,
}) => {
  const [panels, setPanels] = useState([]);
  const [errorAge, setErrorAge] = useState(
    petsForm?.pets?.map(() => ({
      error: false,
      message: ""
    }))
  );

  const amount = petsForm?.petsAmount ? Number(petsForm?.petsAmount) : petsForm?.pets?.length;

  useEffect(() => {
    const updatedPets = Array.from({ length: amount }, (_, index) => ({
      id: index,
      petTypeId: petsForm.pets[index]?.petTypeId || "",
      name: petsForm.pets[index]?.name || "",
      breed: petsForm.pets[index]?.breed || "",
      age: petsForm.pets[index]?.age || "",
      ageTime: petsForm.pets[index]?.ageTime || "Años",
      color: petsForm.pets[index]?.color || ""
    }));

    setPetsForm((prev) => ({
      ...prev,
      pets: updatedPets
    }));

    setErrorForm((prev) => ({
      ...prev,
      pets: Array.from({ length: amount }, () => ({
        name: { error: false, message: "" },
        breed: { error: false, message: "" },
        color: { error: false, message: "" },
        age: { error: false, message: "" },
        ageTime: { error: false, message: "" },
        petTypeId: { error: false, message: "" },
        id: { error: false, message: "" },
      }))
    }));
  }, [petsForm]);

  useEffect(() => {
    setPanels(Array.from({ length: amount }, (_, index) => 
      ({ key: `${index + 1}`, 
        header: `Datos mascota ${index + 1}`, 
        panel: 
          <PetInfoForm 
            labelsProps={labelsProps} 
            buttonProps={buttonProps} 
            handleContinue={handleContinue} 
            setPetsForm={setPetsForm}
            petsForm={petsForm}
            index={index}
            isMobile={isMobile}
            petTypeOptions={petTypeOptions}
            errorForm={errorForm?.pets[index]}
            setErrorForm={setErrorForm}
            setActiveKey={setActiveKey}
            activeKey={activeKey}
            errorAge={errorAge}
            setErrorAge={setErrorAge}
          /> 
      })));
  }, [petsForm, errorForm, errorAge]);

  const isFormValid = () => {
    return petsForm.pets.every((pet, index) => 
      pet.name && pet.breed && pet.age && pet.ageTime && pet.color && pet.petTypeId && !errorAge[index]?.error
    );
  };

  return (
    <Div direction="column">
      {!isMobile && (
        <Image src={catImg} alt="cat" height={391} style={{ position: "absolute", top: "380px", right: "-140px", zIndex: "1" }} />
      )}
      <Text
        color={theme.colors.gray1000}
        fontSize={theme.fonts.size.default2}
        fontWeight={theme.fonts.weight.bold}
        mt="30px"
      >
        Recuerda que la edad de tu mascota debe estar entre 6 meses y 10 años para poder adquirir esta asistencia.
      </Text>
      <CardCollapse panels={panels} activeKey={activeKey} setActiveKey={setActiveKey} />
      <Div m="30px 0 0 0">
        <Button
          {...buttonProps}
          width={isMobile ? "100%" : "230px"}
          onClick={handleContinue}
          labelWeight={theme.fonts.weight.regular}
          disabled={!isFormValid()}
        >
          Contratar asistencia
        </Button>
      </Div>
    </Div>
  )
};
