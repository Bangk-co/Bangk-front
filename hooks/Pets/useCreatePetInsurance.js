import { useMutation } from "react-query";
import { axiosClient } from "../services/axiosInstance";

const useCreatePetInsurance = () => {
  const mutation = useMutation((formData) => {
    return axiosClient.post(`PetInsuranceApplication/CreatePetInsuranceApplication`, formData);
  });
  return mutation;
};
export default useCreatePetInsurance;
