import { useEffect } from "react";
import { useAuth } from "@/hooks/useAuth";
import { useRouter } from "next/router";
import { Container } from "@/components/Login/styles";
import Banner from "@/components/Login/Banner";
import { SetPasswordCard, WrapperForm } from "@/components/SetPassword/styles";
import { Div, Text } from "@/styles/Common";
import logo from "@/assets/icons/green-logo.svg";
import Image from "next/image";
import { Button } from "@/components/Common/Button";
import { theme } from "@/styles/theme";

const SetPasswordSuccess = ({ isMobile, isTablet }) => {
  const router = useRouter();

  const { isAuth } = useAuth();

  useEffect(() => {
    if (isAuth) {
      router.push("/plataforma/home");
    }
  }, [isAuth, router]);

  const handleGo = () => {
    router.push("/iniciar-sesion")
  }

  return (
    <Container>
      {!isMobile && !isTablet && <Banner />}
      <WrapperForm>
        <SetPasswordCard>
          <Image alt="logo" src={logo} width={120} height={45} />
          <Text
            size={isMobile ? theme.fonts.size.h6 : theme.fonts.size.h5s}
            weight={theme.fonts.weight.bold}
            color={theme.colors.gray900}
            mt="40px"
          >
            Tu contraseña se ha creado <span style={{ color: theme.colors.orange }}>exitosamente</span>
          </Text>
          <Div m="28px 0 0 0" width="100%" justify="center">
            <Button
              width="325px"
              background={theme.colors.green}
              hover={theme.colors.green}
              borderHover={theme.colors.green}
              font={theme.fonts.family.primaryBold}
              onClick={handleGo}
            >
              Ingresa a la plataforma
            </Button>
          </Div>
        </SetPasswordCard>
      </WrapperForm>
    </Container>
  );
};

export default SetPasswordSuccess;
