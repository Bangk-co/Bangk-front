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
}) => {
  const radioOptions = [
    { label: "Mensual", value: "1" },
    { label: "Semestral", value: "2" },
    { label: "Anual", value: "3" },
  ];

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
  }, [form, errorForm]);

  const handleRadio = (event) => {
    setForm({
      ...form,
      methodOfPayment: event.target.defaultValue,
    });
  };
  console.log("form", form);

  const handleSave = () => {
    const validation = validateMedBangkForm.validate(form, {
      abortEarly: false,
    });
    if (validation.error) {
      const newErrorForm = { ...errorForm };
      validation.error.details.forEach((ele) => {
        const label = ele.context.label;
        if (!newErrorForm[label]) {
          newErrorForm[label] = { error: false, message: "" };
        }
        newErrorForm[label].error = true;
        newErrorForm[label].message = "Campo obligatorio";
      });
      setErrorForm(newErrorForm);
      toast.error("Verifica todos los campos obligatorios");
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
              direction="row"
              label="Forma de pago"
              labelSize={theme.fonts.size.default2}
              labelColor={theme.colors.gray1000}
              value={form.methodOfPayment}
              onChange={handleRadio}
            >
              {radioOptions.map((option, idx) => (
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
                        documentType: "",
                        documentNumber: "",
                        email: "",
                        beneficiaryName: "",
                        beneficiaryLastname: "",
                        countryCode: "",
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
          onClick={handleSave}
          labelWeight={theme.fonts.weight.regular}
          disabled={!form.authorization}
        >
          Contratar asistencia
        </Button>
      </Col>
    </>
  );
};
