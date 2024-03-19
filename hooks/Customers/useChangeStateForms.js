import { useMutation } from "react-query";
import { axiosClient } from "../services/axiosInstance";

const useChangeStateForms = () => {
  const mutation = useMutation(({ loanApplicationId, observations }) => {
    return axiosClient.post(
      `LoanForm/ChangeStateForms?loanApplicationId=${loanApplicationId}&observations=${observations}`
    );
  });
  return mutation;
};

export default useChangeStateForms;
