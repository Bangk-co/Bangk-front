/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { Header } from "@/components/Common/Header";
import { Col, Div, Text } from "@/styles/Common";
import { theme } from "@/styles/theme";
import {
  Container,
  InputCode,
  WrapperCodeNumber,
  WrapperCounter,
  WrapperError,
  WrapperQuote,
  WrapperReSend,
} from "@/styles/Quote";
import phoneIcon from "@/assets/icons/phone-code.svg";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import { decrypt } from "@/utilities/helpers";
import clock from "@/assets/icons/clock.svg";
import { LinkButton } from "@/components/Common/LinkButton";
import { Button } from "@/components/Common/Button";
import arrowBack from "@/assets/icons/big-arrow-back-yellow.svg";
import useReSendCode from "@/hooks/QuoteSavings/useReSendCode";
import toast from "react-hot-toast";
import { setEmailStore, setValidCode } from "@/store/balance";

const ValidateUser = ({ isMobile, isTablet }) => {
  const reSendCode = useReSendCode();
  const router = useRouter();
  const dispatch = useDispatch()
  const { source } = router.query;
  const { userInfo, validCode, email: emailStore } = useSelector((state) => state)?.balance;
  const successCode = validCode ? decrypt(validCode) : null;
  const [code, setCode] = useState([
    { id: "first", value: "" },
    { id: "second", value: "" },
    { id: "third", value: "" },
    { id: "fourth", value: "" },
  ]);
  const [finalCode, setFinalCode] = useState(null);
  const [isCodeSuccess, setIsCodeSuccess] = useState(null);
  const [timeLeft, setTimeLeft] = useState(180);
  const [showResendButton, setShowResendButton] = useState(false);
  const [isReSend, setIsResend] = useState(false);
  const [forceUpdate, setForceUpdate] = useState(false);

  useEffect(() => {
    if (timeLeft > 0) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timer);
    } else {
      setShowResendButton(true);
    }
  }, [timeLeft]);

  useEffect(() => {
    if (finalCode) {
      if (successCode === finalCode) {
        setIsCodeSuccess(true);
        setForceUpdate(!forceUpdate);
      } else {
        setIsCodeSuccess(false);
        setForceUpdate(!forceUpdate);
      }
    } else {
      setIsCodeSuccess(null);
      setForceUpdate(!forceUpdate);
    }
  }, [finalCode, successCode]);

  useEffect(() => {
    if (code.every((ele) => ele.value !== "")) {
      const number = code.map((elem) => elem.value).join("");
      setFinalCode(number);
      setForceUpdate(!forceUpdate);
    }
  }, [code]);

  const hideEmailUsername = (email) => {
    if (email) {
      const [username, domain] = email.split("@");
      const hiddenUsername =
        username.slice(0, 1) + "*".repeat(username.length - 1);
      return `${hiddenUsername}@${domain}`;
    }
    return "";
  };

  const email = hideEmailUsername(userInfo.email);

  const focusInputs = (value, indx) => {
    if (value !== "" && indx < (code.length - 1)) {
      const nextInput = code[indx + 1]?.id
      document.getElementById(nextInput).focus()
    } else if (value === "" && indx !== 0) {
      const nextInput = code[indx - 1]?.id
      document.getElementById(nextInput).focus()
    }
  }

  const handleChange = (event, indx) => {
    const { value } = event.target;
    const newCode = [...code];

    newCode[indx].value = value.replace(/\D/g, '');
    setCode(newCode);
    focusInputs(value, indx)
    setIsCodeSuccess(null);
    setIsResend(false);
    setForceUpdate(!forceUpdate);
  };

  const handleResendCode = () => {
    const email = source === "quote" ? emailStore : userInfo.email;
    reSendCode.reset();
    reSendCode.mutate(email, {
      onSuccess: (res) => {
        dispatch(setValidCode(res.data.code))
        setIsCodeSuccess(null);
        setIsResend(true);
        setTimeLeft(180);
        setShowResendButton(false);
        setForceUpdate(!forceUpdate);
      },
      onError: (err) => {
        err.response.data.map((error) => {
          toast.error(error);
        });
      },
    });
  };

  const borderWrapper = (key) => {
    switch (key) {
      case true:
        return `3px solid ${theme.colors.yellow500}`;
      case false:
        return `3px solid ${theme.colors.error}`;
      default:
        return `none`;
    }
  };

  const handleBack = () => {
    if (source === "quote") {
      router.push("/ver-cotizacion");
    } else {
      router.push("/cotiza-tu-ahorro/diligencia-tus-datos");
    }
  };

  const handleContinue = () => {
    if (source === "quote") {
      router.push("/ver-cotizacion/informacion-cotizacion");
      dispatch(setEmailStore(""))
    } else {
      router.push("/cotiza-tu-ahorro/tu-credito");
    }
  };

  return (
    <Container>
      <Header isMobile={isMobile} />
      <WrapperQuote style={{ minHeight: "calc(100vh - 66px)" }}>
        <Div justify="center" width="100%">
          <Col align="center" width={isMobile ? "312px" : "549px"}>
            <Image alt="phone" src={phoneIcon} />
            <Text
              color={theme.colors.white}
              size={isMobile ? theme.fonts.size.h5 : theme.fonts.size.h3}
              font={theme.fonts.family.primaryBold}
              weight={theme.fonts.weight.bold}
              mt="20px"
            >
              Validemos tu identidad
            </Text>
            <Text
              color={theme.colors.white}
              size={isMobile ? theme.fonts.size.sm : theme.fonts.size.default2}
              align="-webkit-left"
              mt="12px"
            >
              {`Por tu seguridad, por favor ingresa el código que te hemos enviado al correo electrónico ${email}`}
            </Text>
            <Div gap={isMobile ? "18px" : "24px"} m="32px 0 0 0">
              {code.map((ele, indx) => (
                <WrapperCodeNumber
                  key={indx}
                  style={{ border: borderWrapper(isCodeSuccess) }}
                >
                  <InputCode
                    autoFocus={indx === 0 && true}
                    pattern="\d"
                    inputMode="numeric"
                    id={ele.id}
                    value={ele.value}
                    onChange={(event) => handleChange(event, indx)}
                    maxLength={1}
                    style={{
                      color:
                        isCodeSuccess === false
                          ? theme.colors.error
                          : theme.colors.black,
                      fontFamily: theme.fonts.family.primaryBold
                    }}
                  />
                </WrapperCodeNumber>
              ))}
            </Div>
            {isCodeSuccess === false && (
              <WrapperError>
                <Text color={theme.colors.error800} size={theme.fonts.size.xs}>
                  Código incorrecto
                </Text>
              </WrapperError>
            )}
            {isReSend && (
              <WrapperReSend>
                <Text
                  color={theme.colors.green900}
                  size={
                    isMobile ? theme.fonts.size.xs : theme.fonts.size.default2
                  }
                >
                  Hemos reenviado el código a tu correo
                </Text>
              </WrapperReSend>
            )}
            <WrapperCounter
              style={{
                background: showResendButton
                  ? theme.colors.error
                  : theme.colors.primary900,
              }}
            >
              <Image alt="clock" src={clock} />
              <Text
                color={theme.colors.white}
                size={theme.fonts.size.ft}
                font={theme.fonts.family.primaryBold}
                weight={theme.fonts.weight.bold}
              >
                {Math.floor(timeLeft / 60)}:
                {String(timeLeft % 60).padStart(2, "0")}
              </Text>
            </WrapperCounter>

            <LinkButton
              width={"254px"}
              font={theme.fonts.family.primaryBold}
              size={theme.fonts.size.default2}
              weight={theme.fonts.weight.bold}
              color={theme.colors.yellow500}
              style={{
                textDecoration: "underline",
              }}
              onClick={handleResendCode}
              disabled={!showResendButton}
            >
              Reenviar código
            </LinkButton>
            <Div m="46px 0 0 0" justify="space-between" width="100%">
              <Button
                font={theme.fonts.family.primaryBold}
                background={theme.colors.green900}
                border={theme.colors.yellow500}
                hover={theme.colors.terciary50}
                borderHover={theme.colors.yellow500}
                colorHover={theme.colors.green900}
                labelColor={theme.colors.yellow500}
                labelWeight={theme.fonts.weight.bold}
                size={theme.fonts.size.default2}
                borderHeight={"3px solid"}
                width={isMobile ? "56px" : "113px"}
                mobileWidth={"56px"}
                height={"40px"}
                onClick={handleBack}
              >
                <Image
                  alt="arrow"
                  src={arrowBack}
                  style={{ marginRight: "4px" }}
                />
                {isMobile ? "" : "Atrás"}
              </Button>
              <Button
                font={theme.fonts.family.primaryBold}
                background={theme.colors.yellow500}
                hover={theme.colors.yellow500}
                borderHover={theme.colors.yellow500}
                labelColor={theme.colors.green900}
                labelWeight={theme.fonts.weight.bold}
                size={theme.fonts.size.default2}
                width={isMobile ? "224px" : "300px"}
                mobileWidth={"224px"}
                height={"40px"}
                radius={"40px"}
                disabled={!isCodeSuccess}
                onClick={handleContinue}
              >
                Validar y continuar
              </Button>
            </Div>
          </Col>
        </Div>
      </WrapperQuote>
    </Container>
  );
};

export default ValidateUser;
