import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Button } from "@/components/Common/Button";
import { Checkbox } from "@/components/Common/Checkbox";
import { Link } from "@/components/Common/Link";
import { TextField } from "@/components/Common/TextField";
import { SetPasswordCard, WrapperForm } from "@/components/SetPassword/styles";
import { Col, Div, Row, Text } from "@/styles/Common";
import Image from "next/image";
import logo from "../../assets/icons/green-logo.svg";
import { theme } from "@/styles/theme";
import { useRouter } from "next/router";
import { Container } from "@/components/Login/styles";
import Banner from "@/components/Login/Banner";
import dayjs from "dayjs";
import useGetDocumentType from "@/hooks/Common/useGetDocumentType";
import { Select } from "@/components/Common/Select";
import { MenuItem } from "@mui/material";
import useCreateAccount from "@/hooks/Login/useCreateAccount";
import useSendCode from "@/hooks/QuoteSavings/useSendCode";
import { validateEmailRequired } from "@/utilities/validations";
import { ToastErrorClient } from "@/components/Common/ToastErrorClients";
import { setValidCode } from "@/store/balance";
import { setUserInfo } from "@/store/auth";


const CreateAccount = ({ isMobile, isTablet }) => {
  const router = useRouter();
  const dispatch = useDispatch();
  const create = useCreateAccount();
  const sendCode = useSendCode();
  const documentType = useGetDocumentType();
  const { data, isSuccess } = documentType;
  const [documentTypeOptions, setDocumentTypeOptions] = useState([]);
  const [terms, setTerms] = useState(false)
  const [termsDate, setTermsDate] = useState(null)
  const [formUser, setFormUser] = useState({
    email: "",
    name: "",
    lastName: "",
    documenIdentificationTypeId: 76,
    identificationNumber: "",
  })
  const [errorEmail, setErrorEmail] = useState({
    error: false,
    message: ""
  });

  const inputProps = {
    radius: "4px",
    width: "100%",
    height: "48px",
  }

  useEffect(() => {
    if (isSuccess && data?.data?.groupSettings.length > 0)
      setDocumentTypeOptions(
        data?.data?.groupSettings.map((ele) => ({
          label: ele.name,
          value: ele.id,
        }))
      );
  }, [data, isSuccess]);

  const handleTerms = (event) => {
    const { checked } = event.target;
    const currentDate = new Date();

    setTerms(checked);
    setTermsDate(dayjs(currentDate));
  };

  const handleLogin = () => {
    router.push("/iniciar-sesion")
  }

  const handleChange = (event) => {
    const { id, value } = event.target;
    const newInfo = { ...formUser};

    if (id === "identificationNumber") {
      if (formUser.documenIdentificationTypeId !== 78) {
        newInfo[id] = value.replace(/\D/g, "");
      } else {
        newInfo[id] = value;
      }
    } else {
      newInfo[id] = value;
    }

    if (id === "email") {
      setErrorEmail({
        error: false,
        message: ""
      })
    }

    setFormUser(newInfo);
  };

  const handleSelect = (event) => {
    const { name, value } = event.target;
    const newInfo = { ...formInfo };

    newInfo[name] = value;
    setFormInfo(newInfo);
  };

  const handleCreate = () => {
    const validation = validateEmailRequired.validate(formUser.email, {
      abortEarly: false,
    });

    if (validation.error) {
      setErrorEmail({
        error: true,
        message: "Formato inválido"
      })
    } else {
      sendCode.reset();
      sendCode.mutate(
        {
          email: formUser.email,
          identificationNumber: formUser.identificationNumber,
        },
        {
          onSuccess: (res) => {
            dispatch(setUserInfo({
              ...formUser, 
              clientId: 0,
              permissionTreatPersonalDataDate: termsDate,
              validateClientOtp: null
            }))
            dispatch(setValidCode(res.data.code));
            router.push(`/validacion-identidad?source=createAccount`);
            setErrorEmail({
              error: false,
              message: ""
            })
          },
          onError: (err) => {
            err.response.data.map((error) => {
              toast.custom(<ToastErrorClient message={`${error}`} />, {
                duration: 1000,
              });
            });
            setErrorEmail({
              error: false,
              message: ""
            })
          },
        }
      );
    }
  };

  const isFormValid = Object.values(formUser).every((value) => value !== "") && terms;

  return (
    <Container>
      {!isMobile && !isTablet && <Banner />}
      <WrapperForm>
        <SetPasswordCard>
          <Image alt="logo" src={logo} width={120} height={45} />
          <Col gap="16px" align="center" width="100%" m="40px 0 0 0">
            <Row gap="5px">
              <Text
                font={theme.fonts.family.primaryBold}
                size={theme.fonts.size.ft}
                weight={theme.fonts.weight.bold}
                color={theme.colors.gray900}
              >
                Crea tu{" "}
                <span style={{ color: theme.colors.orange, fontFamily: theme.fonts.family.primaryBold }}>cuenta</span>
              </Text>
            </Row>
            <Row width="100%" justify="center" m="16px 0 0 0">
              <TextField
                {...inputProps}
                placeholder={"Correo electrónico"}
                id="email"
                label="Correo*"
                onChange={handleChange}
                value={formUser.email}
                error={errorEmail.error}
                helper={errorEmail.error ? errorEmail.message : ""}
                helperColor={theme.colors.error}
              />
            </Row>
            <Row width="100%" justify="center" m="16px 0 0 0">
              <TextField
                {...inputProps}
                placeholder={"Escribir nombres"}
                id="name"
                label="Nombres*"
                onChange={handleChange}
                value={formUser.name}
                inputProps={{
                  maxLength: 50
                }}
              />
            </Row>
            <Row width="100%" justify="center" m="16px 0 0 0">
              <TextField
                {...inputProps}
                placeholder={"Escribir apellidos"}
                id="lastName"
                label="Apellidos*"
                onChange={handleChange}
                value={formUser.lastName}
                inputProps={{
                  maxLength: 50
                }}
              />
            </Row>
            <Row width="100%" justify="center" m="16px 0 0 0" gap="16px">
              <Div width="30%">
                <Select
                  {...inputProps}
                  label={"Tipo de documento*"}
                  name="documenIdentificationTypeId"
                  value={formUser.documenIdentificationTypeId}
                  onChange={handleSelect}
                >
                  {documentTypeOptions.map((ele, indx) => (
                    <MenuItem key={indx} value={ele.value} style={{ fontFamily: theme.fonts.family.primary }}>{ele.label}</MenuItem>
                  ))}
                </Select>
              </Div>
              <Div width="70%" m={isMobile ? "16px 0 0 0" : "0px"}>
                <TextField
                  {...inputProps}
                  label={"Número de documento*"}
                  placeholder={"Escribir número de documento"}
                  id="identificationNumber"
                  value={formUser.identificationNumber}
                  onChange={handleChange}
                  inputProps={{
                    maxLength: 15,
                    pattern: formUser.documentType !== 78 && "\\d*",
                    inputMode: formUser.documentType !== 78 && "numeric"
                  }}
                />
              </Div>
            </Row>

            <Row align="center" style={{ alignSelf: "stretch" }}>
              <Checkbox checked={terms} onChange={handleTerms} borderColor={theme.colors.neutralGray300} />
              <Text
                color={theme.colors.neutralGray900}
                size={theme.fonts.size.sm}
              >
                He leído y acepto los términos y condiciones de Bangk
              </Text>
            </Row>
            <Row width="100%" justify="center">
              <Button
                width="325px"
                background={theme.colors.green}
                hover={theme.colors.green}
                borderHover={theme.colors.green}
                font={theme.fonts.family.primaryBold}
                onClick={handleCreate}
                disabled={!isFormValid || !terms || sendCode.isLoading}
              >
                Crea tu cuenta
              </Button>
            </Row>
            <Div direction={isMobile ? "column" : "row"} m="8px 0 0 0" align="center" gap="8px">
              <Text 
                color={theme.colors.neutralGray900}
                size={theme.fonts.size.default2}
                weight={theme.fonts.weight.bold}
              >
                ¿Ya tienes una cuenta?
              </Text>
              <Link
                color={theme.colors.green}
                family={theme.fonts.family.primary}
                weight={theme.fonts.weight.medium}
                size={theme.fonts.size.default2}
                onClick={handleLogin}
                style={{ textDecoration: "underline" }}
              >
                Iniciar sesión
              </Link>
            </Div>
          </Col>
        </SetPasswordCard>
      </WrapperForm>
    </Container>
  )
};

export default CreateAccount;