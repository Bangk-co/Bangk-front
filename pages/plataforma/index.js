import { useRouter } from "next/router";
import Header from "@/components/Plataform/Header";
import { Layout } from "@/components/Plataform/Layout";

const Plataform = ({ isMobile, isTablet }) => {
  const router = useRouter();

  return (
    <div>
      <Header isMobile={isMobile} />
      <Layout />
    </div>
  );
};

export default Plataform;
