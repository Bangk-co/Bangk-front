/* eslint-disable react-hooks/exhaustive-deps */
import { Div, Text } from "@/styles/Common";
import React, { useEffect, useState } from "react";
import { LifeInsuranceTable } from "./lifeInsuranceTable";
import { TextField } from "@/components/Common/TextField";
import Image from "next/image";
import pesosIcon from "@/assets/icons/pesos.svg"
import { numberFormat, numberFormatText } from "@/utilities/helpers";
import { Button } from "@/components/Common/Button";
import { theme } from "@/styles/theme";

export const AllianzInsurer = ({
  loanInfo,
  setSendButton,
  yearlyFee,
  handleChange,
  textFieldProps,
  subtitleProps,
  currentInsuranceData,
  bangkInsuranceData,
  saveValue
}) => {
  const [viewQuote, setViewQuote] = useState(true)

  useEffect(() => {
    if (viewQuote) {
      setSendButton(false)
    }
  }, [viewQuote])

  const handleView = () => {
    setViewQuote(false)
    setSendButton(true)
  }

  return (
    <>
      <Div direction="column" height="100%" justify="space-between">
        <TextField
          label={"Prima anual*"}
          placeholder={"Ingresa la prima anual"}
          { ...textFieldProps }
          prefixIcon={<Image alt="pesos" src={pesosIcon} width={16} height={16} />}
          id={"yearlyFee"}
          value={yearlyFee === "" ? "" : numberFormat(Number(yearlyFee))}
          onChange={handleChange}
          inputProps={{
            pattern: "\\d*",
            inputMode: "numeric",
          }}
        />
        {viewQuote && (
          <Div width="100%" m="240px 0 0 0">
            <Button
              width={"100%"}
              height={"40px"}
              background={theme.colors.green900}
              hover={theme.colors.green900}
              borderHover={theme.colors.green900}
              font={theme.fonts.primaryBold}
              size={theme.fonts.size.default2}
              disabled={yearlyFee === ""}
              onClick={handleView}
            >
              Ver cotización
            </Button>
          </Div>
        )}
      </Div>
      {!viewQuote && (
        <LifeInsuranceTable
          bangkInsuranceData={bangkInsuranceData}
          currentInsuranceData={currentInsuranceData}
          subtitleProps={subtitleProps}
          saveValue={saveValue}
        />
      )}
    </>
  )
}