import { useMutation } from "react-query";
import { axiosClient } from "../services/axiosInstance";

const useGenerateTknTrxBancolombia = () => {
  const mutation = useMutation((formData) => {
    return axiosClient.post(`WompiIntegration/GenerateTokenTrxBancolombia?applicationId=${formData.applicationId}&isMed=${formData.isMed}`);
  });
  return mutation;
};
export default useGenerateTknTrxBancolombia;
