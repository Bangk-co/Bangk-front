import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/router";
import toast from "react-hot-toast";
import { theme } from "@/styles/theme";
import { WrapperForm, LoginCard } from "@/components/Login/styles";
import { Text, Row, Col, Div } from "@/styles/Common";
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
import eye from "@/assets/icons/eye.svg";
import eyeoff from "@/assets/icons/eyeoff.svg";
import { IconButton } from "@mui/material";
import { jwtDecode } from "jwt-decode";

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
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => {
    setShowPassword((show) => !show);
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

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
            const { role } = jwtDecode(res.data.token);
            setLocalUser(res.data.token);
            if (role === "client") {
              router.push("/plataforma-cliente/home");
            } else {
              router.push("/plataforma/home");
            }
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

  const handleCreate = () => {
    router.push("/crear-cuenta");
  };

  const isValid = Object.values(loginForm).every((value) => value !== "");

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
              Inicia{" "}
              <span
                style={{
                  color: theme.colors.orange,
                  fontFamily: theme.fonts.family.primaryBold,
                }}
              >
                sesión
              </span>
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
              autoComplete="email"
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
              type={showPassword ? "text" : "password"}
              suffix={
                <IconButton
                  onClick={handleClickShowPassword}
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
              autoComplete="off"
              onChange={handleChange}
              value={loginForm.password}
              error={errorForm.password.error}
              helper={
                errorForm.password.error ? errorForm.password.message : ""
              }
            />
          </Row>
        </Col>
        <Div m="8px 0 0 0" width="100%">
          <Link
            width={"100%"}
            font={theme.fonts.family.primaryBold}
            size={theme.fonts.size.default2}
            weight={theme.fonts.weight.bold}
            color={theme.colors.green}
            onClick={handleForgotPassword}
            style={{ justifyContent: "right", padding: "0px" }}
          >
            ¿Olvidaste tu contraseña?
          </Link>
        </Div>
        <Div m="22px 0 0 0" width="100%" justify="center">
          <Button
            width={isMobile ? "100%" : "325px"}
            height="40px"
            background={theme.colors.green}
            hover={theme.colors.green}
            borderHover={theme.colors.green}
            font={theme.fonts.family.primaryBold}
            onClick={handleLogin}
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
            Iniciar sesión
          </Button>
        </Div>
        <Div align="center" gap="6px" width="100%" m="30px 0 40px 0">
          <hr
            style={{
              height: "1px",
              width: "45%",
              background: theme.colors.gray300,
            }}
          />
          <Text
            color={theme.colors.gray300}
            size={theme.fonts.size.sm}
            font={theme.fonts.family.secondary}
          >
            O
          </Text>
          <hr
            style={{
              height: "1px",
              width: "45%",
              background: theme.colors.gray300,
            }}
          />
        </Div>
        <Div direction={isMobile ? "column" : "row"} align="center" gap="8px">
          <Text
            color={theme.colors.neutralGray900}
            size={theme.fonts.size.default2}
            weight={theme.fonts.weight.bold}
          >
            ¿No tienes cuenta?
          </Text>
          <Link
            color={theme.colors.green}
            family={theme.fonts.family.primary}
            weight={theme.fonts.weight.medium}
            size={theme.fonts.size.default2}
            onClick={handleCreate}
            style={{ textDecoration: "underline" }}
          >
            Crear cuenta
          </Link>
        </Div>
      </LoginCard>
    </WrapperForm>
  );
};

export default Form;
