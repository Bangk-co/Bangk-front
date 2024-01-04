import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/router";
import toast from "react-hot-toast";
import { theme } from "@/styles/theme";
import { WrapperForm, LoginCard } from "@/components/Login/styles";
import { Text, Row, Col } from "@/styles/Common";
import logo from "../../assets/icons/green-logo.svg";
import { TextField } from "@/components/Common/TextField";
import { Button } from "@/components/Common/Button";
import { Link } from "@/components/Common/Link";
import email from "../../assets/icons/email.svg";
import lock from "../../assets/icons/lock.svg";
import { validateLoginForm } from "@/utilities/validations";
import useLogin from "@/hooks/Login/useLogin";
import { setLocalUser } from "../../hooks/services/axiosInstance";
import CircularProgress from "@mui/material/CircularProgress";
import { encrypt } from "@/utilities/helpers";

const Form = ({ isMobile, isTablet }) => {
  const router = useRouter();
  const authentication = useLogin();
  const { isLoading } = authentication;
  const [forceUpdate, setForceUpdate] = useState(false);
  const [loginForm, setLoginForm] = useState({
    email: "",
    password: "",
  });

  const [errorForm, setErrorForm] = useState({
    email: {
      error: false,
      message: "",
    },
    password: {
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

    const newRegisterForm = { ...loginForm };
    newRegisterForm[id] = id === "email" ? value.toLowerCase() : value;
    setLoginForm(newRegisterForm);
    setForceUpdate(!forceUpdate);
  };

  const handleForgotPassword = () => {
    router.push("/olvide-contrasena");
  };

  const handleLogin = () => {
    const validation = validateLoginForm.validate(loginForm, {
      abortEarly: false,
    });

    if (validation.error) {
      const newErrorForm = { ...errorForm };
      validation.error.details.forEach((ele) => {
        const label = ele.context.label;
        newErrorForm[label].error = true;

        const customErrorMessages = {
          email: "Campo requerido",
          password: "Contraseña invalida",
        };

        newErrorForm[label].message =
          customErrorMessages[label] || "Campo obligatorio";
        setErrorForm(newErrorForm);
        setForceUpdate(!forceUpdate);
      });
    } else {
      authentication.reset();
      authentication.mutate(
        { email: loginForm.email, password: encrypt(loginForm.password) },
        {
          onSuccess: (res) => {
            setLocalUser(res.data.token);
            router.push("/plataforma");
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
              Inicia <span style={{ color: theme.colors.orange }}>sesión</span>
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
              value={loginForm.email}
              error={errorForm.email.error}
              helper={errorForm.email.error ? errorForm.email.message : ""}
            />
          </Row>
          <Row width="100%" justify="center">
            <TextField
              placeholder={"Contraseña"}
              id="password"
              radius="4px"
              width="100%"
              height="48px"
              label="Contraseña"
              type="password"
              prefixIcon={
                <Image alt="password" src={lock} width={16} height={16} />
              }
              onChange={handleChange}
              value={loginForm.password}
              error={errorForm.password.error}
              helper={
                errorForm.password.error ? errorForm.password.message : ""
              }
            />
          </Row>
          <Row width="100%" justify="center">
            <Link
              size={theme.fonts.size.sm}
              weight={theme.fonts.weight.regular}
              onClick={handleForgotPassword}
            >
              ¿Olvidaste tu contraseña?
            </Link>
          </Row>
          <Row width="100%" justify="center">
            <Button
              width="325px"
              onClick={handleLogin}
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
              Iniciar sesión
            </Button>
          </Row>
        </Col>
      </LoginCard>
    </WrapperForm>
  );
};

export default Form;
