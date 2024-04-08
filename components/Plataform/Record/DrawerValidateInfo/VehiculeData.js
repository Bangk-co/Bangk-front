import { useState, useEffect } from "react";
import Image from "next/image";
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
import { validateEditVehiculeInfo } from "@/utilities/validations";
import CircularProgress from "@mui/material/CircularProgress";
import numeral from "@/assets/icons/numeral.svg";

export const VehiculeData = ({
  assessorConcept,
  setAssessorConcept,
  isEditing,
  setIsEditing,
  vehiculeInfo,
  setVehiculeInfo,
  handleCancel,
  errorsVehiculeInfo,
  setErrorsVehiculeInfo,
  handleSave,
  isLoadingSave,
  isLoadingContinue,
  handleContinue,
  isValidated,
  countryVehiculeId,
}) => {
  const statesList = useGetStates(countryVehiculeId);
  const { data: dataStates, isSuccess: isSuccessStates } = statesList;
  const [statesOptions, setStatesOptions] = useState([]);
  useEffect(() => {
    if (isSuccessStates) {
      setStatesOptions(dataStates?.data.states || []);
    } else {
      setStatesOptions([]);
    }
  }, [isSuccessStates, dataStates]);

  const citiesList = useGetCities(vehiculeInfo.stateVehiculeId);
  const { data: dataCities, isSuccess: isSuccessCities } = citiesList;
  const [citiesOptions, setCitiesOptions] = useState([]);
  useEffect(() => {
    if (isSuccessCities) {
      setCitiesOptions(dataCities?.data.cities);
    } else {
      setCitiesOptions([]);
    }
  }, [isSuccessCities, dataCities]);

  const getLabelFromValue = (value, options) => {
    const selectedOption = options.find((option) => option["id"] === value);
    return selectedOption ? selectedOption["name"] : null;
  };

  const handleChange = (event) => {
    const { value, id } = event.target;
    if (id === "comments") {
      setAssessorConcept((prevState) => ({
        ...prevState,
        vehiculeInfo: {
          ...prevState.vehiculeInfo,
          comments: value,
        },
      }));
    } else {
      const newErrorForm = { ...errorsVehiculeInfo };
      newErrorForm[id].error = false;
      newErrorForm[id].message = "";
      setErrorsVehiculeInfo(newErrorForm);

      const newVehiculeInfo = { ...vehiculeInfo };
      newVehiculeInfo[id] = value;
      setVehiculeInfo(newVehiculeInfo);
    }
  };

  const handleSelect = (event) => {
    const { value, name } = event.target;
    const newErrorForm = { ...errorsVehiculeInfo };
    newErrorForm[name].error = false;
    newErrorForm[name].message = "";
    setErrorsVehiculeInfo(newErrorForm);

    const newVehiculeInfo = { ...vehiculeInfo };
    newVehiculeInfo[name] = value;

    setVehiculeInfo(newVehiculeInfo);
  };

  const handleRadio = (event, name) => {
    const { value } = event.target;
    switch (name) {
      case "correctInfo":
        setAssessorConcept((prevState) => ({
          ...prevState,
          vehiculeInfo: {
            ...prevState.vehiculeInfo,
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
          <Row width="100%" m="16px 0 0 0" gap="16px">
            <Col gap="10px" width="203.6px">
              <Text
                font={theme.fonts.family.primaryBold}
                size={theme.fonts.size.sm}
                color={theme.colors.neutralGray900}
              >
                Departamento de circulación
              </Text>
              <Text
                font={theme.fonts.family.primary}
                size={theme.fonts.size.default2}
                weight={theme.fonts.weight.regular}
                color={theme.colors.neutralGray900}
              >
                {getLabelFromValue(vehiculeInfo.stateVehiculeId, statesOptions)}
              </Text>
            </Col>
            <Col gap="10px" width="203.6px">
              <Text
                font={theme.fonts.family.primaryBold}
                size={theme.fonts.size.sm}
                color={theme.colors.neutralGray900}
              >
                Ciudad de circulación
              </Text>
              <Text
                font={theme.fonts.family.primary}
                size={theme.fonts.size.default2}
                weight={theme.fonts.weight.regular}
                color={theme.colors.neutralGray900}
              >
                {getLabelFromValue(vehiculeInfo.cityVehiculeId, citiesOptions)}
              </Text>
            </Col>
            <Col gap="10px" width="203.6px">
              <Text
                font={theme.fonts.family.primaryBold}
                size={theme.fonts.size.sm}
                color={theme.colors.neutralGray900}
              >
                Placa
              </Text>
              <Text
                font={theme.fonts.family.primary}
                size={theme.fonts.size.default2}
                weight={theme.fonts.weight.regular}
                color={theme.colors.neutralGray900}
              >
                {vehiculeInfo.vehicleLicensePlate.toUpperCase()}
              </Text>
            </Col>
          </Row>

          <Div
            width="100%"
            height="1px"
            background={theme.colors.neutralGray200}
          />

          {!isValidated ? (
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
                  value={assessorConcept.vehiculeInfo.concept}
                  onChange={(e) => handleRadio(e, "correctInfo")}
                >
                  <Radio
                    label="La información es correcta"
                    value={"La información es correcta"}
                    checked={
                      assessorConcept.vehiculeInfo.concept ===
                      "La información es correcta"
                    }
                  />
                  <Radio
                    label="Presenta novedades"
                    value={"Presenta novedades"}
                    checked={
                      assessorConcept.vehiculeInfo.concept ===
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
                  value={assessorConcept.vehiculeInfo.comments}
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
                    assessorConcept.vehiculeInfo.concept === "" ||
                    assessorConcept.vehiculeInfo.comments === ""
                  }
                  onClick={() =>
                    handleContinue(
                      "vehiculeInfo",
                      assessorConcept.vehiculeInfo.concept,
                      assessorConcept.vehiculeInfo.comments
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
            </Div>
          ) : (
            <Div
              background={theme.colors.primary25}
              p="16px"
              width="100%"
              gap="8px"
              direction="column"
            >
              <Text
                font={theme.fonts.family.primaryBold}
                size={theme.fonts.size.sm}
                color={theme.colors.neutralGray900}
              >
                Concepto del asesor
              </Text>
              <Text
                font={theme.fonts.family.primary}
                size={theme.fonts.size.default2}
                color={theme.colors.neutralGray900}
              >
                {assessorConcept.vehiculeInfo.concept ===
                "La información es correcta"
                  ? "La información se encuentra correcta"
                  : "Información con novedades"}
              </Text>
              <Text
                font={theme.fonts.family.primary}
                size={theme.fonts.size.default2}
                color={theme.colors.neutralGray900}
              >
                {assessorConcept.vehiculeInfo.comments}
              </Text>
            </Div>
          )}
        </>
      ) : (
        <Col gap="16px">
          <Select
            label={"Departamento"}
            name="stateVehiculeId"
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
            value={vehiculeInfo?.stateVehiculeId}
            onChange={handleSelect}
            helperColor={
              errorsVehiculeInfo.stateVehiculeId.error
                ? theme.colors.red
                : theme.colors.neutralGray900
            }
            error={errorsVehiculeInfo.stateVehiculeId.error}
            helper={
              errorsVehiculeInfo.stateVehiculeId.error
                ? errorsVehiculeInfo.stateVehiculeId.message
                : "Lugar donde te sueles movilizar en el vehiculo"
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
            name="cityVehiculeId"
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
            value={vehiculeInfo?.cityVehiculeId}
            onChange={handleSelect}
            helperColor={
              errorsVehiculeInfo.cityVehiculeId.error
                ? theme.colors.red
                : theme.colors.neutralGray900
            }
            error={errorsVehiculeInfo.cityVehiculeId.error}
            helper={
              errorsVehiculeInfo.cityVehiculeId.error
                ? errorsVehiculeInfo.cityVehiculeId.message
                : "Lugar donde te sueles movilizar en el vehiculo"
            }
          >
            {citiesOptions.map((ele, indx) => (
              <MenuItem key={indx} value={ele.id}>
                {ele.name}
              </MenuItem>
            ))}
          </Select>
          <TextField
            placeholder={"Ej: LMR 457"}
            label={"Placa*"}
            id="vehicleLicensePlate"
            radius="4px"
            width="100%"
            height="40px"
            labelFont={theme.fonts.family.primaryMedium}
            labelSize={theme.fonts.size.sm}
            font={theme.fonts.family.primary}
            size={theme.fonts.size.default2}
            border={theme.colors.neutralGray500}
            prefixIcon={<Image alt="numeral" src={numeral} />}
            value={vehiculeInfo.vehicleLicensePlate.toUpperCase()}
            onChange={handleChange}
          />

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
                  validateEditVehiculeInfo,
                  vehiculeInfo,
                  errorsVehiculeInfo,
                  setErrorsVehiculeInfo
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
