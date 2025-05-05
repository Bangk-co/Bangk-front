import React, { useState, useEffect } from "react";
import { Card, ResumeCard, Signs, WrapperAmount } from "./styles";
import { CircularProgress, Grid } from "@mui/material";
import { RadioGroup } from "../Common/Radio/Group";
import { Radio } from "../Common/Radio";
import { Col, Div, Row, Text } from "@/styles/Common";
import { theme } from "@/styles/theme";
import { Button } from "../Common/Button";
import _ from "lodash";
import {
  documentTypeAbbreviation,
  formattedPrice,
  getMedBangkPrice,
} from "@/utilities/helpers";
import Image from "next/image";
import edit from "@/assets/icons/edit-gray.svg";
import trash from "@/assets/icons/trash-gray.svg";
import { setMedFormInfo } from "@/store/med";
import { useDispatch } from "react-redux";

export const Step2 = ({
  isMobile,
  buttonProps,
  form,
  setForm,
  documentTypeOptions,
  paymentOcurrencyOptions,
  handleEdit,
  setShowModal,
}) => {
  const dispatch = useDispatch();

  const getLabelFromValue = (value, options) => {
    const selectedOption = options.find((option) => option.value === value);
    return selectedOption ? selectedOption.label : null;
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

  const handlePay = () => {
    const payload = {
      paymentOcurrencyId: form.methodOfPayment,
      documentTypeId: form.documentType,
      documentNumber: form.documentNumber,
      name: form.name,
      lastName: form.lastName,
      email: form.email,
      phoneNumber: form.phoneNumber,
      treatPErsonalDatadate: new Date(),
      countryCodePhoneId: form.countryCode,
      isBeneficiary: form.beneficiary,
      beneficiaryInsurance: form.beneficiariesInfo.map((beneficiary) => ({
        documentTypeId: beneficiary.documentType,
        documentNumber: beneficiary.documentNumber,
        name: beneficiary.beneficiaryName,
        lastName: beneficiary.beneficiaryLastname,
        email: beneficiary.email,
        phoneNumber: beneficiary.phoneNumber,
        treatPErsonalDatadate: new Date(),
        countryCodePhoneId: beneficiary.countryCode,
      })),
      amount: getMedBangkPrice(
        form.planAmount,
        form.methodOfPayment,
        paymentOcurrencyOptions
      ),
    };

    dispatch(setMedFormInfo(payload));
    setShowModal(true);
  };

  return (
    <>
      <Card isMobile={isMobile} style={{ width: isMobile ? "100%" : "70%", alignSelf: "center" }}>
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
                {getLabelFromValue(
                  form.methodOfPayment,
                  paymentOcurrencyOptions
                )}
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
                paymentOcurrencyOptions
              )}`}
            </Text>
            <Text
              color={theme.colors.gray150}
              size={theme.fonts.size.h3s}
              font={theme.fonts.family.primaryBold}
              mt="10px"
            >
              {formattedPrice(
                getMedBangkPrice(
                  form.planAmount,
                  form.methodOfPayment,
                  paymentOcurrencyOptions
                )
              )}
            </Text>
          </Grid>
        </Grid>
        <Grid item xs={12} md={6}>
          <ResumeCard isMobile={isMobile}>
            <Col width={isMobile ? "100px" : "100%"} gap="5px" align="left">
              <Text
                color={theme.colors.black200}
                size={
                  isMobile ? theme.fonts.size.default2 : theme.fonts.size.h6
                }
                font={theme.fonts.family.primaryMedium}
              >
                {`Titular: ${form.name} ${form.lastName}`}
              </Text>
              <Div
                width="353px"
                justify="space-between"
                direction={isMobile ? "column" : "row"}
              >
                <Text
                  color={theme.colors.gray150}
                  size={
                    isMobile ? theme.fonts.size.sm : theme.fonts.size.default2
                  }
                >
                  {`${documentTypeAbbreviation(
                    getLabelFromValue(form.documentType, documentTypeOptions)
                  )} ${form.documentNumber}`}
                </Text>
                <Text
                  color={theme.colors.gray150}
                  size={
                    isMobile ? theme.fonts.size.sm : theme.fonts.size.default2
                  }
                >
                  <span style={{ fontFamily: theme.fonts.family.primaryBold }}>
                    Celular:{" "}
                  </span>
                  {form.phoneNumber}
                </Text>
              </Div>
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
              <Col width={isMobile ? "100px" : "100%"} gap="5px" align="left">
                <Text
                  color={theme.colors.black200}
                  size={
                    isMobile ? theme.fonts.size.default2 : theme.fonts.size.h6
                  }
                  font={theme.fonts.family.primaryMedium}
                >
                  {`Beneficiario ${index + 1}: ${beneficiary.beneficiaryName} ${beneficiary.beneficiaryLastname}`}
                </Text>
                <Div
                  width="353px"
                  justify="space-between"
                  direction={isMobile ? "column" : "row"}
                >
                  <Text
                    color={theme.colors.gray150}
                    size={
                      isMobile ? theme.fonts.size.sm : theme.fonts.size.default2
                    }
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
                    size={
                      isMobile ? theme.fonts.size.sm : theme.fonts.size.default2
                    }
                  >
                    <span
                      style={{ fontFamily: theme.fonts.family.primaryBold }}
                    >
                      Celular:{" "}
                    </span>
                    {beneficiary.phoneNumber}
                  </Text>
                </Div>
              </Col>
              <Div gap={isMobile ? "5px" : "10px"}>
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
                    cursor: index !== 0 ? "pointer" : "not-allowed",
                  }}
                  onClick={() => index !== 0 && handleDelete(index)}
                />
              </Div>
            </ResumeCard>
          ))}
          <Grid item xs={12} md={12} style={{ display: "flex", justifyContent: "center" }}>
            <Button
              {...buttonProps}
              width={isMobile ? "100%" : "220px"}
              style={{ marginTop: "40px" }}
              onClick={handlePay}
            >
              Pagar ahora
            </Button>
          </Grid>
        </Grid>
      </Card>
    </>
  );
};
