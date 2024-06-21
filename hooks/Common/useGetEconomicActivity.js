import { useQuery } from "react-query";
import { axiosClient } from "../services/axiosInstance";

const useGetEconomicActivity = () => {
  const data = useQuery(["economicActivityList"], () =>
  axiosClient.get("/Setting/GetSettingList?groupSettingId=15")
  );

  return data;
};

export default useGetEconomicActivity;
