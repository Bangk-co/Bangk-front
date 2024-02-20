import { useMutation } from "react-query";
import { axiosClient } from "../services/axiosInstance";

const useRejectLoanQuote = () => {
  const mutation = useMutation(({ loanApplicationId, observations }) => {
    return axiosClient.post(
      `/LoanQuote/RejectLoanQuote?loanApplicationId=${loanApplicationId}&observations=${observations}`
    );
  });
  return mutation;
};
export default useRejectLoanQuote;
