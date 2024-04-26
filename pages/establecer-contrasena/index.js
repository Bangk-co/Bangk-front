import { useEffect } from "react";
import { useSelector } from "react-redux"
import { useAuth } from "@/hooks/useAuth";
import { useRouter } from "next/router";
import { Container } from "@/components/Login/styles";
import Banner from "@/components/Login/Banner";
import Form from "@/components/SetPassword/Form";

const SetPassword = ({ isMobile, isTablet }) => {
  const router = useRouter();
  const { requestInfo } = useSelector((state) => state)?.requests;
  const { userInfo } = useSelector((state) => state)?.auth;

  const { isAuth } = useAuth();

  useEffect(() => {
    if (isAuth) {
      router.push("/plataforma/home");
    }
  }, [isAuth, router]);

  return (
    <Container>
      {!isMobile && !isTablet && <Banner />}
      <Form 
        isMobile={isMobile} 
        isTablet={isTablet} 
        requestInfo={requestInfo}
        userInfo={userInfo}
      />
    </Container>
  );
};

export default SetPassword;
