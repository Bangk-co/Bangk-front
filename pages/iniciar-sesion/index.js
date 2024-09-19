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
    if (loanApplicationId && isAuth) {
      console.log("----------entra 1");
      router.push(`/plataforma/clientes/solicitud/${loanApplicationId}`); 
    } else if (loanApplicationId && !isAuth) {
      console.log("----------entra 2");
      router.push(`/iniciar-sesion?loanApplicationId=${loanApplicationId}`);
    } else {
      console.log("----------entra 3");
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
