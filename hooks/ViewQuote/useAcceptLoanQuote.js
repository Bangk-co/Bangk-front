import { useMutation } from "react-query";
import { axiosClient } from "../services/axiosInstance";

const useAcceptLoanQuote = () => {
  const mutation = useMutation((loanApplicationId) => {
    return axiosClient.post(
      `/LoanQuote/AcceptLoanQuote?loanApplicationId=${loanApplicationId}`
    );
  });
  return mutation;
};
export default useAcceptLoanQuote;
