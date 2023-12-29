import { useMutation } from "react-query";
import { axiosClient } from "../services/axiosInstance";

const useLogin = () => {
  const mutation = useMutation((formData) => {
    return axiosClient.post("/api/Authentication/Login", formData);
  });
  return mutation;
};
export default useLogin;
