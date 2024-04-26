import { useEffect } from "react";
import { useRouter } from "next/router";
import Header from "@/components/ClientPlatform/Header";
import { Layout } from "@/components/ClientPlatform/Layout";
import { useAuth } from "@/hooks/useAuth";
import { Text } from "@/styles/Common";
import { FooterNav } from "@/components/ClientPlatform/FooterNav";
import ProfileForm from "@/components/ClientPlatform/ProfileForm";

const Profile = ({ isMobile, isTablet }) => {
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
          <ProfileForm isMobile={isMobile} />
          <FooterNav />
        </>
      ) : (
        <Layout>
          <ProfileForm isMobile={isMobile} />
        </Layout>
      )}
    </div>
  );
};

export default Profile;
