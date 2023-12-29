import { Container } from "@/components/ForgotPassword/styles";
import Banner from "@/components/ForgotPassword/Banner";
import Form from "@/components/ForgotPassword/Form";

const ForgotPassword = ({ isMobile, isTablet }) => {
  return (
    <Container>
      <Banner isMobile={isMobile} isTablet={isTablet} />
      <Form isMobile={isMobile} isTablet={isTablet} />
    </Container>
  );
};

export default ForgotPassword;
