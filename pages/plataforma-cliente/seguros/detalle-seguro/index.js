import { useEffect } from "react";
import { useRouter } from "next/router";
import Header from "@/components/ClientPlatform/Header";
import { Layout } from "@/components/ClientPlatform/Layout";
import { useAuth } from "@/hooks/useAuth";
import { Text } from "@/styles/Common";
import { FooterNav } from "@/components/ClientPlatform/FooterNav";
import InsuranceDetail from "@/components/ClientPlatform/InsuranceDetail";

const InsuranceClientDetail = ({ isMobile, isTablet }) => {
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
          <InsuranceDetail isMobile={isMobile} />
          <FooterNav />
        </>
      ) : (
        <Layout padding={"0"}>
          <InsuranceDetail isMobile={isMobile} />
        </Layout>
      )}
    </div>
  );
};

export default InsuranceClientDetail;
