import { useQuery } from "react-query";
import { axiosClient } from "../services/axiosInstance";

const useGetQuoteRate = () => {
  const data = useQuery(["quoteRateList"], () =>
    axiosClient.get("/Setting/GetSettingList?groupSettingId=10")
  );

  return data;
};

export default useGetQuoteRate;