import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/router";
import { theme } from "@/styles/theme";
import { WrapperForm, LoginCard } from "@/components/PasswordRecovery/styles";
import { Text, Row, Col } from "@/styles/Common";
import logo from "../../assets/icons/green-logo.svg";
import { Button } from "@/components/Common/Button";

const Form = ({ isMobile, isTablet }) => {
  const router = useRouter();

  const [errorForm, setErrorForm] = useState({
    email: {
      error: false,
      message: "",
    },
  });

  const handleNavigateLogin = () => {
    router.push("/login");
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
