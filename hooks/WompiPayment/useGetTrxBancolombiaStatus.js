import { useQuery } from "react-query";
import { axiosClient } from "../services/axiosInstance";

const useGetTrxBancolombiaStatus = (transactionId) => {
  const data = useQuery(
    ["getTrxBancolombiaStatus", transactionId],
    () => axiosClient.get(`WompiIntegration/GetTrxBancolombiaStatus?id=${transactionId}`),
    {
      enabled: !!transactionId,
    }
  );

  return data || {};
};
export default useGetTrxBancolombiaStatus;
