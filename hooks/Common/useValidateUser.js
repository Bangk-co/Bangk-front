import { useMutation } from "react-query";
import { axiosClient } from "../services/axiosInstance";

const useValidateUser = () => {
  const mutation = useMutation((formData) => {
    return axiosClient.post(
      `Client/ValidateClientService?documentNumber=${formData.documentNumber}&documentType=${formData.documentType}&email=${formData.email}`
    );
  });
  return mutation;
};

export default useValidateUser;
