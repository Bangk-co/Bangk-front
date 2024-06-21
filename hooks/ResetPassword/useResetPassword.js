import { useMutation } from "react-query";
import { axiosClient } from "../services/axiosInstance";

const useResetPassword = () => {
  const mutation = useMutation((formData) => {
    return axiosClient.post("/Authentication/ResetPassword", formData);
  });
  return mutation;
};
export default useResetPassword;
