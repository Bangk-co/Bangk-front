import { useEffect } from "react";
import { useAuth } from "@/hooks/useAuth";
import { useRouter } from "next/router";
import { Container } from "@/components/Login/styles";
import Banner from "@/components/Login/Banner";
import Form from "@/components/Login/Form";
import { getUserInfo } from "@/utilities/helpers";

const Login = ({ isMobile, isTablet }) => {
  const router = useRouter();

  const { role } = getUserInfo();

  const { isAuth } = useAuth();

  useEffect(() => {
    if (isAuth) {
      if (role === "client") {
        router.push("/plataforma-cliente/home");
      } else {
        router.push("/plataforma/home");
      }
    }
  }, [isAuth, router, role]);

  return (
    <Container>
      {!isMobile && !isTablet && <Banner />}
      <Form isMobile={isMobile} isTablet={isTablet} />
    </Container>
  );
};

export default Login;
