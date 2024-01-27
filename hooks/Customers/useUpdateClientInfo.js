import { useMutation } from "react-query";
import { axiosClient } from "../services/axiosInstance";

const useUpdateClientInfo = () => {
  const mutation = useMutation(({ clientId, formData }) => {
    return axiosClient.put(
      `Client/UpdateClientService?clientId=${clientId}`,
      formData
    );
  });
  return mutation;
};
export default useUpdateClientInfo;
