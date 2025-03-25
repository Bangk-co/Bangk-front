import Breadcrumbs from "@/components/Common/Breadcrumbs";
import React, { useState, useEffect } from "react";
import { Col, Row, Text } from "@/styles/Common";
import { theme } from "@/styles/theme";
import { useRouter } from "next/router";
import { Wrapper } from "@/components/HireMedBangk/styles";
import { Step1 } from "@/components/HireMedBangk/Step1";
import { Step2 } from "@/components/HireMedBangk/Step2";
import _ from "lodash";
import useGetDocumentType from "@/hooks/Common/useGetDocumentType";
import useGetIndicatives from "@/hooks/Common/useGetIndicatives";
import ModalPaymentMethod from "@/components/ModalPaymentMethod";
import useGetMethodPayment from "@/hooks/Pets/useGetMethodPayment";

const HireAssistance = ({ isMobile }) => {
  const [actualStep, setActualStep] = useState(1);
  const [activeKey, setActiveKey] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const router = useRouter();
  const { planAmount, selectedPlan } = router.query;
  const [form, setForm] = useState({
    methodOfPayment: selectedPlan || "",
    planAmount: Number(planAmount) || 1,
    documentType: "",
    documentNumber: "",
    email: "",
    name: "",
    lastName: "",
    countryCode: "",
    phoneNumber: "",
    beneficiary: false,
    authorization: false,
    beneficiariesInfo: _.times(planAmount, (index) => ({
      documentType: "",
      documentNumber: "",
      email: "",
      beneficiaryName: "",
      beneficiaryLastname: "",
      countryCode: "",
      phoneNumber: "",
    })),
  });

  const labelsProps = {
    labelColor: theme.colors.gray1000,
    labelSize: theme.fonts.size.default2,
    labelFont: theme.fonts.family.primary,
    border: theme.colors.gray1100,
  };

  const buttonProps = {
    background: theme.colors.orange1000,
    labelColor: theme.colors.white,
    font: theme.fonts.family.primary,
    size: theme.fonts.size.h6,
    border: theme.colors.orange1000,
    hover: theme.colors.orange1000,
    borderHover: theme.colors.orange1000,
    height: "40px",
    borderRadius: "50px",
  };

  const breadcrumbs = [
    {
      label: "Bangk",
      href: "/",
      type: "link",
    },
    {
      label: "Seguros",
      href: "/ahorra-en-tus-seguros",
      type: "link",
    },
    {
      label: "MedBangk",
      href: "/ahorra-en-tus-seguros/med-bangk",
      type: "link",
    },
    {
      label: "Adquiere asistencia",
      type: "text",
    },
  ];

  const documentsType = useGetDocumentType();
  const { data: dataDocuments, isSuccess: isSuccessDocuments } = documentsType;
  const [documentTypeOptions, setDocumentTypeOptions] = useState([]);
  useEffect(() => {
    if (isSuccessDocuments) {
      setDocumentTypeOptions(
        dataDocuments?.data.groupSettings.map((ele) => ({
          label: ele.name,
          value: ele.id,
        }))
      );
    }
  }, [isSuccessDocuments, dataDocuments]);

  const phoneCode = useGetIndicatives();
  const { data: dataPhone, isSuccess: isSuccessPhone } = phoneCode;
  const [phoneCodesOptions, setPhoneCodesOptions] = useState([]);
  useEffect(() => {
    if (isSuccessPhone) {
      setPhoneCodesOptions(
        dataPhone?.data?.groupSettings?.map((ele) => ({
          label: `(${ele.code}) ${ele.name}`,
          value: ele.id,
        }))
      );
    }
  }, [isSuccessPhone, dataPhone]);

  const { data: dataPaymentOcurrency, isSuccess: isSuccessPaymentOcurrency } =
    useGetMethodPayment();
  const [paymentOcurrencyOptions, setPaymentOcurrencyOptions] = useState([]);
  useEffect(() => {
    if (isSuccessPaymentOcurrency) {
      const paymentOcurrency = dataPaymentOcurrency?.data.groupSettings
        .map((ele) => ({
          label: ele.name,
          value: ele.id,
        }))
        .sort((a, b) => a.value - b.value);
      setPaymentOcurrencyOptions(paymentOcurrency);
      const planId = {
        1: paymentOcurrency[0].value,
        2: paymentOcurrency[1].value,
        3: paymentOcurrency[2].value,
      };
      setForm((prevForm) => ({
        ...prevForm,
        methodOfPayment: planId[selectedPlan] || 716,
      }));
    }
  }, [isSuccessPaymentOcurrency, dataPaymentOcurrency]);

  const handleContinue = () => {
    if (actualStep === 2) {
      return;
    }
    setActualStep(actualStep + 1);
  };

  const handleEdit = (keyToEdit) => {
    setActualStep(1);
    setActiveKey(keyToEdit);
  };

  const handleCardPayment = () => {
    setShowModal(false);
    router.push("/realizar-pago?payAssistance=med");
  };

  return (
    <>
      <Breadcrumbs items={breadcrumbs} isMobile={isMobile} />
      <ModalPaymentMethod
        showModal={showModal}
        handleCloseModal={() => setShowModal(false)}
        isMobile={isMobile}
        handleCardPayment={handleCardPayment}
      />
      <Wrapper>
        <Text
          font={theme.fonts.family.primaryBold}
          color={theme.colors.green1000}
          size={isMobile ? theme.fonts.size.h1 : theme.fonts.size.lgs}
        >
          Contrata tu asistencia ahora
        </Text>
        <Text color={theme.colors.green1000} mb="40px">
          Contrata tu asistencia en menos de 5 minutos
        </Text>
        {actualStep === 1 && (
          <Step1
            isMobile={isMobile}
            buttonProps={buttonProps}
            labelsProps={labelsProps}
            handleContinue={handleContinue}
            form={form}
            setForm={setForm}
            activeKey={activeKey}
            setActiveKey={setActiveKey}
            documentTypeOptions={documentTypeOptions}
            phoneCodesOptions={phoneCodesOptions}
            paymentOcurrencyOptions={paymentOcurrencyOptions}
          />
        )}
        {actualStep === 2 && (
          <Step2
            isMobile={isMobile}
            buttonProps={buttonProps}
            form={form}
            setForm={setForm}
            documentTypeOptions={documentTypeOptions}
            paymentOcurrencyOptions={paymentOcurrencyOptions}
            handleEdit={handleEdit}
            setShowModal={setShowModal}
          />
        )}
      </Wrapper>
    </>
  );
};

export default HireAssistance;
