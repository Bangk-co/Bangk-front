import { useQuery } from "react-query";
import { axiosClient } from "../services/axiosInstance";

const useGetTrxBancolombiaStatus = (transactionId) => {
  let urlString = `WompiIntegration/GetTrxBancolombiaStatus?id=${transactionId}`;

  const data = useQuery(
    ["getTrxBancolombiaStatus", transactionId],
    () => axiosClient.get(urlString),
    {
      enabled: !!transactionId,
    }
  );

  return data || {};
};
export default useGetTrxBancolombiaStatus;
