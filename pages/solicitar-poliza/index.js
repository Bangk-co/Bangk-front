/* eslint-disable react-hooks/exhaustive-deps */
import React, { use, useEffect, useState } from "react";
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
import { useSelector } from "react-redux";
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

const RequestPolicy = ({ isMobile }) => {
  const router = useRouter()
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
  const [formInfo, setFormInfo] = useState({
    birthCountryId: null,
    birthStateId: null,
    birthCityId: null,
    countryNationalityId: null,
    civilStatusId: null,
    numberChildren: "",
    occupation: "",
    occupationActivityId: null,
    isPublicPerson: null,
    residenceCountryId: null,
    residenceStateId: null,
    residenceCityId: null,
    monthlyIncome: "",
    monthlyExpenses: "",
    assetValue: "",
    liabilitiesValue: "",
    housingTypeId: null,
    housingValue: "",
    builtgDate: null,
    builtArea: "",
    address: "",
    departmentId: null,
    cityId: null,
    weight: "",
    height: "",
    hivActive: false,
    plannedMedicalProcidure: false,
    disability: false,
    lifeEnsure: false,
    convicted: false,
    beneficiaries: false,
    basementNumber: null,
    apartmentNumber: null,
    buildingFloorsNumber: null,
    diseases: null,
    diseasesMoreInfo: null,
    plannedMedicalProcidureMoreInfo: null,
    disabilityMoreInfo: null,
    beneficiaryName: null,
    beneficiaryIdentificationTypeId: 76,
    beneficiaryIdentificationNumber: null
  })

  const statesList = useGetStates(formInfo.birthCountryId)
  const { data: dataStates, isSuccess: isSuccessStates } = statesList
  const [statesOptions, setStatesOptions] = useState([])
  const citiesList = useGetCities(formInfo.birthStateId)
  const { data: dataCities, isSuccess: isSuccessCities } = citiesList
  const [citiesOptions, setCitiesOptions] = useState([])

  const steps = [
    "Datos personales",
    "Datos Financieros",
    "Datos de tu Inmueble",
    "Datos de tu salud",
    "Datos adicionales"
  ]

  useEffect(() => {
    setFormInfo({
      birthCountryId: null,
      birthStateId: null,
      birthCityId: requestInfo.birthCityId,
      countryNationalityId: requestInfo.countryNationalityId,
      civilStatusId: requestInfo.civilStatusId,
      numberChildren: requestInfo.numberChildren,
      occupation: requestInfo.occupation,
      occupationActivityId: requestInfo.occupationActivityId,
      isPublicPerson: requestInfo.isPublicPerson,
      residenceCountryId: null,
      residenceStateId: null,
      residenceCityId: requestInfo.residenceCityId,
      monthlyIncome: requestInfo.monthlyIncome,
      monthlyExpenses: requestInfo.monthlyExpenses,
      assetValue: requestInfo.assetValue,
      liabilitiesValue: requestInfo.liabilitiesValue,
      housingTypeId: requestInfo.housingTypeId,
      housingValue: requestInfo.housingValue,
      builtgDate: dayjs(requestInfo.builtgDate),
      builtArea: requestInfo.builtArea,
      address: requestInfo.address,
      departmentId: null,
      cityId: requestInfo.cityId,
      weight: requestInfo.weight,
      height: requestInfo.height,
      hivActive: requestInfo.hivActive,
      plannedMedicalProcidure: requestInfo.plannedMedicalProcidure,
      disability: requestInfo.disability,
      lifeEnsure: requestInfo.lifeEnsure,
      convicted: requestInfo.convicted,
      beneficiaries: requestInfo.beneficiaries,
      basementNumber: requestInfo.basementNumber,
      apartmentNumber: requestInfo.apartmentNumber,
      buildingFloorsNumber: requestInfo.buildingFloorsNumber,
      diseases: requestInfo.diseases,
      diseasesMoreInfo: requestInfo.diseasesMoreInfo,
      plannedMedicalProcidureMoreInfo: requestInfo.plannedMedicalProcidureMoreInfo,
      disabilityMoreInfo: requestInfo.disabilityMoreInfo,
      beneficiaryName: requestInfo.beneficiaryName,
      beneficiaryIdentificationTypeId: 76,
      beneficiaryIdentificationNumber: requestInfo.beneficiaryIdentificationNumber
    })
  }, [])

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
    if (isSuccessHousingType)
      setHousingTypeOptions(
        dataHousingType?.data?.groupSettings.map((ele) => ({
          name: ele.name,
          id: ele.id,
          icon: iconHousingType(ele.name)
        }))
      );
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

  const handleChangeText = (event) => {
    const { id, value } = event.target
    const newInfo = { ...formInfo }

    newInfo[id] = value
    setFormInfo(newInfo)
  }

  const handleChangeNumber = (event) => {
    const { id, value } = event.target
    const newInfo = { ...formInfo }

    newInfo[id] = value.replace(/\D/g, "");
    setFormInfo(newInfo)
  }

  const handleSelect = (event) => {
    const { name, value } = event.target
    const newInfo = { ...formInfo }

    newInfo[name] = value
    setFormInfo(newInfo)
  }

  const handleChangeYear = (event) => {
    const newInfo = { ...formInfo }

    newInfo["builtgDate"] = event
    setFormInfo(newInfo)
  }

  const handleSelectHousingType = (id) => {
    const newInfo = { ...formInfo }

    newInfo["housingTypeId"] = id
    setFormInfo(newInfo)
  }

  const handleChangeRadio = (event, id) => {
    const { defaultValue } = event.target;
    const newInfo = { ...formInfo };

    newInfo[id] = defaultValue;
    setFormInfo(newInfo);
  };

  const nextStep = () => {
    setActiveStep(activeStep + 1)
  }

  const backStep = () => {
    if (activeStep === 0) {
      router.push("/solicitar-poliza/confirma-tus-datos")
    } else {
      setActiveStep(activeStep - 1)
    }
  }

  return (
    <Container>
      <Header isMobile={isMobile} />
      <WrapperPolicy style={{ padding: 0, alignItems: "center" }}>
        {isMobile ? (
          <MobileStepperPolicy steps={steps} activeStep={activeStep} />
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
            formInfo={formInfo}
            countriesOptions={countriesOptions}
            nationalityOptions={nationalityOptions}
            civilStatusOptions={civilStatusOptions}
            statesOptions={statesOptions}
            citiesOptions={citiesOptions}
            economicActivityOptions={economicActivityOptions}
            handleSelect={handleSelect}
            handleChangeNumber={handleChangeNumber}
            handleChangeText={handleChangeText}
            handleChangeRadio={handleChangeRadio}
          />
        )}
        {activeStep === 1 && (
          <Step2
            isMobile={isMobile}
            formInfo={formInfo}
            handleChangeNumber={handleChangeNumber}
          />
        )}
        {activeStep === 2 && (
          <Step3
            isMobile={isMobile}
            formInfo={formInfo}
            housingTypeOptions={housingTypeOptions}
            statesOptions={statesOptions}
            citiesOptions={citiesOptions}
            handleSelect={handleSelect}
            handleChangeNumber={handleChangeNumber}
            handleChangeYear={handleChangeYear}
            handleSelectHousingType={handleSelectHousingType}
            handleChangeText={handleChangeText}
          />
        )}
        {activeStep === 3 && (
          <Step4
            isMobile={isMobile}
            formInfo={formInfo}
            diseasesOptions={diseasesOptions}
            handleChangeNumber={handleChangeNumber}
            handleChangeRadio={handleChangeRadio}
          />
        )}
        {activeStep === 4 && (
          <Step5
            isMobile={isMobile}
            formInfo={formInfo}
            documentTypeOptions={documentTypeOptions}
            handleSelect={handleSelect}
            handleChangeNumber={handleChangeNumber}
            handleChangeRadio={handleChangeRadio}
            handleChangeText={handleChangeText}
          />
        )}

        <Div width="549px" m="46px 0 24px 0" justify="space-between">
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
            // disabled={!isFormValid}
          >
            Siguiente
          </Button>
        </Div>
      </WrapperPolicy>
    </Container>
  )
}

export default RequestPolicy;