import { useQuery } from "react-query";
import { axiosClient } from "../services/axiosInstance";

const useGetClientInfo = (clientId) => {
  let urlString = `/Client/GetClientInfoService?clientId=${clientId}`;

  const data = useQuery(["clientInfo", clientId], () =>
    axiosClient.get(urlString), { enabled: !!clientId}
  );

  return data || {};
};
export default useGetClientInfo;
