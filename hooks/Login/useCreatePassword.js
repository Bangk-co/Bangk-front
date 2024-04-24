import { useMutation } from "react-query";
import { axiosClient } from "../services/axiosInstance";

const useCreatePassword = () => {
  const mutation = useMutation((formData) => {
    return axiosClient.post("/Client/CreateUserPassword", formData);
  });
  return mutation;
};
export default useCreatePassword;
