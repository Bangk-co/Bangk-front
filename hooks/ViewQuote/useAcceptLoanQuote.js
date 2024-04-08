import { useMutation } from "react-query";
import { axiosClient } from "../services/axiosInstance";

const useAcceptLoanQuote = () => {
  const mutation = useMutation((formData) => {
    return axiosClient.post(
      `/LoanQuote/AcceptLoanQuote?loanApplicationId=${formData.loanApplicationId}&termsConditionsAcceptanceQuote=${formData.terms}`
    );
  });
  return mutation;
};
export default useAcceptLoanQuote;
