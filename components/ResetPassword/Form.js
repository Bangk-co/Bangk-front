import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/router";
import toast from "react-hot-toast";
import { theme } from "@/styles/theme";
import { WrapperForm, LoginCard } from "@/components/ResetPassword/styles";
import { Text, Row, Col, Div } from "@/styles/Common";
import logo from "../../assets/icons/green-logo.svg";
import { TextField } from "@/components/Common/TextField";
import { Button } from "@/components/Common/Button";
import lock from "../../assets/icons/lock.svg";
import { validateChangePassword } from "@/utilities/validations";
import useResetPassword from "@/hooks/ResetPassword/useResetPassword";
import CircularProgress from "@mui/material/CircularProgress";
import { encrypt } from "@/utilities/helpers";
import { IconButton } from '@mui/material';
import eye from '@/assets/icons/eye.svg';
import eyeoff from '@/assets/icons/eyeoff.svg';
import checkSuccess from "@/assets/icons/check-green.svg"
import error from "@/assets/icons/close-red.svg"

const Form = ({ isMobile, isTablet }) => {
  const router = useRouter();
  const resetPassword = useResetPassword();
  const { isLoading } = resetPassword;

  const { hash, email: emailValue } = router.query;

  const [passwordError, setPasswordError] = useState(false);
  const [forceUpdate, setForceUpdate] = useState(false);
  const [resetPassForm, setChangePassForm] = useState({
    password: "",
    confirmPassword: "",
  });

  const [errorForm, setErrorForm] = useState({
    password: {
      error: false,
      message: "",
    },
    confirmPassword: {
      error: false,
      message: "",
    },
  });

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
    labelFont: theme.fonts.family.primaryMedium,
    labelSize: theme.fonts.size.sm,
    font: theme.fonts.family.primaryMedium,
  }

  const handleChange = (event) => {
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
    setChangePassForm({ ...resetPassForm, [id]: value });
    if (!value) {
      setShowValidationCriteria(false);
    }
  };

  const handleSend = () => {
    const passwordsMatch = resetPassForm.password === resetPassForm.confirmPassword;
  
    if (!passwordsMatch) {
      setPasswordError(true)
    } else {
      resetPassword.reset();
      resetPassword.mutate(
        {
          password: encrypt(resetPassForm.password),
          passwordConfirm: encrypt(resetPassForm.confirmPassword),
          hash: hash,
        },
        {
          onSuccess: () => {
            router.push("/recuperar-contrasena?action=reset");
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

  const isValid = Object.values(resetPassForm).every((value) => value !== "") && 
  /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*(),.?":{}|<>]).{8,}$/.test(resetPassForm.password);

  return (
    <WrapperForm>
      <LoginCard>
        <Image alt="logo" src={logo} width={120} height={45} />
        <Col gap="16px" align="center" width="100%" m="40px 0 0 0">
          <Row gap="5px">
            <Text
              font={theme.fonts.family.primaryBold}
              size={theme.fonts.size.ft}
              weight={theme.fonts.weight.bold}
              color={theme.colors.gray900}
            >
              Establece una nueva{" "}
              <span style={{ color: theme.colors.orange, fontFamily: theme.fonts.family.primaryBold }}>contraseña</span>
            </Text>
          </Row>

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
              onChange={handleChange}
              value={resetPassForm.password}
              error={errorForm.password.error}
              helper={
                errorForm.password.error ? errorForm.password.message : ""
              }
            />
          </Row>
          <Row width="100%" justify="center">
            <TextField
              {...inputProps}
              placeholder={"Confirmar contraseña"}
              id="confirmPassword"
              label="Confirmar Contraseña*"
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
                <Image
                  alt="confirm-password"
                  src={lock}
                  width={16}
                  height={16}
                />
              }
              onChange={handleChange}
              value={resetPassForm.confirmPassword}
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
          <Row width="100%" justify="center" m="9px 0 0 0">
            <Button
              width="325px"
              background={theme.colors.green}
              hover={theme.colors.green}
              borderHover={theme.colors.green}
              font={theme.fonts.family.primaryBold}
              onClick={handleSend}
              disabled={isLoading || !isValid}
              startIcon={
                isLoading ? (
                  <CircularProgress
                    size={20}
                    style={{ color: theme.colors.white }}
                  />
                ) : null
              }
            >
              Cambiar contraseña
            </Button>
          </Row>
        </Col>
      </LoginCard>
    </WrapperForm>
  );
};

export default Form;
