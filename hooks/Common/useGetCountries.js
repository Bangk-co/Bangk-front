import { useQuery } from "react-query";
import { axiosClient } from "../services/axiosInstance";

const useGetCountries = () => {
  const data = useQuery(["countriesList"], () =>
    axiosClient.get("/Country/GetCountriesList")
  );

  return data;
};

export default useGetCountries;
