import { useQuery } from "react-query";
import { axiosClient } from "../services/axiosInstance";

const useGetStates = (countryId) => {
  const data = useQuery(["statesList", countryId], () =>
    axiosClient.get(`/State/GetStateList?countryId=${countryId}`),
    { enabled: countryId !== null }
  );

  return data;
};

export default useGetStates;