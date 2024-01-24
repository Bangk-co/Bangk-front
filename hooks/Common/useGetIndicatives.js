import { useQuery } from "react-query";
import { axiosClient } from "../services/axiosInstance";

const useGetCountries = () => {
  const data = useQuery(["countriesList"], () =>
    axiosClient.get("/Setting/GetSettingList?groupSettingId=1")
  );

  return data;
};

export default useGetCountries;
