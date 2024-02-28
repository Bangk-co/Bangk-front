import { useQuery } from "react-query";
import { axiosClient } from "../services/axiosInstance";

const useGetLoanInsurancePolicyInfo = (clientId) => {
  let urlString = `/LoanInsurancePolicy/GetAllLoanInsurancePolicyByLoanApplication?loanApplicationId=${clientId}`;

  const data = useQuery(["LoanInsurancePolicyInfo", clientId], () =>
    axiosClient.get(urlString)
  );

  return data;
};

export default useGetLoanInsurancePolicyInfo;