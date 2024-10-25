import { useMutation } from "react-query";
import { axiosClient } from "../services/axiosInstance";

const useAcceptLoanQuote = () => {
  const mutation = useMutation((formData) => {
    let urlString = `/LoanQuote/AcceptLoanQuote?loanApplicationId=${formData.loanApplicationId}&termsConditionsAcceptanceQuote=${formData.terms}&acceptQuoteOtp=${formData.otpDate}`;

    if (formData.sbsPrivacyPolicies !== null) {
      urlString += `&sbsPrivacyPolicies=${formData.sbsPrivacyPolicies}`;
    }

    return axiosClient.post(urlString);
  });
  return mutation;
};
export default useAcceptLoanQuote;
