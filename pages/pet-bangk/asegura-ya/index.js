import Breadcrumbs from "@/components/Common/Breadcrumbs";
import React, { useEffect, useMemo, useState } from "react";
import { Div, Text } from "@/styles/Common";
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
import {
  validatePetFormStep1,
  validatePetFormStep2,
} from "@/utilities/validations";
import { CircularProgress } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { setPetsFormInfo } from "@/store/pets";
import ModalPaymentMethod from "@/components/ModalPaymentMethod";
import useCreatePetInsurance from "@/hooks/Pets/useCreatePetInsurance";
import useGenerateTknTrxBancolombia from "@/hooks/WompiPayment/useGenerateTknTrxBancolombia";
import { setMedFormInfo } from "@/store/med";
import toast from "react-hot-toast";
import { setValidCode } from "@/store/balance";
import { ValidateIdentity } from "@/components/ValidateIdentity";
import useValidateUser from "@/hooks/Common/useValidateUser";
import useSendOtp from "@/hooks/Common/useSendOtp";
import { setPaymentSource } from "@/store/payment";

const SecureItNow = ({ isMobile }) => {
  const validateUser = useValidateUser();
  const sendCode = useSendOtp();
  const router = useRouter();
  const dispatch = useDispatch();
  const createPetInsurance = useCreatePetInsurance();
  const createBancolombiaToken = useGenerateTknTrxBancolombia();
  const { petsForm: petsFormStore } = useSelector((state) => state.pets);
  const [selectedTab, setSelectedTab] = useState(0);
  const [activeKey, setActiveKey] = useState(1);
  const { petsAmount, selectedPlan } = router.query;
  const { data: dataIndicatives, isSuccess: isSuccessIndicatives } =
    useGetIndicatives();
  const [indicativesOptions, setIndicativesOptions] = useState([]);
  const { data: dataDocuments, isSuccess: isSuccessDocuments } =
    useGetDocumentType();
  const [documentTypeOptions, setDocumentTypeOptions] = useState([]);
  const { data: dataPetType, isSuccess: isSuccessPetType } = useGetPetType();
  const [petTypeOptions, setPetTypeOptions] = useState([]);
  const {
    data: dataPaymentOcurrency,
    isSuccess: isSuccessPaymentOcurrency,
    isLoading: isLoadingPaymentOcurrency,
  } = useGetMethodPayment();
  const [paymentOcurrencyOptions, setPaymentOcurrencyOptions] = useState([]);
  const [showPaymentModal, setShowPaymentModal] = useState(false);
  const [forceUpdate, setForceUpdate] = useState(false);
  const [errorValidateUser, setErrorValidateUser] = useState({
    error: false,
    message: "",
  });

  const getPrice = (amount, frequency, paymentOcurrencyId) => {
    const paymentOcurrency = Number(frequency);
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

    const frequencyKey = frequencyMap[paymentOcurrency];
    if (!frequencyKey || !prices[frequencyKey]) {
      return 0;
    }

    const index = amount > 2 ? 2 : amount - 1;
    const basePrice = prices[frequencyKey][index];

    if (index < 0 || index >= prices[frequencyKey].length) {
      return 0;
    }

    const additionalCost =
      amount > 3 ? additionalCosts[frequencyKey] * (amount - 3) : 0;

    return basePrice + additionalCost;
  };

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
      },
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
    if (petsFormStore && Object.keys(petsFormStore).length > 0) {
      setPetsForm({
        paymentOcurrencyId: petsFormStore.paymentOcurrencyId,
        petsAmount: petsFormStore.petsAmount,
        documentTypeId: petsFormStore.documentTypeId,
        documentNumber: petsFormStore.documentNumber,
        email: petsFormStore.email,
        name: petsFormStore.name,
        lastName: petsFormStore.lastName,
        countryCodePhoneId: petsFormStore.countryCodePhoneId,
        phoneNumber: petsFormStore.phoneNumber,
        authorization: true,
        pets: petsFormStore.pets.map((pet, index) => ({
          id: index,
          petTypeId: pet.petTypeId,
          name: pet.name,
          breed: pet.breed,
          age: pet.age,
          ageTime: pet.ageTime,
          color: pet.color,
        })),
      });
    }
  }, [petsFormStore]);

  const [treatPersonalDataDate, setTreatPersonalDataDate] = useState(null);

  const labelsProps = {
    labelColor: theme.colors.gray1000,
    labelSize: theme.fonts.size.default2,
    labelFont: theme.fonts.family.primary,
    border: theme.colors.gray1100,
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
    borderRadius: "50px",
  };

  const breadcrumbs = [
    {
      label: "Bangk",
      href: "/",
      type: "link",
    },
    {
      label: "PetBangk",
      href: "/pet-bangk",
      type: "link",
    },
    {
      label: "Info PetBangk",
      href: "/pet-bangk/info-petbangk",
      type: "link",
    },
    {
      label: "Adquiere asistencia",
      type: "text",
    },
  ];

  const tabs = [
    { label: "Información general" },
    { label: "Validación de identidad" },
    { label: "Datos de tu mascota" },
    { label: "Resumen de tu asistencia" },
  ];

  const steps = [
    "Información general",
    "Validación de identidad",
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
        dataDocuments?.data.groupSettings
          .filter((ele) => ele.id !== 78 && ele.id !== 723)
          .map((ele) => ({
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
      const paymentOcurrency = dataPaymentOcurrency?.data.groupSettings
        .map((ele) => ({
          label: ele.name,
          value: ele.id,
        }))
        .sort((a, b) => a.value - b.value);
      setPaymentOcurrencyOptions(paymentOcurrency);
      const planId = {
        1: paymentOcurrency[0].value,
        2: paymentOcurrency[1].value,
        3: paymentOcurrency[2].value,
      };
      setPetsForm((prevPetsForm) => ({
        ...prevPetsForm,
        paymentOcurrencyId: planId[selectedPlan] || 716,
      }));
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
    setErrorValidateUser({
      error: false,
      message: "",
    });
    
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
          setErrorForm((prevErrorForm) => ({
            ...prevErrorForm,
            [label]: {
              error: true,
              message: errorMessages[label] || "Campo obligatorio",
            },
          }));
        });
      } else {
        validateUser.reset();
        validateUser.mutate({
          documentNumber: petsForm.documentNumber,
          documentType: petsForm.documentTypeId,
          email: petsForm.email,
        }, {
          onSuccess: () => {
            sendCode.reset();
            sendCode.mutate(        
            {
              email: petsForm.email,
              identificationNumber: petsForm.documentNumber,
              name: petsForm.name,
            }, {
              onSuccess: (res) => {
                dispatch(setValidCode(res.data.code));
              },
            });
            setSelectedTab(1);
          },
          onError: (err) => {
            setErrorValidateUser({
              error: true,
              message: err?.response?.data?.errors[0],
            })
          }
        })
      }
      return;
    }

    if (selectedTab === 1) {
      setSelectedTab(2);
    }

    if (selectedTab === 2) {
      if (validationStep2.error) {
        setErrorForm((prevErrorForm) => {
          const newPetsErrors = Array.isArray(prevErrorForm.pets)
            ? [...prevErrorForm.pets]
            : [];

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

            const customMessage =
              errorMessages[fieldName] || "Campo obligatorio";
            newPetsErrors[index][fieldName] = {
              error: true,
              message: customMessage,
            };
          });

          return {
            ...prevErrorForm,
            pets: newPetsErrors,
          };
        });
      } else {
        setSelectedTab(3);
      }
      return;
    }

    if (selectedTab === 3) {
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
          age: pet.age,
          ageTime: pet.ageTime,
          name: pet.name,
          color: pet.color,
        })),
        countryCodePhoneId: petsForm.countryCodePhoneId,
        amount: getPrice(
          petsForm.pets.length,
          Number(petsForm.paymentOcurrencyId),
          paymentOcurrencyOptions
        ),
      };

      dispatch(setPetsFormInfo(payload));
      setShowPaymentModal(true);
      setForceUpdate(!forceUpdate);
    }
  };

  if (isLoadingPaymentOcurrency) {
    return (
      <Div justify="center" align="center" height="100vh">
        <CircularProgress size={24} style={{ color: theme.colors.blue200 }} />
      </Div>
    );
  }

  const handleCardPayment = () => {
    setShowPaymentModal(false);
    router.push("/realizar-pago?payAssistance=pet");
  };

  const handlePayBancolombia = () => {
    const petPayload = {
      ...petsForm,
      treatPersonalDataDate: treatPersonalDataDate,
      pets: petsForm.pets.map((pet) => ({
        petTypeId: pet.petTypeId,
        breed: pet.breed,
        name: pet.name,
        color: pet.color,
        age: pet.ageTime === "Años" ? pet.age * 12 : pet.age,
      })),
    };
    delete petPayload.amount;

    createPetInsurance.reset();
    createPetInsurance.mutate(petPayload, {
      onSuccess: (res) => {
        createBancolombiaToken.reset();
        createBancolombiaToken.mutate(
          {},
          {
            onSuccess: (resToken) => {
              dispatch(setMedFormInfo({}));
              dispatch(
                setPetsFormInfo({
                  ...petsForm,
                  bancolombiaToken: resToken?.data?.result?.data?.id,
                  applicationId: res?.data?.clientInsuredId,
                  amount: getPrice(
                    petsForm.pets.length,
                    Number(petsForm.paymentOcurrencyId),
                    paymentOcurrencyOptions
                  ),
                })
              );
              dispatch(setPaymentSource("pet"));
              setShowPaymentModal(false);
              window.location.href = resToken?.data?.result?.data?.authorization_Url;
              setForceUpdate(!forceUpdate);
            },
            onError: (error) => {
              toast.error(
                "Ha ocurrido un error con Bancolombia, por favor intente nuevamente"
              );
            },
          }
        );
      },
      onError: (err) => {
        toast.error("Ha ocurrido un error, por favor intente nuevamente");
        setLoading(false);
      },
    });
  };

  return (
    <>
      <Breadcrumbs items={breadcrumbs} isMobile={isMobile} />
      <ModalPaymentMethod
        showModal={showPaymentModal}
        handleCloseModal={() => setShowPaymentModal(false)}
        isMobile={isMobile}
        handleCardPayment={handleCardPayment}
        handlePayBancolombia={handlePayBancolombia}
        loading={
          createPetInsurance.isLoading || createBancolombiaToken.isLoading
        }
      />
      <Wrapper>
        <Image
          src={footprint}
          alt="footprint"
          style={{
            position: "absolute",
            top: "200px",
            right: "50px",
          }}
        />
        <Text
          font={theme.fonts.family.primaryBold}
          color={theme.colors.orange500}
          size={isMobile ? theme.fonts.size.h1 : theme.fonts.size.lgs}
        >
          Configura{" "}
          <span
            style={{
              fontFamily: theme.fonts.family.primaryBold,
              color: theme.colors.blue200,
            }}
          >
            tu asistencia
          </span>
        </Text>
        <Text color={theme.colors.blue200} mb="40px">
          Contrata tu asistencia en menos de 2 minutos
        </Text>
        {isMobile ? (
          <StepperMobile
            steps={steps}
            activeStep={selectedTab}
            lineColor={theme.colors.blue200}
          />
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
            errorValidateUser={errorValidateUser}
          />
        )}
        {selectedTab === 1 && (
          <ValidateIdentity
            source="pet"
            email={petsForm.email} 
            isMobile={isMobile} 
            handleContinue={handleContinue}
          />
        )}
        {selectedTab === 2 && (
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
        {selectedTab === 3 && (
          <Step3
            isMobile={isMobile}
            buttonProps={buttonProps}
            handleContinue={handleContinue}
            petsForm={petsForm}
            setPetsForm={setPetsForm}
            setSelectedTab={setSelectedTab}
            paymentOcurrencyOptions={paymentOcurrencyOptions}
            getPrice={getPrice}
          />
        )}
      </Wrapper>
    </>
  );
};

export default SecureItNow;
