import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/router";
import toast from "react-hot-toast";
import { theme } from "@/styles/theme";
import { WrapperForm, LoginCard } from "@/components/PasswordRecovery/styles";
import { Text, Row, Col } from "@/styles/Common";
import logo from "../../assets/icons/green-logo.svg";
import { TextField } from "@/components/Common/TextField";
import { Button } from "@/components/Common/Button";
import { Link } from "@/components/Common/Link";
import email from "../../assets/icons/email.svg";
import { validateEmailRequired } from "@/utilities/validations";
import useSendEmailResetPassword from "@/hooks/ForgotPassword/useSendEmailResetPassword";
import CircularProgress from "@mui/material/CircularProgress";

const Form = ({ isMobile, isTablet }) => {
  const router = useRouter();
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
      sendEmail.reset();
      sendEmail.mutate(emailForm, {
        onSuccess: () => {
          toast.success("Email enviado");
        },
        onError: (err) => {
          console.log("email", err.response.data);
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
              size={theme.fonts.size.h5}
              weight={theme.fonts.weight.medium}
              color={theme.colors.gray900}
            >
              Revisa tu correo electrónico y restablece tu{" "}
              <span style={{ color: theme.colors.orange }}>contraseña</span>
            </Text>
          </Row>

          <Row width="100%" justify="center" m="9px 0 0 0">
            <Button width="325px" onClick={handleNavigateLogin}>
              Iniciar sesión
            </Button>
          </Row>
        </Col>
      </LoginCard>
    </WrapperForm>
  );
};

export default Form;
