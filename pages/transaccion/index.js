import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { Div, Text } from "@/styles/Common";
import { CircularProgress } from "@mui/material";
import { theme } from "@/styles/theme";
import { Card, Wrapper } from "./styles";
import useGetTrxBancolombiaStatus from "@/hooks/WompiPayment/useGetTrxBancolombiaStatus";

const TransactionState = ({ isMobile }) => {
  const router = useRouter();
  const { paymentMethod, requestId } = router.query;
  const [loadingPayment, setLoadingPayment] = useState(true);

  const getTrxBancolombiaStatus = useGetTrxBancolombiaStatus(
    paymentMethod === "bancolombia" && requestId
  );
  const { data: dataBancolombia } = getTrxBancolombiaStatus;
  useEffect(() => {
    if (dataBancolombia?.data?.result?.data?.status === "APPROVED") {
      setLoadingPayment(false);
    }
  }, [dataBancolombia]);

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
        <Text
          font={theme.fonts.family.primaryBold}
          color={theme.colors.green1000}
          size={isMobile ? theme.fonts.size.h1 : theme.fonts.size.lgs}
        >
          Detalles de la transacción
        </Text>
        <Card></Card>
      </Wrapper>
    </>
  );
};

export default TransactionState;
