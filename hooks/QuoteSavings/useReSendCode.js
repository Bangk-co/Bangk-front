import { useMutation } from "react-query";
import { axiosClient } from "../services/axiosInstance";

const useReSendCode = () => {
  const mutation = useMutation((email) => {
    return axiosClient.post(`/Authentication/ReSendCodeValidationEmail?email=${email}`);
  });
  return mutation;
};

export default useReSendCode;
