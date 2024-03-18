import { useState, useEffect } from "react";
import { Div, Text, Row, Col } from "@/styles/Common";
import { theme } from "@/styles/theme";
import { TextField } from "@/components/Common/TextField";
import { Radio } from "@/components/Common/Radio";
import { RadioGroup } from "@/components/Common/Radio/Group";
import { Button } from "@/components/Common/Button";
import { MenuItem } from "@mui/material";
import { Select } from "@/components/Common/Select";
import useGetDocumentType from "@/hooks/Common/useGetDocumentType";
import { validateEditAdditionalInfo } from "@/utilities/validations";
import CircularProgress from "@mui/material/CircularProgress";
import { documentTypeAbbreviation } from "@/utilities/helpers";

export const AdditionalData = ({
  assessorConcept,
  setAssessorConcept,
  isEditing,
  setIsEditing,
  additionalInfo,
  setAdditionalInfo,
  handleCancel,
  errorsAdditionalInfo,
  setErrorsAdditionalInfo,
  handleSave,
  isLoadingSave,
  isLoadingContinue,
  handleContinue,
}) => {
  const documentType = useGetDocumentType();
  const { data: dataDocument, isSuccess: isSuccessDocument } = documentType;
  const [documentTypeOptions, setDocumentTypeOptions] = useState([]);
  useEffect(() => {
    if (isSuccessDocument && dataDocument?.data?.groupSettings.length > 0)
      setDocumentTypeOptions(
        dataDocument?.data?.groupSettings.map((ele) => ({
          name: ele.name,
          id: ele.id,
        }))
      );
  }, [dataDocument, isSuccessDocument]);

  const getLabelFromValue = (value, options, id, name) => {
    const selectedOption = options.find((option) => option[id] === value);
    return selectedOption ? selectedOption[name] : null;
  };

  const dataInfo = [
    {
      title:
        "¿Has sido indiciado, investigado, procesado, inculpado, imputado, detenido y/o condenado por algún delito?",
      description: additionalInfo.convicted ? "Si" : "No",
    },
    {
      title:
        "¿Tienes algún seguro de vida individual o de accidentes personales con Allianz o con cualquier aseguradora diferentes a aquellos que respaldan deudas en entidades financieras?",
      description: additionalInfo.lifeEnsure ? "Si" : "No",
    },
    {
      title:
        "*En caso de que faltes y exista algún remanente después de pagar el saldo total de tu deuda, puedes escoger quién o quienes pueden recibirlo por parte de la aseguradora",
      description: additionalInfo.beneficiaries
        ? "Mis herederos legales"
        : "Designado por mi",
    },
  ];

  const handleChange = (event) => {
    const { value, id } = event.target;
    if (id === "comments") {
      setAssessorConcept((prevState) => ({
        ...prevState,
        additionalInfo: {
          ...prevState.additionalInfo,
          comments: value,
        },
      }));
    } else {
      const newAdditionalInfo = { ...additionalInfo };
      newAdditionalInfo[id] = value;
      setAdditionalInfo(newAdditionalInfo);
    }
  };

  const handleSelect = (event) => {
    const { value, name } = event.target;

    const newAdditionalInfo = { ...additionalInfo };
    newAdditionalInfo[name] = value;
    setAdditionalInfo(newAdditionalInfo);
  };

  const handleRadio = (event, name) => {
    const { value } = event.target;
    switch (name) {
      case "correctInfo":
        setAssessorConcept((prevState) => ({
          ...prevState,
          additionalInfo: {
            ...prevState.additionalInfo,
            concept: value,
          },
        }));
        break;
      case "convicted":
        setAdditionalInfo((prevInfo) => ({
          ...prevInfo,
          convicted: value === "true",
        }));
        break;
      case "lifeEnsure":
        setAdditionalInfo((prevInfo) => ({
          ...prevInfo,
          lifeEnsure: value === "true",
        }));
        break;
      case "beneficiaries":
        setAdditionalInfo((prevInfo) => ({
          ...prevInfo,
          beneficiaries: value === "true",
        }));
        break;
    }
  };

  return (
    <Col gap="16px" m="24px 0 0 0">
      {!isEditing ? (
        <>
          {dataInfo.map((data, index) => (
            <Col key={index} gap="16px">
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
          ))}

          {additionalInfo.beneficiaries === false && (
            <Col>
              <Text
                font={theme.fonts.family.primary}
                size={theme.fonts.size.default2}
                weight={theme.fonts.weight.regular}
                color={theme.colors.neutralGray900}
              >
                {additionalInfo.beneficiaryName}
              </Text>
              <Row gap="5px">
                <Text
                  font={theme.fonts.family.primary}
                  size={theme.fonts.size.default2}
                  weight={theme.fonts.weight.regular}
                  color={theme.colors.neutralGray900}
                >
                  {documentTypeAbbreviation(
                    getLabelFromValue(
                      additionalInfo.beneficiaryIdentificationTypeId,
                      documentTypeOptions,
                      "id",
                      "name"
                    )
                  )}
                </Text>
                <Text
                  font={theme.fonts.family.primary}
                  size={theme.fonts.size.default2}
                  weight={theme.fonts.weight.regular}
                  color={theme.colors.neutralGray900}
                >
                  {additionalInfo.beneficiaryIdentificationNumber}
                </Text>
              </Row>
            </Col>
          )}

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
                value={assessorConcept.additionalInfo.concept}
                onChange={(e) => handleRadio(e, "correctInfo")}
              >
                <Radio
                  label="La información es correcta"
                  value={"La información es correcta"}
                  checked={
                    assessorConcept.additionalInfo.concept ===
                    "La información es correcta"
                  }
                />
                <Radio
                  label="Presenta novedades"
                  value={"Presenta novedades"}
                  checked={
                    assessorConcept.additionalInfo.concept ===
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
                value={assessorConcept.additionalInfo.comments}
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
                  assessorConcept.additionalInfo.concept === "" ||
                  assessorConcept.additionalInfo.comments === ""
                }
                onClick={() =>
                  handleContinue(
                    "additionalInfo",
                    assessorConcept.additionalInfo.concept,
                    assessorConcept.additionalInfo.comments
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
        </>
      ) : (
        <Col gap="16px">
          <RadioGroup
            gap="5px"
            name="convicted "
            direction="row"
            label={
              "¿Has sido indiciado, investigado, procesado, inculpado, imputado, detenido y/o condenado por algún delito?"
            }
            labelSize={theme.fonts.size.sm}
            value={additionalInfo.convicted}
            onChange={(e) => handleRadio(e, "convicted")}
          >
            <Radio label="Si" value={true} checked={additionalInfo.convicted} />
            <Radio
              label="No"
              value={false}
              checked={!additionalInfo.convicted}
            />
          </RadioGroup>
          <RadioGroup
            gap="5px"
            name="lifeEnsure "
            direction="row"
            label={
              "¿Tienes algún seguro de vida individual o de accidentes personales con Allianz o con cualquier aseguradora diferentes a aquellos que respaldan deudas en entidades financieras?"
            }
            labelSize={theme.fonts.size.sm}
            value={additionalInfo.lifeEnsure}
            onChange={(e) => handleRadio(e, "lifeEnsure")}
          >
            <Radio
              label="Si"
              value={true}
              checked={additionalInfo.lifeEnsure}
            />
            <Radio
              label="No"
              value={false}
              checked={!additionalInfo.lifeEnsure}
            />
          </RadioGroup>
          <RadioGroup
            gap="5px"
            name="beneficiaries "
            direction="row"
            label={
              "*En caso de que faltes y exista algún remanente después de pagar el saldo total de tu deuda, puedes escoger quién o quienes pueden recibirlo por parte de la aseguradora"
            }
            labelSize={theme.fonts.size.sm}
            value={additionalInfo.beneficiaries}
            onChange={(e) => handleRadio(e, "beneficiaries")}
          >
            <Radio
              label="Mis herederos legales"
              value={true}
              checked={additionalInfo.beneficiaries}
            />
            <Radio
              label="Designado por mi"
              value={false}
              checked={!additionalInfo.beneficiaries}
            />
          </RadioGroup>
          {additionalInfo.beneficiaries === false && (
            <Col gap="8px">
              <TextField
                label={"Nombre completo*"}
                placeholder={"Nombre completo"}
                id="beneficiaryName"
                radius="4px"
                width="100%"
                height="40px"
                labelFont={theme.fonts.family.primaryMedium}
                labelSize={theme.fonts.size.sm}
                font={theme.fonts.family.primary}
                size={theme.fonts.size.default2}
                border={theme.colors.neutralGray500}
                value={additionalInfo.beneficiaryName}
                onChange={handleChange}
              />

              <Row gap="16px">
                <Div width="150px">
                  <Select
                    label={"Tipo de documento*"}
                    name="beneficiaryIdentificationTypeId"
                    radius="4px"
                    width="150px"
                    height="40px"
                    size={theme.fonts.size.sm}
                    labelSize={theme.fonts.size.sm}
                    labelColor={theme.colors.neutralGray900}
                    labelFont={theme.fonts.family.primaryMedium}
                    font={theme.fonts.family.primary}
                    border={theme.colors.neutralGray500}
                    notFocused={true}
                    placeholderColor={theme.colors.neutralGray500}
                    value={additionalInfo?.beneficiaryIdentificationTypeId}
                    onChange={handleSelect}
                  >
                    {documentTypeOptions.map((ele, indx) => (
                      <MenuItem key={indx} value={ele.id}>
                        {ele.name}
                      </MenuItem>
                    ))}
                  </Select>
                </Div>
                <TextField
                  label={"Número de documento*"}
                  placeholder={"Número de documento"}
                  id="beneficiaryIdentificationNumber"
                  radius="4px"
                  width="100%"
                  height="40px"
                  labelFont={theme.fonts.family.primaryMedium}
                  labelSize={theme.fonts.size.sm}
                  font={theme.fonts.family.primary}
                  size={theme.fonts.size.default2}
                  border={theme.colors.neutralGray500}
                  value={additionalInfo.beneficiaryIdentificationNumber}
                  onChange={handleChange}
                />
              </Row>
            </Col>
          )}

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
                  validateEditAdditionalInfo,
                  additionalInfo,
                  errorsAdditionalInfo,
                  setErrorsAdditionalInfo
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
