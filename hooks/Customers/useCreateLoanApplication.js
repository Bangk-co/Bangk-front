import { useMutation } from "react-query";
import { axiosClient } from "../services/axiosInstance";

const useCreateLoanApplication = () => {
  const mutation = useMutation((payload) => {
      const formData = new FormData();

      formData.append("IdentificationFile", payload.identificationFile);
      formData.append("BankStatementFile", payload.bankStatementFile);
      formData.append("BankId", payload.bankId);
      formData.append("LoanTypeId", payload.loanTypeId);
      formData.append("LoanNumber", payload.loanNumber.toString());
      formData.append("ClientId", payload.clientId);

      return axiosClient.post(
        `LoanApplication/CreateLoanApplication`, formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
    }
  );
  return mutation;
};

export default useCreateLoanApplication;