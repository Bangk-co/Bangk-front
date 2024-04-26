import { useEffect, useState } from "react";
import { useRouter } from "next/router";

export const useAuth = () => {
  const router = useRouter();
  const localStorageUser =
    typeof window !== "undefined" && localStorage.getItem("user");
  const [isAuth, setIsAuth] = useState(!!localStorageUser);

  useEffect(() => {
    const publicRoutes = [
      "/ahorra-en-tus-seguros",
      "/conocenos",
      "/blog",
      "/contacto",
      "/legales",
      "/iniciar-sesion",
      "/olvide-contrasena",
      "recuperar-constrasena",
      "/cambiar-contrasena",
      "/establecer-contrasena",
      "/establecer-contrasena/exitoso",
      "/establecer-contrasena-otp",
      "/crear-cuenta"
    ];

    if (!localStorageUser) {
      setIsAuth(false);

      !publicRoutes.includes(router.pathname) && router.push("/");
    }

    if (localStorageUser) {
      setIsAuth(true);
    }
  }, [localStorageUser, router]);

  return { isAuth };
};
