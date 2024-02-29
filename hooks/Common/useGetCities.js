import { useQuery } from "react-query";
import { axiosClient } from "../services/axiosInstance";

const useGetCities = (stateId) => {
  const data = useQuery(["citiesList", stateId], () =>
    axiosClient.get(`/City/GetCitiesList?stateId=${stateId}`),
    { enabled: stateId !== null }
  );

  return data;
};

export default useGetCities;