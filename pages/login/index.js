import Image from "next/image";
import { useState } from "react";
import { theme } from "@/styles/theme";
import {
  BackgroundContainer,
  WrapperImage,
  WrapperForm,
  LoginCard,
} from "@/components/Login/styles";
import { Text, Row, Col } from "@/styles/Common";
import woman from "../../assets/img/surprised-woman-orange.svg";
import logo from "../../assets/icons/green-logo.svg";
import { TextField } from "@/components/Common/TextField";
import { Button } from "@/components/Common/Button";
import { Link } from "@/components/Common/Link";
import email from "../../assets/icons/email.svg";
import lock from "../../assets/icons/lock.svg";
import { validateLoginForm } from "@/utilities/validations";

const Login = ({ isMobile, isTablet }) => {
  const [forceUpdate, setForceUpdate] = useState(false);
  const [LoginForm, setLoginForm] = useState({
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

    const newRegisterForm = { ...LoginForm };
    newRegisterForm[id] = value;
    setLoginForm(newRegisterForm);
    setForceUpdate(!forceUpdate);
  };

  const handleLogin = () => {
    const validation = validateLoginForm.validate(LoginForm, {
      abortEarly: false,
    });

    if (validation.error) {
      const newErrorForm = { ...errorForm };
      validation.error.details.forEach((ele) => {
        newErrorForm[ele.context.label].error = true;
        newErrorForm[ele.context.label].message = "Campo requerido";
        setErrorForm(newErrorForm);
        setForceUpdate(!forceUpdate);
      });
    } else {
      console.log("login");
    }
  };

  return (
    <BackgroundContainer>
      <WrapperImage>
        <Image
          alt="surprised-women"
          src={woman}
          width={isMobile ? 337 : 600}
          height={isMobile ? 336 : 600}
        />
      </WrapperImage>
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
                Inicia
              </Text>
              <Text
                size={theme.fonts.size.h5}
                weight={theme.fonts.weight.medium}
                color={theme.colors.orange}
              >
                sesión
              </Text>
            </Row>
            <Row width="100%" justify="center" m="16px 0 0 0">
              <TextField
                placeholder={"Correo"}
                id="email"
                radius="1px"
                width="100%"
                height="48px"
                label="Correo"
                prefixIcon={
                  <Image alt="email" src={email} width={16} height={16} />
                }
                onChange={handleChange}
                error={errorForm.email.error}
                helper={errorForm.email.error ? errorForm.email.message : ""}
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
              >
                ¿Olvidaste tu contraseña?
              </Link>
            </Row>
            <Row width="100%" justify="center">
              <Button width="325px" onClick={handleLogin}>
                Iniciar sesión
              </Button>
            </Row>
          </Col>
        </LoginCard>
      </WrapperForm>
    </BackgroundContainer>
  );
};

export default Login;
