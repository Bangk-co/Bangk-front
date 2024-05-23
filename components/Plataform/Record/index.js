/* eslint-disable react-hooks/exhaustive-deps */
import _ from "lodash";
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
import pending from "@/assets/icons/pendingStepper.svg";
import success from "@/assets/icons/successStepper.svg";
import error from "@/assets/icons/closeStepper.svg";
import alert from "@/assets/icons/alertStepper.svg";
import alertIcon from "@/assets/icons/alert-yellow.svg";
import alertIconError from "@/assets/icons/alert-red.svg";
import cancelIcon from "@/assets/icons/cancel-red.svg";
import { DrawerQuote } from "./DrawerQuote/DrawerQuote";
import { useDispatch, useSelector } from "react-redux";
import { setLoanInfo } from "@/store/customers";
import useGetLoanFormAssessorConcept from "@/hooks/Customers/useGetLoanFormAssessorConcept";
import useSaveQuote from "@/hooks/Customers/useSaveQuote";
import { ToastSuccess } from "@/components/Common/ToastSucces";
import { DrawerQuoteSuccess } from "./DrawerQuote/DrawerQuoteSuccess";
import {
  numberFormat,
  numberFormatText,
  parseNumber,
} from "@/utilities/helpers";
import useGetLoanQuoteByApplicationId from "@/hooks/ViewQuote/useGetLoanQuoteByApplicationId";
import { DrawerValidateInfo } from "./DrawerValidateInfo";
import useValidationSBS from "@/hooks/Customers/useValidationSBS";
import useValidationSarlaft from "@/hooks/Customers/useValidationSarlaft";
import useAddNoveltyComments from "@/hooks/Customers/useAddNoveltyComments";
import { DrawerNovelty } from "./DrawerNovelty";

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
  application,
  allianzRule,
}) => {
  const dispatch = useDispatch();
  const { loanInfo } = useSelector((state) => state)?.clients;
  const { applications } = useSelector((state) => state);
  const queryClient = useQueryClient();
  const updateClient = useUpdateClientInfo();
  const updateLoan = useUpdateLoan();
  const saveQuote = useSaveQuote();
  const validationSBS = useValidationSBS();
  const validationSarlaft = useValidationSarlaft();
  const addNoveltyComments = useAddNoveltyComments();
  const [showDrawer, setShowDrawer] = useState(false);
  const [showDrawerQuote, setShowDrawerQuote] = useState(false);
  const [showQuoteSuccess, setShowQuoteSuccess] = useState(false);
  const [errorDate, setErrorDate] = useState(false);
  const [savedBankStatStatement, setSavedBankStatStatement] = useState(false);
  const [showDrawerNovelty, setShowDrawerNovelty] = useState(false);
  const [statusName, setStatusName] = useState("");
  const [comments, setComments] = useState("");

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
    documentIssueDate: null,
  });
  const [userForm, setUserForm] = useState({});
  const [loanForm, setLoanForm] = useState({
    loanBalance: "",
    loanTypeId: 0,
    bankId: 0,
    loanNumber: "",
    monthlyCostInsurance: "",
    observations: "",
    loanApplicationId: null,
    isValidateLoanApplication: true,
  });
  const [bankStatementInfo, setBankStatementInfo] = useState({
    bankStatementName: "",
    bankStatementUrl: "",
  });
  const [clientId, setClientId] = useState(null);
  const [insurer, setInsurer] = useState(allianzRule ? 115 : 114);
  const [yearlyFee, setYearlyFee] = useState("");

  const loanApplications = useGetLoanQuoteByApplicationId(
    applications?.selectedApplication?.loanApplicationId
  );
  const { data: dataLoanApplication, isLoading } = loanApplications;
  const [loanApplicationInfo, setLoanApplicationInfo] = useState();
  useEffect(() => {
    if (dataLoanApplication && dataLoanApplication.data) {
      setLoanApplicationInfo({
        loanType: dataLoanApplication?.data?.loanTypeName,
        loanBalance: dataLoanApplication?.data?.loanBalance,
      });
    }
  }, [dataLoanApplication, isLoading]);

  const [currentInsuranceData, setCurrentInsuranceData] = useState([]);

  const [showDrawerValidateInfo, setShowDrawerValidateInfo] = useState(false);
  const insuranceAnnual = _.multiply(
    Number(loanInfo?.loanBalance),
    Number(quoteRate)
  );
  const insuranceAnnualFinal = insuranceAnnual.toFixed();
  const insuranceMonthly = Number(_.divide(insuranceAnnual, 12).toFixed());
  const insuranceMonthlyFinal = insuranceMonthly.toFixed();
  const monthlyCostInsurance = Number(loanInfo?.monthlyCostInsurance);
  const monthlyCostInsurance2 = Number(
    dataLoanApplication?.data?.monthlyCostInsurance
  );
  const bangkYearlyFee = Number(dataLoanApplication?.data?.yearlyFee);

  const [bangkInsuranceData, setBangkInsuranceData] = useState([
    {
      label: "Seguro mensual",
      value: `$ ${numberFormat(Number(insuranceMonthlyFinal))}`,
    },
    {
      label: "Seguro anual",
      value: `$ ${numberFormat(Number(insuranceAnnualFinal))}`,
    },
  ]);
  const [saveValue, setSaveValue] = useState(
    `$ ${numberFormat(
      _.multiply(monthlyCostInsurance, 12) - Number(insuranceAnnualFinal)
    )}`
  );

  useEffect(() => {
    if (allianzRule) {
      setInsurer(115);
    }
  }, [allianzRule]);

  useEffect(() => {
    setCurrentInsuranceData([
      Object.keys(loanInfo).length === 0
        ? {
            label: "Seguro mensual",
            value: `$ ${numberFormat(monthlyCostInsurance2)}`,
          }
        : {
            label: "Seguro mensual",
            value: `$ ${numberFormat(monthlyCostInsurance)}`,
          },
      Object.keys(loanInfo).length === 0
        ? {
            label: "Seguro anual",
            value: `$ ${numberFormat(_.multiply(monthlyCostInsurance2, 12))}`,
          }
        : {
            label: "Seguro anual",
            value: `$ ${numberFormat(_.multiply(monthlyCostInsurance, 12))}`,
          },
    ]);
    if (insurer === 114) {
      setBangkInsuranceData([
        Object.keys(loanInfo).length === 0
          ? {
              label: "Seguro mensual",
              value: `$ ${numberFormat(
                Number(_.divide(bangkYearlyFee, 12).toFixed())
              )}`,
            }
          : {
              label: "Seguro mensual",
              value: `$ ${numberFormat(Number(insuranceMonthlyFinal))}`,
            },
        Object.keys(loanInfo).length === 0
          ? {
              label: "Seguro anual",
              value: `$ ${numberFormat(bangkYearlyFee)}`,
            }
          : {
              label: "Seguro anual",
              value: `$ ${numberFormat(Number(insuranceAnnualFinal))}`,
            },
      ]);
      setSaveValue(
        Object.keys(loanInfo).length === 0
          ? `$ ${numberFormat(
              _.multiply(monthlyCostInsurance2, 12) - bangkYearlyFee
            )}`
          : `$ ${numberFormat(
              Number(_.multiply(monthlyCostInsurance, 12)) -
                Number(insuranceAnnualFinal)
            )}`
      );
    } else {
      setBangkInsuranceData([
        Object.keys(loanInfo).length === 0
          ? {
              label: "Seguro mensual",
              value: `$ ${numberFormat(
                Number(_.divide(bangkYearlyFee, 12).toFixed())
              )}`,
            }
          : {
              label: "Seguro mensual",
              value: `$ ${numberFormat(
                Number(_.divide(yearlyFee, 12).toFixed())
              )}`,
            },
        Object.keys(loanInfo).length === 0
          ? {
              label: "Seguro anual",
              value: `$ ${numberFormat(bangkYearlyFee)}`,
            }
          : {
              label: "Seguro anual",
              value: `$ ${numberFormatText(yearlyFee)}`,
            },
      ]);
      setSaveValue(
        Object.keys(loanInfo).length === 0
          ? `$ ${numberFormat(
              _.multiply(monthlyCostInsurance2, 12) - bangkYearlyFee
            )}`
          : `$ ${numberFormat(
              _.multiply(monthlyCostInsurance, 12) - yearlyFee
            )}`
      );
    }
  }, [
    insurer,
    loanInfo,
    yearlyFee,
    insuranceAnnualFinal,
    insuranceMonthlyFinal,
    bangkYearlyFee,
    monthlyCostInsurance,
    monthlyCostInsurance2,
  ]);

  useEffect(() => {
    if (prevUserForm) {
      setUserForm(prevUserForm);
    }
  }, [prevUserForm]);

  useEffect(() => {
    if (isSuccess) {
      const info = data?.data?.loanApplication;

      setClientId(info?.clientId);
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
        documentIssueDate:
          info?.documentIssueDate === null
            ? null
            : dayjs(info?.documentIssueDate),
      });

      setLoanForm({
        loanBalance: info.loanBalance,
        loanTypeId: info.loanType,
        bankId: info.bankId,
        loanNumber: info.loanNumber,
        monthlyCostInsurance:
          info.monthlyCostInsurance === null ? "" : info.monthlyCostInsurance,
        observations: info.observations,
        loanApplicationId: info.loanApplicationId,
        isValidateLoanApplication: true,
      });
      setBankStatementInfo({
        bankStatementName: info.bankStatementName,
        bankStatementUrl: info.bankStatementUrl,
      });
    }
  }, [isSuccess, data]);

  const loanFormAssesorConcept = useGetLoanFormAssessorConcept(
    applications?.selectedApplication?.loanApplicationId
  );
  const { data: dataAssesorConcept, isLoading: isLoadingAssessorConcept } =
    loanFormAssesorConcept;
  const [formsConcept, setFormsConcept] = useState({
    concept: false,
    comments: "",
  });
  useEffect(() => {
    if (dataAssesorConcept?.data?.getLoanForm) {
      const hasNews = _.some(dataAssesorConcept?.data?.getLoanForm, {
        concept: "Presenta novedades",
      });
      const comments = _.map(
        dataAssesorConcept?.data?.getLoanForm,
        "comment"
      ).join(", ");
      setFormsConcept({
        concept: hasNews,
        comments: hasNews ? comments : "Sin novedades",
      });
    }
  }, [dataAssesorConcept, isLoadingAssessorConcept]);

  const handleCloseQuoteSuccess = () => {
    setShowQuoteSuccess(false);
    dispatch(setLoanInfo({}));
    queryClient.refetchQueries("historyList");
    queryClient.invalidateQueries[
      ("loanQuote", applications?.selectedApplication?.loanApplicationId)
    ];
    if (Object.keys(loanInfo).length > 0) {
      toast.custom(<ToastSuccess message={"Cotización enviada con éxito"} />, {
        duration: 1000,
      });
    }
  };

  const handleCloseDrawerQuote = () => {
    setShowDrawerQuote(false);
  };

  const handleCloseDrawer = () => {
    setShowDrawer(false);
    setSavedBankStatStatement(false);
  };

  const handleOpen = () => {
    setShowDrawer(true);
  };

  const handleChangeUser = (event) => {
    const { id, value } = event.target;
    const newUserForm = { ...userForm };

    if (id === "identificationNumber") {
      if (userForm.documentTypeId !== 78) {
        newUserForm[id] = value.replace(/\D/g, "");
      } else {
        newUserForm[id] = value;
      }
    } else if (id === "phoneNumber") {
      newUserForm[id] = value.replace(/\D/g, "");
    } else {
      newUserForm[id] = value;
    }

    setUserForm(newUserForm);
  };

  const handleSelectUser = (event) => {
    const { name, value } = event.target;
    const newUserForm = { ...userForm };

    newUserForm[name] = value;
    setUserForm(newUserForm);
  };

  const handleChangeDate = (event, id) => {
    const today = new Date();
    const birthDate = new Date(event);
    const age = today.getFullYear() - birthDate.getFullYear();

    if (id === "birthDate") {
      if (age < 18) {
        setErrorDate(true);
      } else {
        setErrorDate(false);
        setUserForm({ ...userForm, birthDate: event });
      }
    } else {
      setUserForm({ ...userForm, documentIssueDate: event });
    }
  };

  const handleSelectGender = (event) => {
    const { defaultValue } = event.target;
    const newUserForm = { ...userForm };

    newUserForm["genderId"] = defaultValue;
    setUserForm(newUserForm);
  };

  const handleChangeLoan = (event) => {
    const { id, value } = event.target;

    const newValue = value === "" ? "" : value.replace(/\D/g, "");
    if (newValue === "" || parseInt(newValue, 10) <= 5000000000) {
      setLoanForm((prevLoanForm) => ({
        ...prevLoanForm,
        [id]: newValue,
      }));
    }
  };

  const handleSelectLoan = (event) => {
    const { name, value } = event.target;
    const newLoanForm = { ...loanForm };

    newLoanForm[name] = value;
    setLoanForm(newLoanForm);
  };

  const handleChange = (event) => {
    const { id, value } = event.target;
    const newLoanForm = { ...loanForm };

    if (id === "loanNumber") {
      newLoanForm[id] = value.replace(/\D/g, "");
    } else {
      newLoanForm[id] = value;
    }
    setLoanForm(newLoanForm);
  };

  const handleSave = (close) => {
    if (Object.values(userForm).every((value) => value !== null)) {
      if (JSON.stringify(prevUserForm) !== JSON.stringify(userForm)) {
        updateClient.reset();
        updateClient.mutate(
          {
            clientId: clientId,
            formData: { ...userForm },
          },
          {
            onSuccess: () => {
              queryClient.invalidateQueries([
                "clientInfo",
                application?.clientId,
              ]);
              queryClient.invalidateQueries["clientInfo"];
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
                <ToastSuccess
                  message={"Datos del cliente validados con éxito"}
                />,
                { duration: 1000 }
              );
              setShowDrawer(false);
              queryClient.invalidateQueries(["historyList"]);
              queryClient.invalidateQueries(["LoanInformation"]);
            } else {
              dispatch(
                setLoanInfo({
                  loanBalance: loanForm.loanBalance,
                  monthlyCostInsurance: loanForm.monthlyCostInsurance,
                  loanType: loanTypeOptions.find(
                    (ele) => ele.value === loanForm.loanTypeId
                  )?.label,
                })
              );
              setShowDrawer(false);
              setShowDrawerQuote(true);
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
  };

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
    setInsurer(value);
    setYearlyFee("");
  };

  const handleChangeYearlyFee = (event) => {
    const { value } = event.target;
    setYearlyFee(value.replace(/\D/g, ""));
  };

  const handleSaveQuote = () => {
    saveQuote.reset();
    saveQuote.mutate(
      {
        formData: {
          insuranceName: insurersOptions.find((ele) => ele.value === insurer)
            ?.label,
          insuranceId: insurer,
          loanApplicationId: data?.data?.loanApplication.loanApplicationId,
          yearlyFee: parseNumber(
            bangkInsuranceData.find((ele) => ele.label === "Seguro anual")
              ?.value
          ),
        },
      },
      {
        onSuccess: (data) => {
          setShowDrawerQuote(false);
          setShowQuoteSuccess(true);
        },
        onError: (err) => {
          err.response.data.errors.map((error) => {
            toast.error(error);
          });
        },
      }
    );
  };

  const disabledButtons =
    Object.values(userForm).some((value) => value === "" || value === null) ||
    Object.entries(loanForm).some(
      ([key, value]) =>
        key !== "observations" &&
        (value === "" || value === null || value === 0)
    );

  const handleOpenSaved = () => {
    handleOpen();
    setSavedBankStatStatement(true);
  };

  const optionsButtons = (status) => {
    switch (status) {
      case "Revisión de extracto":
        return { label: "Ver extracto", onClick: handleOpen };
      case "Cotización enviada":
        return {
          label: "Ver cotización",
          onClick: () => setShowQuoteSuccess(true),
        };
      case "Formularios diligenciados":
        return {
          label: formsConcept.concept
            ? "Resolver novedad"
            : "Revisar formularios",
          onClick: () => setShowDrawerValidateInfo(true),
        };
      case "Formularios validados":
        return {
          label: "Ver formularios",
          onClick: () => setShowDrawerValidateInfo(true),
        };
      default:
        break;
    }
  };

  const optionsOtherButtons = (status) => {
    switch (status) {
      case "Revisión de extracto":
        return { label: "Ver extracto", onClick: handleOpenSaved };
      case "Cotización enviada":
        return {
          label: "Ver cotización",
          onClick: () => setShowQuoteSuccess(true),
        };
      case "Formularios diligenciados":
        return {
          label: formsConcept.concept
            ? "Resolver novedad"
            : "Revisar formularios",
          onClick: () => setShowDrawerValidateInfo(true),
        };
      case "Formularios validados":
        return {
          label: "Ver formularios",
          onClick: () => setShowDrawerValidateInfo(true),
        };
      default:
        break;
    }
  };

  const principalButtons = [
    "Revisión de extracto",
    "Cotización enviada",
    "Formularios diligenciados",
    "Formularios validados",
  ];

  const secondaryButtons = [
    "Revisión de extracto",
    "Cotización enviada",
    "Formularios validados",
  ];

  const designStepper = (status) => {
    switch (status) {
      case "Pending":
        return { icon: pending, lineColor: theme.colors.green500 };
      case "Alert":
        return { icon: alert, lineColor: theme.colors.yellow600 };
      case "Error":
        return { icon: error, lineColor: theme.colors.error };
      case "Success":
        return { icon: success, lineColor: theme.colors.green500 };
      default:
        return { icon: success, lineColor: theme.colors.green500 };
    }
  };

  const validation = (status) => {
    switch (status) {
      case 1:
        return {
          background: theme.colors.yellow100,
          color: theme.colors.yellow600,
          label: "Presenta una novedad",
          icon: alertIcon,
        };
      case 2:
        return {
          background: theme.colors.error100,
          color: theme.colors.error,
          label: "Cliente no apto",
          icon: cancelIcon,
        };
      case 3:
      case 4:
        return {
          background: theme.colors.error100,
          color: theme.colors.error,
          label: "Error en la comunicación",
          icon: alertIconError,
        };
      default:
        return {
          background: theme.colors.white,
          color: theme.colors.white,
          label: "",
          icon: "",
        };
    }
  };

  const handleRetry = (status) => {
    if (status === "Estudio lista restrictiva SBS") {
      validationSBS.reset();
      validationSBS.mutate(
        applications?.selectedApplication?.loanApplicationId,
        {
          onSuccess: (data) => {
            queryClient.invalidateQueries(["historyList"]);
            queryClient.invalidateQueries(["LoanInformation"]);
          },
          onError: (err) => {
            err.response.data.errors.map((error) => {
              toast.error(error);
            });
          },
        }
      );
    } else {
      validationSarlaft.reset();
      validationSarlaft.mutate(
        applications?.selectedApplication?.loanApplicationId,
        {
          onSuccess: (data) => {
            queryClient.invalidateQueries(["historyList"]);
            queryClient.invalidateQueries(["LoanInformation"]);
          },
          onError: (err) => {
            err.response.data.errors.map((error) => {
              toast.error(error);
            });
          },
        }
      );
    }
  };

  const handleResolve = (status) => {
    setShowDrawerNovelty(true);
    setStatusName(status);
  };

  const handleCloseDrawerNovelty = () => {
    setShowDrawerNovelty(false);
    setStatusName("");
    setComments("");
  };

  const handleChangeComments = (event) => {
    const { value } = event.target;
    setComments(value);
  };

  const handleSaveComments = () => {
    const formData = {
      loanApplicationId: applications?.selectedApplication?.loanApplicationId,
      comments: comments,
    };

    addNoveltyComments.reset();
    addNoveltyComments.mutate(formData, {
      onSuccess: (data) => {
        queryClient.invalidateQueries(["historyList"]);
        queryClient.invalidateQueries(["LoanInformation"]);
        setShowDrawerNovelty(false);
        setStatusName("");
        setComments("");
      },
      onError: (err) => {
        err.response.data.errors.map((error) => {
          toast.error(error);
        });
      },
    });
  };

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
        allianzRule={allianzRule}
      />
      <DrawerQuoteSuccess
        showDrawer={showQuoteSuccess}
        closeDrawer={handleCloseQuoteSuccess}
        loanInfo={
          Object.keys(loanInfo).length === 0 ? loanApplicationInfo : loanInfo
        }
        insurer={
          Object.keys(loanInfo).length === 0
            ? dataLoanApplication?.data?.insuraceCurrierName
            : insurersOptions.find((ele) => ele.value === insurer)?.label
        }
        currentInsuranceData={currentInsuranceData}
        bangkInsuranceData={bangkInsuranceData}
        saveValue={saveValue}
      />
      <DrawerValidateInfo
        showDrawer={showDrawerValidateInfo}
        setShowDrawerValidateInfo={setShowDrawerValidateInfo}
        loanApplicationId={applications?.selectedApplication?.loanApplicationId}
        isValidated={historyInfo.some(
          (item) => item.status === "Formularios validados"
        )}
      />
      <DrawerNovelty
        showDrawer={showDrawerNovelty}
        closeDrawer={handleCloseDrawerNovelty}
        statusName={statusName}
        handleSave={handleSaveComments}
        handleChange={handleChangeComments}
        isLoading={addNoveltyComments.isLoading}
        comments={comments}
      />
      <Div width="24px" direction="column">
        {historyInfo.map((ele, indx) => (
          <Div key={indx} direction="column" align="center">
            <Image alt="icon" src={designStepper(ele.statusCard)?.icon} />
            {indx < historyInfo.length - 1 && (
              <DashedLine color={designStepper(ele.statusCard)?.lineColor} />
            )}
          </Div>
        ))}
      </Div>
      <Col gap="16px">
        {historyInfo.map((ele, indx) => (
          <Card key={indx} style={{ flexDirection: "column" }} height="auto">
            {((ele.status === "Formularios diligenciados" &&
              formsConcept.concept) ||
              ele.status === "Cliente no asegurable") && (
              <Div
                background={theme.colors.yellow100}
                radius="4px"
                p="6px 10px"
                m="0 0 16px 0"
              >
                <Row gap="4px" align="center">
                  <Image alt="alert" src={alertIcon} width={16} height={16} />
                  <Text
                    color={theme.colors.yellow600}
                    font={theme.fonts.family.primaryMedium}
                    size={theme.fonts.size.sm}
                  >
                    Presenta novedad{" "}
                  </Text>
                </Row>
              </Div>
            )}
            {ele.validationClientResult !== 0 &&
              ele.validationClientResult !== null && (
                <Div
                  background={validation(ele.validationClientResult).background}
                  radius="4px"
                  p="6px 10px"
                  m="0 0 16px 0"
                >
                  <Row gap="4px" align="center">
                    <Image
                      alt="alert"
                      src={validation(ele.validationClientResult).icon}
                      width={16}
                      height={16}
                    />
                    <Text
                      color={validation(ele.validationClientResult).color}
                      font={theme.fonts.family.primaryMedium}
                      size={theme.fonts.size.sm}
                    >
                      {validation(ele.validationClientResult).label}{" "}
                    </Text>
                  </Row>
                </Div>
              )}
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
                  {ele.status === "Formularios diligenciados" &&
                  formsConcept.concept ? (
                    <Col>
                      {formsConcept.comments
                        .split(",")
                        .map((comment, index) => (
                          <Text
                            key={index}
                            color={theme.colors.neutralGray900}
                            font={theme.fonts.family.primary}
                            size={theme.fonts.size.md}
                          >{`\u2022 ${comment.trim()}`}</Text>
                        ))}
                    </Col>
                  ) : (
                    <Text
                      color={theme.colors.neutralGray900}
                      font={theme.fonts.family.primary}
                      size={theme.fonts.size.md}
                    >
                      {ele.status === "Cotización rechazada"
                        ? `Motivo de rechazo: ${ele.observations}`
                        : ele.observations}
                    </Text>
                  )}
                </Col>
              </Grid>
              <Grid item md={2.5}>
                {historyInfo.length > 0 &&
                  indx === 0 &&
                  principalButtons.includes(ele.status) &&
                  ele.status !== "Cotización enviada" &&
                  ele.status !== "Formularios validados" && (
                    <Div height="100%" justify="end" align="center">
                      <Button
                        background={theme.colors.green900}
                        hover={theme.colors.green900}
                        borderHover={theme.colors.green900}
                        font={theme.fonts.family.primaryBold}
                        width={"200px"}
                        height={"40px"}
                        onClick={optionsButtons(ele.status)?.onClick}
                      >
                        {optionsButtons(ele.status)?.label}
                      </Button>
                    </Div>
                  )}
                {historyInfo.length > 2 &&
                  indx === 0 &&
                  (ele.status === "Cotización enviada" ||
                    ele.status === "Formularios validados") && (
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
                        onClick={optionsOtherButtons(ele.status)?.onClick}
                      >
                        {optionsOtherButtons(ele.status)?.label}
                      </Button>
                    </Div>
                  )}
                {historyInfo.length > 2 &&
                  indx !== 0 &&
                  secondaryButtons.includes(ele.status) && (
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
                        onClick={optionsOtherButtons(ele.status)?.onClick}
                      >
                        {optionsOtherButtons(ele.status)?.label}
                      </Button>
                    </Div>
                  )}
                {(ele.validationClientResult === 1 ||
                  ele.validationClientResult === 4) && (
                  <Div height="100%" justify="end" align="center">
                    <Button
                      background={theme.colors.green900}
                      hover={theme.colors.green900}
                      borderHover={theme.colors.green900}
                      font={theme.fonts.family.primaryBold}
                      width={"200px"}
                      height={"40px"}
                      onClick={
                        ele.validationClientResult === 1
                          ? () => handleResolve(ele.status)
                          : () => handleRetry(ele.status)
                      }
                      disabled={
                        ele.validationClientResult === 4 &&
                        (validationSBS.isLoading || validationSarlaft.isLoading)
                      }
                    >
                      {ele.validationClientResult === 1
                        ? "Resolver novedad"
                        : "Reintentar"}
                    </Button>
                  </Div>
                )}
              </Grid>
            </Grid>
          </Card>
        ))}
      </Col>
    </Row>
  );
};
