import { useQuery } from "react-query";
import { axiosClient } from "../services/axiosInstance";

const useGetLoanApplicationInfo = (loanApplicationId) => {
  let urlString = `/LoanApplication/GetLoanApplicationByLoanApplicationId?loanApplicationId=${loanApplicationId}`;

  const data = useQuery(
    ["loanApplicationInfo", loanApplicationId],
    () => axiosClient.get(urlString),
    { enabled: !!loanApplicationId }
  );

  return data || {};
};
export default useGetLoanApplicationInfo;
