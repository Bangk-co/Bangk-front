import { useMutation } from "react-query";
import { axiosClient } from "../services/axiosInstance";

const useValidationSBS = () => {
  const mutation = useMutation((loanApplicationId) => {
    return axiosClient.post(
      `Integrations/ValidationSBS?loanApplicationId=${loanApplicationId}`
    );
  });
  return mutation;
};

export default useValidationSBS;