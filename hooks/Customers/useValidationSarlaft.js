import { useMutation } from "react-query";
import { axiosClient } from "../services/axiosInstance";

const useValidationSarlaft = () => {
  const mutation = useMutation((loanApplicationId) => {
    return axiosClient.post(
      `Integrations/ValidationSarlaft?loanApplicationId=${loanApplicationId}`
    );
  });
  return mutation;
};

export default useValidationSarlaft;