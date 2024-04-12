import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import { theme } from "@/styles/theme";
import { WrapperForm, LoginCard } from "@/components/PasswordRecovery/styles";
import { Text, Row, Col } from "@/styles/Common";
import logo from "../../assets/icons/green-logo.svg";
import { Button } from "@/components/Common/Button";
import { setEmailStore } from "@/store/auth";
import toast from "react-hot-toast";
import useSendEmailResetPassword from "@/hooks/ForgotPassword/useSendEmailResetPassword";
import CircularProgress from "@mui/material/CircularProgress";

const Form = ({ isMobile, isTablet }) => {
  const router = useRouter();
  const dispatch = useDispatch();
  const { emailStore } = useSelector((state) => state)?.auth;
  const sendEmail = useSendEmailResetPassword();
  const { isLoading } = sendEmail;

  const { action } = router.query;

  const handleNavigateLogin = () => {
    router.push("/iniciar-sesion");
  };

  const handleResendEmail = () => {
    sendEmail.reset();
    sendEmail.mutate(emailStore, {
      onSuccess: () => {
        dispatch(setEmailStore(""))
        router.push("/iniciar-sesion");
      },
      onError: (err) => {
        err.response.data.map((error) => {
          toast.error(error);
        });
      },
    });
  }

  return (
    <WrapperForm>
      <LoginCard>
        <Image alt="logo" src={logo} width={120} height={45} />
        <Col gap="16px" align="center" width="100%" m="40px 0 0 0">
          {action === "send" ? (
            <Col gap="24px">
              <Text
                font={theme.fonts.family.primaryBold}
                size={theme.fonts.size.h5s}
                weight={theme.fonts.weight.bold}
                color={theme.colors.gray900}
              >
                Revisa tu correo electrónico y restablece tu{" "}
                <span style={{ color: theme.colors.orange, fontFamily: theme.fonts.family.primaryBold }}>contraseña</span>
              </Text>
              <Row width="100%" justify="center" m="9px 0 0 0">
                <Button 
                  width="325px" 
                  background={theme.colors.green}
                  hover={theme.colors.green}
                  borderHover={theme.colors.green}
                  onClick={handleResendEmail}
                  disabled={isLoading}
                  font={theme.fonts.family.primaryBold}
                  startIcon={
                    isLoading ? (
                      <CircularProgress
                        size={20}
                        style={{ color: theme.colors.white }}
                      />
                    ) : null
                  }
                >
                  Reenviar correo
                </Button>
              </Row>
            </Col>
          ) : (
            <Col gap="5px">
              <Text
                font={theme.fonts.family.primaryBold}
                size={theme.fonts.size.h5s}
                weight={theme.fonts.weight.bold}
                color={theme.colors.gray900}
              >
                Tu contraseña se ha cambiado{" "}
                <span style={{ color: theme.colors.orange, fontFamily: theme.fonts.family.primaryBold }}>exitosamente</span>
              </Text>
              <Row width="100%" justify="center" m="9px 0 0 0">
                <Button 
                  width="325px" 
                  background={theme.colors.green}
                  hover={theme.colors.green}
                  borderHover={theme.colors.green}
                  font={theme.fonts.family.primaryBold}
                  onClick={handleNavigateLogin}
                >
                  Ingresar a la plataforma
                </Button>
              </Row>
            </Col>
          )} 
        </Col>
      </LoginCard>
    </WrapperForm>
  );
};

export default Form;
