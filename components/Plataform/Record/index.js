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

export const Record = ({
  historyInfo,
  documentTypeOptions,
  phoneCodesOptions,
  gendersOptions,
  loanTypeOptions,
  banksOptions,
  data,
  isSuccess,
  isLoading
}) => {
  const queryClient = useQueryClient();
  const updateClient = useUpdateClientInfo();
  const updateLoan = useUpdateLoan()
  const [showDrawer, setShowDrawer] = useState(false);
  const [errorDate, setErrorDate] = useState(false)

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
        documentIssueDate: dayjs(info?.documentIssueDate),
      })

      setLoanForm({
        loanBalance: info.loanBalance,
        loanTypeId: info.loanType,
        bankId: info.bankId,
        loanNumber: info.loanNumber,
        monthlyCostInsurance: info.monthlyCostInsurance,
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

  const handleCloseDrawer = () => {
    setShowDrawer(false);
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
              <SaveSuccess>
                <Image alt="success" src={success} width={16} height={16} />
                <Text
                  color={theme.colors.default}
                  size={theme.fonts.size.sm}
                  font={theme.fonts.family.tertiary}
                >
                  Datos del cliente validados con éxito
                </Text>
              </SaveSuccess>,
              { duration: 2000 }
            );
            setShowDrawer(false)
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

  const disabledButtons = loanForm?.monthlyCostInsurance === "";

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
                {ele.status === "Revisión de extracto" && (
                  <Div height="100%" justify="end" align="center">
                    <Button
                      background={theme.colors.green900}
                      hover={theme.colors.green900}
                      borderHover={theme.colors.green900}
                      width={"200px"}
                      height={"40px"}
                      onClick={handleOpen}
                    >
                      Ver extracto
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