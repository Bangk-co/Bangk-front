import { useMutation } from "react-query";
import { axiosClient } from "../services/axiosInstance";

const useSendCode = () => {
  const mutation = useMutation((formData) => {
    return axiosClient.post("/Authentication/SendCodeValidationEmail", formData);
  });
  return mutation;
};
export default useSendCode;
