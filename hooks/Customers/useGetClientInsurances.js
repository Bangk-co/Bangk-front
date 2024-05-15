import { useQuery } from "react-query";
import { axiosClient } from "../services/axiosInstance";

const useGetClientInsurances = (clientId) => {
  let urlString = `/Client/GetClientPolicy?clientId=${clientId}`;

  const data = useQuery(
    ["clientInsurances", clientId],
    () => axiosClient.get(urlString),
    { enabled: !!clientId }
  );

  return data || {};
};
export default useGetClientInsurances;
