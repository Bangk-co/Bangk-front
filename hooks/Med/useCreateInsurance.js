import { useMutation } from "react-query";
import { axiosClient } from "../services/axiosInstance";

const useCreateInsurance = () => {
  const mutation = useMutation((formData) => {
    return axiosClient.post(`MedPersonalInsured/CreateMedPersonalInsuredService`, formData);
  });
  return mutation;
};
export default useCreateInsurance;
