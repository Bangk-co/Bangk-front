import { useQuery } from "react-query";
import { axiosClient } from "../services/axiosInstance";

const useGetDiseases = () => {
  const data = useQuery(["diseasesList"], () =>
  axiosClient.get("/Setting/GetSettingList?groupSettingId=14")
  );

  return data;
};

export default useGetDiseases;
