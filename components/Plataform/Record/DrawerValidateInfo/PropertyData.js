import { useState, useEffect } from "react";
import dayjs from "dayjs";
import Image from "next/image";
import { Div, Text, Row, Col } from "@/styles/Common";
import { theme } from "@/styles/theme";
import { TextField } from "@/components/Common/TextField";
import { Radio } from "@/components/Common/Radio";
import { RadioGroup } from "@/components/Common/Radio/Group";
import { Button } from "@/components/Common/Button";
import { MenuItem } from "@mui/material";
import { Select } from "@/components/Common/Select";
import { DatePicker } from "@/components/Common/DatePicker";
import { CardButton } from "./styles";
import useGetStates from "@/hooks/Common/useGetStates";
import useGetCities from "@/hooks/Common/useGetCities";
import useGetHousingType from "@/hooks/Common/useGetHousingType";
import { validateEditPropertyInfo } from "@/utilities/validations";
import CircularProgress from "@mui/material/CircularProgress";
import { formattedDate, numberFormat } from "@/utilities/helpers";
import house from "@/assets/icons/house.svg";
import building from "@/assets/icons/building.svg";
import condominium from "@/assets/icons/condominium.svg";
import pesosIcon from "@/assets/icons/pesos.svg";
import area from "@/assets/icons/area.svg";
import address from "@/assets/icons/address.svg";

export const PropertyData = ({
  assessorConcept,
  setAssessorConcept,
  isEditing,
  setIsEditing,
  propertyInfo,
  setPropertyInfo,
  handleCancel,
  errorsPropertyInfo,
  setErrorsPropertyInfo,
  handleSave,
  isLoadingSave,
  handleContinue,
}) => {
  const housingTypeList = useGetHousingType();
  const { data: dataHousingType, isSuccess: isSuccessHousingType } =
    housingTypeList;
  const [housingTypeOptions, setHousingTypeOptions] = useState([]);
  const iconHousingType = (name) => {
    switch (name) {
      case "Casa":
        return house;
      case "Apartamento":
        return building;
      case "Condominio":
        return condominium;
      default:
        return house;
    }
  };
  useEffect(() => {
    if (isSuccessHousingType) {
      const sortedHousingType = dataHousingType?.data?.groupSettings
        .map((ele) => ({
          name: ele.name,
          id: ele.id,
          icon: iconHousingType(ele.name),
        }))
        .sort((a, b) => a.id - b.id);

      setHousingTypeOptions(sortedHousingType);
    }
  }, [dataHousingType, isSuccessHousingType]);

  const statesList = useGetStates(15);
  const { data: dataStates, isSuccess: isSuccessStates } = statesList;
  const [statesOptions, setStatesOptions] = useState([]);
  useEffect(() => {
    if (isSuccessStates) {
      setStatesOptions(dataStates?.data.states || []);
    } else {
      setStatesOptions([]);
    }
  }, [isSuccessStates, dataStates]);

  const citiesList = useGetCities(propertyInfo.stateId);
  const { data: dataCities, isSuccess: isSuccessCities } = citiesList;
  const [citiesOptions, setCitiesOptions] = useState([]);
  useEffect(() => {
    if (isSuccessCities) {
      setCitiesOptions(dataCities?.data.cities);
    } else {
      setCitiesOptions([]);
    }
  }, [isSuccessCities, dataCities]);

  const getLabelFromValue = (value, options, id, name) => {
    const selectedOption = options.find((option) => option[id] === value);
    return selectedOption ? selectedOption[name] : null;
  };

  const dataInfo = [
    {
      titleL: "Inmueble",
      descriptionL: getLabelFromValue(
        propertyInfo.housingTypeId,
        housingTypeOptions,
        "id",
        "name"
      ),
      titleR: "Valor comercial",
      descriptionR: numberFormat(propertyInfo.housingValue),
    },
    {
      titleL: "Área de construcción",
      descriptionL: `${propertyInfo.builtArea} mts`,
      titleR: "Número de piso del apartamento",
      descriptionR: propertyInfo.apartmentNumber,
    },
    {
      titleL: "Cantidad de pisos del edificio",
      descriptionL: propertyInfo.buildingFloorsNumber,
      titleR: "Cantidad de sótanos del edificio",
      descriptionR: propertyInfo.basementNumber,
    },
    {
      titleL: "Año de construcción",
      descriptionL: new Date(propertyInfo.builtgDate).getFullYear(),
      titleR: "Antigüedad",
      descriptionR: `${
        new Date().getFullYear() -
        new Date(propertyInfo.builtgDate).getFullYear()
      } años`,
    },
    {
      titleL: "Dirección del inmueble",
      descriptionL: propertyInfo.address,
      titleR: "Departamento",
      descriptionR: getLabelFromValue(
        propertyInfo.stateId,
        statesOptions,
        "id",
        "name"
      ),
    },
    {
      titleL: "Cuidad",
      descriptionL: getLabelFromValue(
        propertyInfo.cityId,
        citiesOptions,
        "id",
        "name"
      ),
      titleR: null,
      descriptionR: null,
    },
  ];

  const handleSelectHousingType = (id) => {
    const newInfo = { ...propertyInfo };

    newInfo["housingTypeId"] = id;
    setPropertyInfo(newInfo);
  };

  const handleChangeNumber = (event) => {
    const { value, id } = event.target;

    const newErrorForm = { ...errorsPropertyInfo };
    newErrorForm[id].error = false;
    newErrorForm[id].message = "";
    setErrorsPropertyInfo(newErrorForm);

    const newPropertyInfo = { ...propertyInfo };
    newPropertyInfo[id] = Number(value.replace(/\D/g, ""));
    setPropertyInfo(newPropertyInfo);
  };

  const handleChange = (event) => {
    const { value, id } = event.target;
    if (id === "comments") {
      setAssessorConcept((prevState) => ({
        ...prevState,
        propertyInfo: {
          ...prevState.propertyInfo,
          comments: value,
        },
      }));
    } else {
      const newErrorForm = { ...errorsPropertyInfo };
      newErrorForm[id].error = false;
      newErrorForm[id].message = "";
      setErrorsPropertyInfo(newErrorForm);

      const newPropertyInfo = { ...propertyInfo };
      newPropertyInfo[id] = value;
      setPropertyInfo(newPropertyInfo);
    }
  };

  const handleChangeYear = (event, id) => {
    const newErrorForm = { ...errorsPropertyInfo };
    newErrorForm[id].error = false;
    newErrorForm[id].message = "";
    setErrorsPropertyInfo(newErrorForm);

    const newInfo = { ...propertyInfo };
    newInfo[id] = event;
    setPropertyInfo(newInfo);
  };

  const handleSelect = (event) => {
    const { value, name } = event.target;
    const newErrorForm = { ...errorsPropertyInfo };
    newErrorForm[name].error = false;
    newErrorForm[name].message = "";
    setErrorsPropertyInfo(newErrorForm);

    const newPropertyInfo = { ...propertyInfo };
    newPropertyInfo[name] = value;

    setPropertyInfo(newPropertyInfo);
  };

  const handleRadio = (event, name) => {
    const { value } = event.target;
    switch (name) {
      case "correctInfo":
        setAssessorConcept((prevState) => ({
          ...prevState,
          propertyInfo: {
            ...prevState.propertyInfo,
            concept: value,
          },
        }));
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
                value={assessorConcept.propertyInfo.concept}
                onChange={(e) => handleRadio(e, "correctInfo")}
              >
                <Radio
                  label="La información es correcta"
                  value={"La información es correcta"}
                  checked={
                    assessorConcept.propertyInfo.concept ===
                    "La información es correcta"
                  }
                />
                <Radio
                  label="Presenta novedades"
                  value={"Presenta novedades"}
                  checked={
                    assessorConcept.propertyInfo.concept ===
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
                value={assessorConcept.propertyInfo.comments}
                onChange={handleChange}
              />
            </Div>
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
                  assessorConcept.propertyInfo.concept === "" ||
                  assessorConcept.propertyInfo.comments === ""
                }
                onClick={handleContinue}
                startIcon={
                  isLoadingSave ? (
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
          </Div>
        </>
      ) : (
        <Col gap="16px">
          <Div justify="space-between">
            {housingTypeOptions.map((ele, indx) => (
              <CardButton
                key={indx}
                onClick={() => handleSelectHousingType(ele.id)}
                style={{
                  border:
                    propertyInfo.housingTypeId === ele.id
                      ? `3px solid ${theme.colors.yellow500}`
                      : `1px solid ${theme.colors.neutralGray400}`,
                }}
              >
                <Image alt="icon" src={ele.icon} />
                <Text
                  font={theme.fonts.family.primaryBold}
                  weight={theme.fonts.weight.bold}
                  color={theme.colors.green900}
                  size={theme.fonts.size.sm}
                  lineHeight={"20px"}
                >
                  {ele.name}
                </Text>
              </CardButton>
            ))}
          </Div>
          <TextField
            label={"Valor comercial*"}
            placeholder={"Valor comercial"}
            id="housingValue"
            radius="4px"
            width="100%"
            height="40px"
            prefixIcon={
              <Image alt="pesos" src={pesosIcon} width={16} height={16} />
            }
            labelFont={theme.fonts.family.primaryMedium}
            labelSize={theme.fonts.size.sm}
            font={theme.fonts.family.primary}
            size={theme.fonts.size.default2}
            border={theme.colors.neutralGray500}
            inputProps={{
              pattern: "\\d*",
              inputMode: "numeric",
            }}
            value={numberFormat(propertyInfo.housingValue)}
            onChange={handleChangeNumber}
            error={errorsPropertyInfo.housingValue.error}
            helper={
              errorsPropertyInfo.housingValue.error
                ? errorsPropertyInfo.housingValue.message
                : ""
            }
          />
          <Row gap="16px">
            <TextField
              label={"Área de construcción*"}
              placeholder={"metros cuadrados"}
              id="builtArea"
              type="number"
              radius="4px"
              width="100%"
              height="40px"
              prefixIcon={
                <Image alt="area" src={area} width={16} height={16} />
              }
              labelFont={theme.fonts.family.primaryMedium}
              labelSize={theme.fonts.size.sm}
              font={theme.fonts.family.primary}
              size={theme.fonts.size.default2}
              border={theme.colors.neutralGray500}
              value={propertyInfo.builtArea}
              onChange={handleChangeNumber}
              error={errorsPropertyInfo.builtArea.error}
              helper={
                errorsPropertyInfo.builtArea.error
                  ? errorsPropertyInfo.builtArea.message
                  : ""
              }
            />
            <TextField
              label={"Número de piso del apartamento*"}
              placeholder={"Número de piso del apartamento"}
              id="apartmentNumber"
              type="number"
              radius="4px"
              width="100%"
              height="40px"
              labelFont={theme.fonts.family.primaryMedium}
              labelSize={theme.fonts.size.sm}
              font={theme.fonts.family.primary}
              size={theme.fonts.size.default2}
              border={theme.colors.neutralGray500}
              value={propertyInfo.apartmentNumber}
              onChange={handleChangeNumber}
              error={errorsPropertyInfo.apartmentNumber.error}
              helper={
                errorsPropertyInfo.apartmentNumber.error
                  ? errorsPropertyInfo.apartmentNumber.message
                  : ""
              }
            />
          </Row>
          <Row gap="16px">
            <TextField
              label={"Cantidad de pisos del edificio*"}
              placeholder={"Cantidad de pisos del edificio"}
              id="buildingFloorsNumber"
              type="number"
              radius="4px"
              width="100%"
              height="40px"
              labelFont={theme.fonts.family.primaryMedium}
              labelSize={theme.fonts.size.sm}
              font={theme.fonts.family.primary}
              size={theme.fonts.size.default2}
              border={theme.colors.neutralGray500}
              value={propertyInfo.buildingFloorsNumber}
              onChange={handleChangeNumber}
              error={errorsPropertyInfo.buildingFloorsNumber.error}
              helper={
                errorsPropertyInfo.buildingFloorsNumber.error
                  ? errorsPropertyInfo.buildingFloorsNumber.message
                  : ""
              }
            />
            <TextField
              label={"Cantidad de sótanos del apartamento*"}
              placeholder={"Cantidad de sótanos del apartamento"}
              id="basementNumber"
              type="number"
              radius="4px"
              width="100%"
              height="40px"
              labelFont={theme.fonts.family.primaryMedium}
              labelSize={theme.fonts.size.sm}
              font={theme.fonts.family.primary}
              size={theme.fonts.size.default2}
              border={theme.colors.neutralGray500}
              value={propertyInfo.basementNumber}
              onChange={handleChangeNumber}
              error={errorsPropertyInfo.basementNumber.error}
              helper={
                errorsPropertyInfo.basementNumber.error
                  ? errorsPropertyInfo.basementNumber.message
                  : ""
              }
            />
          </Row>
          <Row gap="16px">
            <DatePicker
              radius="4px"
              width="100%"
              height="40px"
              labelFont={theme.fonts.family.primaryMedium}
              labelSize={theme.fonts.size.sm}
              font={theme.fonts.family.primary}
              size={theme.fonts.size.default2}
              border={theme.colors.neutralGray500}
              label={"Año de construcción*"}
              value={propertyInfo.builtgDate}
              views={["year"]}
              format={"YYYY"}
              onChange={(e) => handleChangeYear(e, "builtgDate")}
              error={errorsPropertyInfo.builtgDate.error}
              helper={
                errorsPropertyInfo.builtgDate.error
                  ? errorsPropertyInfo.builtgDate.message
                  : ""
              }
            />
            <Col gap="10px" width="100%" justify="center">
              <Text
                font={theme.fonts.family.primaryMedium}
                size={theme.fonts.size.sm}
                color={theme.colors.neutralGray900}
              >
                Antigüedad
              </Text>
              <Text
                font={theme.fonts.family.primary}
                size={theme.fonts.size.default2}
                weight={theme.fonts.weight.regular}
                color={theme.colors.neutralGray900}
              >
                {`${
                  new Date().getFullYear() -
                  new Date(propertyInfo.builtgDate).getFullYear()
                } años`}
              </Text>
            </Col>
          </Row>
          <TextField
            label={"Dirección del inmueble*"}
            placeholder={"Dirección"}
            id="address"
            radius="4px"
            width="100%"
            height="40px"
            prefixIcon={
              <Image alt="address" src={address} width={16} height={16} />
            }
            labelFont={theme.fonts.family.primaryMedium}
            labelSize={theme.fonts.size.sm}
            font={theme.fonts.family.primary}
            size={theme.fonts.size.default2}
            border={theme.colors.neutralGray500}
            value={propertyInfo.address}
            onChange={handleChange}
            error={errorsPropertyInfo.address.error}
            helper={
              errorsPropertyInfo.address.error
                ? errorsPropertyInfo.address.message
                : ""
            }
          />

          <Select
            label={"Departamento"}
            name="stateId"
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
            value={propertyInfo?.stateId}
            onChange={handleSelect}
            error={errorsPropertyInfo.stateId.error}
            helper={
              errorsPropertyInfo.stateId.error
                ? errorsPropertyInfo.stateId.message
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
            label={"Cuidad*"}
            name="cityId"
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
            value={propertyInfo?.cityId}
            onChange={handleSelect}
            error={errorsPropertyInfo.cityId.error}
            helper={
              errorsPropertyInfo.cityId.error
                ? errorsPropertyInfo.cityId.message
                : ""
            }
          >
            {citiesOptions.map((ele, indx) => (
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
                  validateEditPropertyInfo,
                  propertyInfo,
                  errorsPropertyInfo,
                  setErrorsPropertyInfo
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
