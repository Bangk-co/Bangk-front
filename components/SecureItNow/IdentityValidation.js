import React, { useEffect, useState } from "react";
import { Card, InputCode, WrapperCodeNumber, WrapperCounter, WrapperError, WrapperReSend } from "./styles";
import { Col, Div, Text } from "@/styles/Common";
import Image from "next/image";
import phoneIcon from "@/assets/icons/phone-code-blue.svg";
import clock from "@/assets/icons/clock.svg";
import { Button } from "@/components/Common/Button";
import { theme } from "@/styles/theme";
import useReSendCode from "@/hooks/QuoteSavings/useReSendCode";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { setValidCode } from "@/store/balance";
import { Link } from "../Common/Link";
import { decrypt } from "@/utilities/helpers";

export const IdentityValidation = ({ 
  email: userEmail, 
  isMobile, 
  handleContinue,
}) => {
  const reSendCode = useReSendCode();
  const router = useRouter();
  const dispatch = useDispatch();
  const {
    validCode,
  } = useSelector((state) => state)?.balance;
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
  const [sendCodeConfirmInfo, setSendCodeConfirmInfo] = useState(true);
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

  const email = hideEmailUsername(userEmail);

  const focusInputs = (value, indx) => {
    if (value !== "" && indx < code.length - 1) {
      const nextInput = code[indx + 1]?.id;
      document.getElementById(nextInput).focus();
    } else if (value === "" && indx !== 0) {
      const nextInput = code[indx - 1]?.id;
      document.getElementById(nextInput).focus();
    }
  };

  const handleChange = (event, indx) => {
    const { value } = event.target;
    const newCode = [...code];

    newCode[indx].value = value.replace(/\D/g, "");
    setCode(newCode);
    focusInputs(value, indx);
    setIsCodeSuccess(null);
    setIsResend(false);
    setForceUpdate(!forceUpdate);
  };

  const handleResendCode = () => {
    const email = userEmail;
    reSendCode.reset();
    reSendCode.mutate(email, {
      onSuccess: (res) => {
        dispatch(setValidCode(res.data.code));
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
        return `3px solid ${theme.colors.yellow}`;
      case false:
        return `3px solid ${theme.colors.error}`;
      default:
        return `none`;
    }
  };

  return (
    <Card style={{ padding: isMobile ? "20px" : "40px" }}>
      <Div justify="center" width="100%">
        <Col align="center" width={isMobile ? "312px" : "549px"}>
          <Image alt="phone" src={phoneIcon} />
          <Text
            color={theme.colors.orange500}
            size={isMobile ? theme.fonts.size.h5 : theme.fonts.size.h3}
            font={theme.fonts.family.primaryBold}
            weight={theme.fonts.weight.bold}
            mt="20px"
          >
            Validemos tu identidad
          </Text>
          <Text
            color={theme.colors.gray1000}
            size={isMobile ? theme.fonts.size.sm : theme.fonts.size.default2}
            align="center"
            mt="12px"
            style={{ width: "90%" }}
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
                    fontFamily: theme.fonts.family.primaryBold,
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
                : theme.colors.blue200,
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

          <Link
            width={"254px"}
            font={theme.fonts.family.primaryBold}
            size={theme.fonts.size.default2}
            weight={theme.fonts.weight.bold}
            color={theme.colors.yellow}
            style={{
              textDecoration: "underline",
            }}
            onClick={handleResendCode}
            disabled={!showResendButton}
          >
            Reenviar código
          </Link>
          <Div
            m="46px 0 0 0"
            justify="center"
            width="100%"
          >
            <Button
              font={theme.fonts.family.primaryBold}
              background={theme.colors.orange500}
              hover={theme.colors.orange500}
              border={theme.colors.orange500}
              borderHover={theme.colors.orange500}
              labelColor={theme.colors.white}
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
    </Card>
  )
};