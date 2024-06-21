import { useQuery } from "react-query";
import { axiosClient } from "../services/axiosInstance";

const useGetLoanInsurancePolicyInfo = (loanApplicationId) => {
  let urlString = `/LoanInsurancePolicy/GetAllLoanInsurancePolicyByLoanApplication?loanApplicationId=${loanApplicationId}`;

  const data = useQuery(
    ["LoanInsurancePolicyInfo", loanApplicationId],
    () => axiosClient.get(urlString),
    { enabled: !!loanApplicationId }
  );

  return data;
};

export default useGetLoanInsurancePolicyInfo;
