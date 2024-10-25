/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react";
import { Div, Text, Row } from "@/styles/Common";
import { theme } from "@/styles/theme";
import { InfoCard } from "../styles";
import { PersonalData } from "./PersonalData";
import { FinancialData } from "./FinancialData";
import useGetLoanInsurancePolicyInfo from "@/hooks/Customers/useGetLoanInsurancePolicyInfo";
import { HealthData } from "./HealthData";
import { AdditionalData } from "./AdditionalData";

export const Forms = ({ loanApplicationId }) => {
  const [personalInfo, setPersonalInfo] = useState({
    birthCountryId: null,
    countryNationalityId: null,
    birthStateId: null,
    birthCityId: null,
    civilStatusId: null,
    numberChildren: "",
    occupation: "",
    occupationActivityId: null,
    isPublicPerson: null,
    hasBondPublicPerson: null,
    residenceCountryId: null,
    residenceStateId: null,
    residenceCityId: null,
    residenceAddress: null,
  });

  const [financialInfo, setFinancialInfo] = useState({
    monthlyIncome: null,
    monthlyExpenses: null,
    assetValue: null,
    liabilitiesValue: null,
    incomeOrigin: null,
  });

  const [healthInfo, setHealthInfo] = useState({
    weight: null,
    height: null,
    diseases: null,
    hivActive: null,
    plannedMedicalProcidure: null,
    disability: null,
    diseasesMoreInfo: null,
    plannedMedicalProcidureMoreInfo: null,
    disabilityMoreInfo: null,
  });

  const [additionalInfo, setAdditionalInfo] = useState({
    convicted: null,
    lifeEnsure: null,
    beneficiaries: null,
    beneficiary: [],
  });

  const loanInsurancePolicyData =
    useGetLoanInsurancePolicyInfo(loanApplicationId);
  const { data, isLoading } = loanInsurancePolicyData;
  useEffect(() => {
    if (data?.data?.loanInsurancePolicies) {
      setPersonalInfo({
        birthCountryId: data?.data?.loanInsurancePolicies.birthCountryId,
        countryNationalityId:
          data?.data?.loanInsurancePolicies.countryNationalityId,
        birthStateId: data?.data?.loanInsurancePolicies.birthStateId,
        birthCityId: data?.data?.loanInsurancePolicies.birthCityId,
        civilStatusId: data?.data?.loanInsurancePolicies.civilStatusId,
        numberChildren: Number(
          data?.data?.loanInsurancePolicies.numberChildren
        ),
        occupation: data?.data?.loanInsurancePolicies.occupation,
        occupationActivityId:
          data?.data?.loanInsurancePolicies.occupationActivityId,
        isPublicPerson: data?.data?.loanInsurancePolicies.isPublicPerson,
        hasBondPublicPerson:
          data?.data?.loanInsurancePolicies.hasBondPublicPerson,
        residenceCountryId:
          data?.data?.loanInsurancePolicies.residenceCountryId,
        residenceStateId: data?.data?.loanInsurancePolicies.residenceStateId,
        residenceCityId: data?.data?.loanInsurancePolicies.residenceCityId,
        residenceAddress: data?.data?.loanInsurancePolicies.residenceAddress,
      });

      setFinancialInfo({
        monthlyIncome: data?.data?.loanInsurancePolicies.monthlyIncome,
        monthlyExpenses: data?.data?.loanInsurancePolicies.monthlyExpenses,
        assetValue: data?.data?.loanInsurancePolicies.assetValue,
        liabilitiesValue: data?.data?.loanInsurancePolicies.liabilitiesValue,
        incomeOrigin: data?.data?.loanInsurancePolicies.incomeOrigin,
      });
      setHealthInfo({
        weight: data?.data?.loanInsurancePolicies.weight,
        height: data?.data?.loanInsurancePolicies.height,
        diseases: data?.data?.loanInsurancePolicies.diseases,
        hivActive: data?.data?.loanInsurancePolicies.hivActive,
        plannedMedicalProcidure:
          data?.data?.loanInsurancePolicies.plannedMedicalProcidure,
        disability: data?.data?.loanInsurancePolicies.disability,
        diseasesMoreInfo: data?.data?.loanInsurancePolicies.diseasesMoreInfo,
        plannedMedicalProcidureMoreInfo:
          data?.data?.loanInsurancePolicies.plannedMedicalProcidureMoreInfo,
        disabilityMoreInfo:
          data?.data?.loanInsurancePolicies.disabilityMoreInfo,
      });
      setAdditionalInfo({
        convicted: data?.data?.loanInsurancePolicies.convicted,
        lifeEnsure: data?.data?.loanInsurancePolicies.lifeEnsure,
        beneficiaries: data?.data?.loanInsurancePolicies.beneficiaries,
        beneficiary: data?.data?.loanInsurancePolicies.beneficiary,
      });
    }
  }, [data, isLoading]);

  const infoCards = [
    {
      title: "Datos personales",
    },

    {
      title: "Datos financieros",
    },
    {
      title: "Datos de salud",
    },
    {
      title: "Datos adicionales",
    },
  ];
  const infoCardsFiltered = infoCards.filter((item) => item !== null);

  const cardData = [
    <PersonalData key="personalData" personalInfo={personalInfo} />,
    <FinancialData key="financialData" financialInfo={financialInfo} />,
    <HealthData key="HealthData" healthInfo={healthInfo} />,
    <AdditionalData key="additionalData" additionalInfo={additionalInfo} />,
  ];
  const cardDataFiltered = cardData.filter((item) => item !== null);

  return (
    <Div direction="column" m="24px 0 0 0">
      <Div direction="column" m="0 0 30px 0" gap="16px" p="0 0 16px 0">
        {infoCardsFiltered.map((card, indx) => (
          <InfoCard key={indx}>
            <Row justify="space-between">
              <Row gap="16px" align="center">
                {card.icon}
                <Text
                  font={theme.fonts.family.primaryBold}
                  size={theme.fonts.size.ft}
                  color={theme.colors.black}
                >
                  {card.title}
                </Text>
              </Row>
            </Row>
            {cardDataFiltered[indx]}
          </InfoCard>
        ))}
      </Div>
    </Div>
  );
};
