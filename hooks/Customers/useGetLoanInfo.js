import { useQuery } from "react-query";
import { axiosClient } from "../services/axiosInstance";

const useGetLoanInfo = (clientId) => {
  let urlString = `/LoanApplication/GetLoanApplicationByApplicationId?loanApplicationId=${clientId}`;

  const data = useQuery(["LoanInformation", clientId], () =>
    axiosClient.get(urlString)
  );

  return data;
};

export default useGetLoanInfo;