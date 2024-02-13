import React, { useEffect, useState } from "react";
import { Div } from "@/styles/Common";
import { Modal } from "@mui/material";
import { Container, WrapperQuote } from "@/components/ViewQuote/styles";
import { useRouter } from "next/router";
import { wappLink } from "@/utilities/options";
import { useSelector } from "react-redux";
import { numberFormatText } from "@/utilities/helpers";
import useGetInsuranceValues from "@/hooks/QuoteSavings/useGetInsuranceValues";
import { Calculation } from "@/components/ViewQuote/Calculation";
import Banner from "@/components/ViewQuote/Banner";
import { ModalTerms } from "@/components/Common/ModalTerms";
import { ModalAccept } from "@/components/ViewQuote/ModalAccept";

const ViewQuote = ({ isMobile, isTablet }) => {
  const insuranceValues = useGetInsuranceValues();
  const { data, isSuccess } = insuranceValues;
  const router = useRouter();
  const { initData } = useSelector((state) => state)?.balance;
  const [formInfo, setFormInfo] = useState(initData);
  const [insuranceData, setInsuranceData] = useState({
    annualRatePercentage: 0,
    monthlyRatePercentage: 0,
  });

  const [terms, setTerms] = useState(false);
  const [openModalTerms, setOpenModalTerms] = useState(false);
  const [openModalAccept, setOpenModalAccept] = useState(false);

  useEffect(() => {
    if (isSuccess) {
      const annualRate = data?.data?.groupSettings.find(
        (ele) => ele.name === "AnnualRatePercentage"
      )?.code;
      const monthRate = data?.data?.groupSettings.find(
        (ele) => ele.name === "MonthlyRatePercentage"
      )?.code;
      setInsuranceData({
        annualRatePercentage: annualRate,
        monthlyRatePercentage: monthRate,
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isSuccess]);

  const formatBirthdate = (birthdate) => {
    if (!birthdate) return "";

    const formattedDate = new Date(birthdate).toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });

    return formattedDate;
  };

  const info = [
    {
      label: "Tipo de crédito:",
      value: `$ ${numberFormatText(formInfo?.balance)} COP`,
    },
    {
      label: "Saldo del crédito:",
      value: formatBirthdate(formInfo?.birthdate),
    },
  ];

  const insuranceMonthlyPercentage = insuranceData.monthlyRatePercentage / 100;
  const insuranceAnnualPercentage = insuranceData.annualRatePercentage / 100;

  const insuranceMonthly = formInfo?.balance * insuranceMonthlyPercentage;
  const insuranceAnnual = formInfo?.balance * insuranceAnnualPercentage;

  const insurance = [
    {
      key: 1,
      label: "Seguro Mensual",
      value: insuranceMonthly,
    },
    {
      key: 2,
      label: "Seguro Anual",
      value: insuranceAnnual,
    },
  ];

  const handleWapp = () => {
    const a = document.createElement("a");
    a.href = `${wappLink}`;
    document.body.appendChild(a);
    a.target = "_blank";
    a.click();
  };

  const handleNext = () => {
    setOpenModalAccept(true);
  };

  const handleTerms = (event) => {
    const { checked } = event.target;

    setTerms(checked);
  };
  const handleClose = () => {
    setOpenModalTerms(false);
    setOpenModalAccept(false);
  };
  const handleAcceptTerms = () => {
    setOpenModalTerms(false);
    setTerms(true);
  };

  const handleAccept = () => {
    setOpenModalAccept(false);
    router.push("/ver-cotizacion/creacion-exitosa");
  };

  return (
    <Container>
      <Modal open={openModalTerms}>
        <ModalTerms
          isMobile={isMobile}
          handleClose={handleClose}
          handleAccept={handleAcceptTerms}
          termsType="T&C"
        />
      </Modal>
      <Modal open={openModalAccept}>
        <ModalAccept
          isMobile={isMobile}
          handleClose={handleClose}
          handleAccept={handleAccept}
        />
      </Modal>
      <WrapperQuote isMobile={isMobile}>
        <Div justify={isMobile && "center"} height="100%">
          {!isMobile && !isTablet && <Banner />}

          <Calculation
            isMobile={isMobile}
            info={info}
            insurance={insurance}
            handleWapp={handleWapp}
            handleNext={handleNext}
            setOpenModal={setOpenModalTerms}
            terms={terms}
            handleTerms={handleTerms}
          />
        </Div>
      </WrapperQuote>
    </Container>
  );
};

export default ViewQuote;
