import { useMutation } from "react-query";
import { axiosClient } from "../services/axiosInstance";

const useUpdateClientProfile = () => {
  const mutation = useMutation((formData) => {
    return axiosClient.put(`Client/UpdateProfile`, formData);
  });
  return mutation;
};
export default useUpdateClientProfile;
