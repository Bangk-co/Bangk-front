import React, { useState, useEffect } from "react";
import { Card, ResumeCard, Signs, WrapperAmount } from "./styles";
import { Grid } from "@mui/material";
import { RadioGroup } from "../Common/Radio/Group";
import { Radio } from "../Common/Radio";
import { Col, Div, Row, Text } from "@/styles/Common";
import { theme } from "@/styles/theme";
import { Button } from "../Common/Button";
import _, { get } from "lodash";
import { documentTypeAbbreviation, formattedPrice } from "@/utilities/helpers";
import Image from "next/image";
import edit from "@/assets/icons/edit-gray.svg";
import trash from "@/assets/icons/trash-gray.svg";

export const Step2 = ({
  isMobile,
  buttonProps,
  form,
  setForm,
  documentTypeOptions,
  handleEdit,
}) => {
  const radioOptions = [
    { label: "Mensual", value: "1" },
    { label: "Semestral", value: "2" },
    { label: "Anual", value: "3" },
  ];

  const getLabelFromValue = (value, options) => {
    const selectedOption = options.find((option) => option.value === value);
    return selectedOption ? selectedOption.label : null;
  };
  console.log("form", form);
  const getPricePlan = () => {
    switch (form.methodOfPayment) {
      case "1":
        return 12500 * form.planAmount;
      case "2":
        return 47500 * form.planAmount;
      case "3":
        return 85000 * form.planAmount;
    }
  };

  const handleDelete = (index) => {
    const updatedBeneficiaries = form.beneficiariesInfo.filter(
      (_, idx) => idx !== index
    );
    const updatedPlanAmount =
      updatedBeneficiaries.length > 0 ? updatedBeneficiaries.length : 1;

    setForm((prevForm) => ({
      ...prevForm,
      beneficiariesInfo: updatedBeneficiaries,
      planAmount: updatedPlanAmount,
    }));
  };

  return (
    <>
      <Card>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <Text
              color={theme.colors.gray1000}
              size={theme.fonts.size.default2}
            >
              Forma de pago seleccionada
            </Text>
            <Div
              background={theme.colors.green1000}
              width="fit-content"
              p="8px 16px"
              m="10px 0 10px 0"
              radius="50px"
            >
              <Text color={theme.colors.white} size={theme.fonts.size.h6}>
                {getLabelFromValue(form.methodOfPayment, radioOptions)}
              </Text>
            </Div>
          </Grid>
          <Grid item xs={12} md={6}>
            <Text
              color={theme.colors.gray1000}
              size={theme.fonts.size.default2}
            >
              {`Valor de tu asistencia ${getLabelFromValue(
                form.methodOfPayment,
                radioOptions
              )}`}
            </Text>
            <Text
              color={theme.colors.gray150}
              size={theme.fonts.size.h3s}
              font={theme.fonts.family.primaryBold}
              mt="10px"
            >
              {formattedPrice(getPricePlan())}
            </Text>
          </Grid>
        </Grid>
        <Grid item xs={12} md={6}>
          <ResumeCard>
            <Col width="100%" gap="5px" align="left">
              <Text
                color={theme.colors.black200}
                size={theme.fonts.size.h6}
                font={theme.fonts.family.primaryMedium}
              >
                {`${form.name} ${form.lastName}`}
              </Text>
              <Row width="353px" justify="space-between">
                <Text
                  color={theme.colors.gray150}
                  size={theme.fonts.size.default2}
                >
                  {`${documentTypeAbbreviation(
                    getLabelFromValue(form.documentType, documentTypeOptions)
                  )} ${form.documentNumber}`}
                </Text>
                <Text
                  color={theme.colors.gray150}
                  size={theme.fonts.size.default2}
                >
                  <span style={{ fontFamily: theme.fonts.family.primaryBold }}>
                    Celular:{" "}
                  </span>
                  {form.phoneNumber}
                </Text>
              </Row>
            </Col>
            <Div gap="10px">
              <Image
                src={edit}
                alt="edit"
                style={{ cursor: "pointer" }}
                onClick={() => handleEdit(0)}
              />
            </Div>
          </ResumeCard>
          {form.beneficiariesInfo.map((beneficiary, index) => (
            <ResumeCard key={index} background={theme.colors.light}>
              <Col width="100%" gap="5px" align="left">
                <Text
                  color={theme.colors.black200}
                  size={theme.fonts.size.h6}
                  font={theme.fonts.family.primaryMedium}
                >
                  {`${beneficiary.beneficiaryName} ${beneficiary.beneficiaryLastname}`}
                </Text>
                <Row width="353px" justify="space-between">
                  <Text
                    color={theme.colors.gray150}
                    size={theme.fonts.size.default2}
                  >
                    {`${documentTypeAbbreviation(
                      getLabelFromValue(
                        beneficiary.documentType,
                        documentTypeOptions
                      )
                    )} ${beneficiary.documentNumber}`}
                  </Text>
                  <Text
                    color={theme.colors.gray150}
                    size={theme.fonts.size.default2}
                  >
                    <span
                      style={{ fontFamily: theme.fonts.family.primaryBold }}
                    >
                      Celular:{" "}
                    </span>
                    {beneficiary.phoneNumber}
                  </Text>
                </Row>
              </Col>
              <Div gap="10px">
                <Image
                  src={edit}
                  alt="edit"
                  style={{ cursor: "pointer" }}
                  onClick={() => handleEdit(index + 1)}
                />
                <Image
                  src={trash}
                  alt="trash"
                  style={{
                    cursor: "pointer",
                  }}
                  onClick={() => handleDelete(index)}
                />
              </Div>
            </ResumeCard>
          ))}
          <Button
            {...buttonProps}
            width={isMobile ? "100%" : "147px"}
            labelWeight={theme.fonts.weight.regular}
            style={{ marginTop: "40px" }}
          >
            Pagar ahora
          </Button>
        </Grid>
      </Card>
    </>
  );
};
