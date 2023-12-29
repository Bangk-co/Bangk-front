import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/router";
import { theme } from "@/styles/theme";
import { WrapperForm, LoginCard } from "@/components/ForgotPassword/styles";
import { Text, Row, Col } from "@/styles/Common";
import logo from "../../assets/icons/green-logo.svg";
import { TextField } from "@/components/Common/TextField";
import { Button } from "@/components/Common/Button";
import { Link } from "@/components/Common/Link";
import email from "../../assets/icons/email.svg";
import { validateEmailRequired } from "@/utilities/validations";

const Form = ({ isMobile, isTablet }) => {
  const router = useRouter();

  const [forceUpdate, setForceUpdate] = useState(false);
  const [emailForm, setEmailForm] = useState("");

  const [errorForm, setErrorForm] = useState({
    email: {
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

    setEmailForm(value);
    setForceUpdate(!forceUpdate);
  };

  const handleNavigateLogin = () => {
    router.push("/login");
  };

  const handleSend = () => {
    const validation = validateEmailRequired.validate(emailForm, {
      abortEarly: false,
    });

    if (validation.error) {
      const newErrorForm = {
        email: {
          error: true,
          message: "Correo invalido",
        },
      };
      setErrorForm(newErrorForm);
      setForceUpdate(!forceUpdate);
    } else {
      console.log("forgot");
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
              ¿Olvidaste tu
            </Text>
            <Text
              size={theme.fonts.size.h5}
              weight={theme.fonts.weight.medium}
              color={theme.colors.orange}
            >
              contraseña?
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
          <Row width="100%" justify="center" m="9px 0 0 0">
            <Text
              size={theme.fonts.size.sm}
              weight={theme.fonts.weight.regular}
              color={theme.colors.gray900}
              lineHeight={"28px"}
            >
              Si ha olvidado su contraseña, ingrese la dirección de correo
              electrónico asociada con su cuenta y le enviaremos un enlace para
              restablecer su contraseña.
            </Text>
          </Row>

          <Row width="100%" justify="center" m="9px 0 0 0">
            <Button width="325px" onClick={handleSend}>
              Enviar
            </Button>
          </Row>
          <Row width="100%" justify="center" m="16px 0 0 0">
            <Link
              size={theme.fonts.size.sm}
              weight={theme.fonts.weight.regular}
              onClick={handleNavigateLogin}
            >
              Iniciar sesión
            </Link>
          </Row>
        </Col>
      </LoginCard>
    </WrapperForm>
  );
};

export default Form;
