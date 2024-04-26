import { useEffect } from "react";
import { useAuth } from "@/hooks/useAuth";
import { useRouter } from "next/router";
import { Container } from "@/components/Login/styles";
import Banner from "@/components/Login/Banner";
import { SetPasswordCard, WrapperForm } from "@/components/SetPassword/styles";
import Image from "next/image";
import { Col, Div, Row, Text } from "@/styles/Common";
import logo from "../../assets/icons/green-logo.svg";
import { Checkbox } from "@/components/Common/Checkbox";
import { Button } from "@/components/Common/Button";
import { Link } from "@/components/Common/Link";
import { theme } from "@/styles/theme";

const SetPasswordValidation = ({ isMobile, isTablet }) => {
  const router = useRouter();

  const { isAuth } = useAuth();

  useEffect(() => {
    if (isAuth) {
      router.push("/plataforma/home");
    }
  }, [isAuth, router]);

  const handleLogin = () => {
    router.push("/iniciar-sesion")
  }

  const handleValidate = () => {
    router.push("validacion-identidad?source=password")
  }

  return (
    <Container>
      {!isMobile && !isTablet && <Banner />}
      <WrapperForm>
        <SetPasswordCard>
          <Image alt="logo" src={logo} width={120} height={45} />
          <Col gap="16px" align="center" width="100%" m="40px 0 0 0">
            <Row gap="5px">
              <Text
                font={theme.fonts.family.primaryBold}
                size={theme.fonts.size.ft}
                weight={theme.fonts.weight.bold}
                color={theme.colors.gray900}
              >
                Termina de crear tu cuenta{" "}
                <span style={{ color: theme.colors.orange, fontFamily: theme.fonts.family.primaryBold }}>
                  y gestiona tus solicitudes
                </span>
              </Text>
            </Row>
            <Div m="16px 0 8px 0" direction="column" gap="22px" style={{ alignSelf: 'flex-start', textAlign: 'justify' }}>
              <Div gap="8px" direction="column">
                <Text
                  color={theme.colors.neutralGray900}
                  size={theme.fonts.size.sm}
                  font={theme.fonts.family.primaryBold}
                >
                  Correo*
                </Text>
                <Text
                  color={theme.colors.neutralGray900}
                  size={theme.fonts.size.default2}
                  font={theme.fonts.family.primary}
                >
                  
                </Text>
              </Div>
            </Div>
            <Row width="100%" justify="center">
              <Button
                width="325px"
                background={theme.colors.green}
                hover={theme.colors.green}
                borderHover={theme.colors.green}
                font={theme.fonts.family.primaryBold}
                onClick={handleValidate}
              >
                Valida tu identidad
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
    </Container>
  );
};

export default SetPasswordValidation;
