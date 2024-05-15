import { useMutation } from "react-query";
import { axiosClient } from "../services/axiosInstance";

const useAddNoveltyComments = () => {
  const mutation = useMutation((formData) => {
    return axiosClient.post(
      `Integrations/AddCommentToLoanApplicationHistory?loanApplicationId=${formData.loanApplicationId}&comment=${formData.comments}`
    );
  });
  return mutation;
};

export default useAddNoveltyComments;