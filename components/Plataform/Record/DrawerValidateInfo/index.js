/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react";
import dayjs from "dayjs";
import { omit } from "lodash";
import closeIcon from "@/assets/icons/close.svg";
import { Drawer } from "@/components/Common/Drawer";
import Image from "next/image";
import { Div, Text, Row } from "@/styles/Common";
import { theme } from "@/styles/theme";
import { InfoCard } from "./styles";
import arrowDownIcon from "@/assets/icons/arrow-down.svg";
import arrowUpIcon from "@/assets/icons/arrow-up.svg";
import { PersonalData } from "./PersonalData";
import { FinancialData } from "./FinancialData";
import { PropertyData } from "./PropertyData";
import { HealtData } from "./HealthData";
import { AdditionalData } from "./AdditionalData";
import { Button } from "@/components/Common/Button";
import checkIcon from "@/assets/icons/check_circle.svg";
import alertIcon from "@/assets/icons/alert-yellow.svg";
import useGetLoanInsurancePolicyInfo from "@/hooks/Customers/useGetLoanInsurancePolicyInfo";
import useGetLoanFormAssessorConcept from "@/hooks/Customers/useGetLoanFormAssessorConcept";
import useSaveLoanFormAssessorConcept from "@/hooks/Customers/useSaveLoanFormAssessorConcept";
import useGetCountries from "@/hooks/Common/useGetCountries";
import useGetStates from "@/hooks/Common/useGetStates";
import useGetCities from "@/hooks/Common/useGetCities";
import useSaveLoanInsurancePolicy from "@/hooks/Customers/useSaveLoanInsurancePolicy";
import useGetDiseases from "@/hooks/Common/useGetDiseases";
import { useQueryClient } from "react-query";
import useChangeStateForms from "@/hooks/Customers/useChangeStateForms";
import CircularProgress from "@mui/material/CircularProgress";
import { VehiculeData } from "./VehiculeData";

export const DrawerValidateInfo = ({
  showDrawer,
  setShowDrawerValidateInfo,
  loanApplicationId,
  loanTypeName,
  isValidated,
}) => {
  const queryClient = useQueryClient();
  const save = useSaveLoanInsurancePolicy();
  const saveConcept = useSaveLoanFormAssessorConcept();
  const changeState = useChangeStateForms();

  const [expandedCardIndex, setExpandedCardIndex] = useState(null);
  let initialAssessorConcept = {
    personalInfo: {
      concept: "",
      comments: "",
    },
    financialInfo: {
      concept: "",
      comments: "",
    },
    propertyInfo: {
      concept: "",
      comments: "",
    },
    vehiculeInfo: {
      concept: "",
      comments: "",
    },
    healthInfo: {
      concept: "",
      comments: "",
    },
    additionalInfo: {
      concept: "",
      comments: "",
    },
  };

  if (loanTypeName === "Libre inversión" || loanTypeName === "Libranza") {
    initialAssessorConcept = omit(initialAssessorConcept, [
      "vehiculeInfo",
      "propertyInfo",
    ]);
  } else if (
    loanTypeName === "Hipotecario" ||
    loanTypeName === "Leasing habitacional"
  ) {
    initialAssessorConcept = omit(initialAssessorConcept, ["vehiculeInfo"]);
  } else if (
    loanTypeName === "Vehiculo" ||
    loanTypeName === "Leasing Vehiculo"
  ) {
    initialAssessorConcept = omit(initialAssessorConcept, ["propertyInfo"]);
  }
  const [assessorConcept, setAssessorConcept] = useState(
    initialAssessorConcept
  );
  const [isEditing, setIsEditing] = useState(false);
  const [cancelEdit, setCancelEdit] = useState(false);
  const [personalInfo, setPersonalInfo] = useState({
    birthCountryId: null,
    countryNationalityId: null,
    birthStateId: null,
    birthCityId: null,
    civilStatusId: null,
    numberChildren: "",
    occupation: "",
    occupationActivityId: null,
    isPublicPerson: null,
    hasBondPublicPerson: null,
    residenceCountryId: null,
    residenceStateId: null,
    residenceCityId: null,
  });
  const initialErrorPersonalInfo = {
    name: {
      error: false,
      message: "",
    },
    birthCountryId: {
      error: false,
      message: "",
    },
    countryNationalityId: {
      error: false,
      message: "",
    },
    birthStateId: {
      error: false,
      message: "",
    },
    birthCityId: {
      error: false,
      message: "",
    },
    civilStatusId: {
      error: false,
      message: "",
    },
    numberChildren: {
      error: false,
      message: "",
    },
    occupation: {
      error: false,
      message: "",
    },
    occupationActivityId: {
      error: false,
      message: "",
    },
    isPublicPerson: {
      error: false,
      message: "",
    },
    hasBondPublicPerson: {
      error: false,
      message: "",
    },
    residenceCountryId: {
      error: false,
      message: "",
    },
    residenceStateId: {
      error: false,
      message: "",
    },
    residenceCityId: {
      error: false,
      message: "",
    },
  };
  const [errorsPersonalInfo, setErrorsPersonalInfo] = useState(
    initialErrorPersonalInfo
  );

  const [financialInfo, setFinancialInfo] = useState({
    monthlyIncome: null,
    monthlyExpenses: null,
    assetValue: null,
    liabilitiesValue: null,
    incomeOrigin: null,
  });
  const initialErrorFinancialInfo = {
    monthlyIncome: {
      error: false,
      message: "",
    },
    monthlyExpenses: {
      error: false,
      message: "",
    },
    assetValue: {
      error: false,
      message: "",
    },
    liabilitiesValue: {
      error: false,
      message: "",
    },
  };
  const [errorsFinancialInfo, setErrorsFinancialInfo] = useState(
    initialErrorFinancialInfo
  );

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
  });
  const initialErrorPropertyInfo = {
    housingValue: {
      error: false,
      message: "",
    },
    builtgDate: {
      error: false,
      message: "",
    },
    builtArea: {
      error: false,
      message: "",
    },
    basementNumber: {
      error: false,
      message: "",
    },
    apartmentNumber: {
      error: false,
      message: "",
    },
    buildingFloorsNumber: {
      error: false,
      message: "",
    },
    address: {
      error: false,
      message: "",
    },
    stateId: {
      error: false,
      message: "",
    },
    cityId: {
      error: false,
      message: "",
    },
  };
  const [errorsPropertyInfo, setErrorsPropertyInfo] = useState(
    initialErrorPropertyInfo
  );

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
  const initialErrorHealthInfo = {
    weight: {
      error: false,
      message: "",
    },
    height: {
      error: false,
      message: "",
    },
    diseases: {
      error: false,
      message: "",
    },
    hivActive: {
      error: false,
      message: "",
    },
    plannedMedicalProcidure: {
      error: false,
      message: "",
    },
    disability: {
      error: false,
      message: "",
    },
    plannedMedicalProcidureMoreInfo: {
      error: false,
      message: "",
    },
  };
  const [errorsHealthInfo, setErrorsHealthInfo] = useState(
    initialErrorHealthInfo
  );

  const [additionalInfo, setAdditionalInfo] = useState({
    convicted: null,
    lifeEnsure: null,
    beneficiaries: null,
    beneficiary: [],
  });
  const initialErrorAdditionalInfo = {
    convicted: {
      error: false,
      message: "",
    },
    lifeEnsure: {
      error: false,
      message: "",
    },
    beneficiaries: {
      error: false,
      message: "",
    },
  };
  const [errorsAdditionalInfo, setErrorsAdditionalInfo] = useState(
    initialErrorAdditionalInfo
  );

  const [vehiculeInfo, setVehiculeInfo] = useState({
    /* countryVehiculeId: null,*/
    stateVehiculeId: null,
    cityVehiculeId: null,
    vehicleLicensePlate: "",
  });
  const initialErrorVehiculeInfo = {
    stateVehiculeId: {
      error: false,
      message: "",
    },
    cityVehiculeId: {
      error: false,
      message: "",
    },
    vehicleLicensePlate: {
      error: false,
      message: "",
    },
  };
  const [errorsVehiculeInfo, setErrorsVehiculeInfo] = useState(
    initialErrorVehiculeInfo
  );

  const [generalInfo, setGeneralInfo] = useState({
    countryCodePhoneId: null,
    countryNationalityId: null,
    documentIdentificationTypeId: null,
    documentIssueDate: null,
    email: "",
    identificationNumber: null,
    name: "",
    lastName: "",
    phoneNumber: null,
    birthDate: null,
    genderId: null,
    loanTypeId: null,
    loanBalance: null,
    monthlyCostInsurance: null,
    clienId: null,
  });

  const loanInsurancePolicyData =
    useGetLoanInsurancePolicyInfo(loanApplicationId);
  const { data, isLoading } = loanInsurancePolicyData;
  useEffect(() => {
    if (data?.data?.loanInsurancePolicies) {
      setPersonalInfo({
        birthCountryId: data?.data?.loanInsurancePolicies.birthCountryId,
        countryNationalityId:
          data?.data?.loanInsurancePolicies.countryNationalityId,
        birthStateId: data?.data?.loanInsurancePolicies.birthStateId,
        birthCityId: data?.data?.loanInsurancePolicies.birthCityId,
        civilStatusId: data?.data?.loanInsurancePolicies.civilStatusId,
        numberChildren: Number(
          data?.data?.loanInsurancePolicies.numberChildren
        ),
        occupation: data?.data?.loanInsurancePolicies.occupation,
        occupationActivityId:
          data?.data?.loanInsurancePolicies.occupationActivityId,
        isPublicPerson: data?.data?.loanInsurancePolicies.isPublicPerson,
        hasBondPublicPerson:
          data?.data?.loanInsurancePolicies.hasBondPublicPerson,
        residenceCountryId:
          data?.data?.loanInsurancePolicies.residenceCountryId,
        residenceStateId: data?.data?.loanInsurancePolicies.residenceStateId,
        residenceCityId: data?.data?.loanInsurancePolicies.residenceCityId,
      });

      setFinancialInfo({
        monthlyIncome: data?.data?.loanInsurancePolicies.monthlyIncome,
        monthlyExpenses: data?.data?.loanInsurancePolicies.monthlyExpenses,
        assetValue: data?.data?.loanInsurancePolicies.assetValue,
        liabilitiesValue: data?.data?.loanInsurancePolicies.liabilitiesValue,
        incomeOrigin: data?.data?.loanInsurancePolicies.incomeOrigin,
      });
      setPropertyInfo({
        housingTypeId: data?.data?.loanInsurancePolicies.housingTypeId,
        housingValue: data?.data?.loanInsurancePolicies.housingValue,
        builtgDate:
          data?.data?.loanInsurancePolicies.builtgDate === null
            ? null
            : dayjs(data?.data?.loanInsurancePolicies.builtgDate),
        builtArea: data?.data?.loanInsurancePolicies.builtArea,
        basementNumber: data?.data?.loanInsurancePolicies.basementNumber,
        apartmentNumber: data?.data?.loanInsurancePolicies.apartmentNumber,
        buildingFloorsNumber:
          data?.data?.loanInsurancePolicies.buildingFloorsNumber,
        address: data?.data?.loanInsurancePolicies.address,
        stateId: data?.data?.loanInsurancePolicies.stateId,
        cityId: data?.data?.loanInsurancePolicies.cityId,
      });
      setHealthInfo({
        weight: data?.data?.loanInsurancePolicies.weight,
        height: data?.data?.loanInsurancePolicies.height,
        diseases: data?.data?.loanInsurancePolicies.diseases,
        hivActive: data?.data?.loanInsurancePolicies.hivActive,
        plannedMedicalProcidure:
          data?.data?.loanInsurancePolicies.plannedMedicalProcidure,
        disability: data?.data?.loanInsurancePolicies.disability,
        diseasesMoreInfo: data?.data?.loanInsurancePolicies.diseasesMoreInfo,
        plannedMedicalProcidureMoreInfo:
          data?.data?.loanInsurancePolicies.plannedMedicalProcidureMoreInfo,
        disabilityMoreInfo:
          data?.data?.loanInsurancePolicies.disabilityMoreInfo,
      });
      setAdditionalInfo({
        convicted: data?.data?.loanInsurancePolicies.convicted,
        lifeEnsure: data?.data?.loanInsurancePolicies.lifeEnsure,
        beneficiaries: data?.data?.loanInsurancePolicies.beneficiaries,
        beneficiary: data?.data?.loanInsurancePolicies.beneficiary,
      });
      setVehiculeInfo({
        /* countryVehiculeId: data?.data?.loanInsurancePolicies.countryVehiculeId,*/
        stateVehiculeId: data?.data?.loanInsurancePolicies.stateVehiculeId,
        cityVehiculeId: data?.data?.loanInsurancePolicies.cityVehiculeId,
        vehicleLicensePlate:
          data?.data?.loanInsurancePolicies.vehicleLicensePlate,
      });
      setGeneralInfo({
        countryCodePhoneId:
          data?.data?.loanInsurancePolicies.countryCodePhoneId,
        countryNationalityId:
          data?.data?.loanInsurancePolicies.countryNationalityId,
        documentIdentificationTypeId:
          data?.data?.loanInsurancePolicies.documentIdentificationTypeId,
        documentIssueDate: data?.data?.loanInsurancePolicies.documentIssueDate,
        email: data?.data?.loanInsurancePolicies.email,
        identificationNumber:
          data?.data?.loanInsurancePolicies.identificationNumber,
        name: data?.data?.loanInsurancePolicies.name,
        lastName: data?.data?.loanInsurancePolicies.lastName,
        phoneNumber: data?.data?.loanInsurancePolicies.phoneNumber,
        birthDate: data?.data?.loanInsurancePolicies.birthDate,
        genderId: data?.data?.loanInsurancePolicies.genderId,
        loanTypeId: data?.data?.loanInsurancePolicies.loanTypeId,
        loanBalance: data?.data?.loanInsurancePolicies.loanBalance,
        monthlyCostInsurance:
          data?.data?.loanInsurancePolicies.monthlyCostInsurance,
        clienId: data?.data?.loanInsurancePolicies.clienId,
      });
    }
  }, [data, isLoading, cancelEdit]);

  const loanFormAssesorConcept =
    useGetLoanFormAssessorConcept(loanApplicationId);
  const { data: dataAssesorConcept, isLoading: isLoadingAssessorConcept } =
    loanFormAssesorConcept;
  useEffect(() => {
    if (dataAssesorConcept?.data?.getLoanForm) {
      dataAssesorConcept?.data?.getLoanForm.map((item) => {
        const { formName, concept, comment } = item;
        switch (formName) {
          case "personalInfo":
            setAssessorConcept((prevState) => ({
              ...prevState,
              personalInfo: {
                concept: concept,
                comments: comment,
              },
            }));
            break;
          case "financialInfo":
            setAssessorConcept((prevState) => ({
              ...prevState,
              financialInfo: {
                concept: concept,
                comments: comment,
              },
            }));
            break;
          case "propertyInfo":
            setAssessorConcept((prevState) => ({
              ...prevState,
              propertyInfo: {
                concept: concept,
                comments: comment,
              },
            }));
            break;
          case "healthInfo":
            setAssessorConcept((prevState) => ({
              ...prevState,
              healthInfo: {
                concept: concept,
                comments: comment,
              },
            }));
            break;
          case "additionalInfo":
            setAssessorConcept((prevState) => ({
              ...prevState,
              additionalInfo: {
                concept: concept,
                comments: comment,
              },
            }));
            break;
          case "vehiculeInfo":
            setAssessorConcept((prevState) => ({
              ...prevState,
              vehiculeInfo: {
                concept: concept,
                comments: comment,
              },
            }));
            break;
          default:
            break;
        }
      });
    }
  }, [dataAssesorConcept, isLoadingAssessorConcept]);

  const countriesList = useGetCountries();
  const { data: dataCountries, isSuccess: isSuccessCountries } = countriesList;
  const [countriesOptions, setCountriesOptions] = useState([]);
  useEffect(() => {
    if (isSuccessCountries) {
      setCountriesOptions(dataCountries?.data?.countries);
    }
  }, [isSuccessCountries, dataCountries]);

  const statesList = useGetStates(personalInfo.residenceCountryId);
  const { data: dataStates, isSuccess: isSuccessStates } = statesList;
  const [residenceStatesOptions, setResidenceStatesOptions] = useState([]);
  useEffect(() => {
    if (isSuccessStates) {
      setResidenceStatesOptions(dataStates?.data.states);
    } else {
      setResidenceStatesOptions([]);
    }
  }, [isSuccessStates, dataStates, personalInfo.residenceCountryId]);

  const citiesList = useGetCities(personalInfo.residenceStateId);
  const { data: dataCities, isSuccess: isSuccessCities } = citiesList;
  const [residenceCitiesOptions, setResidenceCitiesOptions] = useState([]);
  useEffect(() => {
    if (isSuccessCities) {
      setResidenceCitiesOptions(dataCities?.data.cities);
    } else {
      setResidenceCitiesOptions([]);
    }
  }, [isSuccessCities, dataCities]);

  const diseasesList = useGetDiseases();
  const { data: dataDiseases, isSuccess: isSuccessDiseases } = diseasesList;
  const [diseasesOptions, setDiseasesOptions] = useState([]);
  useEffect(() => {
    if (isSuccessDiseases)
      setDiseasesOptions(
        dataDiseases?.data?.groupSettings.map((ele) => ({
          name: ele.name,
          id: ele.id,
        }))
      );
  }, [dataDiseases, isSuccessDiseases]);

  const closeDrawer = () => {
    setExpandedCardIndex(null);
    setIsEditing(false);
    setShowDrawerValidateInfo(false);
  };

  const iconCondition = {
    "": null,
    "La información es correcta": (
      <Image alt="check" src={checkIcon} width={32} height={32} />
    ),
    "Presenta novedades": (
      <Image alt="check" src={alertIcon} width={32} height={32} />
    ),
  };

  const descriptionCondition = {
    "": null,
    "La información es correcta": "Esta información ya se encuentra validada",
    "Presenta novedades": "Esta información presenta una novedad",
  };

  const infoCards = [
    {
      icon: iconCondition[assessorConcept?.personalInfo?.concept],
      title: "Datos personales",
      description:
        descriptionCondition[assessorConcept?.personalInfo?.concept] !== null
          ? descriptionCondition[assessorConcept?.personalInfo?.concept]
          : "Verifica que los datos personales sean correctos",
    },

    {
      icon: iconCondition[assessorConcept?.financialInfo?.concept],
      title: "Datos financieros",
      description:
        descriptionCondition[assessorConcept?.financialInfo?.concept] !== null
          ? descriptionCondition[assessorConcept?.financialInfo?.concept]
          : "Verifica que los datos personales sean correctos",
    },
    loanTypeName === "Libre inversión" || loanTypeName === "Libranza"
      ? null
      : {
          icon:
            loanTypeName === "Hipotecario"
              ? iconCondition[assessorConcept?.propertyInfo?.concept]
              : iconCondition[assessorConcept?.vehiculeInfo?.concept],
          title:
            loanTypeName === "Hipotecario" ||
            loanTypeName === "Leasing habitacional"
              ? "Datos del inmueble"
              : "Datos del vehículo",
          //TODO change to vehicule
          description:
            loanTypeName === "Hipotecario"
              ? descriptionCondition[assessorConcept?.propertyInfo?.concept] !==
                null
                ? descriptionCondition[assessorConcept?.propertyInfo?.concept]
                : "Verifica que los datos personales sean correctos"
              : descriptionCondition[assessorConcept?.vehiculeInfo?.concept] !==
                null
              ? descriptionCondition[assessorConcept?.vehiculeInfo?.concept]
              : "Verifica que los datos personales sean correctos",
        },
    {
      icon: iconCondition[assessorConcept?.healthInfo?.concept],
      title: "Datos de salud",
      description:
        descriptionCondition[assessorConcept?.healthInfo?.concept] !== null
          ? descriptionCondition[assessorConcept?.healthInfo?.concept]
          : "Verifica que los datos personales sean correctos",
    },
    {
      icon: iconCondition[assessorConcept?.additionalInfo?.concept],
      title: "Datos adicionales",
      description:
        descriptionCondition[assessorConcept?.additionalInfo?.concept] !== null
          ? descriptionCondition[assessorConcept?.additionalInfo?.concept]
          : "Verifica que los datos personales sean correctos",
    },
  ];
  const infoCardsFiltered = infoCards.filter((item) => item !== null);

  const handleCancel = () => {
    setIsEditing(false);
    setCancelEdit(!cancelEdit);
  };

  const handleExpandedCard = (indx, expandedCardIndex) => {
    setIsEditing(false);
    setExpandedCardIndex(indx === expandedCardIndex ? null : indx);
  };

  const handleSave = (validate, form, errors, setError) => {
    const validation = validate.validate(form, {
      abortEarly: false,
    });
    if (validation.error) {
      const newErrorForm = { ...errors };
      validation.error.details.forEach((ele) => {
        const label = ele.context.label;
        newErrorForm[label].error = true;

        newErrorForm[label].message = "Campo obligatorio";
        setError(newErrorForm);
      });
    } else {
      save.reset();
      save.mutate(
        {
          formData: {
            loanApplicationId: loanApplicationId,
            ...personalInfo,
            ...financialInfo,
            ...propertyInfo,
            ...healthInfo,
            ...additionalInfo,
            ...vehiculeInfo,
            ...generalInfo, //TODO validate if is required
          },
        },
        {
          onSuccess: () => {
            setIsEditing(false);
            setExpandedCardIndex(expandedCardIndex + 1);
            queryClient.invalidateQueries([
              "LoanInsurancePolicyInfo",
              loanApplicationId,
            ]);
            queryClient.invalidateQueries(["historyList"]);
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

  const handleContinue = (formName, concept, comment) => {
    saveConcept.reset();
    saveConcept.mutate(
      {
        loanApplicationId: loanApplicationId,
        formName: formName,
        concept: concept,
        comment: comment,
      },
      {
        onSuccess: () => {
          setExpandedCardIndex(expandedCardIndex + 1);
          queryClient.invalidateQueries(["loanForm", loanApplicationId]);
        },
        onError: (err) => {
          err.response.data.errors.map((error) => {
            toast.error(error);
          });
        },
      }
    );
  };

  const handleChangeStateForm = () => {
    let observations;
    const presentingIssues = Object.values(assessorConcept).filter(
      (concept) => concept.concept === "Presenta novedades"
    );

    if (presentingIssues.length > 0) {
      const comments = presentingIssues
        .map((issue) => issue.comments)
        .join(", ");
      observations = comments;
    } else {
      observations = "";
    }
    changeState.reset();
    changeState.mutate(
      { loanApplicationId: loanApplicationId, observations: observations },
      {
        onSuccess: () => {
          closeDrawer();
          queryClient.invalidateQueries(["historyList", loanApplicationId]);
        },
        onError: (err) => {
          err.response.data.errors.map((error) => {
            toast.error(error);
          });
        },
      }
    );
  };

  const validateFormByType = () => {
    switch (loanTypeName) {
      case "Libre inversión":
      case "Libranza":
        return null;
      case "Hipotecario":
      case "Leasing habitacional":
        return (
          <PropertyData
            key="propertyData"
            assessorConcept={assessorConcept}
            setAssessorConcept={setAssessorConcept}
            isEditing={isEditing}
            setIsEditing={setIsEditing}
            propertyInfo={propertyInfo}
            setPropertyInfo={setPropertyInfo}
            handleCancel={handleCancel}
            errorsPropertyInfo={errorsPropertyInfo}
            setErrorsPropertyInfo={setErrorsPropertyInfo}
            handleSave={handleSave}
            isLoadingSave={save.isLoading}
            isLoadingContinue={saveConcept.isLoading}
            handleContinue={handleContinue}
            isValidated={isValidated}
          />
        );
      case "Vehiculo":
      case "Leasing Vehiculo":
        return (
          <VehiculeData
            key="propertyData"
            assessorConcept={assessorConcept}
            setAssessorConcept={setAssessorConcept}
            isEditing={isEditing}
            setIsEditing={setIsEditing}
            vehiculeInfo={vehiculeInfo}
            setVehiculeInfo={setVehiculeInfo}
            handleCancel={handleCancel}
            errorsVehiculeInfo={errorsVehiculeInfo}
            setErrorsVehiculeInfo={setErrorsVehiculeInfo}
            handleSave={handleSave}
            isLoadingSave={save.isLoading}
            isLoadingContinue={saveConcept.isLoading}
            handleContinue={handleContinue}
            isValidated={isValidated}
            countryVehiculeId={
              data?.data?.loanInsurancePolicies.countryVehiculeId
            }
          />
        );
    }
  };
  const expandedCardData = [
    <PersonalData
      key="personalData"
      assessorConcept={assessorConcept}
      setAssessorConcept={setAssessorConcept}
      isEditing={isEditing}
      setIsEditing={setIsEditing}
      personalInfo={personalInfo}
      setPersonalInfo={setPersonalInfo}
      countriesOptions={countriesOptions}
      residenceStatesOptions={residenceStatesOptions}
      residenceCitiesOptions={residenceCitiesOptions}
      handleCancel={handleCancel}
      errorsPersonalInfo={errorsPersonalInfo}
      setErrorsPersonalInfo={setErrorsPersonalInfo}
      handleSave={handleSave}
      isLoadingSave={save.isLoading}
      isLoadingContinue={saveConcept.isLoading}
      handleContinue={handleContinue}
      isValidated={isValidated}
    />,
    <FinancialData
      key="financialData"
      assessorConcept={assessorConcept}
      setAssessorConcept={setAssessorConcept}
      isEditing={isEditing}
      setIsEditing={setIsEditing}
      financialInfo={financialInfo}
      setFinancialInfo={setFinancialInfo}
      handleCancel={handleCancel}
      errorsFinancialInfo={errorsFinancialInfo}
      setErrorsFinancialInfo={setErrorsFinancialInfo}
      handleSave={handleSave}
      isLoadingSave={save.isLoading}
      isLoadingContinue={saveConcept.isLoading}
      handleContinue={handleContinue}
      isValidated={isValidated}
    />,
    validateFormByType(),
    <HealtData
      key="healthData"
      assessorConcept={assessorConcept}
      setAssessorConcept={setAssessorConcept}
      isEditing={isEditing}
      setIsEditing={setIsEditing}
      healthInfo={healthInfo}
      setHealthInfo={setHealthInfo}
      handleCancel={handleCancel}
      errorsHealthInfo={errorsHealthInfo}
      setErrorsHealthInfo={setErrorsHealthInfo}
      handleSave={handleSave}
      isLoadingSave={save.isLoading}
      isLoadingContinue={saveConcept.isLoading}
      handleContinue={handleContinue}
      isValidated={isValidated}
    />,
    <AdditionalData
      key="additionalData"
      assessorConcept={assessorConcept}
      setAssessorConcept={setAssessorConcept}
      isEditing={isEditing}
      setIsEditing={setIsEditing}
      additionalInfo={additionalInfo}
      setAdditionalInfo={setAdditionalInfo}
      handleCancel={handleCancel}
      errorsAdditionalInfo={errorsAdditionalInfo}
      setErrorsAdditionalInfo={setErrorsAdditionalInfo}
      handleSave={handleSave}
      isLoadingSave={save.isLoading}
      isLoadingContinue={saveConcept.isLoading}
      handleContinue={handleContinue}
      isValidated={isValidated}
      loanApplicationId={loanApplicationId}
    />,
  ];
  const expandedCardDataFiltered = expandedCardData.filter(
    (item) => item !== null
  );

  return (
    <Drawer
      closeIcon={<Image alt="close" src={closeIcon} width={20} height={20} />}
      open={showDrawer}
      onClose={closeDrawer}
      width={"723px"}
    >
      <Div direction="column" justify="space-between" height="100%">
        <Div direction="column">
          <Row width="100%" m="16px 0 24px 0">
            <Text
              font={theme.fonts.family.primaryBold}
              size={theme.fonts.size.ft}
              color={theme.colors.neutralGray800}
            >
              Validar información del solicitante
            </Text>
          </Row>
          <Div direction="column" m="0 0 30px 0" gap="16px" p="0 0 16px 0">
            {infoCardsFiltered.map((card, indx) => (
              <InfoCard
                key={indx}
                isExpanded={indx === expandedCardIndex}
                onClick={() => {
                  expandedCardIndex === indx
                    ? null
                    : handleExpandedCard(indx, expandedCardIndex);
                }}
              >
                <Row justify="space-between">
                  <Row gap="16px" align="center">
                    {card.icon}
                    <Text
                      font={theme.fonts.family.primaryBold}
                      size={theme.fonts.size.ft}
                      color={theme.colors.black}
                    >
                      {card.title}
                    </Text>
                  </Row>
                  <Image
                    alt="arrow"
                    src={
                      expandedCardIndex === indx ? arrowUpIcon : arrowDownIcon
                    }
                    width={32}
                    height={32}
                    style={{ cursor: "pointer" }}
                    onClick={(indx, expandedCardIndex) =>
                      handleExpandedCard(indx, expandedCardIndex)
                    }
                  />
                </Row>
                <Text
                  font={theme.fonts.family.primaryMedium}
                  size={theme.fonts.size.default2}
                  color={theme.colors.black}
                  mt="16px"
                >
                  {card.description}
                </Text>
                {expandedCardIndex === indx && expandedCardDataFiltered[indx]}
              </InfoCard>
            ))}
          </Div>
        </Div>
        {!isValidated && (
          <Row width="100%" justify="right" p="0 0 16px 0">
            <Button
              background={theme.colors.green900}
              hover={theme.colors.green900}
              borderHover={theme.colors.green900}
              border={"transparent"}
              font={theme.fonts.family.primaryBold}
              width={"181px"}
              height={"40px"}
              disabled={
                !Object.values(assessorConcept).every(
                  (concept) => concept.concept !== ""
                )
              }
              startIcon={
                changeState.isLoading ? (
                  <CircularProgress
                    size={10}
                    style={{ color: theme.colors.white }}
                  />
                ) : null
              }
              onClick={handleChangeStateForm}
            >
              Finalizar validación
            </Button>
          </Row>
        )}
      </Div>
    </Drawer>
  );
};
