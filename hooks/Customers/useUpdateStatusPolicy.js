import { useMutation } from "react-query";
import { axiosClient } from "../services/axiosInstance";

const useUpdateStatusPolicy = () => {
  const mutation = useMutation(({ loanApplicationId }) => {
    return axiosClient.post(
      `LoanInsurancePolicy/ChangeStateLoanInsurancePolicy?loanApplicationId=${loanApplicationId}`);
  });
  return mutation;
};

export default useUpdateStatusPolicy;