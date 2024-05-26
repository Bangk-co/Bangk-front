import { useState, useEffect } from "react";
import Image from "next/image";
import { Grid } from "@mui/material";
import _ from "lodash";
import { Div, Text, Row, Col } from "@/styles/Common";
import { theme } from "@/styles/theme";
import { TextField } from "@/components/Common/TextField";
import { Radio } from "@/components/Common/Radio";
import { RadioGroup } from "@/components/Common/Radio/Group";
import { Button } from "@/components/Common/Button";
import { MenuItem } from "@mui/material";
import { Select } from "@/components/Common/Select";
import { Link } from "@/components/Common/Link";
import useGetDocumentType from "@/hooks/Common/useGetDocumentType";
import useGetRelationships from "@/hooks/Common/useGetRelationships";
import { validateEditAdditionalInfo } from "@/utilities/validations";
import CircularProgress from "@mui/material/CircularProgress";
import { documentTypeAbbreviation } from "@/utilities/helpers";
import { WrapperAlert } from "./styles";
import infoError from "@/assets/icons/info-error.svg";

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
  isValidated,
  loanApplicationId,
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

  const relationshipList = useGetRelationships();
  const { data: dataRelationships, isSuccess: isSuccessRelationships } =
    relationshipList;
  const [relationshipOptions, setRelationshipOptions] = useState([]);
  useEffect(() => {
    if (
      isSuccessRelationships &&
      dataRelationships?.data?.groupSettings.length > 0
    )
      setRelationshipOptions(
        dataRelationships?.data?.groupSettings.map((ele) => ({
          name: ele.name,
          id: ele.id,
        }))
      );
  }, [dataRelationships, isSuccessRelationships]);

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
        ? "Designado por mi"
        : "Mis herederos legales",
    },
  ];

  const handleChange = (event, index) => {
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
      const updatedBeneficiaries = [...additionalInfo.beneficiary];
      updatedBeneficiaries[index] = {
        ...updatedBeneficiaries[index],
        [id]: value,
      };
      setAdditionalInfo((prevState) => ({
        ...prevState,
        beneficiary: updatedBeneficiaries,
      }));
    }
  };

  const handleSelect = (event, index) => {
    const { value, name } = event.target;
    const updatedBeneficiaries = [...additionalInfo.beneficiary];
    updatedBeneficiaries[index] = {
      ...updatedBeneficiaries[index],
      [name]: value,
    };
    setAdditionalInfo((prevState) => ({
      ...prevState,
      beneficiary: updatedBeneficiaries,
    }));
  };

  const addBeneficiary = () => {
    setAdditionalInfo((prevState) => ({
      ...prevState,
      beneficiary: [
        ...prevState.beneficiary,
        {
          id: 0,
          loanInsurancePolicyId: 0,
          name: "",
          identificationTypeId: null,
          identificationNumber: "",
          relationshipId: null,
          percentInherit: null,
          creationDate: new Date(),
        },
      ],
    }));
  };
  const deleteBeneficiary = (index) => {
    const newBeneficiaryArray = [...additionalInfo.beneficiary];
    newBeneficiaryArray.splice(index, 1);
    setAdditionalInfo({ ...additionalInfo, beneficiary: newBeneficiaryArray });
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
        if (value === "false") {
          setAdditionalInfo((prevState) => ({
            ...prevState,
            beneficiary: [],
          }));
        } else if (additionalInfo.beneficiary.length === 0) {
          addBeneficiary();
        }
        break;
    }
  };

  const percentageValue = _.sumBy(
    additionalInfo.beneficiary,
    (obj) => Number(obj.percentInherit) || 0
  );
  const percentageError = additionalInfo.beneficiaries
    ? percentageValue !== 100
    : additionalInfo.beneficiaries;

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

          {additionalInfo.beneficiaries &&
            additionalInfo.beneficiary.length > 0 && (
              <Grid container spacing={2}>
                {additionalInfo.beneficiary.map((benefic, index) => (
                  <Grid item xs={6} key={index}>
                    <Col>
                      <Text
                        font={theme.fonts.family.primaryBold}
                        size={theme.fonts.size.default2}
                        color={theme.colors.neutralGray900}
                      >
                        {`Heredero ${index + 1}`}
                      </Text>
                      <Text
                        font={theme.fonts.family.primary}
                        size={theme.fonts.size.default2}
                        weight={theme.fonts.weight.regular}
                        color={theme.colors.neutralGray900}
                      >
                        {benefic.name}
                      </Text>
                      <Text
                        font={theme.fonts.family.primary}
                        size={theme.fonts.size.default2}
                        weight={theme.fonts.weight.regular}
                        color={theme.colors.neutralGray900}
                      >
                        {`${documentTypeAbbreviation(
                          getLabelFromValue(
                            benefic.identificationTypeId,
                            documentTypeOptions,
                            "id",
                            "name"
                          )
                        )} ${benefic.identificationNumber}`}
                      </Text>
                      <Text
                        font={theme.fonts.family.primary}
                        size={theme.fonts.size.default2}
                        weight={theme.fonts.weight.regular}
                        color={theme.colors.neutralGray900}
                      >
                        {`Parentesco: ${getLabelFromValue(
                          benefic.relationshipId,
                          relationshipOptions,
                          "id",
                          "name"
                        )}`}
                      </Text>
                      <Text
                        font={theme.fonts.family.primary}
                        size={theme.fonts.size.default2}
                        weight={theme.fonts.weight.regular}
                        color={theme.colors.neutralGray900}
                      >
                        {`Porcentaje a heredar: ${benefic.percentInherit}%`}
                      </Text>
                    </Col>
                  </Grid>
                ))}
              </Grid>
            )}

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
                {assessorConcept.additionalInfo.concept ===
                "La información es correcta"
                  ? "La información se encuentra correcta"
                  : "Información con novedades"}
              </Text>
              <Text
                font={theme.fonts.family.primary}
                size={theme.fonts.size.default2}
                color={theme.colors.neutralGray900}
              >
                {assessorConcept.additionalInfo.comments}
              </Text>
            </Div>
          )}
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
            <Radio label="Mis herederos legales" value={false} />
            <Radio label="Designado por mi" value={true} />
          </RadioGroup>

          {percentageError &&
            additionalInfo.beneficiaries &&
            additionalInfo.beneficiary.length > 0 && (
              <WrapperAlert background={theme.colors.error100}>
                <Image alt="info" src={infoError} />
                <Text
                  size={theme.fonts.size.sm}
                  color={theme.colors.neutralGray900}
                  font={theme.fonts.family.primaryMedium}
                >
                  La sumatoria de los porcentaje de los herederos debe ser igual
                  a 100%
                </Text>
              </WrapperAlert>
            )}

          {additionalInfo.beneficiaries &&
            additionalInfo.beneficiary.map((benefic, index) => (
              <Col gap="8px" key={index}>
                <Text
                  font={theme.fonts.family.primaryBold}
                  size={theme.fonts.size.default2}
                  color={theme.colors.neutralGray900}
                >
                  {`Heredero ${index + 1}`}
                </Text>
                <TextField
                  label={"Nombre completo*"}
                  placeholder={"Nombre completo"}
                  id="name"
                  radius="4px"
                  width="100%"
                  height="40px"
                  labelFont={theme.fonts.family.primaryMedium}
                  labelSize={theme.fonts.size.sm}
                  font={theme.fonts.family.primary}
                  size={theme.fonts.size.default2}
                  border={theme.colors.neutralGray500}
                  value={benefic.name}
                  onChange={(event) => handleChange(event, index)}
                />

                <Row gap="16px">
                  <Div width="150px">
                    <Select
                      label={"Tipo de documento*"}
                      name="identificationTypeId"
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
                      value={benefic.identificationTypeId}
                      onChange={(event) => handleSelect(event, index)}
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
                    id="identificationNumber"
                    type="number"
                    radius="4px"
                    width="100%"
                    height="40px"
                    labelFont={theme.fonts.family.primaryMedium}
                    labelSize={theme.fonts.size.sm}
                    font={theme.fonts.family.primary}
                    size={theme.fonts.size.default2}
                    border={theme.colors.neutralGray500}
                    value={benefic.identificationNumber}
                    onChange={(event) => handleChange(event, index)}
                  />
                </Row>
                <Row gap="16px">
                  <Select
                    label={"Parentesco*"}
                    name="relationshipId"
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
                    value={benefic.relationshipId}
                    onChange={(event) => handleSelect(event, index)}
                  >
                    {relationshipOptions.map((ele, indx) => (
                      <MenuItem key={indx} value={ele.id}>
                        {ele.name}
                      </MenuItem>
                    ))}
                  </Select>
                  <TextField
                    label={"Porcentaje a heredar (1% a 100%)*"}
                    placeholder={"Porcentaje a heredar"}
                    id="percentInherit"
                    type="number"
                    radius="4px"
                    width="100%"
                    height="40px"
                    labelFont={theme.fonts.family.primaryMedium}
                    labelSize={theme.fonts.size.sm}
                    font={theme.fonts.family.primary}
                    size={theme.fonts.size.default2}
                    border={
                      percentageError
                        ? theme.colors.red
                        : theme.colors.neutralGray500
                    }
                    value={benefic.percentInherit}
                    onChange={(event) => handleChange(event, index)}
                    error={percentageError}
                    helper={
                      percentageError
                        ? "El valor de la sumatoria debe ser 100%"
                        : ""
                    }
                  />
                </Row>
                <Row justify="right">
                  <Link
                    font={theme.fonts.family.primary}
                    color={theme.colors.orange}
                    size={theme.fonts.size.default2}
                    onClick={() => deleteBeneficiary(index)}
                    style={{ borderBottom: `1px solid ${theme.colors.orange}` }}
                  >
                    Eliminar heredero
                  </Link>
                </Row>
              </Col>
            ))}
          {additionalInfo.beneficiaries &&
            additionalInfo.beneficiary.length > 0 &&
            additionalInfo.beneficiary.length < 7 && (
              <Row justify="right">
                <Link
                  font={theme.fonts.family.primaryMedium}
                  color={theme.colors.orange}
                  size={theme.fonts.size.default2}
                  onClick={addBeneficiary}
                >
                  Agregar otro heredero
                </Link>
              </Row>
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
              disabled={isLoadingSave || percentageError}
            >
              Guardar cambios
            </Button>
          </Row>
        </Col>
      )}
    </Col>
  );
};
