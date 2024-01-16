import { useRouter } from "next/router";
import { Link } from "@/components/Common/Link";
import { deleteLocalUser } from "@/hooks/services/axiosInstance";
import Header from "@/components/Plataform/Header";

const Plataform = ({ isMobile, isTablet }) => {
  const router = useRouter();

  const handleLogout = () => {
    deleteLocalUser();
    router.push("/iniciar-sesion");
  };
  return (
    <div>
      <Header isMobile={isMobile} />
    </div>
  );
};

export default Plataform;
