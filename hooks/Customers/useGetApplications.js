import { useQuery } from "react-query";
import { axiosClient } from "../services/axiosInstance";

const useGetApplications = (clientId) => {
  let urlString = `/LoanApplication/GetLoanApplicationService?ClientId=${clientId}`;

  const data = useQuery(["applicationsList", clientId], () =>
    axiosClient.get(urlString)
  );

  return data || {};
};
export default useGetApplications;
