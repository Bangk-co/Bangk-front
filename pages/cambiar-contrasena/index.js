import { Container } from "@/components/ResetPassword/styles";
import Banner from "@/components/ResetPassword/Banner";
import Form from "@/components/ResetPassword/Form";

const ForgotPassword = ({ isMobile, isTablet }) => {
  console.log("isTablet", isTablet);
  return (
    <Container>
      {!isMobile && !isTablet && <Banner />}
      <Form isMobile={isMobile} isTablet={isTablet} />
    </Container>
  );
};

export default ForgotPassword;
