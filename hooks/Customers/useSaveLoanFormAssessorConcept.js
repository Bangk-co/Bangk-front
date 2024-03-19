import { useMutation } from "react-query";
import { axiosClient } from "../services/axiosInstance";

const useSaveLoanFormAssessorConcept = () => {
  const mutation = useMutation(
    ({ loanApplicationId, formName, concept, comment }) => {
      return axiosClient.post(
        `LoanForm/SaveLoanForm?loanApplicationId=${loanApplicationId}&formName=${formName}&concept=${concept}&comment=${comment}`
      );
    }
  );
  return mutation;
};

export default useSaveLoanFormAssessorConcept;
