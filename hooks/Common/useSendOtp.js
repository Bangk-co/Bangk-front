import { useMutation } from "react-query";
import { axiosClient } from "../services/axiosInstance";

const useSendOtp = () => {
  const mutation = useMutation((formData) => {
    return axiosClient.post("/Authentication/SendCodeOtpEmail", formData);
  });
  return mutation;
};
export default useSendOtp;
