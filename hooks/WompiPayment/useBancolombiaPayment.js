import { useMutation } from "react-query";
import { axiosClient } from "../services/axiosInstance";

const useBancolombiaPayment = () => {
  const mutation = useMutation((formData) => {
    return axiosClient.post(
      "WompiIntegration/PaymentSourcesBancolombiaTransfer",
      formData
    );
  });
  return mutation;
};
export default useBancolombiaPayment;
