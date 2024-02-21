import React from "react";
import { TextField } from "@/components/Common/TextField";
import { Div, Text } from "@/styles/Common";
import { theme } from "@/styles/theme";
import { Grid } from "@mui/material";
import Image from "next/image";
import { Button } from "@/components/Common/Button";
import arrowBack from "@/assets/icons/big-arrow-back-yellow.svg"
import { CardButton, ColForm } from "@/styles/Policy";
import pesosIcon from "@/assets/icons/pesos.svg";
import area from "@/assets/icons/area.svg";
import address from "@/assets/icons/address.svg";
import house from "@/assets/icons/house.svg";
import building from "@/assets/icons/building.svg";
import condominium from "@/assets/icons/condominium.svg";
import { numberFormat } from "@/utilities/helpers";
import { DatePicker } from "@/components/Common/DatePicker";
import { Select } from "@/components/Common/Select";
import { RadioGroup } from "@/components/Common/Radio/Group";
import { Radio } from "@/components/Common/Radio";

export const Step5 = ({
  isMobile,
  additionalDataForm,
  nextStep
}) => {
  const inputsProps = {
    labelSize: isMobile ? theme.fonts.size.xs : theme.fonts.size.sm,
    labelColor: theme.colors.white,
    labelFont: theme.fonts.family.primaryMedium,
    labelWeight: theme.fonts.weight.medium,
    fontColor: theme.colors.neutralGray900,
    font: theme.fonts.family.primary,
    size: isMobile ? theme.fonts.size.sm : theme.fonts.size.default2,
    radius: "4px",
    height: "40px",
    width: "100%",
    background: theme.colors.primary25,
    border: theme.colors.primary25,
    notFocused: true,
    placeholderColor: theme.colors.neutralGray500,
  }

  const housingOptions = [
    { label: "Casa", value:"house", icon: house },
    { label: "Apartamento", value:"apartment", icon: building },
    { label: "Condominio", value:"condominium", icon: condominium },
  ]

  return (
    <ColForm m={"12px 0 0 0"}>
      <Text
        color={theme.colors.white}
        size={isMobile ? theme.fonts.size.h5 : theme.fonts.size.h3}
        font={theme.fonts.family.primaryBold}
        weight={theme.fonts.weight.bold}
        lineHeight={isMobile ? "32px" : "44px"}
        mt={isMobile ? "24px" : "12px"}
      >
        Datos <span style={{ fontFamily: theme.fonts.family.primaryBold , color: theme.colors.yellow500 }}>adicionales</span>
      </Text>
      <Grid container rowSpacing={{ xs: 2, sm: 2, md: 3  }} columnSpacing={{ xs: 2, sm: 2, md: 2 }} style={{ marginTop: "8px" }}>
        <Grid item md={12} xs={12}>
          <RadioGroup
            gap="5px"
            name="questionOne"
            direction="row"
            label="¿Has sido indiciado, investigado, procesado, inculpado, imputado, detenido y/o condenado por algún delito?"
            labelFont={theme.fonts.family.primaryMedium}
            labelSize={theme.fonts.size.sm}
            labelColor={theme.colors.white}
            color={theme.colors.white}
            value={additionalDataForm.questionOne}
          >
            <Radio
              label="Si"
              value={"Si"}
              labelColor={theme.colors.white}
              radioColor={theme.colors.white}
            />
            <Radio
              label="No"
              value={"No"}
              labelColor={theme.colors.white}
              radioColor={theme.colors.white}
            />
          </RadioGroup>
        </Grid>
        <Grid item md={12} xs={12}>
          <RadioGroup
            gap="5px"
            name="questionTwo"
            direction="row"
            label="¿Tienes algún seguro de vida individual o de accidentes personales con Allianz o con cualquier aseguradora diferentes a aquellos que respaldan deudas en entidades financieras?"
            labelFont={theme.fonts.family.primaryMedium}
            labelSize={theme.fonts.size.sm}
            labelColor={theme.colors.white}
            color={theme.colors.white}
            value={additionalDataForm.questionTwo}
          >
            <Radio
              label="Si"
              value={"Si"}
              labelColor={theme.colors.white}
              radioColor={theme.colors.white}
            />
            <Radio
              label="No"
              value={"No"}
              labelColor={theme.colors.white}
              radioColor={theme.colors.white}
            />
          </RadioGroup>
        </Grid>
        <Grid item md={12} xs={12}>
          <RadioGroup
            gap="5px"
            name="questionThree"
            direction="row"
            label="*En caso de que faltes y exista algún remanente después de pagar el saldo total de tu deuda, puedes escoger quién o quienes pueden recibirlo por parte de la aseguradora"
            labelFont={theme.fonts.family.primaryMedium}
            labelSize={theme.fonts.size.sm}
            labelColor={theme.colors.white}
            color={theme.colors.white}
            value={additionalDataForm.questionThree}
          >
            <Radio
              label="Mis herederos legales"
              value={"Mis herederos legales"}
              labelColor={theme.colors.white}
              radioColor={theme.colors.white}
            />
            <Radio
              label="Designado por mi"
              value={"Designado por mi"}
              labelColor={theme.colors.white}
              radioColor={theme.colors.white}
            />
          </RadioGroup>
        </Grid>
      </Grid>

      <Div m="46px 0 24px 0" justify="space-between">
        <Button
          font={theme.fonts.family.primaryBold}
          background={theme.colors.green900}
          border={theme.colors.yellow500}
          hover={theme.colors.terciary50}
          borderHover={theme.colors.yellow500}
          colorHover={theme.colors.green900}
          labelColor={theme.colors.yellow500}
          size={theme.fonts.size.default2}
          borderHeight={"3px solid"}
          width={isMobile ? "56px" : "113px"}
          mobileWidth={"56px"}
          height={"40px"}
          // onClick={handleBack}
        >
          <Image alt="arrow" src={arrowBack} style={{ marginRight: "4px" }} />
          {isMobile ? "" : "Atrás"}
        </Button>
        <Button
          font={theme.fonts.family.primaryBold}
          background={theme.colors.yellow500}
          hover={theme.colors.yellow500}
          borderHover={theme.colors.yellow500}
          labelColor={theme.colors.green900}
          size={theme.fonts.size.default2}
          width={isMobile ? "224px" : "300px"}
          mobileWidth={"224px"}
          height={"40px"}
          radius={"40px"}
          onClick={nextStep}
          // disabled={!isFormValid}
        >
          Siguiente
        </Button>
      </Div>
    </ColForm>
  )
}