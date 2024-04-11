import Image from "next/image";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { useRouter } from "next/router";
import toast from "react-hot-toast";
import { theme } from "@/styles/theme";
import { WrapperForm, LoginCard } from "@/components/ForgotPassword/styles";
import { Text, Row, Col } from "@/styles/Common";
import logo from "../../assets/icons/green-logo.svg";
import { TextField } from "@/components/Common/TextField";
import { Button } from "@/components/Common/Button";
import email from "../../assets/icons/email.svg";
import { validateEmailRequired } from "@/utilities/validations";
import useSendEmailResetPassword from "@/hooks/ForgotPassword/useSendEmailResetPassword";
import CircularProgress from "@mui/material/CircularProgress";
import { setEmailStore } from "@/store/auth";

const Form = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const sendEmail = useSendEmailResetPassword();
  const { isLoading } = sendEmail;
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

    setEmailForm(value.toLowerCase());
    setForceUpdate(!forceUpdate);
  };

  const handleNavigateLogin = () => {
    router.push("/iniciar-sesion");
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
      sendEmail.reset();
      sendEmail.mutate(emailForm, {
        onSuccess: () => {
          dispatch(setEmailStore(emailForm))
          router.push("/recuperar-contrasena?action=send");
        },
        onError: (err) => {
          err.response.data.map((error) => {
            toast.error(error);
          });
        },
      });
    }
  };

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
              ¿Olvidaste tu{" "}
              <span style={{ color: theme.colors.orange, fontFamily: theme.fonts.family.primaryBold }}>contraseña?</span>
            </Text>
          </Row>
          <Row width="100%" justify="center" m="16px 0 0 0">
            <TextField
              placeholder={"Correo"}
              labelFont={theme.fonts.family.primaryMedium}
              labelSize={theme.fonts.size.sm}
              font={theme.fonts.family.primary}
              id="email"
              radius="4px"
              width="100%"
              height="48px"
              label="Correo*"
              prefixIcon={
                <Image alt="email" src={email} width={16} height={16} />
              }
              onChange={handleChange}
              value={emailForm}
              error={errorForm.email.error}
              helper={errorForm.email.error ? errorForm.email.message : ""}
            />
          </Row>
          <Row width="100%" justify="center" m="9px 0 0 0">
            <Text
              size={theme.fonts.size.default2}
              color={theme.colors.gray900}
              lineHeight={"28px"}
              font={theme.fonts.family.primary}
            >
              Si ha olvidado su  contraseña, ingrese la dirección de correo electrónico asociada con su cuenta y le enviaremos un enlace para restablecer su contraseña.
            </Text>
          </Row>

          <Row width="100%" justify="center" m="9px 0 0 0">
            <Button
              width="325px"
              background={theme.colors.green}
              hover={theme.colors.green}
              borderHover={theme.colors.green}
              font={theme.fonts.family.primaryBold}
              onClick={handleSend}
              disabled={isLoading || emailForm === ""}
              startIcon={
                isLoading ? (
                  <CircularProgress
                    size={20}
                    style={{ color: theme.colors.white }}
                  />
                ) : null
              }
            >
              Enviar
            </Button>
          </Row>
        </Col>
      </LoginCard>
    </WrapperForm>
  );
};

export default Form;
