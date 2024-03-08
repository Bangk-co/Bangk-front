import { Div, Text, Row, Col } from "@/styles/Common";
import { theme } from "@/styles/theme";
import { TextField } from "@/components/Common/TextField";
import { Radio } from "@/components/Common/Radio";
import { RadioGroup } from "@/components/Common/Radio/Group";
import { Button } from "@/components/Common/Button";
import { validateEditFinancialInfo } from "@/utilities/validations";
import CircularProgress from "@mui/material/CircularProgress";
import Image from "next/image";
import pesosIcon from "@/assets/icons/pesos.svg";
import { numberFormat } from "@/utilities/helpers";

export const FinancialData = ({
  assessorConcept,
  setAssessorConcept,
  isEditing,
  setIsEditing,
  financialInfo,
  setFinancialInfo,
  handleCancel,
  errorsFinancialInfo,
  setErrorsFinancialInfo,
  handleContinue,
  isLoadingSave,
}) => {
  const dataInfo = [
    {
      titleL: "Ingresos mensuales",
      descriptionL: numberFormat(financialInfo.monthlyIncome),
      titleR: "Gastos mensuales",
      descriptionR: numberFormat(financialInfo.monthlyExpenses),
    },
    {
      titleL: "Valor de tus activos",
      descriptionL: numberFormat(financialInfo.assetValue),
      titleR: "valor de tus pasivos",
      descriptionR: numberFormat(financialInfo.liabilitiesValue),
    },
  ];

  const handleChange = (event) => {
    const { value, id } = event.target;
    if (id === "comments") {
      setAssessorConcept((prevState) => ({
        ...prevState,
        financialInfo: {
          ...prevState.financialInfo,
          comments: value,
        },
      }));
    } else {
      const newErrorForm = { ...errorsFinancialInfo };
      newErrorForm[id].error = false;
      newErrorForm[id].message = "";
      setErrorsFinancialInfo(newErrorForm);

      const newFinancialInfo = { ...financialInfo };
      newFinancialInfo[id] = Number(value);
      setFinancialInfo(newFinancialInfo);
    }
  };

  const handleRadio = (event) => {
    const { value } = event.target;
    setAssessorConcept((prevState) => ({
      ...prevState,
      financialInfo: {
        ...prevState.financialInfo,
        concept: value,
      },
    }));
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
                value={assessorConcept.financialInfo.concept}
                onChange={(e) => handleRadio(e)}
              >
                <Radio
                  label="La información es correcta"
                  value={"La información es correcta"}
                  checked={
                    assessorConcept.financialInfo.concept ===
                    "La información es correcta"
                  }
                />
                <Radio
                  label="Presenta novedades"
                  value={"Presenta novedades"}
                  checked={
                    assessorConcept.financialInfo.concept ===
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
                value={assessorConcept.financialInfo.comments}
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
                  assessorConcept.financialInfo.concept === "" ||
                  assessorConcept.financialInfo.comments === ""
                }
                onClick={() =>
                  handleContinue(
                    validateEditFinancialInfo,
                    financialInfo,
                    errorsFinancialInfo,
                    setErrorsFinancialInfo
                  )
                }
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
          <TextField
            label={"Ingresos mensuales*"}
            placeholder={"0"}
            id="monthlyIncome"
            type="number"
            radius="4px"
            width="100%"
            height="40px"
            labelFont={theme.fonts.family.primaryMedium}
            labelSize={theme.fonts.size.sm}
            font={theme.fonts.family.primary}
            size={theme.fonts.size.default2}
            border={theme.colors.neutralGray500}
            value={financialInfo.monthlyIncome}
            onChange={handleChange}
            error={errorsFinancialInfo.monthlyIncome.error}
            helper={
              errorsFinancialInfo.monthlyIncome.error
                ? errorsFinancialInfo.monthlyIncome.message
                : ""
            }
            notFocused={true}
            prefixIcon={
              <Image alt="pesos" src={pesosIcon} width={16} height={16} />
            }
            inputProps={{
              pattern: "\\d*",
              inputMode: "numeric",
            }}
          />
          <TextField
            label={"Gastos mensuales*"}
            placeholder={"0"}
            id="monthlyExpenses"
            type="number"
            radius="4px"
            width="100%"
            height="40px"
            labelFont={theme.fonts.family.primaryMedium}
            labelSize={theme.fonts.size.sm}
            font={theme.fonts.family.primary}
            size={theme.fonts.size.default2}
            border={theme.colors.neutralGray500}
            value={financialInfo.monthlyExpenses}
            onChange={handleChange}
            error={errorsFinancialInfo.monthlyExpenses.error}
            helper={
              errorsFinancialInfo.monthlyExpenses.error
                ? errorsFinancialInfo.monthlyExpenses.message
                : ""
            }
            notFocused={true}
            prefixIcon={
              <Image alt="pesos" src={pesosIcon} width={16} height={16} />
            }
            inputProps={{
              pattern: "\\d*",
              inputMode: "numeric",
            }}
          />
          <Col>
            <TextField
              label={"Valor de tus activos*"}
              placeholder={"0"}
              id="assetValue"
              type="number"
              radius="4px"
              width="100%"
              height="40px"
              labelFont={theme.fonts.family.primaryMedium}
              labelSize={theme.fonts.size.sm}
              font={theme.fonts.family.primary}
              size={theme.fonts.size.default2}
              border={theme.colors.neutralGray500}
              value={financialInfo.assetValue}
              onChange={handleChange}
              error={errorsFinancialInfo.assetValue.error}
              helper={
                errorsFinancialInfo.assetValue.error
                  ? errorsFinancialInfo.assetValue.message
                  : ""
              }
              notFocused={true}
              prefixIcon={
                <Image alt="pesos" src={pesosIcon} width={16} height={16} />
              }
              inputProps={{
                pattern: "\\d*",
                inputMode: "numeric",
              }}
            />
            <Text
              font={theme.fonts.family.primary}
              size={theme.fonts.size.sm}
              weight={theme.fonts.weight.regular}
              color={theme.colors.gray700}
            >
              Suma de tus propiedades, vehículos y/o inversiones
            </Text>
          </Col>
          <Col>
            <TextField
              label={"Valor de tus pasivos*"}
              placeholder={"0"}
              id="liabilitiesValue"
              type="number"
              radius="4px"
              width="100%"
              height="40px"
              labelFont={theme.fonts.family.primaryMedium}
              labelSize={theme.fonts.size.sm}
              font={theme.fonts.family.primary}
              size={theme.fonts.size.default2}
              border={theme.colors.neutralGray500}
              value={financialInfo.liabilitiesValue}
              onChange={handleChange}
              error={errorsFinancialInfo.liabilitiesValue.error}
              helper={
                errorsFinancialInfo.liabilitiesValue.error
                  ? errorsFinancialInfo.liabilitiesValue.message
                  : ""
              }
              notFocused={true}
              prefixIcon={
                <Image alt="pesos" src={pesosIcon} width={16} height={16} />
              }
              inputProps={{
                pattern: "\\d*",
                inputMode: "numeric",
              }}
            />
            <Text
              font={theme.fonts.family.primary}
              size={theme.fonts.size.sm}
              weight={theme.fonts.weight.regular}
              color={theme.colors.gray700}
            >
              Suma de tus deudas en tarjetas de crédito, créditos, etc.
            </Text>
          </Col>
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
                handleContinue(
                  validateEditFinancialInfo,
                  financialInfo,
                  errorsFinancialInfo,
                  setErrorsFinancialInfo
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
