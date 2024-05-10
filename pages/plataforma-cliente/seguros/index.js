import { useEffect } from "react";
import { useRouter } from "next/router";
import Header from "@/components/ClientPlatform/Header";
import { Layout } from "@/components/ClientPlatform/Layout";
import { useAuth } from "@/hooks/useAuth";
import { Text } from "@/styles/Common";
import { FooterNav } from "@/components/ClientPlatform/FooterNav";
import Insurance from "@/components/ClientPlatform/Insurance";

const ClientInsurance = ({ isMobile, isTablet }) => {
  const router = useRouter();
  const { pathname } = router;

  const { isAuth } = useAuth();

  useEffect(() => {
    if (!isAuth) {
      router.push("/");
    }
  }, [isAuth, router]);

  return (
    <div>
      <Header isMobile={isMobile} />
      {isMobile ? (
        <>
          <Insurance isMobile={isMobile} />
          <FooterNav />
        </>
      ) : (
        <Layout>
          <Insurance isMobile={isMobile} />
        </Layout>
      )}
    </div>
  );
};

export default ClientInsurance;
