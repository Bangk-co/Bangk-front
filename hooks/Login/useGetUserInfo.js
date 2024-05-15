import { useQuery } from "react-query";
import { axiosClient } from "../services/axiosInstance";

const useGetUserInfo = (clientId) => {
  const data = useQuery(["userInfo", clientId], () =>
    axiosClient.get(`/User/GetUserInfoByClientId?clientId=${clientId}`),
    { enabled: !!clientId }
  );

  return data;
};

export default useGetUserInfo;