import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/router";
import toast from "react-hot-toast";
import { theme } from "@/styles/theme";
import { WrapperForm, LoginCard } from "@/components/ResetPassword/styles";
import { Text, Row, Col } from "@/styles/Common";
import logo from "../../assets/icons/green-logo.svg";
import { TextField } from "@/components/Common/TextField";
import { Button } from "@/components/Common/Button";
import email from "../../assets/icons/email.svg";
import lock from "../../assets/icons/lock.svg";
import { validateChangePassword } from "@/utilities/validations";
import useResetPassword from "@/hooks/ResetPassword/useResetPassword";
import CircularProgress from "@mui/material/CircularProgress";
import { encrypt } from "@/utilities/helpers";

const Form = ({ isMobile, isTablet }) => {
  const router = useRouter();
  const resetPassword = useResetPassword();
  const { isLoading } = resetPassword;

  const { hash, email: emailValue } = router.query;
  const emailString = emailValue || "";
  const displayedValue = emailString.substring(0, 6);
  const hiddenPart =
    emailString.length > 6 && "*".repeat(emailString.length - 6);

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

  const handleChange = (event) => {
    const { value, id } = event.target;

    const newErrorForm = { ...errorForm };
    newErrorForm[id].error = false;
    newErrorForm[id].message = "";
    setErrorForm(newErrorForm);

    const newRegisterForm = { ...resetPassForm };
    newRegisterForm[id] = value;
    setChangePassForm(newRegisterForm);
    setForceUpdate(!forceUpdate);
  };

  const handleSend = () => {
    const validation = validateChangePassword.validate(resetPassForm, {
      abortEarly: false,
    });

    if (validation.error) {
      const newErrorForm = { ...errorForm };
      validation.error.details.forEach((ele) => {
        const label = ele.context.label;
        newErrorForm[label].error = true;

        const customErrorMessages = {
          password: "Contraseña inválida",
          confirmPassword: "Las contraseñas no coinciden",
        };

        newErrorForm[label].message =
          customErrorMessages[label] || "Campo obligatorio";
        setErrorForm(newErrorForm);
        setForceUpdate(!forceUpdate);
      });
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

  return (
    <WrapperForm>
      <LoginCard>
        <Image alt="logo" src={logo} width={120} height={45} />
        <Col gap="16px" align="center" width="100%" m="40px 0 0 0">
          <Row gap="5px">
            <Text
              size={theme.fonts.size.h5}
              weight={theme.fonts.weight.medium}
              color={theme.colors.gray900}
            >
              Establece una nueva{" "}
              <span style={{ color: theme.colors.orange }}>contraseña</span>
            </Text>
          </Row>
          <Row width="100%" justify="center" m="16px 0 0 0">
            <TextField
              placeholder={"Correo"}
              id="email"
              radius="4px"
              width="100%"
              height="48px"
              label="Correo"
              prefixIcon={
                <Image alt="email" src={email} width={16} height={16} />
              }
              onChange={handleChange}
              value={`${displayedValue}${hiddenPart}`}
              disabled
            />
          </Row>

          <Row width="100%" justify="center">
            <TextField
              placeholder={"Contraseña"}
              id="password"
              radius="1px"
              width="100%"
              height="48px"
              label="Contraseña"
              type="password"
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
              placeholder={"Confirmar contraseña"}
              id="confirmPassword"
              radius="1px"
              width="100%"
              height="48px"
              label="Confirmar Contraseña"
              type="password"
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
              error={errorForm.confirmPassword.error}
              helper={
                errorForm.confirmPassword.error
                  ? errorForm.confirmPassword.message
                  : ""
              }
            />
          </Row>

          <Row width="100%" justify="center" m="9px 0 0 0">
            <Button
              width="325px"
              onClick={handleSend}
              disabled={isLoading}
              startIcon={
                isLoading ? (
                  <CircularProgress
                    size={20}
                    style={{ color: theme.colors.white }}
                  />
                ) : null
              }
            >
              Cambia tu contraseña
            </Button>
          </Row>
        </Col>
      </LoginCard>
    </WrapperForm>
  );
};

export default Form;
