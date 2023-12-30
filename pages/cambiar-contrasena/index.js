import { Container } from "@/components/ResetPassword/styles";
import Banner from "@/components/ResetPassword/Banner";
import Form from "@/components/ResetPassword/Form";

const ForgotPassword = ({ isMobile, isTablet }) => {
  return (
    <Container>
      <Banner isMobile={isMobile} isTablet={isTablet} />
      <Form isMobile={isMobile} isTablet={isTablet} />
    </Container>
  );
};

export default ForgotPassword;
