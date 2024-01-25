import { useEffect } from "react";
import { useRouter } from "next/router";
import Header from "@/components/Plataform/Header";
import { Layout } from "@/components/Plataform/Layout";
import { useAuth } from "@/hooks/useAuth";
import Customer from "../../../../components/Plataform/Customer";

const Client = ({ isMobile, isTablet }) => {
  const router = useRouter();

  const { isAuth } = useAuth();

  useEffect(() => {
    if (!isAuth) {
      router.push("/iniciar-sesion");
    }
  }, [isAuth, router]);

  return (
    <div>
      <Header isMobile={isMobile} />
      <Layout>{<Customer />}</Layout>
    </div>
  );
};

export default Client;
