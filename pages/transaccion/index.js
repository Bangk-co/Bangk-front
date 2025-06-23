import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { Div, Text } from "@/styles/Common";
import { CircularProgress } from "@mui/material";
import { theme } from "@/styles/theme";
import { Card, Wrapper, WrapperStatus } from "@/styles/Transaction";
import useGetTrxBancolombiaStatus from "@/hooks/WompiPayment/useGetTrxBancolombiaStatus";
import { Button } from "@/components/Common/Button";
import checkIcon from "@/assets/icons/check.svg";
import closeErrorIcon from "@/assets/icons/close-error.svg";
import Image from "next/image";
import { formattedDate, numberFormat } from "@/utilities/helpers";
import { useDispatch, useSelector } from "react-redux";
import { setPaymentInfo } from "@/store/payment";
import { setMedFormInfo } from "@/store/med";
import useBancolombiaPayment from "@/hooks/WompiPayment/useBancolombiaPayment";
import useGetStatusTransaction from "@/hooks/WompiPayment/useGetStatusTransaction";
import { setPetsFormInfo } from "@/store/pets";

const TransactionState = ({ isMobile }) => {
  const router = useRouter();
  const { paymentMethod, payAssistance } = router.query;
  const dispatch = useDispatch();
  const { paymentInfo } = useSelector((state) => state.payment);
  const { medForm } = useSelector((state) => state.med);
  const { petsForm } = useSelector((state) => state.pets);
  const bancolombiaPayment = useBancolombiaPayment();

  const [loadingPayment, setLoadingPayment] = useState(true);
  const [transactionReference, setTransactionReference] = useState(null);
  const [transactionInfo, setTransactionInfo] = useState({});
  const [hasErrors, setHasErrors] = useState(false);
  const [forceUpdate, setForceUpdate] = useState(false);

  const petAssistance =
    payAssistance === "pet" || (petsForm && Object.keys(petsForm).length !== 0);
  const medAssistance =
    payAssistance === "med" || (medForm && Object.keys(medForm).length !== 0);

  const formToSend =
    medForm && Object.keys(medForm).length !== 0 ? medForm : petsForm;

  const getTrxBancolombiaStatus = useGetTrxBancolombiaStatus(
    paymentMethod === "bancolombia" && formToSend?.bancolombiaToken
  );
  const { data: dataBancolombia, isSuccess: isSuccessBancolombia } =
    getTrxBancolombiaStatus;

  useEffect(() => {
    if (
      isSuccessBancolombia &&
      dataBancolombia?.data?.result?.data?.status === "APPROVED"
    ) {
      const bancolombiaForm = {
        email: formToSend?.email,
        name: formToSend?.name,
        applicationId: formToSend?.applicationId,
        documentIdentificationType: formToSend?.documentTypeId,
        documentIdentificationNumber: formToSend?.documentNumber,
        tokenPayment: formToSend?.bancolombiaToken,
        amount: 4990000, // TODO change for production formToSend?.amount,
        typeApplication: medAssistance ? "MED" : "PET",
        timeApplication: formToSend?.paymentOcurrencyId,
        paymentSourceId: 0,
      };
      bancolombiaPayment.reset();
      bancolombiaPayment.mutate(bancolombiaForm, {
        onSuccess: (resPayment) => {
          if (!resPayment?.data?.hasErrors) {
            setTransactionReference(
              resPayment?.data?.result?.transactionReference
            );
            setTransactionInfo({
              idNumber: resPayment?.data?.result?.transactionReference,
              transactionDate: dataBancolombia?.data?.result?.data?.updated_At,
              status: dataBancolombia?.data?.result?.data?.status,
              receptor: "Building Life Technologies SAS",
              paymentAmount: formToSend?.amount,
              payment: `${dataBancolombia?.data?.result?.data?.bank_Account_Type} ${dataBancolombia?.data?.result?.data?.bank_Account_Last_Four}`,
            });
          } else {
            if (loadingPayment) {
              setHasErrors(true);
              setLoadingPayment(false);
              setForceUpdate(!forceUpdate);
            }
          }
        },
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dataBancolombia, isSuccessBancolombia, medForm, petsForm]);

  const getStatusTransaction = useGetStatusTransaction(transactionReference);
  const { data: dataStatusTransaction, isSuccess: isSuccessStatusTransaction } =
    getStatusTransaction;
  useEffect(() => {
    if (
      isSuccessStatusTransaction &&
      dataStatusTransaction?.data?.result === "APPROVED"
    ) {
      setLoadingPayment(false);
    }
  }, [dataStatusTransaction, isSuccessStatusTransaction]);

  useEffect(() => {
    if (paymentInfo && Object.keys(paymentInfo).length > 0) {
      setLoadingPayment(false);
      setTransactionInfo(paymentInfo);
      setForceUpdate(!forceUpdate);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [paymentInfo]);

  const buttonProps = {
    background: theme.colors.orange1000,
    labelColor: theme.colors.white,
    font: theme.fonts.family.primary,
    size: theme.fonts.size.h6,
    border: theme.colors.orange1000,
    hover: theme.colors.orange1000,
    borderHover: theme.colors.orange1000,
    height: "40px",
    borderRadius: "50px",
    width: isMobile ? "100%" : "161px",
  };

  const returnStatus = (status) => {
    if (status === "APPROVED") {
      return (
        <WrapperStatus
          background={theme.colors.success}
          color={theme.colors.green1000}
        >
          <Image src={checkIcon} alt="check" />
          Aprobada
        </WrapperStatus>
      );
    } else {
      return (
        <WrapperStatus
          background={theme.colors.error1000}
          color={theme.colors.error1100}
        >
          <Image src={closeErrorIcon} alt="close" />
          Rechazada
        </WrapperStatus>
      );
    }
  };
  const transactionDetails = [
    { label: "Número de transacción:", value: transactionInfo?.idNumber },
    {
      label: "Estado de la transacción:",
      value: returnStatus(transactionInfo?.status),
    },
    {
      label: "Fecha de la transacción:",
      value: formattedDate(transactionInfo?.transactionDate),
    },
    {
      label: petAssistance || medAssistance ? "Destinatario" : "Receptor",
      value: transactionInfo?.receptor,
    },
    {
      label: "Monto pagado:",
      value: `$${numberFormat(transactionInfo?.paymentAmount)}*`,
    },
    {
      label: "Método de pago:",
      value: transactionInfo?.payment,
    },
  ];

  const handleBack = () => {
    dispatch(setPaymentInfo({}));
    dispatch(setMedFormInfo({}));
    dispatch(setPetsFormInfo({}));
    router.push("/");
  };

  const handleRetry = () => {
    dispatch(setPaymentInfo({}));
    dispatch(setMedFormInfo({}));
    dispatch(setPetsFormInfo({}));
    router.push(
      petAssistance
        ? "/pet-bangk/asegura-ya/?selectedPlan=1&&petsAmount=1"
        : "/ahorra-en-tus-seguros/med-bangk/contrata/?selectedPlan=1&&planAmount=1"
    );
  };

  return (
    <>
      {loadingPayment && (
        <Div
          direction="column"
          gap="10px"
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 9999,
          }}
        >
          <CircularProgress style={{ color: theme.colors.white }} />
          <Text
            font={theme.fonts.family.primaryMedium}
            color={theme.colors.white}
            size={isMobile ? theme.fonts.size.default2 : theme.fonts.size.h6}
          >
            Este proceso puede tardar unos minutos, por favor no cierres esta
            ventana...
          </Text>
        </Div>
      )}

      <Wrapper>
        <Div direction="column" width={isMobile ? "100%" : "577px"}>
          <Text
            font={theme.fonts.family.primaryBold}
            color={
              petAssistance ? theme.colors.blue200 : theme.colors.green1000
            }
            size={isMobile ? theme.fonts.size.h1 : theme.fonts.size.h2}
          >
            Detalles de la transacción
          </Text>

          <Card>
            {!hasErrors && transactionInfo?.status && (
              <>
                {transactionDetails.map((detail, index) => (
                  <Div key={index} justify="space-between" margin="0 0 15px 0">
                    <Text
                      font={theme.fonts.family.primary}
                      color={theme.colors.gray150}
                      size={
                        isMobile
                          ? theme.fonts.size.default2
                          : theme.fonts.size.h6
                      }
                    >
                      {detail.label}
                    </Text>

                    <Text
                      font={theme.fonts.family.primaryMedium}
                      color={theme.colors.gray150}
                      size={
                        isMobile
                          ? theme.fonts.size.default2
                          : theme.fonts.size.h6
                      }
                      align="right"
                      style={{
                        width: isMobile ? "150px" : "300px",
                        justifyItems: "right",
                        wordBreak: "break-word",
                        whiteSpace: "normal",
                        display: "block",
                        flexShrink: !isMobile ? 0 : null,
                      }}
                    >
                      {detail.value}
                    </Text>
                  </Div>
                ))}
                <Button
                  {...buttonProps}
                  style={{ marginTop: "30px" }}
                  onClick={handleBack}
                >
                  Volver al inicio
                </Button>
              </>
            )}
            {hasErrors && (
              <>
                <Text
                  font={theme.fonts.family.primary}
                  color={theme.colors.gray150}
                  size={
                    isMobile ? theme.fonts.size.default2 : theme.fonts.size.h6
                  }
                >
                  Ha ocurrido un error con el método de pago. Por favor
                  intentalo nuevamente
                </Text>
                <Button
                  {...buttonProps}
                  style={{ marginTop: "30px", width: "200px" }}
                  onClick={handleRetry}
                >
                  Volver a intentar
                </Button>
              </>
            )}
          </Card>
          <Text
            color={theme.colors.gray150}
            size={theme.fonts.size.default2}
            mt="20px"
          >
            *El valor de la asistencia se cobrará automáticamente a tu método de pago al inicio de cada período, de acuerdo con el plan que elijas. El valor ya incluye IVA
          </Text>
        </Div>
      </Wrapper>
    </>
  );
};

export default TransactionState;
