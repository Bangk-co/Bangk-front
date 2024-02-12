import { useMutation } from "react-query";
import { axiosClient } from "../services/axiosInstance";

const useSaveQuote = () => {
  const mutation = useMutation(({ formData }) => {
    return axiosClient.post(
      `LoanQuote/CreateLoanQuote?insuranceId=${formData.insuranceId}&&loanApplicationId=${formData.loanApplicationId}&&yearlyFee=${formData.yearlyFee}&&observations=`);
  });
  return mutation;
};
export default useSaveQuote;
