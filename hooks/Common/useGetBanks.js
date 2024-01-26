import { useQuery } from "react-query";
import { axiosClient } from "../services/axiosInstance";

const useGetBanks = () => {
  const data = useQuery(["banksList"], () =>
    axiosClient.get("/Setting/GetSettingList?groupSettingId=3")
  );

  return data;
};

export default useGetBanks;
