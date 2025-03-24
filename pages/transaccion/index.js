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

const TransactionState = ({ isMobile }) => {
  const router = useRouter();
  const { paymentMethod, requestId, payAssistance } = router.query;
  const [loadingPayment, setLoadingPayment] = useState(true);

  const petAssistance = payAssistance === "pet";

  const getTrxBancolombiaStatus = useGetTrxBancolombiaStatus(
    paymentMethod === "bancolombia" && requestId
  );
  const { data: dataBancolombia } = getTrxBancolombiaStatus;
  useEffect(() => {
    if (dataBancolombia?.data?.result?.data?.status === "APPROVED") {
      setLoadingPayment(false);
    }
  }, [dataBancolombia]);

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
    { label: "Número de transacción:", value: "" },
    { label: "Estado de la transacción:", value: returnStatus("") },
    { label: "Fecha de la transacción:", value: "" },
    { label: "Receptor", value: "" },
    { label: "Monto pagado:", value: "" },
    { label: "Completada el:", value: "" },
    { label: "Método de pago:", value: "" },
  ];

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
            Esperando respuesta de la transacción
          </Text>
        </Div>
      )}

      <Wrapper>
        <Div direction="column" width={isMobile ? "100%" : "577px"}>
          <Text
            font={theme.fonts.family.primaryBold}
            color={petAssistance ? theme.colors.blue200 : theme.colors.green1000}
            size={isMobile ? theme.fonts.size.h1 : theme.fonts.size.h2}
          >
            Detalles de la transacción
          </Text>
          <Card>
            {transactionDetails.map((detail, index) => (
              <Div 
                key={index}
                justify="space-between" 
                margin="0 0 15px 0"
              >
                <Text
                  font={theme.fonts.family.primary}
                  color={theme.colors.gray150}
                  size={isMobile ? theme.fonts.size.default2 : theme.fonts.size.h6}
                >
                  {detail.label}
                </Text>

                <Text
                  font={theme.fonts.family.primaryMedium}
                  color={theme.colors.gray150}
                  size={isMobile ? theme.fonts.size.default2 : theme.fonts.size.h6}
                >
                  {detail.value}
                </Text>
              </Div>
            ))}
            <Button {...buttonProps} style={{ marginTop: "30px" }}>
              Volver al inicio
            </Button>
          </Card>
        </Div>
      </Wrapper>
    </>
  );
};

export default TransactionState;
