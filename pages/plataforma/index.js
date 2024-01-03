import { useRouter } from "next/router";
import { Link } from "@/components/Common/Link";
import { deleteLocalUser } from "@/hooks/services/axiosInstance";

const Plataform = ({ isMobile, isTablet }) => {
  const router = useRouter();

  const handleLogout = () => {
    deleteLocalUser();
    router.push("/iniciar-sesion");
  };
  return <Link onClick={handleLogout}>Cerrar sesión</Link>;
};

export default Plataform;
