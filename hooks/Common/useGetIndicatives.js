import { useQuery } from "react-query";
import { axiosClient } from "../services/axiosInstance";

const useGetIndicatives = () => {
  const data = useQuery(["indicativesList"], () =>
    axiosClient.get("/Setting/GetSettingList?groupSettingId=1")
  );

  return data;
};

export default useGetIndicatives;
