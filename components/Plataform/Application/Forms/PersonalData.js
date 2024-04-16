import { useState, useEffect } from "react";
import { Div, Text, Row, Col } from "@/styles/Common";
import { theme } from "@/styles/theme";
import useGetCountries from "@/hooks/Common/useGetCountries";
import useGetStates from "@/hooks/Common/useGetStates";
import useGetCities from "@/hooks/Common/useGetCities";
import useGetNationality from "@/hooks/Common/useGetNationality";
import useGetCivilStatus from "@/hooks/Common/useGetCivilStatus";
import useGetEconomicActivity from "@/hooks/Common/useGetEconomicActivity";

export const PersonalData = ({ personalInfo }) => {
  const countriesList = useGetCountries();
  const { data: dataCountries, isSuccess: isSuccessCountries } = countriesList;
  const [countriesOptions, setCountriesOptions] = useState([]);
  useEffect(() => {
    if (isSuccessCountries) {
      setCountriesOptions(dataCountries?.data?.countries);
    }
  }, [isSuccessCountries, dataCountries]);

  const statesList = useGetStates(personalInfo.birthCountryId);
  const { data: dataStates, isSuccess: isSuccessStates } = statesList;
  const [statesOptions, setStatesOptions] = useState([]);
  useEffect(() => {
    if (isSuccessStates) {
      setStatesOptions(dataStates?.data.states || []);
    } else {
      setStatesOptions([]);
    }
  }, [isSuccessStates, dataStates]);
  const statesResidenceList = useGetStates(personalInfo.residenceCountryId);
  const { data: dataStatesResidence, isSuccess: isSuccessStatesResidence } =
    statesResidenceList;
  const [statesResidenceOptions, setStatesResidenceOptions] = useState([]);
  useEffect(() => {
    if (isSuccessStatesResidence) {
      setStatesResidenceOptions(dataStatesResidence?.data.states || []);
    } else {
      setStatesResidenceOptions([]);
    }
  }, [isSuccessStatesResidence, dataStatesResidence]);

  const citiesList = useGetCities(personalInfo.birthStateId);
  const { data: dataCities, isSuccess: isSuccessCities } = citiesList;
  const [citiesOptions, setCitiesOptions] = useState([]);
  useEffect(() => {
    if (isSuccessCities) {
      setCitiesOptions(dataCities?.data.cities);
    } else {
      setCitiesOptions([]);
    }
  }, [isSuccessCities, dataCities]);
  const citiesResidenceList = useGetCities(personalInfo.residenceStateId);
  const { data: dataCitiesResidence, isSuccess: isSuccessCitiesResidence } =
    citiesResidenceList;
  const [citiesResidenceOptions, setCitiesResidenceOptions] = useState([]);
  useEffect(() => {
    if (isSuccessCitiesResidence) {
      setCitiesResidenceOptions(dataCitiesResidence?.data.cities);
    } else {
      setCitiesResidenceOptions([]);
    }
  }, [isSuccessCitiesResidence, dataCitiesResidence]);

  const nationalityList = useGetNationality();
  const { data: dataNationality, isSuccess: isSuccessNationality } =
    nationalityList;
  const [nationalityOptions, setNationalityOptions] = useState([]);
  useEffect(() => {
    if (isSuccessNationality) {
      setNationalityOptions(dataNationality?.data.countries);
    }
  }, [isSuccessNationality, dataNationality]);

  const civilStatusList = useGetCivilStatus();
  const { data: dataCivilStatus, isSuccess: isSuccessCivilStatus } =
    civilStatusList;
  const [civilStatusOptions, setCivilStatusOptions] = useState([]);
  useEffect(() => {
    if (isSuccessCivilStatus)
      setCivilStatusOptions(
        dataCivilStatus?.data?.groupSettings.map((ele) => ({
          name: ele.name,
          id: ele.id,
        }))
      );
  }, [dataCivilStatus, isSuccessCivilStatus]);

  const economicActivityList = useGetEconomicActivity();
  const { data: dataEconomicActivity, isSuccess: isSuccessEconomicActivity } =
    economicActivityList;
  const [economicActivityOptions, setEconomicActivityOptions] = useState([]);
  useEffect(() => {
    if (isSuccessEconomicActivity)
      setEconomicActivityOptions(
        dataEconomicActivity?.data?.groupSettings.map((ele) => ({
          name: ele.name,
          id: ele.id,
        }))
      );
  }, [dataEconomicActivity, isSuccessEconomicActivity]);

  const getLabelFromValue = (value, options, id, name) => {
    const selectedOption = options.find((option) => option[id] === value);
    return selectedOption ? selectedOption[name] : null;
  };

  const RowInfo1 = [
    {
      title: "País de nacimiento",
      description: getLabelFromValue(
        personalInfo.birthCountryId,
        countriesOptions,
        "id",
        "name"
      ),
    },
    {
      title: "Nacionalidad",
      description: getLabelFromValue(
        personalInfo.countryNationalityId,
        nationalityOptions,
        "id",
        "nationality"
      ),
    },
    {
      title: "Departamento/Estado de nacimiento",
      description: getLabelFromValue(
        personalInfo.birthStateId,
        statesOptions,
        "id",
        "name"
      ),
    },
    {
      title: "Cuidad de nacimiento",
      description: getLabelFromValue(
        personalInfo.birthCityId,
        citiesOptions,
        "id",
        "name"
      ),
    },
    {
      title: "Estado civil",
      description: getLabelFromValue(
        personalInfo.civilStatusId,
        civilStatusOptions,
        "id",
        "name"
      ),
    },
  ];

  const RowInfo2 = [
    {
      title: "Número de hijos",
      description: personalInfo.numberChildren,
    },
    {
      title: "Profesión",
      description: personalInfo.occupation,
    },
    {
      title: "Actividad económica",
      description: getLabelFromValue(
        personalInfo.occupationActivityId,
        economicActivityOptions,
        "id",
        "name"
      ),
    },
    {
      title: "Es PEP",
      description: personalInfo.isPublicPerson
        ? personalInfo.isPublicPerson
          ? "Si"
          : "No"
        : "--",
    },
    {
      title: "Relacionado con PEP",
      description: personalInfo.hasBondPublicPerson
        ? personalInfo.hasBondPublicPerson
          ? "Si"
          : "No"
        : "--",
    },
  ];

  const RowInfo3 = [
    {
      title: "País de residencia",
      description: getLabelFromValue(
        personalInfo.residenceCountryId,
        countriesOptions,
        "id",
        "name"
      ),
    },
    {
      title: "Departamento de residencia",
      description: getLabelFromValue(
        personalInfo.residenceStateId,
        statesResidenceOptions,
        "id",
        "name"
      ),
    },
    {
      title: "Ciudad de residencia",
      description: getLabelFromValue(
        personalInfo.residenceCityId,
        citiesResidenceOptions,
        "id",
        "name"
      ),
    },
  ];

  return (
    <Col gap="16px" m="24px 0 0 0">
      <Row width="100%" m="16px 0 0 0" gap="16px">
        {RowInfo1.map((data, index) => (
          <Col key={index} gap="10px" width="186px">
            <Text
              font={theme.fonts.family.primaryBold}
              size={theme.fonts.size.sm}
              color={theme.colors.neutralGray900}
            >
              {data.title}
            </Text>
            <Text
              font={theme.fonts.family.primary}
              size={theme.fonts.size.default2}
              weight={theme.fonts.weight.regular}
              color={theme.colors.neutralGray900}
            >
              {data.description || "--"}
            </Text>
          </Col>
        ))}
      </Row>

      <Div width="100%" height="1px" background={theme.colors.neutralGray200} />

      <Row width="100%" m="16px 0 0 0" gap="16px">
        {RowInfo2.map((data, index) => (
          <Col key={index} gap="10px" width="186px">
            <Text
              font={theme.fonts.family.primaryBold}
              size={theme.fonts.size.sm}
              color={theme.colors.neutralGray900}
            >
              {data.title}
            </Text>
            <Text
              font={theme.fonts.family.primary}
              size={theme.fonts.size.default2}
              weight={theme.fonts.weight.regular}
              color={theme.colors.neutralGray900}
            >
              {data.description || "--"}
            </Text>
          </Col>
        ))}
      </Row>

      <Text
        font={theme.fonts.family.primaryBold}
        size={theme.fonts.size.default2}
        color={theme.colors.neutralGray900}
      >
        Información de residencia
      </Text>

      <Row width="100%" m="16px 0 16px 0" gap="16px">
        {RowInfo3.map((data, index) => (
          <Col key={index} gap="10px" width="186px">
            <Text
              font={theme.fonts.family.primaryBold}
              size={theme.fonts.size.sm}
              color={theme.colors.neutralGray900}
            >
              {data.title}
            </Text>
            <Text
              font={theme.fonts.family.primary}
              size={theme.fonts.size.default2}
              weight={theme.fonts.weight.regular}
              color={theme.colors.neutralGray900}
            >
              {data.description || "--"}
            </Text>
          </Col>
        ))}
      </Row>
    </Col>
  );
};
