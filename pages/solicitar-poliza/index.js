/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { StepperPolicy } from "@/components/Policy/StepperPolicy";
import { Container, WrapperPolicy } from "@/styles/Policy";
import { Header } from "@/components/Common/Header";
import { Col, Div, Text } from "@/styles/Common";
import { theme } from "@/styles/theme";
import { MobileStepperPolicy } from "@/components/Policy/MobileStepperPolicy";
import { Step1 } from "@/components/Policy/Steps/Step1";
import { Step2 } from "@/components/Policy/Steps/Step2";
import { Step4 } from "@/components/Policy/Steps/Step4";
import { Step5 } from "@/components/Policy/Steps/Step5";
import useGetCountries from "@/hooks/Common/useGetCountries";
import useGetNationality from "@/hooks/Common/useGetNationality";
import useGetCivilStatus from "@/hooks/Common/useGetCivilStatus";
import useGetStates from "@/hooks/Common/useGetStates";
import useGetCities from "@/hooks/Common/useGetCities";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import { Button } from "@/components/Common/Button";
import Image from "next/image";
import arrowBack from "@/assets/icons/big-arrow-back-yellow.svg";
import useGetEconomicActivity from "@/hooks/Common/useGetEconomicActivity";
import useGetDiseases from "@/hooks/Common/useGetDiseases";
import useGetDocumentType from "@/hooks/Common/useGetDocumentType";
import useSaveLoanInsurancePolicy from "@/hooks/Customers/useSaveLoanInsurancePolicy";
import toast from "react-hot-toast";
import {
  getDiseasesIds,
  getDiseasesNames,
  initDataLoanInsurancePolicy,
} from "@/utilities/helpers";
import { setRequestInfo } from "@/store/requests";
import useUpdateStatusPolicy from "@/hooks/Customers/useUpdateStatusPolicy";
import useGetRelationships from "@/hooks/Common/useGetRelationships";
import { ToastErrorClient } from "@/components/Common/ToastErrorClients";
import dayjs from "dayjs";

const RequestPolicy = ({ isMobile }) => {
  const dispatch = useDispatch();
  const router = useRouter();
  const save = useSaveLoanInsurancePolicy();
  const updateStatus = useUpdateStatusPolicy();
  const { requestInfo } = useSelector((state) => state)?.requests;
  const countriesList = useGetCountries();
  const { data, isSuccess } = countriesList;
  const [countriesOptions, setCountriesOptions] = useState([]);
  const nationalityList = useGetNationality();
  const { data: dataNationality, isSuccess: isSuccessNationality } =
    nationalityList;
  const [nationalityOptions, setNationalityOptions] = useState([]);
  const civilStatusList = useGetCivilStatus();
  const { data: dataCivilStatus, isSuccess: isSuccessCivilStatus } =
    civilStatusList;
  const [civilStatusOptions, setCivilStatusOptions] = useState([]);
  const economicActivityList = useGetEconomicActivity();
  const { data: dataEconomicActivity, isSuccess: isSuccessEconomicActivity } =
    economicActivityList;
  const [economicActivityOptions, setEconomicActivityOptions] = useState([]);
  const diseasesList = useGetDiseases();
  const { data: dataDiseases, isSuccess: isSuccessDiseases } = diseasesList;
  const [diseasesOptions, setDiseasesOptions] = useState([]);
  const documentType = useGetDocumentType();
  const { data: dataDocument, isSuccess: isSuccessDocument } = documentType;
  const [documentTypeOptions, setDocumentTypeOptions] = useState([]);
  const relationship = useGetRelationships();
  const { data: dataRelationship, isSuccess: isSuccessRelationship } = relationship;
  const [relationshipsOptions, setRelationshipsOptions] = useState([]);
  const [activeStep, setActiveStep] = useState(0);
  const [checks, setChecks] = useState({
    check1: false,
    check2: false,
    check3: false,
  });
  const [userInfo, setUserInfo] = useState({
    birthCountryId: null,
    birthStateId: null,
    birthCityId: null,
    countryNationalityId: null,
    civilStatusId: null,
    numberChildren: null,
    occupation: null,
    occupationActivityId: null,
    isPublicPerson: null,
    hasBondPublicPerson: null,
    residenceCountryId: null,
    residenceStateId: null,
    residenceCityId: null,
  });
  const [financialInfo, setFinancialInfo] = useState({
    monthlyIncome: null,
    monthlyExpenses: null,
    assetValue: null,
    liabilitiesValue: null,
    incomeOrigin: null,
  });

  const [healthInfo, setHealthInfo] = useState({
    weight: null,
    height: null,
    diseases: null,
    hivActive: null,
    plannedMedicalProcidure: null,
    disability: null,
    diseasesMoreInfo: null,
    plannedMedicalProcidureMoreInfo: null,
    disabilityMoreInfo: null,
  });
  const [additionalInfo, setAdditionalInfo] = useState({
    convicted: null,
    lifeEnsure: null,
    beneficiaries: null,
    beneficiary: []
  });
  const [diseases, setDiseases] = useState(
    getDiseasesNames(healthInfo.diseases, diseasesOptions)
  );

  const statesList = useGetStates(userInfo.birthCountryId);
  const { data: dataStates, isSuccess: isSuccessStates } = statesList;
  const [statesOptions, setStatesOptions] = useState([]);
  const citiesList = useGetCities(userInfo.birthStateId);
  const { data: dataCities, isSuccess: isSuccessCities } = citiesList;
  const [citiesOptions, setCitiesOptions] = useState([]);
  const [loanTypeId, setLoanTypeId] = useState(null);
  const [aceptanceOriginOfFundsDate, setAceptanceOriginOfFundsDate] = useState(null);

  const steps = [
    "Datos personales",
    "Datos Financieros",
    "Datos de tu salud",
    "Datos adicionales"
  ];

  useEffect(() => {
    setLoanTypeId(requestInfo.loanTypeId)
    setUserInfo({
      birthCountryId: requestInfo.birthCountryId,
      birthStateId: requestInfo.birthStateId,
      birthCityId: requestInfo.birthCityId,
      countryNationalityId: requestInfo.countryNationalityId,
      civilStatusId: requestInfo.civilStatusId,
      numberChildren: requestInfo.numberChildren,
      occupation: requestInfo.occupation,
      occupationActivityId: requestInfo.occupationActivityId,
      isPublicPerson: requestInfo.isPublicPerson,
      hasBondPublicPerson: requestInfo.hasBondPublicPerson,
      residenceCountryId: requestInfo.residenceCountryId,
      residenceStateId: requestInfo.residenceStateId,
      residenceCityId: requestInfo.residenceCityId,
    });
    setFinancialInfo({
      monthlyIncome: requestInfo.monthlyIncome,
      monthlyExpenses: requestInfo.monthlyExpenses,
      assetValue: requestInfo.assetValue,
      liabilitiesValue: requestInfo.liabilitiesValue,
      incomeOrigin: requestInfo.incomeOrigin,
    });
    setHealthInfo({
      weight: requestInfo.weight,
      height: requestInfo.height,
      diseases: requestInfo.diseases,
      hivActive: requestInfo.hivActive,
      plannedMedicalProcidure: requestInfo.plannedMedicalProcidure,
      disability: requestInfo.disability,
      diseasesMoreInfo: requestInfo.diseasesMoreInfo,
      plannedMedicalProcidureMoreInfo:
        requestInfo.plannedMedicalProcidureMoreInfo,
      disabilityMoreInfo: requestInfo.disabilityMoreInfo,
    });
    setAdditionalInfo({
      convicted: requestInfo.convicted,
      lifeEnsure: requestInfo.lifeEnsure,
      beneficiaries: requestInfo.beneficiaries,
      beneficiary: requestInfo.beneficiary,
    });
  }, [requestInfo]);

  useEffect(() => {
    if (isSuccess) {
      setCountriesOptions(data?.data.countries);
    }
  }, [isSuccess, data]);

  useEffect(() => {
    if (isSuccessDocument && dataDocument?.data?.groupSettings.length > 0)
      setDocumentTypeOptions(
        dataDocument?.data?.groupSettings.map((ele) => ({
          name: ele.name,
          id: ele.id,
        }))
      );
  }, [dataDocument, isSuccessDocument]);

  useEffect(() => {
    if (isSuccessNationality) {
      setNationalityOptions(dataNationality?.data.countries);
    }
  }, [isSuccessNationality, dataNationality]);

  useEffect(() => {
    if (isSuccessCivilStatus)
      setCivilStatusOptions(
        dataCivilStatus?.data?.groupSettings.map((ele) => ({
          name: ele.name,
          id: ele.id,
        }))
      );
  }, [dataCivilStatus, isSuccessCivilStatus]);

  useEffect(() => {
    if (isSuccessEconomicActivity)
      setEconomicActivityOptions(
        dataEconomicActivity?.data?.groupSettings.map((ele) => ({
          name: ele.name,
          id: ele.id,
        }))
      );
  }, [dataEconomicActivity, isSuccessEconomicActivity]);

  useEffect(() => {
    if (isSuccessDiseases)
      setDiseasesOptions(
        dataDiseases?.data?.groupSettings.map((ele) => ({
          name: ele.name,
          id: ele.id,
        }))
      );
  }, [dataDiseases, isSuccessDiseases]);

  useEffect(() => {
    if (isSuccessRelationship)
      setRelationshipsOptions(
        dataRelationship?.data?.groupSettings.map((ele) => ({
          name: ele.name,
          id: ele.id,
        }))
      );
  }, [dataRelationship, isSuccessRelationship]);

  useEffect(() => {
    if (isSuccessStates) {
      setStatesOptions(dataStates?.data.states);
    }
  }, [isSuccessStates, dataStates]);

  useEffect(() => {
    if (isSuccessCities) {
      setCitiesOptions(dataCities?.data.cities);
    }
  }, [isSuccessCities, dataCities]);

  const nextStep = () => {
    const newHealthInfo = {
      ...healthInfo,
      diseases: getDiseasesIds(diseases, diseasesOptions),
    };
    if (activeStep === 3) {
      const percentage = additionalInfo.beneficiary.reduce((total, obj) => total + (Number(obj.percentInherit) || 0), 0);
      if (additionalInfo.beneficiaries === true && percentage !== 100) {
        toast.custom(<ToastErrorClient message={'El porcentaje de tus herederos debe dar 100%'} />, {
          duration: 1000,
        });
      } else {
        save.reset();
        save.mutate(
          {
            formData: {
              loanApplicationId: requestInfo.loanApplicationId,
              ...userInfo,
              ...financialInfo,
              ...newHealthInfo,
              ...additionalInfo,
              aceptanceOriginOfFundsDate: aceptanceOriginOfFundsDate ? dayjs(aceptanceOriginOfFundsDate) : null,
            },
          },
          {
            onSuccess: () => {
              updateStatus.reset();
              updateStatus.mutate(
                { loanApplicationId: requestInfo.loanApplicationId },
                {
                  onSuccess: () => {
                    dispatch(setRequestInfo(initDataLoanInsurancePolicy))
                    router.push("/solicitar-poliza/solicitud-exitosa")
                  },
                  onError: (err) => {
                    err.response.data.errors.map((error) => {
                      toast.error(error);
                    });
                  },
                }
              );
            },
            onError: (err) => {
              err.response.data.errors.map((error) => {
                toast.error(error);
              });
            },
          }
        );
      }
    } else {
      save.reset();
      save.mutate(
        {
          formData: {
            loanApplicationId: requestInfo.loanApplicationId,
            ...userInfo,
            ...financialInfo,
            ...newHealthInfo,
            ...additionalInfo,
            aceptanceOriginOfFundsDate: aceptanceOriginOfFundsDate ? dayjs(aceptanceOriginOfFundsDate) : null,
          },
        },
        {
          onSuccess: (data) => {
            dispatch(setRequestInfo(data?.data.result))
            setActiveStep(activeStep + 1)
          },
          onError: (err) => {
            err.response.data.errors.map((error) => {
              toast.error(error);
            });
          },
        }
      );
    }
  };

  const backStep = () => {
    if (activeStep === 0) {
      router.push("/solicitar-poliza/confirma-tus-datos");
    } else {
      setActiveStep(activeStep - 1);
    }
  };

  const validationHealth = () => {
    const HealthData = {
      weight: healthInfo.weight,
      height: healthInfo.height,
      hivActive: healthInfo.hivActive,
      plannedMedicalProcidure: healthInfo.plannedMedicalProcidure,
      disability: healthInfo.disability,
    }

    if (diseases.length > 0) {
      HealthData.diseasesMoreInfo = healthInfo.diseasesMoreInfo;
    }

    if (healthInfo.plannedMedicalProcidure) {
      HealthData.plannedMedicalProcidureMoreInfo = healthInfo.plannedMedicalProcidureMoreInfo;
    }

    if (healthInfo.disability) {
      HealthData.disabilityMoreInfo = healthInfo.disabilityMoreInfo;
    }
    return Object.values(HealthData).some((value) => value === null || value === "");
  }

  const validationAdditional = () => {
    const additionalData = {
      convicted: additionalInfo.convicted,
      lifeEnsure: additionalInfo.lifeEnsure,
      beneficiaries: additionalInfo.beneficiaries,
    };

    if (additionalInfo.beneficiaries === true) {
      return Object.values(additionalData).some(value => value === null) ||
      !additionalInfo.beneficiary.every(obj =>
        Object.keys(obj)
            .filter(key => key !== "id" && key !== "loanInsurancePolicyId")
            .every(key => obj[key] !== null && obj[key] !== ""));
    } else {
      return Object.values(additionalData).some((value) => value === null || value === "");
    }
  }

  const validationFinancial = () => {
    const financialData = {
      monthlyIncome: financialInfo.monthlyIncome,
      monthlyExpenses: financialInfo.monthlyExpenses,
      assetValue: financialInfo.assetValue,
      liabilitiesValue: financialInfo.liabilitiesValue,
    }
    if (
      requestInfo.loanBalance > 137227300 ||
      requestInfo.monthlyCostInsurance > 6089880
    ) {
      financialData.incomeOrigin = financialInfo.incomeOrigin;
      financialData.check1 = checks.check1;
      financialData.check2 = checks.check2;
      financialData.check3 = checks.check3;
    }

    return Object.values(financialData).some((value) => value === null || value === false || value === "");
  }

  const validForm = (currentStep) => {
    switch (currentStep) {
      case 0:
        const isFormValid = Object.values(userInfo).some(
          (value) => value === null || value === ""
        );
        return isFormValid;
      case 1:
        return validationFinancial();
      case 2: 
        return validationHealth();
      case 3: 
        return validationAdditional(); 
      default:
        break;
    }
  };

  const focusButton = (event) => {
    if (event.key === "Enter") {
      const button = document.getElementById("buttonRef");
      if (button) {
          event.preventDefault();
          button.focus();
      }
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      nextStep();
    }
  };

  return (
    <Container>
      <Header isMobile={isMobile} />
      <WrapperPolicy style={{ padding: 0, alignItems: "center" }}>
        {isMobile ? (
          <MobileStepperPolicy loanTypeId={loanTypeId} steps={steps} activeStep={activeStep} />
        ) : (
          <Col width="100%">
            <Div
              height="68px"
              p="16px 40px 16px 40px"
              style={{ background: theme.colors.white }}
            >
              <Text
                color={theme.colors.green900}
                font={theme.fonts.family.primaryBold}
                weight={theme.fonts.weight.bold}
                size={theme.fonts.size.h4s}
                lineHeight={"36px"}
              >
                Solicitud de póliza
              </Text>
            </Div>
            <StepperPolicy activeStep={activeStep} steps={steps} />
          </Col>
        )}

        {activeStep === 0 && (
          <Step1
            isMobile={isMobile}
            formInfo={userInfo}
            setFormInfo={setUserInfo}
            countriesOptions={countriesOptions}
            nationalityOptions={nationalityOptions}
            civilStatusOptions={civilStatusOptions}
            statesOptions={statesOptions}
            citiesOptions={citiesOptions}
            economicActivityOptions={economicActivityOptions}
            userName={requestInfo.name}
            focusButton={focusButton}
          />
        )}
        {activeStep === 1 && (
          <Step2
            isMobile={isMobile}
            formInfo={financialInfo}
            setFormInfo={setFinancialInfo}
            checks={checks}
            setChecks={setChecks}
            loanBalance={requestInfo.loanBalance}
            monthlyCostInsurance={requestInfo.monthlyCostInsurance}
            focusButton={focusButton}
            setAceptanceOriginOfFundsDate={setAceptanceOriginOfFundsDate}
          />
        )}
        {activeStep === 2 && (
          <Step4
            isMobile={isMobile}
            formInfo={healthInfo}
            setFormInfo={setHealthInfo}
            diseasesOptions={diseasesOptions}
            diseases={diseases}
            setDiseases={setDiseases}
            focusButton={focusButton}
          />
          
        )}
        {activeStep === 3 && (
          <Step5
            isMobile={isMobile}
            formInfo={additionalInfo}
            setFormInfo={setAdditionalInfo}
            documentTypeOptions={documentTypeOptions}
            relationshipsOptions={relationshipsOptions}
            focusButton={focusButton}
          />
        )}
        <Div
          width={isMobile ? "312px" : "668px"}
          m="46px 0 24px 0"
          justify="space-between"
        >
          <Button
            font={theme.fonts.family.primaryBold}
            background={theme.colors.green900}
            border={theme.colors.yellow500}
            hover={theme.colors.terciary50}
            borderHover={theme.colors.yellow500}
            colorHover={theme.colors.green900}
            labelColor={theme.colors.yellow500}
            size={theme.fonts.size.default2}
            borderHeight={"3px solid"}
            width={isMobile ? "56px" : "113px"}
            mobileWidth={"56px"}
            height={"40px"}
            onClick={backStep}
          >
            <Image alt="arrow" src={arrowBack} style={{ marginRight: "4px" }} />
            {isMobile ? "" : "Atrás"}
          </Button>
          <Button
            font={theme.fonts.family.primaryBold}
            background={theme.colors.yellow500}
            hover={theme.colors.yellow500}
            borderHover={theme.colors.yellow500}
            labelColor={theme.colors.green900}
            size={theme.fonts.size.default2}
            width={isMobile ? "224px" : "300px"}
            mobileWidth={"224px"}
            height={"40px"}
            radius={"40px"}
            onClick={nextStep}
            disabled={validForm(activeStep)}
            id={"buttonRef"}
            onKeyPress={handleKeyDown}
          >
            {activeStep === 3 ? "Finalizar" : "Siguiente"}
          </Button>
        </Div>
      </WrapperPolicy>
    </Container>
  );
};

export default RequestPolicy;
