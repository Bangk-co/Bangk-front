import { useQuery } from "react-query";
import { axiosClient } from "../services/axiosInstance";

const useGetStatusTransaction = (transactionReference) => {
  const data = useQuery(["statusTransaction", transactionReference], () =>
    axiosClient.get(`/WompiIntegration/GetStatusTransaction?transactionReference=${transactionReference}`), {
      enabled: !!transactionReference
    }
  );

  return data;
};

export default useGetStatusTransaction;