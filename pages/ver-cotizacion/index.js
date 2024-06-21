import React, { useState } from "react";
import { Container } from "@/components/ViewQuote/styles";
import useReSendCode from "@/hooks/QuoteSavings/useReSendCode";
import { useDispatch, useSelector } from "react-redux";
import toast from "react-hot-toast";
import { setEmailStore, setValidCode } from "@/store/balance";
import { ValidateInfo } from "@/components/ViewQuote/ValidateInfo";
import { ValidateInfoMobile } from "@/components/ViewQuote/ValidateInfoMobile";
import { setSelectedRequestInformation } from "@/store/requests";
import { useRouter } from "next/router";

const ValidateIdentity = ({ isMobile, isTablet }) => {
  const router = useRouter();
  const { email, requestId } = router.query;

  const dispatch = useDispatch();
  const reSendCode = useReSendCode();

  dispatch(setSelectedRequestInformation(requestId));

  const handleSend = () => {
    reSendCode.reset();
    reSendCode.mutate(email, {
      onSuccess: (res) => {
        dispatch(setValidCode(res.data.code));
        dispatch(setEmailStore(email))
        router.push(`/validacion-identidad?source=quote`);
      },
      onError: (err) => {
        err.response.data.map((error) => {
          toast.error(error);
        });
      },
    });
  };

  return (
    <Container>
      {isMobile ? (
        <ValidateInfoMobile
          isMobile={isMobile}
          email={email}
          handleSend={handleSend}
          reSendCode={reSendCode}
        />
      ) : (
        <ValidateInfo
          email={email}
          handleSend={handleSend}
          reSendCode={reSendCode}
        />
      )}
    </Container>
  );
};

export default ValidateIdentity;
