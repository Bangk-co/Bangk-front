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

  useEffect(() => {
    if (loanApplicationId && isAuth) {
      router.push(`/plataforma/clientes/solicitud?loanApplicationId=${loanApplicationId}`);
    } else if (loanApplicationId && !isAuth) {
      router.push(`/iniciar-sesion?loanApplicationId=${loanApplicationId}`);
    } else {
      router.push(`/iniciar-sesion`);
    }
  }, [isAuth, loanApplicationId]);

  return (
    <Container>
      {!isMobile && !isTablet && <Banner />}
      <Form isMobile={isMobile} isTablet={isTablet} loanApplicationId={loanApplicationId} />
    </Container>
  );
};

export default Login;
