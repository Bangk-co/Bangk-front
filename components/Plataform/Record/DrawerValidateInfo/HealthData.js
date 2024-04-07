import { useState, useEffect } from "react";
import { Div, Text, Row, Col } from "@/styles/Common";
import { theme } from "@/styles/theme";
import { TextField } from "@/components/Common/TextField";
import { Radio } from "@/components/Common/Radio";
import { RadioGroup } from "@/components/Common/Radio/Group";
import { Button } from "@/components/Common/Button";
import { validateEditHealthInfo } from "@/utilities/validations";
import CircularProgress from "@mui/material/CircularProgress";
import useGetDiseases from "@/hooks/Common/useGetDiseases";
import { MenuItem } from "@mui/material";
import { Select } from "@/components/Common/Select";

export const HealtData = ({
  assessorConcept,
  setAssessorConcept,
  isEditing,
  setIsEditing,
  healthInfo,
  setHealthInfo,
  handleCancel,
  errorsHealthInfo,
  setErrorsHealthInfo,
  handleSave,
  isLoadingSave,
  isLoadingContinue,
  handleContinue,
  isValidated,
}) => {
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

  const getLabelFromValue = (value, options, id, name) => {
    const selectedOption = options.find(
      (option) => Number(option[id]) === Number(value)
    );
    return selectedOption ? selectedOption[name] : null;
  };

  const weightInfo = [
    { title: "¿Cúal es tu peso en kilos?(kg)", description: healthInfo.weight },
    {
      title: "¿Cúal es tu estatura en centimetros?(cm)",
      description: healthInfo.height,
    },
    {
      title: "Índice de masa corporal (IMC)",
      description: (
        healthInfo.weight /
        ((healthInfo.height / 100) ^ 2)
      ).toFixed(2),
    },
  ];

  const dataInfo = [
    {
      title:
        "¿Te han diagnosticado alguna(s) de estas enfermedades, circunstancias o eventos?",
      description:
        getLabelFromValue(healthInfo.diseases, diseasesOptions, "id", "name") ||
        "--",
    },
    {
      title:
        "¿Le han detectado la presencia de anticuerpos contra el virus V.I.H. productor del SIDA?",
      description: healthInfo.hivActive ? "Si" : "No",
    },
    {
      title:
        "¿Te encuentras actualmente en exámenes, estudios, investigación o te han indicado la necesidad de alguna cirugía o tratamiento que no te hayas realizado aún?",
      description: healthInfo.plannedMedicalProcidure ? "Si" : "No",
    },
    {
      title:
        "¿Tiene algún tipo de discapacidad, incapacidad o limitación física o mental?",
      description: healthInfo.disability ? "Si" : "No",
    },
  ];

  const handleChange = (event) => {
    const { value, id } = event.target;
    if (id === "comments") {
      setAssessorConcept((prevState) => ({
        ...prevState,
        healthInfo: {
          ...prevState.healthInfo,
          comments: value,
        },
      }));
    } else {
      const newErrorForm = { ...errorsHealthInfo };
      newErrorForm[id].error = false;
      newErrorForm[id].message = "";
      setErrorsHealthInfo(newErrorForm);

      const newHealthInfo = { ...healthInfo };
      newHealthInfo[id] = Number(value);
      setHealthInfo(newHealthInfo);
    }
  };

  const handleSelect = (event) => {
    const { value, name } = event.target;
    const newErrorForm = { ...errorsHealthInfo };
    newErrorForm[name].error = false;
    newErrorForm[name].message = "";
    setErrorsHealthInfo(newErrorForm);

    const newHealthInfo = { ...healthInfo };
    newHealthInfo[name] = String(value);

    setHealthInfo(newHealthInfo);
  };

  const handleRadio = (event, name) => {
    const { value } = event.target;
    if (name === "correctInfo") {
      setAssessorConcept((prevState) => ({
        ...prevState,
        healthInfo: {
          ...prevState.healthInfo,
          concept: value,
        },
      }));
    } else {
      const newErrorForm = { ...errorsHealthInfo };
      newErrorForm[name].error = false;
      newErrorForm[name].message = "";
      setErrorsHealthInfo(newErrorForm);

      setHealthInfo((prevInfo) => ({
        ...prevInfo,
        [name]: value === "true",
      }));
    }
  };

  return (
    <Col gap="16px" m="24px 0 0 0">
      {!isEditing ? (
        <>
          <Row width="100%" m="16px 0 0 0" justify="space-between">
            {weightInfo.map((data, index) => (
              <Col key={index} gap="10px" width="190px">
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
                  {data.description}
                </Text>
              </Col>
            ))}{" "}
          </Row>
          {dataInfo.map((data, index) => (
            <Row key={index} width="100%" m="16px 0 0 0">
              <Col>
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
                  mt="10px"
                >
                  {data.description}
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
                value={assessorConcept.healthInfo.concept}
                onChange={(e) => handleRadio(e, "correctInfo")}
              >
                <Radio
                  label="La información es correcta"
                  value={"La información es correcta"}
                  checked={
                    assessorConcept.healthInfo.concept ===
                    "La información es correcta"
                  }
                />
                <Radio
                  label="Presenta novedades"
                  value={"Presenta novedades"}
                  checked={
                    assessorConcept.healthInfo.concept === "Presenta novedades"
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
                value={assessorConcept.healthInfo.comments}
                onChange={handleChange}
              />
            </Div>
            {!isValidated && (
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
                    assessorConcept.healthInfo.concept === "" ||
                    assessorConcept.healthInfo.comments === ""
                  }
                  onClick={() =>
                    handleContinue(
                      "healthInfo",
                      assessorConcept.healthInfo.concept,
                      assessorConcept.healthInfo.comments
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
          <Row gap="16px">
            <TextField
              label={"¿Cúal es tu peso en kilos?(kg)*"}
              placeholder={"0"}
              id="weight"
              type="number"
              radius="4px"
              width="100%"
              height="40px"
              labelFont={theme.fonts.family.primaryMedium}
              labelSize={theme.fonts.size.sm}
              font={theme.fonts.family.primary}
              size={theme.fonts.size.default2}
              border={theme.colors.neutralGray500}
              value={healthInfo.weight}
              onChange={handleChange}
              error={errorsHealthInfo.weight.error}
              helper={
                errorsHealthInfo.weight.error
                  ? errorsHealthInfo.weight.message
                  : ""
              }
            />
            <TextField
              label={"¿Cúal es tu estatura en centimetros?(cm)*"}
              placeholder={"0"}
              id="height"
              type="number"
              radius="4px"
              width="100%"
              height="40px"
              labelFont={theme.fonts.family.primaryMedium}
              labelSize={theme.fonts.size.sm}
              font={theme.fonts.family.primary}
              size={theme.fonts.size.default2}
              border={theme.colors.neutralGray500}
              value={healthInfo.height}
              onChange={handleChange}
              error={errorsHealthInfo.height.error}
              helper={
                errorsHealthInfo.height.error
                  ? errorsHealthInfo.height.message
                  : ""
              }
              notFocused={true}
              inputProps={{
                pattern: "\\d*",
                inputMode: "numeric",
              }}
            />
          </Row>
          <Select
            label={
              "¿Te han diagnosticado alguna(s) de estas enfermedades, circunstancias o eventos?"
            }
            name="diseases"
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
            value={healthInfo?.diseases}
            onChange={handleSelect}
            error={errorsHealthInfo.diseases.error}
            helper={
              errorsHealthInfo.diseases.error
                ? errorsHealthInfo.diseases.message
                : ""
            }
          >
            {diseasesOptions.map((ele, indx) => (
              <MenuItem key={indx} value={ele.id}>
                {ele.name}
              </MenuItem>
            ))}
          </Select>
          <RadioGroup
            gap="5px"
            name="hivActive"
            direction="row"
            label={
              "¿Le han detectado la presencia de anticuerpos contra el virus V.I.H. productor del SIDA?"
            }
            labelSize={theme.fonts.size.sm}
            value={healthInfo.hivActive}
            onChange={(e) => handleRadio(e, "hivActive")}
          >
            <Radio label="Si" value={true} checked={healthInfo.hivActive} />
            <Radio label="No" value={false} checked={!healthInfo.hivActive} />
          </RadioGroup>
          <RadioGroup
            gap="5px"
            name="plannedMedicalProcidure"
            direction="row"
            label={
              "¿Te encuentras actualmente en exámenes, estudios, investigación o te han indicado la necesidad de alguna cirugía o tratamiento que no te hayas realizado aún?"
            }
            labelSize={theme.fonts.size.sm}
            value={healthInfo.plannedMedicalProcidure}
            onChange={(e) => handleRadio(e, "plannedMedicalProcidure")}
          >
            <Radio
              label="Si"
              value={true}
              checked={healthInfo.plannedMedicalProcidure}
            />
            <Radio
              label="No"
              value={false}
              checked={!healthInfo.plannedMedicalProcidure}
            />
          </RadioGroup>
          <RadioGroup
            gap="5px"
            name="disability"
            direction="row"
            label={
              "¿Tiene algún tipo de discapacidad, incapacidad o limitación física o mental?"
            }
            labelSize={theme.fonts.size.sm}
            value={healthInfo.disability}
            onChange={(e) => handleRadio(e, "disability")}
          >
            <Radio label="Si" value={true} checked={healthInfo.disability} />
            <Radio label="No" value={false} checked={!healthInfo.disability} />
          </RadioGroup>
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
                  validateEditHealthInfo,
                  healthInfo,
                  errorsHealthInfo,
                  setErrorsHealthInfo
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
