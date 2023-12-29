import { useMutation } from "react-query";
import { axiosClient } from "../services/axiosInstance";

const useSendEmailResetPassword = () => {
  const mutation = useMutation((email) => {
    return axiosClient.post(
      `/Authentication/SendEmailResetPassword?email=${email}`
    );
  });
  return mutation;
};
export default useSendEmailResetPassword;
