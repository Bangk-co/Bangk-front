import { useEffect } from "react";
import { useAuth } from "@/hooks/useAuth";
import { useRouter } from "next/router";
import { Container } from "@/components/Login/styles";
import Banner from "@/components/Login/Banner";
import Form from "@/components/Login/Form";

const Login = ({ isMobile, isTablet }) => {
  const router = useRouter();

  const { isAuth } = useAuth();

  useEffect(() => {
    if (isAuth) {
      router.push("/plataforma/home");
    }
  }, [isAuth, router]);

  return (
    <Container>
      {!isMobile && !isTablet && <Banner />}
      <Form isMobile={isMobile} isTablet={isTablet} />
    </Container>
  );
};

export default Login;
