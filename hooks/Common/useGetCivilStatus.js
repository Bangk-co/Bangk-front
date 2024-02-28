import { useQuery } from "react-query";
import { axiosClient } from "../services/axiosInstance";

const useGetCivilStatus = () => {
  const data = useQuery(["civilStatusList"], () =>
    axiosClient.get("/Setting/GetSettingList?groupSettingId=12")
  );

  return data;
};

export default useGetCivilStatus;
