import { useMutation } from "react-query";
import { axiosClient } from "../services/axiosInstance";

const useCreateAccount = () => {
  const mutation = useMutation((formData) => {
    return axiosClient.post("/Client/CreateClient", formData);
  });
  return mutation;
};
export default useCreateAccount;
