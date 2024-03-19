import { useState, useEffect } from "react";
import { Div, Text, Row, Col } from "@/styles/Common";
import { theme } from "@/styles/theme";
import { TextField } from "@/components/Common/TextField";
import { Radio } from "@/components/Common/Radio";
import { RadioGroup } from "@/components/Common/Radio/Group";
import { Button } from "@/components/Common/Button";
import { MenuItem } from "@mui/material";
import { Select } from "@/components/Common/Select";
import useGetStates from "@/hooks/Common/useGetStates";
import useGetCities from "@/hooks/Common/useGetCities";
import useGetNationality from "@/hooks/Common/useGetNationality";
import useGetCivilStatus from "@/hooks/Common/useGetCivilStatus";
import useGetEconomicActivity from "@/hooks/Common/useGetEconomicActivity";
import { validateEditPersonalInfo } from "@/utilities/validations";
import CircularProgress from "@mui/material/CircularProgress";

export const PersonalData = ({
  assessorConcept,
  setAssessorConcept,
  isEditing,
  setIsEditing,
  personalInfo,
  setPersonalInfo,
  countriesOptions,
  residenceStatesOptions,
  residenceCitiesOptions,
  handleCancel,
  errorsPersonalInfo,
  setErrorsPersonalInfo,
  handleSave,
  isLoadingSave,
  isLoadingContinue,
  handleContinue,
  isValidated,
}) => {
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

  const dataInfo = [
    {
      titleL: "País de nacimiento",
      descriptionL: getLabelFromValue(
        personalInfo.birthCountryId,
        countriesOptions,
        "id",
        "name"
      ),
      titleR: "Nacionalidad",
      descriptionR: getLabelFromValue(
        personalInfo.countryNationalityId,
        nationalityOptions,
        "id",
        "nationality"
      ),
    },
    {
      titleL: "Departamento/Estado de nacimiento",
      descriptionL: getLabelFromValue(
        personalInfo.birthStateId,
        statesOptions,
        "id",
        "name"
      ),
      titleR: "Cuidad de nacimiento",
      descriptionR: getLabelFromValue(
        personalInfo.birthCityId,
        citiesOptions,
        "id",
        "name"
      ),
    },
    {
      titleL: "Estado civil",
      descriptionL: getLabelFromValue(
        personalInfo.civilStatusId,
        civilStatusOptions,
        "id",
        "name"
      ),
      titleR: "Número de hijos",
      descriptionR: personalInfo.numberChildren,
    },
    {
      titleL: "Profesión",
      descriptionL: personalInfo.occupation,
      titleR: "Actividad económica",
      descriptionR: getLabelFromValue(
        personalInfo.occupationActivityId,
        economicActivityOptions,
        "id",
        "name"
      ),
    },
  ];

  const handleChange = (event) => {
    const { value, id } = event.target;
    if (id === "comments") {
      setAssessorConcept((prevState) => ({
        ...prevState,
        personalInfo: {
          ...prevState.personalInfo,
          comments: value,
        },
      }));
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
        setAssessorConcept((prevState) => ({
          ...prevState,
          personalInfo: {
            ...prevState.personalInfo,
            concept: value,
          },
        }));
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

  return (
    <Col gap="16px" m="24px 0 0 0">
      {!isEditing ? (
        <>
          {dataInfo.map((data, index) => (
            <Row key={index} width="100%" m="16px 0 0 0">
              <Col gap="10px" width="313.5px">
                <Text
                  font={theme.fonts.family.primaryBold}
                  size={theme.fonts.size.sm}
                  color={theme.colors.neutralGray900}
                >
                  {data.titleL}
                </Text>
                <Text
                  font={theme.fonts.family.primary}
                  size={theme.fonts.size.default2}
                  weight={theme.fonts.weight.regular}
                  color={theme.colors.neutralGray900}
                >
                  {data.descriptionL}
                </Text>
              </Col>
              <Col gap="10px" width="313.5px">
                <Text
                  font={theme.fonts.family.primaryBold}
                  size={theme.fonts.size.sm}
                  color={theme.colors.neutralGray900}
                >
                  {data.titleR}
                </Text>
                <Text
                  font={theme.fonts.family.primary}
                  size={theme.fonts.size.default2}
                  weight={theme.fonts.weight.regular}
                  color={theme.colors.neutralGray900}
                >
                  {data.descriptionR}
                </Text>
              </Col>
            </Row>
          ))}
          <Col gap="10px" width="313.5px" m="16px 0 0 0">
            <Text
              font={theme.fonts.family.primaryBold}
              size={theme.fonts.size.sm}
              color={theme.colors.neutralGray900}
            >
              ¿Eres o tienes familiares Públicamente Expuestos (Actores,
              políticos, estrellas deportivas, etc...)?
            </Text>
            <Text
              font={theme.fonts.family.primary}
              size={theme.fonts.size.default2}
              weight={theme.fonts.weight.regular}
              color={theme.colors.neutralGray900}
            >
              {personalInfo.isPublicPerson ? "Si" : "No"}
            </Text>
          </Col>
          <Div
            width="100%"
            height="1px"
            background={theme.colors.neutralGray200}
          />
          <Text
            font={theme.fonts.family.primaryBold}
            size={theme.fonts.size.sm}
            color={theme.colors.neutralGray900}
          >
            Información de residencia
          </Text>
          <Row width="100%" m="16px 0 0 0">
            <Col gap="10px" width="313.5px">
              <Text
                font={theme.fonts.family.primaryBold}
                size={theme.fonts.size.sm}
                color={theme.colors.neutralGray900}
              >
                País de residencia
              </Text>
              <Text
                font={theme.fonts.family.primary}
                size={theme.fonts.size.default2}
                weight={theme.fonts.weight.regular}
                color={theme.colors.neutralGray900}
              >
                {getLabelFromValue(
                  personalInfo.residenceCountryId,
                  countriesOptions,
                  "id",
                  "name"
                )}
              </Text>
            </Col>
            <Col gap="10px" width="313.5px">
              <Text
                font={theme.fonts.family.primaryBold}
                size={theme.fonts.size.sm}
                color={theme.colors.neutralGray900}
              >
                Departamento de residencia
              </Text>
              <Text
                font={theme.fonts.family.primary}
                size={theme.fonts.size.default2}
                weight={theme.fonts.weight.regular}
                color={theme.colors.neutralGray900}
              >
                {getLabelFromValue(
                  personalInfo.residenceStateId,
                  residenceStatesOptions,
                  "id",
                  "name"
                )}
              </Text>
            </Col>
          </Row>
          <Col gap="10px" width="313.5px" m="16px 0 0 0">
            <Text
              font={theme.fonts.family.primaryBold}
              size={theme.fonts.size.sm}
              color={theme.colors.neutralGray900}
            >
              Ciudad de residencia
            </Text>
            <Text
              font={theme.fonts.family.primary}
              size={theme.fonts.size.default2}
              weight={theme.fonts.weight.regular}
              color={theme.colors.neutralGray900}
            >
              {getLabelFromValue(
                personalInfo.residenceCityId,
                residenceCitiesOptions,
                "id",
                "name"
              )}
            </Text>
          </Col>
          <Div
            width="100%"
            height="1px"
            background={theme.colors.neutralGray200}
          />
          <Div direction="column">
            <Div
              radius="8px 8px 0 0"
              background={theme.colors.yellow500}
              p="12px 16px"
              width="100%"
            >
              <Text
                font={theme.fonts.family.primaryBold}
                size={theme.fonts.size.default2}
                color={theme.colors.neutralGray900}
              >
                Concepto del asesor
              </Text>
            </Div>
            <Div
              radius="0 0 8px 8px"
              p="16px"
              gap="16px"
              direction="column"
              style={{ border: `1px solid ${theme.colors.neutralGray200}` }}
            >
              <RadioGroup
                gap="5px"
                name="correctInfo"
                direction="row"
                value={assessorConcept.personalInfo.concept}
                onChange={(e) => handleRadio(e, "correctInfo")}
              >
                <Radio
                  label="La información es correcta"
                  value={"La información es correcta"}
                  checked={
                    assessorConcept.personalInfo.concept ===
                    "La información es correcta"
                  }
                />
                <Radio
                  label="Presenta novedades"
                  value={"Presenta novedades"}
                  checked={
                    assessorConcept.personalInfo.concept ===
                    "Presenta novedades"
                  }
                />
              </RadioGroup>
              <TextField
                placeholder={"Texto descriptivo"}
                label="Comentarios*"
                id="comments"
                radius="4px"
                width="100%"
                height="40px"
                labelFont={theme.fonts.family.primaryMedium}
                labelSize={theme.fonts.size.sm}
                font={theme.fonts.family.primary}
                size={theme.fonts.size.default2}
                border={theme.colors.neutralGray500}
                value={assessorConcept.personalInfo.comments}
                onChange={handleChange}
              />
            </Div>
            {isValidated && (
              <Row width="100%" justify="right" m="24px 0 0 0" gap="16px">
                <Button
                  background={theme.colors.white}
                  hover={theme.colors.gray100}
                  borderHover={theme.colors.green900}
                  border={theme.colors.green900}
                  font={theme.fonts.family.primaryBold}
                  labelColor={theme.colors.green900}
                  borderHeight={"3px solid"}
                  width={"78px"}
                  height={"40px"}
                  onClick={() => {
                    setIsEditing(true);
                  }}
                >
                  Editar
                </Button>
                <Button
                  background={theme.colors.green900}
                  hover={theme.colors.green900}
                  borderHover={theme.colors.green900}
                  border={"transparent"}
                  font={theme.fonts.family.primaryBold}
                  width={"109px"}
                  height={"40px"}
                  disabled={
                    assessorConcept.personalInfo.concept === "" ||
                    assessorConcept.personalInfo.comments === ""
                  }
                  onClick={() =>
                    handleContinue(
                      "personalInfo",
                      assessorConcept.personalInfo.concept,
                      assessorConcept.personalInfo.comments
                    )
                  }
                  startIcon={
                    isLoadingContinue ? (
                      <CircularProgress
                        size={10}
                        style={{ color: theme.colors.white }}
                      />
                    ) : null
                  }
                >
                  Continuar
                </Button>
              </Row>
            )}
          </Div>
        </>
      ) : (
        <Col gap="16px">
          <Select
            label={"País de nacimiento*"}
            name="birthCountryId"
            radius="4px"
            width="100%"
            height="40px"
            size={theme.fonts.size.sm}
            labelSize={theme.fonts.size.sm}
            labelColor={theme.colors.neutralGray900}
            labelFont={theme.fonts.family.primaryMedium}
            font={theme.fonts.family.primary}
            border={theme.colors.neutralGray500}
            notFocused={true}
            placeholderColor={theme.colors.neutralGray500}
            value={personalInfo?.birthCountryId}
            onChange={handleSelect}
            error={errorsPersonalInfo.birthCountryId.error}
            helper={
              errorsPersonalInfo.birthCountryId.error
                ? errorsPersonalInfo.birthCountryId.message
                : ""
            }
          >
            {countriesOptions.map((ele, indx) => (
              <MenuItem key={indx} value={ele.id}>
                {ele.name}
              </MenuItem>
            ))}
          </Select>
          <Select
            label={"Nacionalidad*"}
            name="countryNationalityId"
            radius="4px"
            width="100%"
            height="40px"
            size={theme.fonts.size.sm}
            labelSize={theme.fonts.size.sm}
            labelColor={theme.colors.neutralGray900}
            labelFont={theme.fonts.family.primaryMedium}
            font={theme.fonts.family.primary}
            border={theme.colors.neutralGray500}
            notFocused={true}
            placeholderColor={theme.colors.neutralGray500}
            value={personalInfo?.countryNationalityId}
            onChange={handleSelect}
            error={errorsPersonalInfo.countryNationalityId.error}
            helper={
              errorsPersonalInfo.countryNationalityId.error
                ? errorsPersonalInfo.countryNationalityId.message
                : ""
            }
          >
            {nationalityOptions.map((ele, indx) => (
              <MenuItem key={indx} value={ele.id}>
                {ele.nationality}
              </MenuItem>
            ))}
          </Select>
          <Select
            label={"Departamento/Estado de nacimiento*"}
            name="birthStateId"
            radius="4px"
            width="100%"
            height="40px"
            size={theme.fonts.size.sm}
            labelSize={theme.fonts.size.sm}
            labelColor={theme.colors.neutralGray900}
            labelFont={theme.fonts.family.primaryMedium}
            font={theme.fonts.family.primary}
            border={theme.colors.neutralGray500}
            notFocused={true}
            placeholderColor={theme.colors.neutralGray500}
            value={personalInfo?.birthStateId}
            onChange={handleSelect}
            error={errorsPersonalInfo.birthStateId.error}
            helper={
              errorsPersonalInfo.birthStateId.error
                ? errorsPersonalInfo.birthStateId.message
                : ""
            }
          >
            {statesOptions.map((ele, indx) => (
              <MenuItem key={indx} value={ele.id}>
                {ele.name}
              </MenuItem>
            ))}
          </Select>
          <Select
            label={"Cuidad de nacimiento*"}
            name="birthCityId"
            radius="4px"
            width="100%"
            height="40px"
            size={theme.fonts.size.sm}
            labelSize={theme.fonts.size.sm}
            labelColor={theme.colors.neutralGray900}
            labelFont={theme.fonts.family.primaryMedium}
            font={theme.fonts.family.primary}
            border={theme.colors.neutralGray500}
            notFocused={true}
            placeholderColor={theme.colors.neutralGray500}
            value={personalInfo?.birthCityId}
            onChange={handleSelect}
            error={errorsPersonalInfo.birthCityId.error}
            helper={
              errorsPersonalInfo.birthCityId.error
                ? errorsPersonalInfo.birthCityId.message
                : ""
            }
          >
            {citiesOptions.map((ele, indx) => (
              <MenuItem key={indx} value={ele.id}>
                {ele.name}
              </MenuItem>
            ))}
          </Select>
          <Select
            label={"Estado civil*"}
            name="civilStatusId"
            radius="4px"
            width="100%"
            height="40px"
            size={theme.fonts.size.sm}
            labelSize={theme.fonts.size.sm}
            labelColor={theme.colors.neutralGray900}
            labelFont={theme.fonts.family.primaryMedium}
            font={theme.fonts.family.primary}
            border={theme.colors.neutralGray500}
            notFocused={true}
            placeholderColor={theme.colors.neutralGray500}
            value={personalInfo?.civilStatusId}
            onChange={handleSelect}
            error={errorsPersonalInfo.civilStatusId.error}
            helper={
              errorsPersonalInfo.civilStatusId.error
                ? errorsPersonalInfo.civilStatusId.message
                : ""
            }
          >
            {civilStatusOptions.map((ele, indx) => (
              <MenuItem key={indx} value={ele.id}>
                {ele.name}
              </MenuItem>
            ))}
          </Select>
          <TextField
            label={"Número de hijos*"}
            placeholder={"Número de hijos"}
            id="numberChildren"
            type="number"
            radius="4px"
            width="100%"
            height="40px"
            labelFont={theme.fonts.family.primaryMedium}
            labelSize={theme.fonts.size.sm}
            font={theme.fonts.family.primary}
            size={theme.fonts.size.default2}
            border={theme.colors.neutralGray500}
            value={personalInfo.numberChildren}
            onChange={handleChange}
            error={errorsPersonalInfo.numberChildren.error}
            helper={
              errorsPersonalInfo.numberChildren.error
                ? errorsPersonalInfo.numberChildren.message
                : ""
            }
          />
          <TextField
            label={"Profesión*"}
            placeholder={"Profesión"}
            id="occupation"
            radius="4px"
            width="100%"
            height="40px"
            labelFont={theme.fonts.family.primaryMedium}
            labelSize={theme.fonts.size.sm}
            font={theme.fonts.family.primary}
            size={theme.fonts.size.default2}
            border={theme.colors.neutralGray500}
            value={personalInfo.occupation}
            onChange={handleChange}
            error={errorsPersonalInfo.occupation.error}
            helper={
              errorsPersonalInfo.occupation.error
                ? errorsPersonalInfo.occupation.message
                : ""
            }
          />
          <Select
            label={"Actividad económica*"}
            name="occupationActivityId"
            radius="4px"
            width="100%"
            height="40px"
            size={theme.fonts.size.sm}
            labelSize={theme.fonts.size.sm}
            labelColor={theme.colors.neutralGray900}
            labelFont={theme.fonts.family.primaryMedium}
            font={theme.fonts.family.primary}
            border={theme.colors.neutralGray500}
            notFocused={true}
            placeholderColor={theme.colors.neutralGray500}
            value={personalInfo?.occupationActivityId}
            onChange={handleSelect}
            error={errorsPersonalInfo.occupationActivityId.error}
            helper={
              errorsPersonalInfo.occupationActivityId.error
                ? errorsPersonalInfo.occupationActivityId.message
                : ""
            }
          >
            {economicActivityOptions.map((ele, indx) => (
              <MenuItem key={indx} value={ele.id}>
                {ele.name}
              </MenuItem>
            ))}
          </Select>
          <RadioGroup
            gap="5px"
            name="isPublicPerson"
            direction="row"
            label={
              "¿Eres o tienes familiares Públicamente Expuestos (Actores, políticos, estrellas deportivas, etc...)?"
            }
            labelSize={theme.fonts.size.sm}
            value={personalInfo.isPublicPerson}
            onChange={(e) => handleRadio(e, "isPublicPerson")}
          >
            <Radio
              label="Si"
              value={true}
              checked={personalInfo.isPublicPerson}
            />
            <Radio
              label="No"
              value={false}
              checked={!personalInfo.isPublicPerson}
            />
          </RadioGroup>
          <Div
            width="100%"
            height="1px"
            background={theme.colors.neutralGray200}
          />
          <Text
            font={theme.fonts.family.primaryBold}
            size={theme.fonts.size.default2}
            color={theme.colors.neutralGray900}
          >
            Información de residencia
          </Text>
          <Select
            label={"País de residencia*"}
            name="residenceCountryId"
            radius="4px"
            width="100%"
            height="40px"
            size={theme.fonts.size.sm}
            labelSize={theme.fonts.size.sm}
            labelColor={theme.colors.neutralGray900}
            labelFont={theme.fonts.family.primaryMedium}
            font={theme.fonts.family.primary}
            border={theme.colors.neutralGray500}
            notFocused={true}
            placeholderColor={theme.colors.neutralGray500}
            value={personalInfo?.residenceCountryId}
            onChange={handleSelect}
            error={errorsPersonalInfo.residenceCountryId.error}
            helper={
              errorsPersonalInfo.residenceCountryId.error
                ? errorsPersonalInfo.residenceCountryId.message
                : ""
            }
          >
            {countriesOptions.map((ele, indx) => (
              <MenuItem key={indx} value={ele.id}>
                {ele.name}
              </MenuItem>
            ))}
          </Select>
          <Select
            label={"Departamento de residencia*"}
            name="residenceStateId"
            radius="4px"
            width="100%"
            height="40px"
            size={theme.fonts.size.sm}
            labelSize={theme.fonts.size.sm}
            labelColor={theme.colors.neutralGray900}
            labelFont={theme.fonts.family.primaryMedium}
            font={theme.fonts.family.primary}
            border={theme.colors.neutralGray500}
            notFocused={true}
            placeholderColor={theme.colors.neutralGray500}
            value={personalInfo?.residenceStateId}
            onChange={handleSelect}
            error={errorsPersonalInfo.residenceStateId.error}
            helper={
              errorsPersonalInfo.residenceStateId.error
                ? errorsPersonalInfo.residenceStateId.message
                : ""
            }
          >
            {residenceStatesOptions.map((ele, indx) => (
              <MenuItem key={indx} value={ele.id}>
                {ele.name}
              </MenuItem>
            ))}
          </Select>
          <Select
            label={"Cuidad de Residencia*"}
            name="residenceCityId"
            radius="4px"
            width="100%"
            height="40px"
            size={theme.fonts.size.sm}
            labelSize={theme.fonts.size.sm}
            labelColor={theme.colors.neutralGray900}
            labelFont={theme.fonts.family.primaryMedium}
            font={theme.fonts.family.primary}
            border={theme.colors.neutralGray500}
            notFocused={true}
            placeholderColor={theme.colors.neutralGray500}
            value={personalInfo?.residenceCityId}
            onChange={handleSelect}
            error={errorsPersonalInfo.residenceCityId.error}
            helper={
              errorsPersonalInfo.residenceCityId.error
                ? errorsPersonalInfo.residenceCityId.message
                : ""
            }
          >
            {residenceCitiesOptions.map((ele, indx) => (
              <MenuItem key={indx} value={ele.id}>
                {ele.name}
              </MenuItem>
            ))}
          </Select>
          <Row width="100%" justify="right" m="8px 0 0 0" gap="16px">
            <Button
              background={theme.colors.white}
              hover={theme.colors.gray100}
              borderHover={theme.colors.green900}
              border={theme.colors.green900}
              font={theme.fonts.family.primaryBold}
              labelColor={theme.colors.green900}
              borderHeight={"3px solid"}
              width={"102px"}
              height={"40px"}
              onClick={handleCancel}
            >
              Cancelar
            </Button>
            <Button
              background={theme.colors.green900}
              hover={theme.colors.green900}
              borderHover={theme.colors.green900}
              border={"transparent"}
              font={theme.fonts.family.primaryBold}
              width={"166px"}
              height={"40px"}
              onClick={() =>
                handleSave(
                  validateEditPersonalInfo,
                  personalInfo,
                  errorsPersonalInfo,
                  setErrorsPersonalInfo
                )
              }
              startIcon={
                isLoadingSave ? (
                  <CircularProgress
                    size={20}
                    style={{ color: theme.colors.white }}
                  />
                ) : null
              }
            >
              Guardar cambios
            </Button>
          </Row>
        </Col>
      )}
    </Col>
  );
};
