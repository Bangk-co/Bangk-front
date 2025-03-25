import { useMutation } from "react-query";
import { axiosClient } from "../services/axiosInstance";

const useCardPayment = () => {
  const mutation = useMutation((formData) => {
    return axiosClient.post(`WompiIntegration/CardPayment`, formData);
  });
  return mutation;
};
export default useCardPayment;
