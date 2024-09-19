/* eslint-disable react-hooks/exhaustive-deps */
import { Container } from "@/components/Login/styles";
import Banner from "@/components/Login/Banner";
import Form from "@/components/Login/Form";
import { useEffect } from "react";
import { useRouter } from "next/router";
import { useAuth } from "@/hooks/useAuth";

const Login = ({ isMobile, isTablet }) => {
  const router = useRouter();
  const { loanApplicationId } = router.query;
  const { isAuth } = useAuth();

  console.log("---------------loanApp-isAuth", loanApplicationId, isAuth);

  useEffect(() => {
    console.log("Estado actual:", { loanApplicationId, isAuth });

    if (loanApplicationId === undefined) {
      console.log("loanApplicationId aún no está disponible");
      return; // Salir temprano si loanApplicationId aún no está definido
    }

    if (loanApplicationId && isAuth) {
      console.log("Redirigiendo a la plataforma de clientes");
      router.push(`/plataforma/clientes/solicitud/${loanApplicationId}`);
    }
  }, [isAuth, loanApplicationId, router]);

  return (
    <Container>
      {!isMobile && !isTablet && <Banner />}
      <Form isMobile={isMobile} isTablet={isTablet} loanApplicationId={loanApplicationId} />
    </Container>
  );
};

export default Login;
