import { useQuery } from "react-query";
import { axiosClient } from "../services/axiosInstance";

const useGetLoanQuoteById = (loanApplicationId) => {
  let urlString = `/LoanQuote/GetLoanQuoteByApplicationId?loanApplicationId=${loanApplicationId}`;

  const data = useQuery(["loanQuote", loanApplicationId], () =>
    axiosClient.get(urlString)
  );

  return data || {};
};
export default useGetLoanQuoteById;
