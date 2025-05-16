import React, { useState, useEffect } from "react";
import { Card, Signs, WrapperAmount } from "./styles";
import toast from "react-hot-toast";
import { Grid } from "@mui/material";
import { RadioGroup } from "../Common/Radio/Group";
import { Radio } from "../Common/Radio";
import { Col, Div, Row, Text } from "@/styles/Common";
import { Checkbox } from "../Common/Checkbox";
import { theme } from "@/styles/theme";
import { Button } from "../Common/Button";
import { CardCollapse } from "../Common/CardCollapse";
import { BasicForm } from "./BasicForm";
import _ from "lodash";
import { TitularForm } from "./TitularForm";
import { validateMedBangkForm } from "@/utilities/validations";
import { ToastErrorClient } from "../Common/ToastErrorClients";

export const Step1 = ({
  isMobile,
  buttonProps,
  labelsProps,
  handleContinue,
  form,
  setForm,
  activeKey,
  setActiveKey,
  documentTypeOptions,
  phoneCodesOptions,
  paymentOcurrencyOptions,
}) => {
  const [panels, setPanels] = useState([]);
  const [errorForm, setErrorForm] = useState({});

  useEffect(() => {
    const panelsData = [
      {
        key: "0",
        header: "Datos del titular",
        panel: (
          <TitularForm
            labelsProps={labelsProps}
            buttonProps={buttonProps}
            setForm={setForm}
            form={form}
            isMobile={isMobile}
            setActiveKey={setActiveKey}
            documentTypeOptions={documentTypeOptions}
            phoneCodesOptions={phoneCodesOptions}
            errorForm={errorForm}
            setErrorForm={setErrorForm}
          />
        ),
      },
    ];
    const beneficiaryPanels = _.map(_.range(form.planAmount), (index) => ({
      key: `${index + 1}`,
      header: `Beneficiario ${index + 1}`,
      panel: (
        <BasicForm
          labelsProps={labelsProps}
          buttonProps={buttonProps}
          setForm={setForm}
          form={form}
          index={index}
          isMobile={isMobile}
          setActiveKey={setActiveKey}
          documentTypeOptions={documentTypeOptions}
          phoneCodesOptions={phoneCodesOptions}
          errorForm={errorForm}
          setErrorForm={setErrorForm}
        />
      ),
    }));
    setPanels([...panelsData, ...beneficiaryPanels]);
  }, [form, errorForm, phoneCodesOptions, documentTypeOptions]);

  const handleRadio = (event) => {
    setForm({
      ...form,
      methodOfPayment: Number(event.target.defaultValue),
    });
  };
  const handleValidate = () => {
    const validation = validateMedBangkForm.validate(form, {
      abortEarly: false,
    });
    const errorMessages = {
      name: "Mínimo 2 Máximo 50 caracteres",
      lastName: "Mínimo 2 Máximo 50 caracteres",
      phoneNumber: "Mínimo 7 Máximo 15 caracteres",
      documentNumber: "Mínimo 5 Máximo 13 caracteres",
      beneficiaryName: "Mínimo 2 Máximo 50 caracteres",
      beneficiaryLastname: "Mínimo 2 Máximo 50 caracteres",
      email: "Obligatorio, debe ser un correo válido",
    };
    if (validation.error) {
      const newErrorForm = { ...errorForm };
      validation.error.details.forEach((ele) => {
        const label = ele.context.label;
        if (!newErrorForm[label]) {
          newErrorForm[label] = { error: false, message: "" };
        }

        if (label.startsWith("beneficiariesInfo")) {
          const fieldName = label.split(".").pop();
          const customMessage = errorMessages[fieldName] || "Campo obligatorio";

          _.set(newErrorForm, label, {
            error: true,
            message: customMessage,
          });
        } else {
          _.set(newErrorForm, label, {
            error: true,
            message: errorMessages[label] || "Campo obligatorio",
          });
        }
      });
      setErrorForm(newErrorForm);

      toast.custom(
        <ToastErrorClient
          message={"Verifica todo los campos"}
          color={theme.colors.white}
          background={theme.colors.primary300}
        />,
        { duration: 1000 }
      );
    } else {
      handleContinue();
    }
  };

  return (
    <>
      <Card>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <RadioGroup
              name="paymentMethod"
              direction={isMobile ? "column" : "row"}
              label="Forma de pago"
              labelSize={theme.fonts.size.default2}
              labelColor={theme.colors.gray1000}
              value={form.methodOfPayment}
              onChange={handleRadio}
            >
              {paymentOcurrencyOptions.map((option, idx) => (
                <Radio
                  key={idx}
                  label={option.label}
                  value={option.value}
                  labelColor={theme.colors.gray1000}
                  radioColor={theme.colors.gray1000}
                  checked={form.methodOfPayment === option.value}
                />
              ))}
            </RadioGroup>
          </Grid>
          <Grid item xs={12} md={6}>
            <Text
              color={theme.colors.gray1000}
              size={theme.fonts.size.default2}
            >
              Número de personas para la asistencia
            </Text>
            <Div gap="5px" m="2px 0 0 0">
              <Signs
                onClick={() =>
                  form.planAmount > 1 &&
                  setForm({
                    ...form,
                    planAmount: form.planAmount - 1,
                    beneficiariesInfo: form.beneficiariesInfo.slice(
                      0,
                      form.planAmount - 1
                    ),
                  })
                }
              >
                -
              </Signs>
              <WrapperAmount>{form.planAmount || 1}</WrapperAmount>
              <Signs
                onClick={() =>
                  form.planAmount < 5 &&
                  setForm({
                    ...form,
                    planAmount: form.planAmount + 1,
                    beneficiariesInfo: [
                      ...form.beneficiariesInfo,
                      {
                        documentType: 76,
                        documentNumber: "",
                        email: "",
                        beneficiaryName: "",
                        beneficiaryLastname: "",
                        countryCode: 6,
                        phoneNumber: "",
                      },
                    ],
                  })
                }
              >
                +
              </Signs>
            </Div>
          </Grid>
        </Grid>
      </Card>

      <CardCollapse
        panels={panels}
        activeKey={activeKey}
        setActiveKey={setActiveKey}
      />
      <Col gap="10px" m="10px 0">
        <Row m="22px 0 0 0">
          <Checkbox
            borderColor={theme.colors.gray1000}
            width="22px"
            checked={form.authorization}
            onChange={(event) =>
              setForm({
                ...form,
                authorization: event.target.checked,
              })
            }
          />
          <Text
            color={theme.colors.gray1000}
            size={theme.fonts.size.default2}
            mt="7px"
          >
            Doy autorización para el{" "}
            <a
              href="/legales/?section=policy"
              style={{ color: theme.colors.orange500 }}
              target="_blank"
            >
              tratamiento de mis datos por Bangk
            </a>{" "}
            y poder ser contactado para la oferta del servicio.
          </Text>
        </Row>

        <Button
          {...buttonProps}
          width={isMobile ? "100%" : "230px"}
          onClick={handleValidate}
          labelWeight={theme.fonts.weight.regular}
          disabled={!form.authorization}
        >
          Contratar asistencia
        </Button>
      </Col>
    </>
  );
};
