import { Container } from "@/components/Login/styles";
import Banner from "@/components/Login/Banner";
import Form from "@/components/Login/Form";

const Login = ({ isMobile, isTablet }) => {
  return (
    <Container>
      <Banner isMobile={isMobile} isTablet={isTablet} />
      <Form isMobile={isMobile} isTablet={isTablet} />
    </Container>
  );
};

export default Login;
