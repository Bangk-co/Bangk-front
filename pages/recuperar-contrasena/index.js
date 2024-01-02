import { Container } from "@/components/PasswordRecovery/styles";
import Banner from "@/components/PasswordRecovery/Banner";
import Form from "@/components/PasswordRecovery/Form";

const ForgotPassword = ({ isMobile, isTablet }) => {
  return (
    <Container>
      {!isMobile && !isTablet && <Banner />}
      <Form isMobile={isMobile} isTablet={isTablet} />
    </Container>
  );
};

export default ForgotPassword;
