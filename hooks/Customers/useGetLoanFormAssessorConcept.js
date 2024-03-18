import { useQuery } from "react-query";
import { axiosClient } from "../services/axiosInstance";

const useGetLoanFormAssessorConcept = (loanApplicationId) => {
  let urlString = `/LoanForm/GetLoanForm?loanApplicationId=${loanApplicationId}`;

  const data = useQuery(["loanForm", loanApplicationId], () =>
    axiosClient.get(urlString)
  );

  return data;
};

export default useGetLoanFormAssessorConcept;
