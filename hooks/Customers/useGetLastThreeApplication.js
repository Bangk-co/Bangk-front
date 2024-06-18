import { useQuery } from "react-query";
import { axiosClient } from "../services/axiosInstance";

const useGetLastThreeApplication = (clientId) => {
  let urlString = `/LoanApplication/GetLoanApplicationFirstThree?ClientId=${clientId}`;

  const data = useQuery(
    ["clientThreeApplication", clientId],
    () => axiosClient.get(urlString),
    { enabled: !!clientId }
  );

  return data || {};
};
export default useGetLastThreeApplication;
