/* eslint-disable react-hooks/exhaustive-deps */
import { Col, Div, Row, Text } from "@/styles/Common";
import React, { useEffect, useState } from "react";
import { Card, DashedLine, SaveSuccess } from "./styles";
import { Grid } from "@mui/material";
import { theme } from "@/styles/theme";
import { Button } from "@/components/Common/Button";
import Image from "next/image";
import { DrawerAllInfo } from "./DrawerAllInfo";
import dayjs from "dayjs";
import useUpdateClientInfo from "@/hooks/Customers/useUpdateClientInfo";
import toast from "react-hot-toast";
import { useQueryClient } from "react-query";
import useUpdateLoan from "@/hooks/Customers/useUpdateLoan";
import success from "@/assets/icons/successStepper.svg"
import { DrawerQuote } from "./DrawerQuote/DrawerQuote";
import { useDispatch, useSelector } from "react-redux";
import { setLoanInfo } from "@/store/customers";
import useSaveQuote from "@/hooks/Customers/useSaveQuote";
import { ToastSuccess } from "@/components/Common/ToastSucces";
import { DrawerQuoteSuccess } from "./DrawerQuote/DrawerQuoteSuccess";
import { numberFormat, numberFormatText, parseNumber } from "@/utilities/helpers";

export const Record = ({
  historyInfo,
  documentTypeOptions,
  phoneCodesOptions,
  gendersOptions,
  loanTypeOptions,
  banksOptions,
  data,
  isSuccess,
  insurersOptions,
  quoteRate,
}) => {
  const dispatch = useDispatch()
  const { loanInfo } = useSelector((state) => state)?.clients
  const queryClient = useQueryClient();
  const updateClient = useUpdateClientInfo();
  const updateLoan = useUpdateLoan()
  const saveQuote = useSaveQuote()
  const [showDrawer, setShowDrawer] = useState(false);
  const [showDrawerQuote, setShowDrawerQuote] = useState(false);
  const [showQuoteSuccess, setShowQuoteSuccess] = useState(false)
  const [errorDate, setErrorDate] = useState(false)
  const [savedBankStatStatement, setSavedBankStatStatement] = useState(false)

  const [prevUserForm, setPrevUserForm] = useState({
    name: "",
    lastName: "",
    documentTypeId: null,
    identificationNumber: "",
    email: "",
    countryCode: null,
    phoneNumber: "",
    birthDate: null,
    genderId: "",
    documentIssueDate: null
  })
  const [userForm, setUserForm] = useState({})
  const [loanForm, setLoanForm] = useState({
    loanBalance: "",
    loanTypeId: 0,
    bankId: 0,
    loanNumber: "",
    monthlyCostInsurance: "",
    observations: "",
    loanApplicationId: null,
    isValidateLoanApplication: true
  })
  const [bankStatementInfo, setBankStatementInfo] = useState({
    bankStatementName: "",
    bankStatementUrl: ""
  })
  const [clientId, setClientId] = useState(null)
  const [insurer, setInsurer] = useState(114)
  const [yearlyFee, setYearlyFee] = useState("")

  const currentInsuranceData = [
    { label: "Seguro mensual", value: `$ ${numberFormat(Number(loanInfo?.monthlyCostInsurance))}` },
    { label: "Seguro anual", value: `$ ${numberFormat(loanInfo?.monthlyCostInsurance * 12)}` },
  ]

  const [bangkInsuranceData, setBangkInsuranceData] = useState([
    { label: "Seguro mensual", value: `$ ${numberFormat((loanInfo?.loanBalance * quoteRate) / 12)}` },
    { label: "Seguro anual", value: `$ ${numberFormat(loanInfo?.loanBalance * quoteRate)}` }
  ])
  const [saveValue, setSaveValue] = useState(`$ ${numberFormat((loanInfo?.monthlyCostInsurance * 12) - (loanInfo?.loanBalance * quoteRate))}`)

  useEffect(() => {
    if (insurer === 114) {
      setBangkInsuranceData([
        { label: "Seguro mensual", value: `$ ${numberFormat((loanInfo?.loanBalance * quoteRate) / 12)}` },
        { label: "Seguro anual", value: `$ ${numberFormat(loanInfo?.loanBalance * quoteRate)}` }
      ])
      setSaveValue(`$ ${numberFormat((loanInfo?.monthlyCostInsurance * 12) - (loanInfo?.loanBalance * quoteRate))}`)
    } else {
      setBangkInsuranceData([
        { label: "Seguro mensual", value: `$ ${numberFormat((yearlyFee) / 12)}` },
        { label: "Seguro anual", value: `$ ${numberFormatText(yearlyFee)}` }
      ])
      setSaveValue(`$ ${numberFormat((loanInfo?.monthlyCostInsurance * 12) - yearlyFee)}`)
    }
  }, [insurer, loanInfo, yearlyFee, quoteRate])

  useEffect(() => {
    if (prevUserForm) {
      setUserForm(prevUserForm)
    }
  }, [prevUserForm])

  useEffect(() => {
    if (isSuccess) {
      const info = data?.data?.loanApplication

      setClientId(info?.clientId)
      setPrevUserForm({
        name: info?.clientName,
        lastName: info?.clientLastName,
        documentTypeId: info?.documenIdentificationTypeId,
        identificationNumber: info?.identificationNumber,
        email: info?.email,
        countryCode: info?.countryCodePhoneId,
        phoneNumber: info?.phoneNumber,
        birthDate: dayjs(info?.birthDate),
        genderId: info?.genderId,
        documentIssueDate: info?.documentIssueDate === null ? null : dayjs(info?.documentIssueDate),
      })

      setLoanForm({
        loanBalance: info.loanBalance,
        loanTypeId: info.loanType,
        bankId: info.bankId,
        loanNumber: info.loanNumber,
        monthlyCostInsurance: info.monthlyCostInsurance === null ? "" : info.monthlyCostInsurance,
        observations: info.observations,
        loanApplicationId: info.loanApplicationId,
        isValidateLoanApplication: true
      })
      setBankStatementInfo({
        bankStatementName: info.bankStatementName,
        bankStatementUrl: info.bankStatementUrl
      })
    }
  }, [isSuccess, data])

  const handleCloseQuoteSuccess = () => {
    setShowQuoteSuccess(false);
    dispatch(setLoanInfo({}))
    queryClient.refetchQueries("historyList")
    toast.custom(
      <ToastSuccess message={"Cotización enviada con éxito"} />,
      { duration: 1000 }
    );
  };

  const handleCloseDrawerQuote = () => {
    setShowDrawerQuote(false);
  };

  const handleCloseDrawer = () => {
    setShowDrawer(false);
    setSavedBankStatStatement(false)
  };

  const handleOpen = () => {
    setShowDrawer(true)
  }

  const handleChangeUser = (event) => {
    const { id, value } = event.target;
    const newUserForm = { ...userForm }

    if (id === "identificationNumber") {
      if (userForm.documentTypeId !== 78) {
        newUserForm[id] = value.replace(/\D/g, '');
      } else {
        newUserForm[id] = value
      }
    } else if (id === "phoneNumber") {
      newUserForm[id] = value.replace(/\D/g, '');
    } else {
      newUserForm[id] = value
    }

    setUserForm(newUserForm)
  }

  const handleSelectUser = (event) => {
    const { name, value } = event.target;
    const newUserForm = { ...userForm }

    newUserForm[name] = value
    setUserForm(newUserForm)
  }

  const handleChangeDate = (event, id) => {
    const today = new Date();
    const birthDate = new Date(event);
    const age = today.getFullYear() - birthDate.getFullYear();

    if (id === "birthDate") {
      if (age < 18) {
        setErrorDate(true)
      } else {
        setErrorDate(false)
        setUserForm({ ...userForm, birthDate: event })
      }
    } else {
      setUserForm({ ...userForm, documentIssueDate: event })
    }
  }

  const handleSelectGender = (event) => {
    const { defaultValue } = event.target
    const newUserForm = { ...userForm }

    newUserForm["genderId"] = defaultValue
    setUserForm(newUserForm)
  }

  const handleChangeLoan = (event) => {
    const { id, value } = event.target;

    const newValue = value === "" ? "" : value.replace(/\D/g, '');
    if (newValue === "" || (parseInt(newValue, 10) <= 5000000000)) {
      setLoanForm((prevLoanForm) => ({
        ...prevLoanForm,
        [id]: newValue,
      }));
    }
  };

  const handleSelectLoan = (event) => {
    const { name, value } = event.target;
    const newLoanForm = { ...loanForm }

    newLoanForm[name] = value
    setLoanForm(newLoanForm)
  }

  const handleChange = (event) => {
    const { id, value } = event.target;
    const newLoanForm = { ...loanForm }

    if (id === "loanNumber") {
      newLoanForm[id] = value.replace(/\D/g, '');
    } else {
      newLoanForm[id] = value;
    }
    setLoanForm(newLoanForm)
  }

  const handleSave = (close) => {
    if (JSON.stringify(prevUserForm) !== JSON.stringify(userForm)) {
      updateClient.reset();
      updateClient.mutate(
        {
          clientId: clientId,
          formData: { ...userForm },
        },
        {
          onSuccess: () => {
            queryClient.invalidateQueries(["clientInfo", actualInfo?.id]);
          },
          onError: (err) => {
            err.response.data.errors.map((error) => {
              toast.error(error);
            });
          },
        }
      );
    }
    updateLoan.reset();
    updateLoan.mutate(
      { formData: { ...loanForm } },
      {
        onSuccess: () => {
          if (close) {
            toast.custom(
              <ToastSuccess message={"Datos del cliente validados con éxito"} />,
              { duration: 1000 }
            );
            setShowDrawer(false)
          } else {
            dispatch(setLoanInfo({
              loanBalance: loanForm.loanBalance,
              monthlyCostInsurance: loanForm.monthlyCostInsurance,
              loanType: loanTypeOptions.find((ele) => ele.value === loanForm.loanTypeId)?.label
            }))
            setShowDrawer(false)
            setShowDrawerQuote(true)
          }
        },
        onError: (err) => {
          err.response.data.errors.map((error) => {
            toast.error(error);
          });
        },
      }
    );
  }

  const handleDownload = () => {
    const a = document.createElement("a");
    a.href = bankStatementInfo?.bankStatementUrl;
    a.setAttribute("download", `${bankStatementInfo?.bankStatementName}`);
    document.body.appendChild(a);
    a.target = "_blank";
    a.click();
    a.remove();
  };

  const handleSelectInsurer = (event) => {
    const { value } = event.target;
    setInsurer(value)
    setYearlyFee("")
  }

  const handleChangeYearlyFee = (event) => {
    const { value } = event.target;
    setYearlyFee(value.replace(/\D/g, ''))
  }

  const handleSaveQuote = () => {
    saveQuote.reset();
    saveQuote.mutate(
      { formData: {
          insuranceName: insurersOptions.find((ele) => ele.value === insurer)?.label,
          insuranceId: insurer,
          loanApplicationId: data?.data?.loanApplication.loanApplicationId,
          yearlyFee: parseNumber(bangkInsuranceData.find((ele) => ele.label === "Seguro anual")?.value),
        }
      },
      {
        onSuccess: (data) => {
          setShowDrawerQuote(false)
          setShowQuoteSuccess(true)
        },
        onError: (err) => {
          err.response.data.errors.map((error) => {
            toast.error(error);
          });
        },
      }
    );
  }

  const disabledButtons = loanForm?.monthlyCostInsurance === "";

  const optionsButtons = (status) => {
    switch (status) {
      case "Revisión de extracto":
        return { label: "Ver extracto", onClick: handleOpen }
      case "Cotización enviada":
        return { label: "Revisar cotización", onClick: () => {} }
      default:
        break;
    }
  }

  const handleOpenSaved = () => {
    handleOpen()
    setSavedBankStatStatement(true)
  }

  return (
    <Row m="24px 0 0 0" gap="16px">
      <DrawerAllInfo
        showDrawer={showDrawer}
        closeDrawer={handleCloseDrawer}
        documentTypeOptions={documentTypeOptions}
        phoneCodesOptions={phoneCodesOptions}
        gendersOptions={gendersOptions}
        loanTypeOptions={loanTypeOptions}
        banksOptions={banksOptions}
        userForm={userForm}
        loanForm={loanForm}
        handleChangeUser={handleChangeUser}
        handleSelectUser={handleSelectUser}
        handleChangeDate={handleChangeDate}
        handleSelectGender={handleSelectGender}
        errorDate={errorDate}
        handleChangeLoan={handleChangeLoan}
        handleSelectLoan={handleSelectLoan}
        handleChange={handleChange}
        handleSave={handleSave}
        disabledButtons={disabledButtons}
        bankStatementInfo={bankStatementInfo}
        handleDownload={handleDownload}
        isLoading={updateLoan.isLoading}
        savedBankStatStatement={savedBankStatStatement}
      />
      <DrawerQuote
        showDrawer={showDrawerQuote}
        closeDrawer={handleCloseDrawerQuote}
        insurersOptions={insurersOptions}
        quoteRate={quoteRate}
        insurer={insurer}
        yearlyFee={yearlyFee}
        handleSelectInsurer={handleSelectInsurer}
        loanInfo={loanInfo}
        handleChange={handleChangeYearlyFee}
        currentInsuranceData={currentInsuranceData}
        bangkInsuranceData={bangkInsuranceData}
        saveValue={saveValue}
        handleSaveQuote={handleSaveQuote}
        isLoading={saveQuote.isLoading}
      />
      <DrawerQuoteSuccess
        showDrawer={showQuoteSuccess}
        closeDrawer={handleCloseQuoteSuccess}
        loanInfo={loanInfo}
        insurer={insurersOptions.find((ele) => ele.value === insurer)?.label}
        currentInsuranceData={currentInsuranceData}
        bangkInsuranceData={bangkInsuranceData}
        saveValue={saveValue}
      />
      <Div width="24px" direction="column">
        {historyInfo.map((ele, indx) => (
          <Div key={indx} direction="column" align="center">
            <Image alt="icon" src={ele.icon} />
            {indx < historyInfo.length - 1 && (
              <DashedLine />
            )}
          </Div>
        ))}
      </Div>
      <Col gap="16px">
        {historyInfo.map((ele, indx) => (
          <Card key={indx}>
            <Grid container>
              <Grid item md={2.5}>
                <Col gap="16px">
                  <Text
                    color={theme.colors.neutralGray900}
                    font={theme.fonts.family.primaryBold}
                    weight={theme.fonts.weight.bold}
                    size={theme.fonts.size.xs}
                  >
                    Estado de solicitud
                  </Text>
                  <Text
                    color={theme.colors.neutralGray900}
                    font={theme.fonts.family.primary}
                    size={theme.fonts.size.md}
                  >
                    {ele.status}
                  </Text>
                </Col>
              </Grid>
              <Grid item md={2}>
                <Col gap="16px">
                  <Text
                    color={theme.colors.neutralGray900}
                    font={theme.fonts.family.primaryBold}
                    weight={theme.fonts.weight.bold}
                    size={theme.fonts.size.xs}
                  >
                    Fecha de actualización
                  </Text>
                  <Text
                    color={theme.colors.neutralGray900}
                    font={theme.fonts.family.primary}
                    size={theme.fonts.size.md}
                  >
                    {ele.date}
                  </Text>
                </Col>
              </Grid>
              <Grid item md={5}>
                <Col gap="16px">
                  <Text
                    color={theme.colors.neutralGray900}
                    font={theme.fonts.family.primaryBold}
                    weight={theme.fonts.weight.bold}
                    size={theme.fonts.size.xs}
                  >
                    Observaciones
                  </Text>
                  <Text
                    color={theme.colors.neutralGray900}
                    font={theme.fonts.family.primary}
                    size={theme.fonts.size.md}
                  >
                    {ele.observations}
                  </Text>
                </Col>
              </Grid>
              <Grid item md={2.5}>
                {historyInfo.length > 0 && indx === 0 && (
                  <Div height="100%" justify="end" align="center">
                    <Button
                      background={theme.colors.green900}
                      hover={theme.colors.green900}
                      borderHover={theme.colors.green900}
                      width={"200px"}
                      height={"40px"}
                      onClick={optionsButtons(ele.status)?.onClick}
                    >
                      {optionsButtons(ele.status)?.label}
                    </Button>
                  </Div>
                )}
                {historyInfo.length > 2 && ele.status === "Revisión de extracto" && (
                  <Div height="100%" justify="end" align="center">
                    <Button
                      font={theme.fonts.family.primaryBold}
                      labelColor={theme.colors.green900}
                      background={theme.colors.white}
                      hover={theme.colors.white}
                      border={theme.colors.green900}
                      borderHeight={`3px solid ${theme.colors.green900}`}
                      borderHover={theme.colors.green900}
                      width={"200px"}
                      height={"40px"}
                      onClick={handleOpenSaved}
                    >
                      {optionsButtons(ele.status)?.label}
                    </Button>
                  </Div>
                )}
              </Grid>
            </Grid>
          </Card>
        ))}
      </Col>
    </Row>
  )
}