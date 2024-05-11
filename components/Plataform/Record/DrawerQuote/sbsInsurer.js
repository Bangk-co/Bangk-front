import React from "react";
import { Div, Text } from "@/styles/Common";
import Image from "next/image";
import pesosIcon from "@/assets/icons/pesos.svg"
import { numberFormat } from "@/utilities/helpers";
import { LifeInsuranceTable } from "./lifeInsuranceTable";
import _ from "lodash";

export const SbsInsurer = ({
  quoteRate,
  loanInfo,
  titleProps,
  subtitleProps,
  currentInsuranceData,
  bangkInsuranceData,
  saveValue
}) => {

  const insuranceAnnual = _.multiply(Number(loanInfo?.loanBalance), Number(quoteRate));
  const insuranceAnnualFinal = insuranceAnnual.toFixed(2);

  const loanData = [
    { label: "Tasa anual", value: `${(quoteRate * 100)}%` },
    { label: "Prima anual", value: Number(insuranceAnnualFinal) }
  ]

  return (
    <>
      <Div direction="column" m="0 0 30px 0">
        {loanData.map((ele, indx) => (
          <Div key={indx} direction="column" gap="8px" m=" 0 0 22px 0">
            <Text
              { ...titleProps }
            >
              {ele.label}
            </Text>
            <Text
              { ...subtitleProps }
            >
              {ele.label === "Prima anual" ?
                <Div align="center" gap="6px">
                  <Image alt="icon" src={pesosIcon} /> {numberFormat(ele.value) }
                </Div>
                : ele.value}
            </Text>
          </Div>
        ))}
      </Div>
      <LifeInsuranceTable
        bangkInsuranceData={bangkInsuranceData}
        currentInsuranceData={currentInsuranceData}
        subtitleProps={subtitleProps}
        saveValue={saveValue}
      />
    </>
  )
}