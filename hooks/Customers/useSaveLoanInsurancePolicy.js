import { useMutation } from "react-query";
import { axiosClient } from "../services/axiosInstance";

const useSaveLoanInsurancePolicy = () => {
  const mutation = useMutation(({ formData }) => {
    return axiosClient.post(
      `LoanInsurancePolicy/CreateLoanInsurancePolicy`, formData);
  });
  return mutation;
};
export default useSaveLoanInsurancePolicy;
