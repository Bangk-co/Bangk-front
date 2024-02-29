/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react";
import dayjs from "dayjs";
import closeIcon from "@/assets/icons/close.svg";
import { Drawer } from "@/components/Common/Drawer";
import Image from "next/image";
import { Div, Text, Row } from "@/styles/Common";
import { theme } from "@/styles/theme";
import { InfoCard } from "./styles";
import arrowDownIcon from "@/assets/icons/arrow-down.svg";
import arrowUpIcon from "@/assets/icons/arrow-up.svg";
import { PersonalData } from "./PersonalData";
import { Button } from "@/components/Common/Button";
import checkIcon from "@/assets/icons/check_circle.svg";
import alertIcon from "@/assets/icons/alert-yellow.svg";
import useGetLoanInsurancePolicyInfo from "@/hooks/Customers/useGetLoanInsurancePolicyInfo";
import useGetCountries from "@/hooks/Common/useGetCountries";
import useGetStates from "@/hooks/Common/useGetStates";
import useGetCities from "@/hooks/Common/useGetCities";
import useSaveLoanInsurancePolicy from "@/hooks/Customers/useSaveLoanInsurancePolicy";

export const DrawerValidateInfo = ({
  showDrawer,
  setShowDrawerValidateInfo,
  loanApplicationId,
}) => {
  const save = useSaveLoanInsurancePolicy();

  const [expandedCardIndex, setExpandedCardIndex] = useState(null);
  const [assessorConcept, setAssessorConcept] = useState("");
  const [assessorComments, setAssessorComments] = useState("");
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
        numberChildren: data?.data?.loanInsurancePolicies.numberChildren,
        occupation: data?.data?.loanInsurancePolicies.occupation,
        occupationActivityId:
          data?.data?.loanInsurancePolicies.occupationActivityId,
        isPublicPerson: data?.data?.loanInsurancePolicies.isPublicPerson,
        residenceCountryId:
          data?.data?.loanInsurancePolicies.residenceCountryId,
        residenceStateId: data?.data?.loanInsurancePolicies.residenceStateId,
        residenceCityId: data?.data?.loanInsurancePolicies.residenceCityId,
      });
    }
  }, [data, isLoading, cancelEdit]);

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

  const closeDrawer = () => {
    setAssessorConcept("");
    setAssessorComments("");
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
      icon: iconCondition[assessorConcept],
      title: "Datos personales",
      description:
        descriptionCondition[assessorConcept] !== null
          ? descriptionCondition[assessorConcept]
          : "Verifica que los datos personales sean correctos",
    },
    {
      icon: null,
      title: "Datos financieros",
      description: "Verifica que los datos financieros sean correctos",
    },
    {
      icon: null,
      title: "Datos del inmueble",
      description: "Verifica que los datos del inmueble sean correctos",
    },
    {
      icon: null,
      title: "Datos de salud",
      description: "Verifica que los datos de salud sean correctos",
    },
    {
      icon: null,
      title: "Datos adicionales",
      description: "Verifica que los datos adicionales sean correctos",
    },
  ];

  const handleSelect = (event) => {
    const { value, name } = event.target;
    const newErrorForm = { ...errorsPersonalInfo };
    newErrorForm[name].error = false;
    newErrorForm[name].message = "";
    setErrorsPersonalInfo(newErrorForm);

    const newPersonalInfo = { ...personalInfo };
    newPersonalInfo[name] = value;
    if (name === "birthCountryId") {
      newPersonalInfo.birthStateId = null;
      newPersonalInfo.birthCityId = null;
    } else if (name === "residenceCountryId") {
      newPersonalInfo.residenceStateId = null;
      newPersonalInfo.residenceCityId = null;
    }
    setPersonalInfo(newPersonalInfo);
  };

  const handleRadio = (event, name) => {
    const { value } = event.target;
    switch (name) {
      case "correctInfo":
        setAssessorConcept(value);
        break;
      case "isPublicPerson":
        const newErrorForm = { ...errorsPersonalInfo };
        newErrorForm[name].error = false;
        newErrorForm[name].message = "";
        setErrorsPersonalInfo(newErrorForm);

        setPersonalInfo((prevInfo) => ({
          ...prevInfo,
          isPublicPerson: value === "true",
        }));
      default:
        break;
    }
  };

  const handleChange = (event) => {
    const { value, id } = event.target;
    if (id === "comments") {
      setAssessorComments(value);
    } else {
      const newErrorForm = { ...errorsPersonalInfo };
      newErrorForm[id].error = false;
      newErrorForm[id].message = "";
      setErrorsPersonalInfo(newErrorForm);

      const newPersonalInfo = { ...personalInfo };
      newPersonalInfo[id] = value;
      setPersonalInfo(newPersonalInfo);
    }
  };

  const handleCancel = () => {
    setIsEditing(false);
    setCancelEdit(!cancelEdit);
  };

  const handleContinue = (validate, form, errors, setError) => {
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
      setExpandedCardIndex(expandedCardIndex + 1);
      /*  const newHealthInfo = {...healthInfo, diseases: getDiseasesIds(diseases, diseasesOptions)}
    save.reset();
    save.mutate(
      {
        formData: {
          loanApplicationId: requestInfo.loanApplicationId,
          ...userInfo,
          ...financialInfo,
          ...propertyInfo,
          ...newHealthInfo,
          ...additionalInfo
        },
      },
      {
        onSuccess: (data) => {

        },
        onError: (err) => {
          err.response.data.errors.map((error) => {
            toast.error(error);
          });
        },
      }
    ); */
    }
  };

  const expandedCardData = [
    <PersonalData
      key="personalData"
      handleRadio={handleRadio}
      assessorConcept={assessorConcept}
      setAssessorConcept={setAssessorConcept}
      handleChange={handleChange}
      assessorComments={assessorComments}
      isEditing={isEditing}
      setIsEditing={setIsEditing}
      personalInfo={personalInfo}
      countriesOptions={countriesOptions}
      residenceStatesOptions={residenceStatesOptions}
      residenceCitiesOptions={residenceCitiesOptions}
      handleCancel={handleCancel}
      handleSelect={handleSelect}
      errorsPersonalInfo={errorsPersonalInfo}
      setErrorsPersonalInfo={setErrorsPersonalInfo}
      handleContinue={handleContinue}
    />,
  ];

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
            {infoCards.map((card, indx) => (
              <InfoCard
                key={indx}
                isExpanded={indx === expandedCardIndex}
                onClick={() => {
                  expandedCardIndex === indx
                    ? null
                    : setExpandedCardIndex(
                        indx === expandedCardIndex ? null : indx
                      );
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
                    onClick={() =>
                      setExpandedCardIndex(
                        indx === expandedCardIndex ? null : indx
                      )
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
                {expandedCardIndex === indx && expandedCardData[indx]}
              </InfoCard>
            ))}
          </Div>
        </Div>
        <Row width="100%" justify="right" p="0 0 16px 0">
          <Button
            background={theme.colors.green900}
            hover={theme.colors.green900}
            borderHover={theme.colors.green900}
            border={"transparent"}
            font={theme.fonts.family.primaryBold}
            width={"181px"}
            height={"40px"}
            disabled={true}
          >
            Finalizar validación
          </Button>
        </Row>
      </Div>
    </Drawer>
  );
};
