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
import { Step3 } from "@/components/Policy/Steps/Step3";
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
import arrowBack from "@/assets/icons/big-arrow-back-yellow.svg"
import dayjs from "dayjs";
import useGetEconomicActivity from "@/hooks/Common/useGetEconomicActivity";
import useGetDiseases from "@/hooks/Common/useGetDiseases";
import useGetHousingType from "@/hooks/Common/useGetHousingType";
import house from "@/assets/icons/house.svg";
import building from "@/assets/icons/building.svg";
import condominium from "@/assets/icons/condominium.svg";
import useGetDocumentType from "@/hooks/Common/useGetDocumentType";
import useSaveLoanInsurancePolicy from "@/hooks/Customers/useSaveLoanInsurancePolicy";
import toast from "react-hot-toast";
import { getDiseasesIds, getDiseasesNames, initDataLoanInsurancePolicy } from "@/utilities/helpers";
import { setRequestInfo } from "@/store/requests";
import useUpdateStatusPolicy from "@/hooks/Customers/useUpdateStatusPolicy";
import { Step3V } from "@/components/Policy/Steps/Step3V";

const RequestPolicy = ({ isMobile }) => {
  const dispatch = useDispatch()
  const router = useRouter()
  const save = useSaveLoanInsurancePolicy()
  const updateStatus = useUpdateStatusPolicy()
  const { requestInfo } = useSelector((state) => state)?.requests;
  const countriesList = useGetCountries()
  const { data, isSuccess } = countriesList
  const [countriesOptions, setCountriesOptions] = useState([])
  const nationalityList = useGetNationality()
  const { data: dataNationality, isSuccess: isSuccessNationality } = nationalityList
  const [nationalityOptions, setNationalityOptions] = useState([])
  const civilStatusList = useGetCivilStatus()
  const { data: dataCivilStatus, isSuccess: isSuccessCivilStatus } =civilStatusList
  const [civilStatusOptions, setCivilStatusOptions] = useState([])
  const  economicActivityList = useGetEconomicActivity()
  const { data: dataEconomicActivity, isSuccess: isSuccessEconomicActivity } = economicActivityList
  const [economicActivityOptions, setEconomicActivityOptions] = useState([])
  const  diseasesList = useGetDiseases()
  const { data: dataDiseases, isSuccess: isSuccessDiseases } = diseasesList
  const [diseasesOptions, setDiseasesOptions] = useState([])
  const  housingTypeList = useGetHousingType()
  const { data: dataHousingType, isSuccess: isSuccessHousingType } = housingTypeList
  const [housingTypeOptions, setHousingTypeOptions] = useState([])
  const documentType = useGetDocumentType()
  const { data: dataDocument, isSuccess: isSuccessDocument } = documentType
  const [documentTypeOptions, setDocumentTypeOptions] = useState([])
  const [activeStep, setActiveStep] = useState(0);
  const [checks, setChecks] = useState({
    check1: false,
    check2: false,
    check3: false
  })
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
    residenceCountryId: null,
    residenceStateId: null,
    residenceCityId: null,
  })
  const [financialInfo, setFinancialInfo] = useState({
    monthlyIncome: null,
    monthlyExpenses: null,
    assetValue: null,
    liabilitiesValue: null,
    incomeOrigin: null,
  })
  const [propertyInfo, setPropertyInfo] = useState({
    housingTypeId: null,
    housingValue: null,
    builtgDate: null,
    builtArea: null,
    basementNumber: null,
    apartmentNumber: null,
    buildingFloorsNumber: null,
    address: null,
    stateId: null,
    cityId: null,
  })
  const [vehicleInfo, setVehicleInfo] = useState({
    stateVehiculeId: null,
    cityVehiculeId: null,
    vehicleLicensePlate: null,
  })
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
  })
  const [additionalInfo, setAdditionalInfo] = useState({
    convicted: null,
    lifeEnsure: null,
    beneficiaries: null,
    beneficiaryName: null,
    beneficiaryIdentificationTypeId: 76,
    beneficiaryIdentificationNumber: null
  })
  const [diseases, setDiseases] = useState(getDiseasesNames(healthInfo.diseases, diseasesOptions))

  const statesList = useGetStates(userInfo.birthCountryId)
  const { data: dataStates, isSuccess: isSuccessStates } = statesList
  const [statesOptions, setStatesOptions] = useState([])
  const citiesList = useGetCities(userInfo.birthStateId)
  const { data: dataCities, isSuccess: isSuccessCities } = citiesList
  const [citiesOptions, setCitiesOptions] = useState([])
  const [steps, setSteps] = useState([])
  const [loanTypeId, setLoanTypeId] = useState(null)

  useEffect(() => {
    switch (loanTypeId) {
      case 102:
      case 103:
        setSteps([
          "Datos personales",
          "Datos Financieros",
          "Datos de tu Inmueble",
          "Datos de tu salud",
          "Datos adicionales"
        ])
        break;
      case 106:
      case 139:
        setSteps([
          "Datos personales",
          "Datos Financieros",
          "Datos de tu vehículo",
          "Datos de tu salud",
          "Datos adicionales"
        ])
        break;
      case 105:
      case 104:
        setSteps([
          "Datos personales",
          "Datos Financieros",
          "Datos de tu salud",
          "Datos adicionales"
        ])
        break;      
      default:
        break;
    }
  }, [loanTypeId])

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
      residenceCountryId: requestInfo.residenceCountryId,
      residenceStateId: requestInfo.residenceStateId,
      residenceCityId: requestInfo.residenceCityId,
    })
    setFinancialInfo({
      monthlyIncome: requestInfo.monthlyIncome,
      monthlyExpenses: requestInfo.monthlyExpenses,
      assetValue: requestInfo.assetValue,
      liabilitiesValue: requestInfo.liabilitiesValue,
      incomeOrigin: requestInfo.incomeOrigin
    })
    setPropertyInfo({
      housingTypeId: requestInfo.housingTypeId,
      housingValue: requestInfo.housingValue,
      builtgDate: requestInfo.builtgDate === null ? null : dayjs(requestInfo.builtgDate),
      builtArea: requestInfo.builtArea,
      basementNumber: requestInfo.basementNumber,
      apartmentNumber: requestInfo.apartmentNumber,
      buildingFloorsNumber: requestInfo.buildingFloorsNumber,
      address: requestInfo.address,
      stateId: requestInfo.stateId,
      cityId: requestInfo.cityId,
    })
    setVehicleInfo({
      stateVehiculeId: requestInfo.stateVehiculeId,
      cityVehiculeId: requestInfo.cityVehiculeId,
      vehicleLicensePlate: requestInfo.vehicleLicensePlate,
    })
    setHealthInfo({
      weight: requestInfo.weight,
      height: requestInfo.height,
      diseases: requestInfo.diseases,
      hivActive: requestInfo.hivActive,
      plannedMedicalProcidure: requestInfo.plannedMedicalProcidure,
      disability: requestInfo.disability,
      diseasesMoreInfo: requestInfo.diseasesMoreInfo,
      plannedMedicalProcidureMoreInfo: requestInfo.plannedMedicalProcidureMoreInfo,
      disabilityMoreInfo: requestInfo.disabilityMoreInfo,
    })
    setAdditionalInfo({
      convicted: requestInfo.convicted,
      lifeEnsure: requestInfo.lifeEnsure,
      beneficiaries: requestInfo.beneficiaries,
      beneficiaryName: requestInfo.beneficiaryName,
      beneficiaryIdentificationTypeId: 76,
      beneficiaryIdentificationNumber: requestInfo.beneficiaryIdentificationNumber,
    })
  }, [requestInfo])

  useEffect(() => {
    if (isSuccess) {
      setCountriesOptions(data?.data.countries)
    }
  }, [isSuccess, data])

  useEffect(() => {
    if (isSuccessDocument && dataDocument?.data?.groupSettings.length > 0)
      setDocumentTypeOptions(dataDocument?.data?.groupSettings.map((ele) => ({
        name: ele.name,
        id: ele.id
      })))
  }, [dataDocument, isSuccessDocument])

  useEffect(() => {
    if (isSuccessNationality) {
      setNationalityOptions(dataNationality?.data.countries)
    }
  }, [isSuccessNationality, dataNationality])

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

  const iconHousingType = (name) => {
    switch (name) {
      case "Casa":
        return house;
      case "Apartamento":
        return building;
      case "Condominio":
        return condominium
      default:
        return house;
    }
  }

  useEffect(() => {
  if (isSuccessHousingType) {
    const sortedHousingType = dataHousingType?.data?.groupSettings
      .map((ele) => ({
        name: ele.name,
        id: ele.id,
        icon: iconHousingType(ele.name)
      }))
      .sort((a, b) => a.id - b.id);

    setHousingTypeOptions(sortedHousingType);
  }
}, [dataHousingType, isSuccessHousingType]);


  useEffect(() => {
    if (isSuccessStates) {
      setStatesOptions(dataStates?.data.states)
    }
  }, [isSuccessStates, dataStates])

  useEffect(() => {
    if (isSuccessCities) {
      setCitiesOptions(dataCities?.data.cities)
    }
  }, [isSuccessCities, dataCities])

  const freeInvestment = loanTypeId === 104 || loanTypeId === 105

  const nextStep = () => {
    const newHealthInfo = {...healthInfo, diseases: getDiseasesIds(diseases, diseasesOptions)}
    save.reset();
    save.mutate(
      {
        formData: {
          loanApplicationId: requestInfo.loanApplicationId,
          ...userInfo,
          ...financialInfo,
          ...propertyInfo,
          ...newHealthInfo,
          ...additionalInfo,
          ...vehicleInfo,
        },
      },
      {
        onSuccess: (data) => {
          if (freeInvestment && activeStep !== 3) {
            dispatch(setRequestInfo(data?.data.result))
            setActiveStep(activeStep + 1)
          } 
          if (!freeInvestment && activeStep !== 4) {
            dispatch(setRequestInfo(data?.data.result))
            setActiveStep(activeStep + 1)
          }
          if (freeInvestment && activeStep === 3) {
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
          } else if (!freeInvestment && activeStep === 4) {
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
          }
        },
        onError: (err) => {
          err.response.data.errors.map((error) => {
            toast.error(error);
          });
        },
      }
    );
  }

  const backStep = () => {
    if (activeStep === 0) {
      router.push("/solicitar-poliza/confirma-tus-datos")
    } else {
      setActiveStep(activeStep - 1)
    }
  }

  const validForm = (currentStep) => {
    switch (currentStep) {
      case 0:
        const isFormValid = Object.values(userInfo).some(value => value === null);
        return isFormValid
      case 1:
        const obj = {
          monthlyIncome: financialInfo.monthlyIncome,
          monthlyExpenses: financialInfo.monthlyExpenses,
          assetValue: financialInfo.assetValue,
          liabilitiesValue: financialInfo.liabilitiesValue,
        }
        if (requestInfo.loanBalance > 137227300 || requestInfo.monthlyCostInsurance > 6089880) {
          return Object.values(financialInfo).some(value => value === null) || Object.values(checks).every(check => check === false)
        } else {
          return Object.values(obj).some(value => value === null);
        }
      case 2: 
        const obj2 = {
          housingTypeId: propertyInfo.housingTypeId,
          housingValue: propertyInfo.housingValue,
          builtgDate: propertyInfo.builtgDate === null ? null : dayjs(propertyInfo.builtgDate),
          builtArea: propertyInfo.builtArea,
          address: propertyInfo.address,
          stateId: propertyInfo.stateId,
          cityId: propertyInfo.cityId,
        }

        if (loanTypeId === 102 || loanTypeId === 103) {
          if (propertyInfo.housingTypeId !== 147) {
            return Object.values(obj2).some(value => value === null);
          } else {
            return Object.values(propertyInfo).some(value => value === null);
          }
        } else if (loanTypeId === 106 || loanTypeId === 139) {
          return Object.values(vehicleInfo).some(value => value === null);
        } else {
          return false;
        }
      case 3: 
        if (loanTypeId === 104 || loanTypeId === 105) {
          const obj3 = {
            convicted: additionalInfo.convicted,
            lifeEnsure: additionalInfo.lifeEnsure,
            beneficiaries: additionalInfo.beneficiaries,
          }
          if (additionalInfo.beneficiaries === false) {
            return Object.values(additionalInfo).some(value => value === null);
          } else {
            return Object.values(obj3).some(value => value === null);
          }
        } else {
          return false;
        }
      case 4:
        const obj3 = {
          convicted: additionalInfo.convicted,
          lifeEnsure: additionalInfo.lifeEnsure,
          beneficiaries: additionalInfo.beneficiaries,
        }
        if (additionalInfo.beneficiaries === false) {
          return Object.values(additionalInfo).some(value => value === null);
        } else {
          return Object.values(obj3).some(value => value === null);
        }
      default:
        break;
    }
  }

  return (
    <Container>
      <Header isMobile={isMobile} />
      <WrapperPolicy style={{ padding: 0, alignItems: "center" }}>
        {isMobile ? (
          <MobileStepperPolicy loanTypeId={loanTypeId} steps={steps} activeStep={activeStep} />
        ) : (
          <Col width="100%">
            <Div height="68px" p="16px 40px 16px 40px" style={{ background: theme.colors.white }}>
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
          />
        )}
        {activeStep === 2 && (
          loanTypeId === 102 || loanTypeId === 103 ? (
            <Step3
              isMobile={isMobile}
              formInfo={propertyInfo}
              setFormInfo={setPropertyInfo}
              housingTypeOptions={housingTypeOptions}
            />
          ) : loanTypeId === 106 || loanTypeId === 139 ? (
            <Step3V 
              isMobile={isMobile}
              formInfo={vehicleInfo}
              setFormInfo={setVehicleInfo}
            />
          ) : (
            <Step4
              isMobile={isMobile}
              formInfo={healthInfo}
              setFormInfo={setHealthInfo}
              diseasesOptions={diseasesOptions}
              diseases={diseases}
              setDiseases={setDiseases}
            />
          )
        )}
        {activeStep === 3 && (
          loanTypeId === 104 || loanTypeId === 105 ? (
            <Step5
              isMobile={isMobile}
              formInfo={additionalInfo}
              setFormInfo={setAdditionalInfo}
              documentTypeOptions={documentTypeOptions}
            />
          ) : (
            <Step4
              isMobile={isMobile}
              formInfo={healthInfo}
              setFormInfo={setHealthInfo}
              diseasesOptions={diseasesOptions}
              diseases={diseases}
              setDiseases={setDiseases}
            />
          )
        )}
        {activeStep === 4 && (
          <Step5
            isMobile={isMobile}
            formInfo={additionalInfo}
            setFormInfo={setAdditionalInfo}
            documentTypeOptions={documentTypeOptions}
          />
        )}
        <Div width={isMobile ? "312px" : "668px"} m="46px 0 24px 0" justify="space-between">
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
          >
            Siguiente
          </Button>
        </Div>
      </WrapperPolicy>
    </Container>
  )
}

export default RequestPolicy;