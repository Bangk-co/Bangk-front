/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { useRouter } from "next/router";
import Header from "@/components/ClientPlatform/Header";
import { Layout } from "@/components/ClientPlatform/Layout";

const ClientPlatform = ({ isMobile, isTablet }) => {
  const router = useRouter();

  useEffect(() => {
    router.push("/plataforma-cliente/home");
  }, []);

  return (
    <div>
      <Header isMobile={isMobile} />
      <Layout />
    </div>
  );
};

export default ClientPlatform;
