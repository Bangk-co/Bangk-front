import { useMutation } from "react-query";
import { axiosClient } from "../services/axiosInstance";

const useGenerateTknTrxBancolombia = () => {
  const mutation = useMutation(() => {
    return axiosClient.post("WompiIntegration/GenerateTokenTrxBancolombia");
  });
  return mutation;
};
export default useGenerateTknTrxBancolombia;
