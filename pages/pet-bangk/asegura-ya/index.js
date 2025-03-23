import Breadcrumbs from "@/components/Common/Breadcrumbs";
import React, { useEffect, useState } from "react";
import { Text } from "@/styles/Common";
import { theme } from "@/styles/theme";
import { Tabs } from "@/components/Common/Tabs";
import { Tab } from "@/components/Common/Tabs/Tab";
import { useRouter } from "next/router";
import footprint from "@/assets/img/footprintOrange2.png";
import Image from "next/image";
import { Step1 } from "@/components/SecureItNow/Step1";
import { Step2 } from "@/components/SecureItNow/Step2";
import { Step3 } from "@/components/SecureItNow/Step3";
import { Wrapper } from "@/components/SecureItNow/styles";
import { StepperMobile } from "@/components/Common/StepperMobile";
import useGetIndicatives from "@/hooks/Common/useGetIndicatives";
import useGetDocumentType from "@/hooks/Common/useGetDocumentType";
import useGetPetType from "@/hooks/Pets/useGetPetType";
import useGetMethodPayment from "@/hooks/Pets/useGetMethodPayment";
import { validatePetFormStep1, validatePetFormStep2 } from "@/utilities/validations";
import { CircularProgress, Modal } from "@mui/material";
import { ModalAgeError } from "@/components/SecureItNow/ModalAgeError";
import { useDispatch } from "react-redux";
import { setPetsFormInfo } from "@/store/pets";
import ModalPaymentMethod from "@/components/ModalPaymentMethod";

const SecureItNow = ({ isMobile }) => {
  const router = useRouter();
  const dispatch = useDispatch();
  const [selectedTab, setSelectedTab] = useState(0);
  const [activeKey, setActiveKey] = useState(1);
  const { petsAmount, selectedPlan } = router.query;
  const { data: dataIndicatives, isSuccess: isSuccessIndicatives } = useGetIndicatives();
  const [indicativesOptions, setIndicativesOptions] = useState([]);
  const { data: dataDocuments, isSuccess: isSuccessDocuments } = useGetDocumentType();
  const [documentTypeOptions, setDocumentTypeOptions] = useState([]);
  const { data: dataPetType, isSuccess: isSuccessPetType } = useGetPetType();
  const [petTypeOptions, setPetTypeOptions] = useState([]);
  const { data: dataPaymentOcurrency, isSuccess: isSuccessPaymentOcurrency, isLoading: isLoadingPaymentOcurrency } = useGetMethodPayment();
  const [paymentOcurrencyOptions, setPaymentOcurrencyOptions] = useState([]);
  const [showPaymentModal, setShowPaymentModal] = useState(false);

  const [petsForm, setPetsForm] = useState({
    paymentOcurrencyId: null, 
    petsAmount: Number(petsAmount) || 1,
    documentTypeId: 76,
    documentNumber: "",
    email: "",
    name: "",
    lastName: "",
    countryCodePhoneId: 6,
    phoneNumber: "",
    authorization: false,
    pets: [
      {
        id: 0,
        petTypeId: "",
        name: "",
        breed: "",
        age: "",
        ageTime: "Años",
        color: "",
      }
    ],
  });

  const [errorForm, setErrorForm] = useState({
    name: {
      error: false,
      message: "",
    },
    lastName: {
      error: false,
      message: "",
    },
    phoneNumber: {
      error: false,
      message: "",
    },
    documentNumber: {
      error: false,
      message: "",
    },
    email: {
      error: false,
      message: "",
    },
    pets: [],
  });

  useEffect(() => {
    const paymentOptions = {
      "1": paymentOcurrencyOptions[0]?.value,
      "2": paymentOcurrencyOptions[1]?.value,
      "3": paymentOcurrencyOptions[2]?.value,
    };

    setPetsForm({...petsForm, paymentOcurrencyId: paymentOptions[selectedPlan] || ""})
  }, [petsForm, selectedPlan, paymentOcurrencyOptions]);

  const [treatPersonalDataDate, setTreatPersonalDataDate] = useState(null);
  const [showAgeErrorModal, setShowAgeErrorModal] = useState(false);
  const [invalidPetsNames, setInvalidPetsNames] = useState([]);
  const [invalidPetsIndex, setInvalidPetsIndex] = useState([]);

  const labelsProps = {
    labelColor: theme.colors.gray1000,
    labelSize: theme.fonts.size.default2,
    labelFont: theme.fonts.family.primary,
    border: theme.colors.gray1100
  };

  const buttonProps = {
    background: theme.colors.orange1000,
    labelColor: theme.colors.white,
    font: theme.fonts.family.primary,
    size: theme.fonts.size.h6,
    border: theme.colors.orange1000,
    hover: theme.colors.orange1000,
    borderHover: theme.colors.orange1000,
    height: "40px",
    borderRadius: "50px"
  };

  const breadcrumbs = [
    {
      label: "Bangk",
      href: "/",
      type: "link"
    },
    {
      label: "PetBangk",
      href: "/pet-bangk",
      type: "link"
    },
    {
      label: "Info PetBangk",
      href: "/pet-bangk/info-petbangk",
      type: "link",
    },
    {
      label: "Adquiere asistencia",
      type: "text"
    }
  ];

  const tabs = [
    { label: "Información general" },
    { label: "Datos de tu mascota" },
    { label: "Resumen de tu asistencia"}
  ];

  const steps = [
    "Información general",
    "Datos de tu mascota",
    "Resumen de tu asistencia",
  ];

  useEffect(() => {
    if (isSuccessIndicatives && dataIndicatives?.data?.groupSettings.length > 0)
      setIndicativesOptions(
        dataIndicatives?.data?.groupSettings.map((ele) => ({
          label: `(${ele.code})`,
          value: ele.id,
        }))
      );
  }, [dataIndicatives, isSuccessIndicatives]);

  useEffect(() => {
    if (isSuccessDocuments) {
      setDocumentTypeOptions(
        dataDocuments?.data.groupSettings.filter((ele) => ele.id !== 78).map((ele) => ({
          label: ele.name,
          value: ele.id,
        }))
      );
    }
  }, [isSuccessDocuments, dataDocuments]);

  useEffect(() => {
    if (isSuccessPetType) {
      setPetTypeOptions(
        dataPetType?.data.groupSettings
          .map((ele) => ({
            label: ele.name,
            value: ele.id,
          }))
          .sort((a, b) => a.value - b.value)
      );
    }
  }, [isSuccessPetType, dataPetType]);

  useEffect(() => {
    if (isSuccessPaymentOcurrency) {
      setPaymentOcurrencyOptions(
        dataPaymentOcurrency?.data.groupSettings
          .map((ele) => ({
            label: ele.name,
            value: ele.id,
          }))
          .sort((a, b) => a.value - b.value)
      );
    }
  }, [isSuccessPaymentOcurrency, dataPaymentOcurrency]);

  const step1Data = {
    paymentOcurrencyId: petsForm.paymentOcurrencyId,
    documentTypeId: petsForm.documentTypeId,
    documentNumber: petsForm.documentNumber,
    email: petsForm.email,
    name: petsForm.name,
    lastName: petsForm.lastName,
    countryCodePhoneId: petsForm.countryCodePhoneId,
    phoneNumber: petsForm.phoneNumber,
    authorization: petsForm.authorization,
  };

  const step2Data = {
    pets: petsForm.pets,
  };

  const handleContinue = () => {
    const validationStep1 = validatePetFormStep1.validate(step1Data, {
      abortEarly: false,
    });
    const validationStep2 = validatePetFormStep2.validate(step2Data, {
      abortEarly: false,
    });

    const errorMessages = {
      name: "Campo requerido, mínimo 2 caracteres",
      lastName: "Campo requerido, mínimo 2 caracteres",
      phoneNumber: "Campo requerido, mínimo 7 caracteres",
      documentNumber: "Campo requerido, mínimo 5 caracteres",
      email: "Campo requerido o correo electrónico inválido",
      breed: "Campo requerido, mínimo 2 caracteres",
      color: "Campo requerido, mínimo 2 caracteres",
      age: "Campo requerido, mínimo 1 caracteres",
    };

    if (selectedTab === 0) {
      if (validationStep1.error) {
        const newErrorForm = { ...errorForm };
        validationStep1.error.details.forEach((ele) => {
          const label = ele.context.label;
          if (!newErrorForm[label]) {
            newErrorForm[label] = { error: false, message: "" };
          }
          setErrorForm(prevErrorForm => ({
            ...prevErrorForm,
            [label]: { error: true, message: errorMessages[label] || "Campo obligatorio" }
          }));
        });
      } else {
        setSelectedTab(1);
      }
      return;
    };

    if (selectedTab === 1) {
      if (validationStep2.error) {
        setErrorForm((prevErrorForm) => {
          const newPetsErrors = Array.isArray(prevErrorForm.pets) ? [...prevErrorForm.pets] : [];
    
          validationStep2.error.details.forEach((ele) => {
            const label = ele.context.label;
    
            const match = label.match(/^pets\[(\d+)]\.(\w+)$/);
            if (!match) return;
    
            const index = parseInt(match[1], 10);
            const fieldName = match[2];
    
            if (isNaN(index)) return;
    
            if (!newPetsErrors[index]) {
              newPetsErrors[index] = {
                name: { error: false, message: "" },
                breed: { error: false, message: "" },
                color: { error: false, message: "" },
                age: { error: false, message: "" },
                ageTime: { error: false, message: "" },
                petTypeId: { error: false, message: "" },
                id: { error: false, message: "" },
              };
            }
    
            const customMessage = errorMessages[fieldName] || "Campo obligatorio";
            newPetsErrors[index][fieldName] = { error: true, message: customMessage };
          });
    
          return {
            ...prevErrorForm,
            pets: newPetsErrors,
          };
        });
      } else {
        const ageErrors = petsForm.pets.map((pet, index) => {
          const ageValue = parseInt(pet.age, 10);
          const isAgeInMonths = pet.ageTime === "Meses";
          const ageInMonths = isAgeInMonths ? ageValue : ageValue * 12;

          if (ageInMonths < 6 || ageValue > 10) {
            return { index, error: true, name: pet.name };
          }
          return { index, error: false };
        });
  
        const invalidPets = ageErrors.filter(error => error.error).map(error => error.name);
        const invalidIndexes = ageErrors.filter(error => error.error).map(error => error.index);

        if (invalidPets.length > 0) {
          setShowAgeErrorModal(true);
          setInvalidPetsNames(invalidPets.join(", "));
          setInvalidPetsIndex(invalidIndexes);
          return;
        } else {
          setSelectedTab(2);
        }
      };
    };  

    if (selectedTab === 2) {
      const payload = {
        paymentOcurrencyId: petsForm.paymentOcurrencyId,
        documentTypeId: petsForm.documentTypeId,
        documentNumber: petsForm.documentNumber,
        name: petsForm.name,
        lastName: petsForm.lastName,
        email: petsForm.email,
        phoneNumber: petsForm.phoneNumber,
        treatPersonalDataDate: treatPersonalDataDate,
        pets: petsForm.pets.map((pet) => ({
          petTypeId: pet.petTypeId,
          breed: pet.breed,
          age: pet.ageTime === "Años" ? pet.age * 12 : pet.age,
          name: pet.name,
          color: pet.color
        })),
        countryCodePhoneId: petsForm.countryCodePhoneId
      };

      dispatch(setPetsFormInfo(payload));
      setShowPaymentModal(true);
    }
  };

  const handleRemovePet = (invalidPetsIndex) => {
    if (petsForm.pets.length === 1) {
      setPetsForm((prevPetsForm) => ({
        ...prevPetsForm,
        petsAmount: 1,
        pets: [{ id: 0, petTypeId: "", name: "", breed: "", age: "", ageTime: "Años", color: "" }],
      }));
    } else {
      setPetsForm((prevPetsForm) => ({
        ...prevPetsForm,
        petsAmount: prevPetsForm.pets.filter((ele, index) => !invalidPetsIndex.includes(ele.id)).length,
        pets: prevPetsForm.pets.filter((ele, index) => !invalidPetsIndex.includes(ele.id)),
      }));
      setErrorForm((prevErrorForm) => ({
        ...prevErrorForm,
        pets: prevErrorForm.pets.filter((ele, index) => !invalidPetsIndex.includes(ele.id)),
      }));
    };
    setShowAgeErrorModal(false);
    setInvalidPetsIndex([]);
    setActiveKey(1);
  };

  if (isLoadingPaymentOcurrency) {
    return (
      <CircularProgress
        size={20}
        style={{ color: theme.colors.blue200 }}
      />
    );
  };

  return (
    <>
      <Breadcrumbs items={breadcrumbs} isMobile={isMobile} />
      <Modal open={showAgeErrorModal}>
        <ModalAgeError 
          handleClose={() => setShowAgeErrorModal(false)}
          handleRemovePet={handleRemovePet}
          invalidPetsNames={invalidPetsNames}
          invalidPetsIndex={invalidPetsIndex}
        />
      </Modal>
      <ModalPaymentMethod
        showModal={showPaymentModal}
        handleCloseModal={() => setShowPaymentModal(false)}
        isMobile={isMobile}
      />
      <Wrapper>
        <Image 
          src={footprint} 
          alt="footprint" 
          style={{
            position: "absolute",
            top: "200px",
            right: "50px"
          }}
        />
        <Text
          font={theme.fonts.family.primaryBold}
          color={theme.colors.orange500}
          size={isMobile ? theme.fonts.size.h1 : theme.fonts.size.lgs}
        >
          Configura <span style={{ fontFamily: theme.fonts.family.primaryBold, color: theme.colors.blue200 }}>tu asistencia</span>
        </Text>
        <Text color={theme.colors.blue200} mb="40px">
          Contrata tu asistencia en menos de 2 minutos
        </Text>
        {isMobile ? (
          <StepperMobile steps={steps} activeStep={selectedTab} lineColor={theme.colors.blue200} />
        ) : (
          <Tabs
            value={selectedTab}
            background={theme.colors.orange}
            variant="scrollable"
            scrollButtons="auto"
          >
            {tabs.map((tab, idx) => (
              <Tab
                key={idx}
                label={tab.label}
                color={theme.colors.gray1200}
                size={theme.fonts.size.default2}
                source="pet"
              />
            ))}
          </Tabs>
        )}
        {selectedTab === 0 && (
          <Step1 
            isMobile={isMobile}
            buttonProps={buttonProps}
            labelsProps={labelsProps} 
            handleContinue={handleContinue}
            petsForm={petsForm}
            setPetsForm={setPetsForm}
            indicativesOptions={indicativesOptions}
            documentTypeOptions={documentTypeOptions}
            paymentOcurrencyOptions={paymentOcurrencyOptions}
            setTreatPersonalDataDate={setTreatPersonalDataDate}
            setErrorForm={setErrorForm}
            errorForm={errorForm}
          />
        )}
        {selectedTab === 1 && (
          <Step2 
            isMobile={isMobile}
            buttonProps={buttonProps}
            labelsProps={labelsProps}
            handleContinue={handleContinue}
            petsForm={petsForm}
            setPetsForm={setPetsForm}
            petTypeOptions={petTypeOptions}
            setErrorForm={setErrorForm}
            errorForm={errorForm}
            activeKey={activeKey}
            setActiveKey={setActiveKey}
          />
        )}
        {selectedTab === 2 && (
          <Step3 
            isMobile={isMobile}
            buttonProps={buttonProps}
            handleContinue={handleContinue}
            petsForm={petsForm}
            setPetsForm={setPetsForm}
            setSelectedTab={setSelectedTab}
            paymentOcurrencyOptions={paymentOcurrencyOptions}
          />
        )}
      </Wrapper>
    </>
  );
};

export default SecureItNow;