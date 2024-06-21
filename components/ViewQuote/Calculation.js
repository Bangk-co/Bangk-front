import { Button } from "@/components/Common/Button";
import { Div, Row, Text, Col } from "@/styles/Common";
import {
  WrapperInfo,
  WrapperInsurance,
  WrapperWappCal,
} from "@/components/ViewQuote/styles";
import { theme } from "@/styles/theme";
import Image from "next/image";
import wappIcon from "@/assets/icons/whatsapp-original.svg";
import logo from "@/assets/icons/white-logo.png";
import { formattedPrice } from "@/utilities/helpers";
import { Checkbox } from "@/components/Common/Checkbox";

export const Calculation = ({
  isMobile,
  handleWapp,
  handleNext,
  setOpenModal,
  handleDownload,
  terms,
  handleTerms,
  handleDecline,
  loanApplicationInfo,
}) => {
  const info = [
    {
      label: "Tipo de crédito:",
      value: `${loanApplicationInfo?.loanTypeName}` || 0,
    },
    {
      label: "Saldo del crédito:",
      value: `${formattedPrice(loanApplicationInfo?.loanBalance) || 0} COP`,
    },
  ];

  const BangkInsuranceMonthly = loanApplicationInfo?.yearlyFee / 12;
  const BangkInsuranceAnnual = loanApplicationInfo?.yearlyFee;
  const insuranceWithBangk = [
    {
      key: 1,
      label: "Seguro Mensual",
      value: BangkInsuranceMonthly || 0,
    },
    {
      key: 2,
      label: "Seguro Anual",
      value: BangkInsuranceAnnual || 0,
    },
  ];

  const InsuranceMonthly = loanApplicationInfo?.monthlyCostInsurance;
  const InsuranceAnnual = loanApplicationInfo?.monthlyCostInsurance * 12;
  const insurance = [
    {
      key: 1,
      label: "Seguro Mensual",
      value: InsuranceMonthly || 0,
    },
    {
      key: 2,
      label: "Seguro Anual",
      value: InsuranceAnnual || 0,
    },
  ];

  const anualSaving = (InsuranceAnnual - BangkInsuranceAnnual) || 0;

  return (
    <WrapperInfo justifyMobile={"center"} p="96px 48px 48px 48px">
      <Div width="100%" justify="center" p="24px 0">
        <Image
          alt="logo"
          src={logo}
          height={isMobile ? 32 : 45}
          width={isMobile ? 85 : 120}
        />
      </Div>

      <Text
        size={isMobile ? theme.fonts.size.h5 : theme.fonts.size.h3}
        color={theme.colors.white}
        font={theme.fonts.family.primaryBold}
      >
        Nuestra{" "}
        <span
          style={{
            color: theme.colors.yellow500,
            fontFamily: theme.fonts.family.primaryBold,
          }}
        >
          oferta
        </span>
      </Text>
      <Text
        size={isMobile ? theme.fonts.size.sm : theme.fonts.size.default2}
        color={theme.colors.white}
        mt="8px"
      >
        Hemos analizado el estado actual de tu seguro y te ofrecemos{" "}
        <span style={{ fontFamily: theme.fonts.family.primaryBold }}>
          una nueva Póliza con {loanApplicationInfo?.insuraceCurrierName}.
        </span>
      </Text>
      <Col gap="12px" m="26px 0 0 0">
        {info.map((ele, indx) => (
          <Row key={indx} justify="space-between">
            <Text
              size={isMobile ? theme.fonts.size.sm : theme.fonts.size.default2}
              color={theme.colors.white}
            >
              {ele.label}
            </Text>
            <Text
              size={isMobile ? theme.fonts.size.sm : theme.fonts.size.default2}
              color={theme.colors.white}
              font={theme.fonts.family.primaryBold}
            >
              {ele.value}
            </Text>
          </Row>
        ))}
      </Col>
      <WrapperInsurance>
        <Div
          width="100%"
          justify="left"
          align="center"
          p="8px 16px"
          style={{ borderBottom: `1px solid ${theme.colors.gray200}` }}
        >
          <Text
            size={isMobile ? theme.fonts.size.sm : theme.fonts.size.default2}
            color={theme.colors.green900}
            font={theme.fonts.family.primaryBold}
          >
            Seguro de vida
          </Text>
        </Div>
        <Row width="100%">
          <Col width="50%">
            <Div
              justify="center"
              align="center"
              minheight="36px"
              p="4px 8px"
              background={theme.colors.neutralGray900}
              style={{
                borderRight: `1px solid ${theme.colors.gray200}`,
              }}
            >
              <Text
                size={isMobile ? theme.fonts.size.xs : theme.fonts.size.sm}
                color={theme.colors.white}
                font={theme.fonts.family.primaryBold}
                weight={theme.fonts.weight.bold}
              >
                Actual
              </Text>
            </Div>
            {insurance.map((ele, indx) => (
              <Div
                key={indx}
                direction="column"
                justify="center"
                align="center"
                gap="4px"
                p="16px 8px"
                style={{
                  borderRight: `1px solid ${theme.colors.gray200}`,
                  borderBottom:
                    indx % 2 === 0 && `1px solid ${theme.colors.gray200}`,
                }}
              >
                <Text
                  size={
                    isMobile ? theme.fonts.size.sm : theme.fonts.size.default2
                  }
                  color={theme.colors.neutralGray900}
                  font={theme.fonts.family.primary}
                  weight={theme.fonts.weight.regular}
                >
                  {ele.label}
                </Text>
                <Text
                  size={
                    isMobile ? theme.fonts.size.default2 : theme.fonts.size.ft
                  }
                  font={theme.fonts.family.primaryBold}
                  color={theme.colors.primary900}
                >
                  {formattedPrice(ele.value)}
                </Text>
              </Div>
            ))}
          </Col>
          <Col width="50%">
            <Div
              justify="center"
              align="center"
              minheight="36px"
              p="4px 8px"
              background={theme.colors.orange}
            >
              <Text
                size={isMobile ? theme.fonts.size.xs : theme.fonts.size.sm}
                color={theme.colors.white}
                font={theme.fonts.family.primaryBold}
                weight={theme.fonts.weight.bold}
              >
                Con Bangk
              </Text>
            </Div>
            {insuranceWithBangk.map((ele, indx) => (
              <Div
                key={indx}
                direction="column"
                justify="center"
                align="center"
                gap="4px"
                p="16px 8px"
                style={{
                  borderBottom:
                    indx % 2 === 0 && `1px solid ${theme.colors.gray200}`,
                }}
              >
                <Text
                  size={
                    isMobile ? theme.fonts.size.sm : theme.fonts.size.default2
                  }
                  color={theme.colors.neutralGray900}
                  font={theme.fonts.family.primary}
                  weight={theme.fonts.weight.regular}
                >
                  {ele.label}
                </Text>
                <Text
                  size={
                    isMobile ? theme.fonts.size.default2 : theme.fonts.size.ft
                  }
                  font={theme.fonts.family.primaryBold}
                  color={theme.colors.primary900}
                >
                  {formattedPrice(ele.value)}
                </Text>
              </Div>
            ))}
          </Col>
        </Row>
      </WrapperInsurance>

      <Row align="center" justify="space-between" m="16px 0">
        <Text
          size={isMobile ? theme.fonts.size.default2 : theme.fonts.size.ft}
          color={theme.colors.white}
          font={theme.fonts.family.primaryBold}
        >
          Te ahorras al año
        </Text>
        <Div
          background={theme.colors.primary25}
          width={isMobile ? "158px" : "320px"}
          radius="8px"
          p="8px 16px"
          justify="center"
        >
          <Text
            size={isMobile ? theme.fonts.size.sm : theme.fonts.size.ft}
            color={theme.colors.green900}
            font={theme.fonts.family.primaryBold}
          >
            {formattedPrice(anualSaving)}
          </Text>
        </Div>
      </Row>

      <Row m="22px 0 0 0">
        <Checkbox checked={terms} onChange={handleTerms} />
        <Text
          color={theme.colors.white}
          size={isMobile ? theme.fonts.size.sm : theme.fonts.size.default2}
          mt="7px"
        >
          Acepto los &nbsp;
          <span
            style={{
              fontFamily: theme.fonts.family.primaryBold,
              cursor: "pointer",
              textDecoration: "underline",
            }}
            onClick={() =>
              handleDownload(loanApplicationInfo?.insuraceCurrierName)
            }
          >
            términos y condiciones
          </span>
          &nbsp;de la propuesta de Bangk
        </Text>
      </Row>

      {isMobile && (
        <WrapperWappCal>
          <Image
            alt="wapp-icon"
            src={wappIcon}
            onClick={handleWapp}
            style={{ cursor: "pointer" }}
          />
        </WrapperWappCal>
      )}

      <Row
        m="46px 0 0 0"
        gap={isMobile ? "16px" : "60px"}
        justify="space-between"
      >
        <Button
          font={theme.fonts.family.primaryBold}
          background={theme.colors.primary900}
          hover={theme.colors.primary900}
          border={theme.colors.primary900}
          borderHover={theme.colors.primary900}
          labelColor={theme.colors.white}
          size={theme.fonts.size.default2}
          width={isMobile ? "148px" : "232px"}
          mobileWidth={"148px"}
          height={"40px"}
          radius={"40px"}
          onClick={handleDecline}
        >
          Rechazar
        </Button>
        <Button
          font={theme.fonts.family.primaryBold}
          background={theme.colors.yellow500}
          hover={theme.colors.yellow500}
          border={"transparent"}
          borderHover={theme.colors.green900}
          labelColor={theme.colors.green900}
          size={theme.fonts.size.default2}
          width={isMobile ? "148px" : "232px"}
          mobileWidth={"148px"}
          height={"40px"}
          radius={"40px"}
          onClick={handleNext}
          disabled={!terms}
        >
          Aceptar
        </Button>
      </Row>
    </WrapperInfo>
  );
};
