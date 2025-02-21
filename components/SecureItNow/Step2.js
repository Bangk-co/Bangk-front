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
  setPetsForm
}) => {
  const [panels, setPanels] = useState([]);
  const [activeKey, setActiveKey] = useState(1);

  useEffect(() => {
    if (petsForm.petsInfo.length !== petsForm.petsAmount) {
      setPetsForm((prev) => ({
        ...prev,
        petsInfo: Array.from({ length: petsForm.petsAmount }, (_, index) => ({
          ...prev.petsInfo[index], 
          id: index,
          petType: prev.petsInfo[index]?.petType || "",
          petName: prev.petsInfo[index]?.petName || "",
          petBreed: prev.petsInfo[index]?.petBreed || "",
          petAge: prev.petsInfo[index]?.petAge || "",
          petColor: prev.petsInfo[index]?.petColor || ""
        }))
      }));
    }
  }, [petsForm.petsAmount]);

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
          /> 
      })));
  }, [petsForm]);

  return (
    <Div>
      {!isMobile && (
        <Image src={catImg} alt="cat" height={391} style={{ position: "absolute", top: "380px", right: "-140px", zIndex: "1" }} />
      )}
      <CardCollapse panels={panels} activeKey={activeKey} setActiveKey={setActiveKey} />
    </Div>
  )
};
