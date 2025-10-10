import { useQuery } from "react-query";
import { axiosClient } from "../services/axiosInstance";

const useGetTransactionId = (applicationId, isMed) => {
  const isValid = applicationId !== null && applicationId !== undefined && applicationId !== "";
  const data = useQuery(
    ["statusTransaction", applicationId, isMed],
    () =>
      axiosClient.get(
        `/WompiIntegration/GetBancolombiaTransactionId?applicationId=${applicationId}&isMed=${isMed}`
      ),
    {
      enabled: isValid,
    }
  );

  return data;
};

export default useGetTransactionId;
