import Image from "next/image";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { useRouter } from "next/router";
import { theme } from "@/styles/theme";
import { IconButton } from '@mui/material';
import { Text, Row, Col, Div } from "@/styles/Common";
import logo from "../../assets/icons/green-logo.svg";
import { TextField } from "@/components/Common/TextField";
import { Button } from "@/components/Common/Button";
import { Link } from "@/components/Common/Link";
import lock from "../../assets/icons/lock.svg";
import { SetPasswordCard, WrapperForm } from "./styles";
import { Checkbox } from "../Common/Checkbox";
import dayjs from "dayjs";
import eye from '@/assets/icons/eye.svg';
import eyeoff from '@/assets/icons/eyeoff.svg';
import checkSuccess from "@/assets/icons/check-green.svg"
import error from "@/assets/icons/close-red.svg"
import { setRequestInfo } from "@/store/requests";
import { encrypt, initDataLoanInsurancePolicy } from "@/utilities/helpers";
import useCreatePassword from "@/hooks/Login/useCreatePassword";
import { setAuthCredentials } from "@/store/auth";

const Form = ({ isMobile, isTablet, requestInfo }) => {
  const router = useRouter();
  const dispatch = useDispatch();
  const create = useCreatePassword();
  const [terms, setTerms] = useState(false)
  const [termsDate, setTermsDate] = useState(null)
  const [passwordForm, setPasswordForm] = useState({
    password: "",
    confirmPassword: ""
  });
  const [passwordError, setPasswordError] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  
  const handleClickShowPassword = (field) => {
    if (field === 'password') {
      setShowPassword((show) => !show);
    } else if (field === 'confirmPassword') {
      setShowConfirmPassword((show) => !show);
    }
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };  
  
  const [showValidationCriteria, setShowValidationCriteria] = useState(false);
  const [passwordValidationStatus, setPasswordValidationStatus] = useState({
      minLength: false,
      hasUpperCase: false,
      hasNumber: false,
      hasSpecialChar: false,
    });

  const passwordValidationText = {
    minLength: 'Mínimo 8 caracteres',
    hasUpperCase: 'Incluye una mayúscula',
    hasNumber: 'Incluye números',
    hasSpecialChar: 'Incluye al menos un caracter especial -+/',
  };

  const inputProps = {
    radius: "4px",
    width: "100%",
    height: "48px",
  }

  const handlePasswordChange = (event) => {
    const { value, id } = event.target;
    const hasUpperCase = /[A-Z]/.test(value);
    const hasNumber = /\d/.test(value);
    const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(value);
    setShowValidationCriteria(true);
    setPasswordValidationStatus({
      minLength: value.length >= 8,
      hasUpperCase,
      hasNumber,
      hasSpecialChar,
    });
    setPasswordForm({ ...passwordForm, [id]: value });
    if (!value) {
      setShowValidationCriteria(false);
    }
  };

  const handleTerms = (event) => {
    const { checked } = event.target;
    const currentDate = new Date();

    setTerms(checked);
    setTermsDate(dayjs(currentDate));
  };

  const handleSetPassword = () => {
    const passwordsMatch = passwordForm.password === passwordForm.confirmPassword;
  
    setPasswordError(!passwordsMatch);

    if (passwordsMatch) {
      create.reset();
      create.mutate(
        { 
          clientId: requestInfo.clienId, 
          password: encrypt(passwordForm.password),
          passwordConfirm: encrypt(passwordForm.confirmPassword) 
        },
        {
          onSuccess: () => {
            router.push("/establecer-contrasena/exitoso");
            dispatch(setAuthCredentials({
              email: requestInfo.email,
              password: encrypt(passwordForm.password),
            }));
            dispatch(setRequestInfo(initDataLoanInsurancePolicy));
          },
          onError: (err) => {
            err.response.data.map((error) => {
              toast.error(error);
            });
          },
        }
      );
    }
  };

  const handleLogin = () => {
    router.push("/iniciar-sesion")
  }

  const isValid = Object.values(passwordForm).every((value) => value !== "") && 
    /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*(),.?":{}|<>]).{8,}$/.test(passwordForm.password);

  const userData = [
    {
      title: "Email",
      value: requestInfo.email,
    },
    {
      title: "Documento de identidad",
      value: requestInfo.identificationNumber,
    },
    {
      title: "Nombres",
      value: requestInfo.name,
    },
    {
      title: "Apellidos",
      value: requestInfo.lastName,
    },
  ]

  return (
    <WrapperForm>
      <SetPasswordCard>
        <Image alt="logo" src={logo} width={120} height={45} />
        <Col gap="16px" align="center" width="100%" m="40px 0 0 0">
          <Div direction="column" gap="22px" style={{ alignSelf: 'flex-start', textAlign: 'justify' }}>
            {userData.map((ele, indx) => (
              <>
                <Div gap="8px" direction="column">
                  <Text
                    color={theme.colors.neutralGray900}
                    size={theme.fonts.size.sm}
                    font={theme.fonts.family.primaryBold}
                  >
                    {ele.title}
                  </Text>
                  <Text
                    color={theme.colors.neutralGray900}
                    size={theme.fonts.size.default2}
                    font={theme.fonts.family.primary}
                  >
                    {ele.value}
                  </Text>
                </Div>
              </>
            ))}
          </Div>
          <Row width="100%" justify="center">
            <TextField
              {...inputProps}
              placeholder={"Contraseña"}
              id="password"
              label="Contraseña*"
              type={showPassword ? 'text' : 'password'}
              suffix={
                <IconButton
                  onClick={() => handleClickShowPassword("password")}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {showPassword ? (
                    <Image alt="eyeoff" src={eyeoff} />
                  ) : (
                    <Image alt="eye" src={eye} />
                  )}
                </IconButton>
              }
              prefixIcon={
                <Image alt="password" src={lock} width={16} height={16} />
              }
              value={passwordForm.password}
              onChange={handlePasswordChange}
            />
          </Row>
          <Row width="100%" justify="center">
            <TextField
              {...inputProps}
              placeholder={"Contraseña"}
              id="confirmPassword"
              label="Confirmar contraseña*"
              type={showConfirmPassword ? 'text' : 'password'}
              suffix={
                <IconButton
                  onClick={() => handleClickShowPassword("confirmPassword")}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {showConfirmPassword ? (
                    <Image alt="eyeoff" src={eyeoff} />
                  ) : (
                    <Image alt="eye" src={eye} />
                  )}
                </IconButton>
              }
              prefixIcon={
                <Image alt="password" src={lock} width={16} height={16} />
              }
              value={passwordForm.confirmPassword}
              onChange={handlePasswordChange}
              error={passwordError}
              helper={passwordError ? "La contraseña no coincide" : ""}
            />
          </Row>
          <Div style={{ alignSelf: "stretch" }}>
            {showValidationCriteria && (
              <Col padding="0.5rem 0 1.5rem 0.5rem" gap="0.25rem">
                {Object.entries(passwordValidationText).map(([key, text]) => (
                  <Row key={key} margin="2px 0" align={"center"}>
                    {passwordValidationStatus[key] ? (
                      <Image alt="success" src={checkSuccess}/>
                    ) : (
                      <Image alt="error" src={error} />
                    )}
                    <Text
                      size={theme.fonts.size.sm}
                      color={theme.colors.neutralGray900}
                      style={{ margin: "2px 0 0 5px" }}
                    >
                      {text}
                    </Text>
                  </Row>
                ))}
              </Col>
            )}
          </Div>
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
              onClick={handleSetPassword}
              disabled={!isValid || !terms}
            >
              Establece tu contraseña
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
  );
};

export default Form;
