import { useEffect, useState } from "react";
import { useSelector } from "react-redux"
import { useAuth } from "@/hooks/useAuth";
import { useRouter } from "next/router";
import { Container } from "@/components/Login/styles";
import Banner from "@/components/Login/Banner";
import Form from "@/components/SetPassword/Form";
import useGetUserInfo from "@/hooks/Login/useGetUserInfo";

const SetPassword = ({ isMobile, isTablet }) => {
  const router = useRouter();
  const { source } = router.query;
  const { requestInfo } = useSelector((state) => state)?.requests;
  const { userInfo, clientId } = useSelector((state) => state)?.auth;
  const { data, isSuccess } = useGetUserInfo(clientId);
  const [userData, setUserData] = useState({});
  const { isAuth } = useAuth();

  useEffect(() => {
    if (isAuth) {
      router.push("/plataforma/home");
    }
  }, [isAuth, router]);

  useEffect(() => {
    if (isSuccess) {
      setUserData(data?.data)
    }
  }, [isSuccess, data]);

  return (
    <Container>
      {!isMobile && !isTablet && <Banner />}
      <Form 
        isMobile={isMobile} 
        isTablet={isTablet} 
        requestInfo={requestInfo}
        userInfo={userInfo}
        userData={userData}
        source={source}
        clientId={clientId}
      />
    </Container>
  );
};

export default SetPassword;
