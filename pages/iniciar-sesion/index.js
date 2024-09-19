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

  useEffect(() => {
    if (loanApplicationId === undefined) {
      return;
    }

    if (loanApplicationId && isAuth) {
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
