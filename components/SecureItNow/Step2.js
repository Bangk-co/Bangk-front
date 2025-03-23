import React, { useState, useEffect } from "react";
import { Div } from "@/styles/Common";
import { CardCollapse } from "../Common/CardCollapse";
import { PetInfoForm } from "./PetInfoForm";
import catImg from "@/assets/img/footprintCat.png";
import Image from "next/image";

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
  setActiveKey
}) => {
  const [panels, setPanels] = useState([]);

  useEffect(() => {
    const updatedPets = Array.from({ length: petsForm.petsAmount }, (_, index) => ({
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
      pets: Array.from({ length: petsForm.petsAmount }, () => ({
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
    setPanels(Array.from({ length: petsForm.petsAmount }, (_, index) => 
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
          /> 
      })));
  }, [petsForm, errorForm]);

  return (
    <Div>
      {!isMobile && (
        <Image src={catImg} alt="cat" height={391} style={{ position: "absolute", top: "380px", right: "-140px", zIndex: "1" }} />
      )}
      <CardCollapse panels={panels} activeKey={activeKey} setActiveKey={setActiveKey} />
    </Div>
  )
};
