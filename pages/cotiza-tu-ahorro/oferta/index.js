/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { Header } from "@/components/Common/Header";
import { Div } from "@/styles/Common";
import { theme } from "@/styles/theme";
import { Container, WrapperQuote, WrapperWapp } from "@/styles/Quote";
import Image from "next/image";
import { useRouter } from "next/router";
import wappIcon from "@/assets/icons/whatsapp-original.svg"
import { wappLink } from "@/utilities/options";
import { BackButton } from "@/components/Quote/BackButton/index.js";
import { ImageCol } from "@/components/Quote/ImageCol";
import { Calculator } from "@/components/Quote/Calculator";
import { useSelector } from "react-redux";
import { numberFormat, numberFormatText } from "@/utilities/helpers";
import useGetInsuranceValues from "@/hooks/QuoteSavings/useGetInsuranceValues";

const Sale = ({ isMobile, isTablet }) => {
  const insuranceValues = useGetInsuranceValues()
  const { data, isSuccess } = insuranceValues
  const router = useRouter()
  const { initData } = useSelector((state) => state)?.balance
  const [isHovered, setIsHovered] = useState(false);
  const [formInfo, setFormInfo] = useState(initData)
  const [insuranceData, setInsuranceData] = useState({
    annualRatePercentage: 0,
    monthlyRatePercentage: 0
  })

  const ageCalulate = () => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const birthDate = new Date(initData.birthdate    );
    birthDate.setHours(0, 0, 0, 0);
    
    const ageMilliseconds = today - birthDate;
    const millisecondsPerYear = 1000 * 60 * 60 * 24 * 365.25;
    const age = Math.floor(ageMilliseconds / millisecondsPerYear);

    return age;
  };

  useEffect(() => {
    if (isSuccess) {
      let annualRate = 0;
      let monthRate = 0;

      if (ageCalulate() < 50) {
        annualRate = data?.data?.groupSettings.find((ele) => ele.name === "AnnualRatePercentage1")?.code
        monthRate = data?.data?.groupSettings.find((ele) => ele.name === "MonthlyRatePercentage1")?.code
      } else {
        annualRate = data?.data?.groupSettings.find((ele) => ele.name === "AnnualRatePercentage2")?.code
        monthRate = data?.data?.groupSettings.find((ele) => ele.name === "MonthlyRatePercentage2")?.code
      }

      setInsuranceData({
        annualRatePercentage: annualRate,
        monthlyRatePercentage: monthRate
      })
    }
  }, [isSuccess])

  const formatBirthdate = (birthdate) => {
    if (!birthdate) return "";

    const formattedDate = new Date(birthdate).toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    }).replace(/(\w+) (\d+), (\d+)/, "$1. $2, $3");

    return formattedDate;
  };

  const gender = {
    108: "Femenino",
    107: "Masculino"
  }

  const info = [
    { label: "Saldo del crédito:", value: `$ ${numberFormatText(formInfo?.balance)} COP` },
    { label: "Fecha de nacimiento:", value: formatBirthdate(formInfo?.birthdate) },
    { label: "Género", value: gender[formInfo?.gender] }
  ]

  const insuranceMonthlyPercentage = Number(insuranceData.monthlyRatePercentage) * 100;
  const insuranceAnnualPercentage =  Number(insuranceData.annualRatePercentage) * 100;

  const insuranceMonthly = (formInfo?.balance * insuranceMonthlyPercentage);
  const insuranceAnnual = (formInfo?.balance * insuranceAnnualPercentage);

  const insuranceMonthlyFinal = insuranceMonthly % 1 !== 0 ? insuranceMonthly.toFixed(2).toString() : insuranceMonthly.toString()
  const insuranceAnnualFinal = insuranceAnnual % 1 !== 0 ? insuranceAnnual.toFixed(2).toString() : insuranceAnnual.toString()

  const insurance = [
    { key: 1, label: "Seguro Mensual", value: `$ ${numberFormatText(insuranceMonthlyFinal)}` },
    { key: 2, label: "Seguro Anual*", value: `$ ${numberFormatText(insuranceAnnualFinal)}` }
  ]

  const handleBack = () => {
    router.push("/cotiza-tu-ahorro")
  }

  const handleWapp = () => {
    const a = document.createElement("a");
    a.href = `${wappLink}`;
    document.body.appendChild(a);
    a.target = "_blank";
    a.click();
  };

  const handleNext = () => {
    router.push("/cotiza-tu-ahorro/diligencia-tus-datos")
  }

  return (
    <Container>
      <Header isMobile={isMobile} />
      <WrapperQuote>
        {!isMobile &&
          <BackButton isHovered={isHovered} setIsHovered={setIsHovered} />
        }
        <Div gap="127px" justify={isMobile && "center"}>
          {!isMobile &&
            <ImageCol />
          }

          <Calculator
            isMobile={isMobile}
            info={info}
            insurance={insurance}
            handleBack={handleBack}
            handleWapp={handleWapp}
            handleNext={handleNext}
          />
        </Div>
        {!isMobile && (
          <WrapperWapp>
            <Image alt="wapp-icon" src={wappIcon} onClick={handleWapp} style={{ cursor: "pointer" }} />
          </WrapperWapp>
        )}
      </WrapperQuote>
    </Container>
  )
}

export default Sale;