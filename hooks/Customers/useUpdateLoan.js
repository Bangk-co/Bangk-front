import { useMutation } from "react-query";
import { axiosClient } from "../services/axiosInstance";

const useUpdateLoan = () => {
  const mutation = useMutation(({ formData }) => {
    return axiosClient.put(
      `LoanApplication/UpdateLoanApplicationDto`,
      formData
    );
  });
  return mutation;
};

export default useUpdateLoan;