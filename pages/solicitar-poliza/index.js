import React, { useState } from "react";
import { StepperPolicy } from "@/components/Policy/StepperPolicy";
import { Container, WrapperPolicy } from "@/styles/Policy";
import { Header } from "@/components/Common/Header";
import { Col, Div, Text } from "@/styles/Common";
import { theme } from "@/styles/theme";
import { MobileStepperPolicy } from "@/components/Policy/MobileStepperPolicy";
import { Step1 } from "@/components/Policy/Steps/Step1";
import { Step2 } from "@/components/Policy/Steps/Step2";
import { Step3 } from "@/components/Policy/Steps/Step3";
import { Step4 } from "@/components/Policy/Steps/Step4";
import { Step5 } from "@/components/Policy/Steps/Step5";

const RequestPolicy = ({ isMobile }) => {
  const [activeStep, setActiveStep] = useState(0);
  const [perdonalDataForm, setPersonalDataForm] = useState({
    countryOfBirthId: null,
    departmentOfBirthId: null,
    cityOfBirthId: null,
    nationality: null,
    civilStatus: null,
    numberOfChildren: "",
    profession: "",
    economicActivity: null,
    publicFamily: null,
    countryOfResidenceId: null,
    departmentOfResidenceId: null,
    cityOfResidenceId: null,
  })
  const [financialDataForm, setFinancialDataForm] = useState({
    monthlyIncome: "",
    monthlyExpenses: "",
    assetsValues: "",
    passivesValues: ""
  })
  const [propertyDataForm, setPropertyDataForm] = useState({
    housingType: null,
    commercialValue: "",
    constructionYear: null,
    constructionArea: "",
    housingAddress: "",
    housingDepartmentId: null,
    housingCityId: null
  })
  const [healthDataForm, setHealthDataForm] = useState({
    weight: "",
    height: "",
    diseaseId: null,
    vih: null,
    examsOrSurgeries: null,
    disability: null,
  })
  const [additionalDataForm, setAdditionalDataForm] = useState({
    questionOne: null,
    questionTwo: null,
    questionThree: null
  })
  const steps = [
    "Datos personales",
    "Datos Financieros",
    "Datos de tu Inmueble",
    "Datos de tu salud",
    "Datos adicionales"
  ]

  const nextStep = () => {
    setActiveStep(activeStep + 1)
  }

  return (
    <Container>
      <Header isMobile={isMobile} />
      <WrapperPolicy style={{ padding: 0, alignItems: "center" }}>
        {isMobile ? (
          <MobileStepperPolicy steps={steps} activeStep={activeStep} />
        ) : (
          <Col width="100%">
            <Div height="68px" p="16px 40px 16px 40px" style={{ background: theme.colors.white }}>
              <Text
                color={theme.colors.green900}
                font={theme.fonts.family.primaryBold}
                weight={theme.fonts.weight.bold}
                size={theme.fonts.size.h4s}
                lineHeight={"36px"}
              >
                Solicitud de póliza
              </Text>
            </Div>
            <StepperPolicy activeStep={activeStep} steps={steps} />
          </Col>
        )}

        {activeStep === 0 && (
          <Step1
            isMobile={isMobile}
            perdonalDataForm={perdonalDataForm}
            nextStep={nextStep} />
        )}
        {activeStep === 1 && (
          <Step2
            isMobile={isMobile}
            financialDataForm={financialDataForm}
            nextStep={nextStep} />
        )}
        {activeStep === 2 && (
          <Step3
            isMobile={isMobile}
            propertyDataForm={propertyDataForm}
            nextStep={nextStep} />
        )}
        {activeStep === 3 && (
          <Step4
            isMobile={isMobile}
            healthDataForm={healthDataForm}
            nextStep={nextStep} />
        )}
        {activeStep === 4 && (
          <Step5
            isMobile={isMobile}
            additionalDataForm={additionalDataForm}
            nextStep={nextStep} />
        )}
      </WrapperPolicy>
    </Container>
  )
}

export default RequestPolicy;