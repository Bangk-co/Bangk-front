/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { Header } from "@/components/Common/Header";
import { Col, Container, Div } from "@/styles/Common";
import { theme } from "@/styles/theme";
import { WrapperQuote, WrapperWapp } from "@/styles/Quote";
import Image from "next/image";
import { useRouter } from "next/router";
import wappIcon from "@/assets/icons/whatsapp-original.svg"
import { wappLink } from "@/utilities/options";
import { BackButton } from "@/components/Quote/BackButton.js";
import { ImageCol } from "@/components/Quote/ImageCol";
import { Calculator } from "@/components/Quote/Calculator";
import { useSelector } from "react-redux";
import { numberFormat } from "@/utilities/helpers";
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

  useEffect(() => {
    if (isSuccess) {
      const annualRate = data?.data?.groupSettings.find((ele) => ele.name === "AnnualRatePercentage")?.code
      const monthRate = data?.data?.groupSettings.find((ele) => ele.name === "MonthlyRatePercentage")?.code
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
    });

    return formattedDate;
  };

  const gender = {
    female: "Femenino",
    male: "Masculino"
  }

  const info = [
    { label: "Saldo del crédito:", value: `$ ${numberFormat(formInfo?.balance)} COP` },
    { label: "Fecha de nacimiento:", value: formatBirthdate(formInfo?.birthdate) },
    { label: "Genero", value: gender[formInfo?.gender] }
  ]

  const insuranceMonthlyPercentage = insuranceData.monthlyRatePercentage / 100;
  const insuranceAnnualPercentage =  insuranceData.annualRatePercentage / 100;

  const insuranceMonthly = (formInfo?.balance * insuranceMonthlyPercentage);
  const insuranceAnnual = (formInfo?.balance * insuranceAnnualPercentage);

  const insuranceMonthlyFinal = insuranceMonthly % 1 !== 0 ? insuranceMonthly.toFixed(2).toString() : insuranceMonthly.toString()
  const insuranceAnnualFinal = insuranceAnnual % 1 !== 0 ? insuranceAnnual.toFixed(2).toString() : insuranceAnnual.toString()

  const insurance = [
    { key: 1, label: "Seguro Mensual", value: `$ ${numberFormat(insuranceMonthlyFinal)}` },
    { key: 2, label: "Seguro Anual*", value: `$ ${numberFormat(insuranceAnnualFinal)}` }
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
    <Container style={{ background: isMobile && theme.colors.green }}>
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