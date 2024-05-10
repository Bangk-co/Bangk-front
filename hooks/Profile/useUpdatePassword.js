import { useMutation } from "react-query";
import { axiosClient } from "../services/axiosInstance";

const useUpdateClientProfile = () => {
  const mutation = useMutation((formData) => {
    return axiosClient.put(`Authentication/UpdatePassword`, formData);
  });
  return mutation;
};
export default useUpdateClientProfile;
